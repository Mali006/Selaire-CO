import { CalendarDays } from "lucide-react";
import { BOOKING_URL } from "../config.js";
import { Button } from "./ui.jsx";

// Opens the Google Calendar booking page in a new tab. Until BOOKING_URL is set,
// calls onFallback instead (the site uses it to scroll to the contact form).
export default function BookCallButton({ onFallback, children = "Book a Call", ...props }) {
  const target = BOOKING_URL ? { href: BOOKING_URL } : { onClick: onFallback };
  return (
    <Button {...target} {...props}>
      {children} <CalendarDays size={14} strokeWidth={1.5} />
    </Button>
  );
}
