import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CONTACT_EMAIL, FORM_ENDPOINT } from "../config.js";
import InquiryForm from "./InquiryForm.jsx";

async function fillAndSubmit(user) {
  await user.type(screen.getByLabelText("Full Name"), "Jane Agent");
  await user.type(screen.getByLabelText("Email Address"), "jane@brokerage.com");
  await user.type(screen.getByLabelText("Brokerage Name"), "Example Realty");
  await user.click(screen.getByLabelText("Maryland"));
  await user.click(screen.getByLabelText("Pricing and availability"));
  await user.type(screen.getByLabelText("Your Message"), "I'd like help with my next listing.");
  await user.click(screen.getByRole("button", { name: /send inquiry/i }));
}

describe("InquiryForm", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("sends the inquiry to the form endpoint and thanks the visitor", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: "true" }) });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<InquiryForm />);

    await fillAndSubmit(user);

    expect(await screen.findByText(/your inquiry has been received/i)).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe(FORM_ENDPOINT);
    expect(JSON.parse(options.body)).toMatchObject({
      name: "Jane Agent",
      email: "jane@brokerage.com",
      brokerage: "Example Realty",
      service_area: "Maryland",
      help_with: "Pricing and availability",
      message: "I'd like help with my next listing.",
      _honey: "",
      _replyto: "jane@brokerage.com",
    });
  });

  it("offers the email address when sending fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network down")));
    const user = userEvent.setup();
    render(<InquiryForm />);

    await fillAndSubmit(user);

    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent(/something went wrong/i);
    expect(screen.getByRole("link", { name: CONTACT_EMAIL })).toHaveAttribute("href", `mailto:${CONTACT_EMAIL}`);
  });

  it("does not send when required fields are empty", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<InquiryForm />);

    await user.click(screen.getByRole("button", { name: /send inquiry/i }));

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("warns visitors not to send confidential documents", () => {
    render(<InquiryForm />);
    expect(screen.getByText(/do not include confidential client information/i)).toBeInTheDocument();
  });
});
