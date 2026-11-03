import { BOOKING_URL } from "./config.js";

// Only Google's own appointment pages are framed on the site. Anything else that is still a valid
// https link (such as a calendar.app.google short link) is opened in a new tab instead.
function parseHttps(url) {
  try {
    const u = new URL(url);
    return u.protocol === "https:" ? u : null;
  } catch {
    return null;
  }
}

const parsed = parseHttps(BOOKING_URL);

function toEmbedSrc(u) {
  if (!u || u.hostname !== "calendar.google.com" || !u.pathname.startsWith("/calendar/appointments/")) return null;
  const embed = new URL(u);
  embed.searchParams.set("gv", "true"); // Google's flag for the chrome-less embed view
  return embed.toString();
}

export const BOOKING_EMBED_SRC = toEmbedSrc(parsed);
export const BOOKING_LINK = parsed ? parsed.toString() : "";
