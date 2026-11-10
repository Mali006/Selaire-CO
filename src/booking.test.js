import { parseHttps, toEmbedSrc } from "./booking.js";

describe("parseHttps", () => {
  it("accepts https links", () => {
    expect(parseHttps("https://calendar.app.google/abc123")?.hostname).toBe("calendar.app.google");
  });

  it.each(["", "not a url", "http://calendar.google.com/calendar/appointments/x", "javascript:alert(1)"])(
    "rejects %j",
    (url) => {
      expect(parseHttps(url)).toBeNull();
    }
  );
});

describe("toEmbedSrc", () => {
  it("embeds Google Calendar appointment pages with the chrome-less flag", () => {
    expect(toEmbedSrc("https://calendar.google.com/calendar/appointments/schedules/AcZ123")).toBe(
      "https://calendar.google.com/calendar/appointments/schedules/AcZ123?gv=true"
    );
  });

  it("keeps a single gv flag when the link already has one", () => {
    expect(toEmbedSrc("https://calendar.google.com/calendar/appointments/schedules/AcZ123?gv=true")).toBe(
      "https://calendar.google.com/calendar/appointments/schedules/AcZ123?gv=true"
    );
  });

  it.each([
    "https://calendar.app.google/abc123", // short share link: opens in a new tab instead
    "https://calendar.google.com/calendar/u/0/r", // a calendar, not a booking page
    "https://evil.example/calendar/appointments/schedules/AcZ123",
    "https://calendar.google.com.evil.example/calendar/appointments/x",
  ])("does not embed %s", (url) => {
    expect(toEmbedSrc(url)).toBeNull();
  });
});
