import { CalendarDays } from "lucide-react";
import { BOOKING_EMBED_SRC, BOOKING_LINK } from "../booking.js";
import { Button } from "./ui.jsx";

// Scrolls to the embedded booking calendar when there is one, otherwise opens the booking link in a
// new tab. With no booking link configured it scrolls to the contact form.
export default function BookCallButton({ onNav, children = "Book a Call", ...props }) {
  let target;
  if (BOOKING_EMBED_SRC) target = { onClick: () => onNav("booking") };
  else if (BOOKING_LINK) target = { href: BOOKING_LINK };
  else target = { onClick: () => onNav("contact") };
  return (
    <Button {...target} {...props}>
      {children} <CalendarDays size={14} strokeWidth={1.5} />
    </Button>
  );
}
