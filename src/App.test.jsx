import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";
import { FAQS, REVIEWS, SECTIONS, SERVICES } from "./content.js";

describe("App", () => {
  it("has a page section for every nav link", () => {
    const { container } = render(<App />);
    const nav = screen.getByRole("navigation", { name: "Primary" });
    for (const { label, id } of SECTIONS) {
      if (id === "reviews" && REVIEWS.length === 0) continue;
      expect(within(nav).getByRole("button", { name: label })).toBeInTheDocument();
      expect(container.querySelector(`section#${id}`)).not.toBeNull();
    }
  });

  it("hides the Reviews section and nav link until there are real reviews", () => {
    if (REVIEWS.length > 0) return;
    const { container } = render(<App />);
    expect(container.querySelector("#reviews")).toBeNull();
    expect(screen.queryByRole("button", { name: "Reviews" })).toBeNull();
  });

  it("lists every service", () => {
    render(<App />);
    for (const { title } of SERVICES) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("shows the founder photo with a description", () => {
    render(<App />);
    expect(screen.getByRole("img", { name: /brianna, founder of selaire/i })).toBeInTheDocument();
  });

  it("opens the inquiry form from Work With Me and closes it with Escape", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole("button", { name: /work with me/i })[0]);
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByRole("button", { name: /send inquiry/i })).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("opens one FAQ answer at a time", async () => {
    const user = userEvent.setup();
    render(<App />);
    const [first, second] = FAQS.map(({ q }) => screen.getByRole("button", { name: q }));

    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(second).toHaveAttribute("aria-expanded", "false");

    await user.click(second);
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");
  });
});
