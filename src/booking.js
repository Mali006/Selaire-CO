import { BOOKING_URL } from "./config.js";

// Only Google's own appointment pages are framed on the site. Anything else that is still a valid
// https link (such as a calendar.app.google short link) is opened in a new tab instead.
export function parseHttps(url) {
  try {
    const u = new URL(url);
    return u.protocol === "https:" ? u : null;
  } catch {
    return null;
  }
}

export function toEmbedSrc(url) {
  const u = parseHttps(url);
  if (!u || u.hostname !== "calendar.google.com" || !u.pathname.startsWith("/calendar/appointments/")) return null;
  u.searchParams.set("gv", "true"); // Google's flag for the chrome-less embed view
  return u.toString();
}

export const BOOKING_EMBED_SRC = toEmbedSrc(BOOKING_URL);
export const BOOKING_LINK = parseHttps(BOOKING_URL)?.toString() ?? "";
