/* ------------------------------------------------------------------ */
/*  Site settings the business owner may need to change.               */
/* ------------------------------------------------------------------ */

// Where inquiries from the contact form are delivered, and the address shown on the site.
export const CONTACT_EMAIL = "selaireandco@gmail.com";

// Google Calendar appointment booking page, embedded in the Book a Call section.
// In Google Calendar: open the appointment schedule > Share > Website embed > Inline website embed,
// then copy only the src="..." address from the code, e.g.
// "https://calendar.google.com/calendar/appointments/schedules/AcZssZ...?gv=true".
// A "calendar.app.google/..." share link also works, but opens in a new tab instead of embedding.
// Until this is filled in, "Book a Call" buttons send visitors to the contact form instead.
// This address is public (anyone with it can see open slots); it is not a secret.
// "Complimentary 15-Minute Introductory Call" schedule (short link: https://calendar.app.google/xB3BuR923EZZKGDQ7)
export const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1u2ETjFmSIpGyOF4ZyaktLb9DFXO4x6CRNNQ6PVTggSFZRmcqDJM6JQDr3vQRDuQ8DvlAY5Mz8?gv=true";

// The contact form posts to FormSubmit (https://formsubmit.co), a free form-to-email relay, so the
// site needs no backend. The very first submission triggers a one-time activation email to
// CONTACT_EMAIL; click the link in it and every inquiry after that is delivered to the inbox.
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
