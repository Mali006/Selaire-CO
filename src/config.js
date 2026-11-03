/* ------------------------------------------------------------------ */
/*  Site settings the business owner may need to change.               */
/* ------------------------------------------------------------------ */

// Where inquiries from the contact form are delivered, and the address shown on the site.
export const CONTACT_EMAIL = "selaireandco@gmail.com";

// Google Calendar appointment booking page.
// In Google Calendar: Create > Appointment schedule > (set it up) > Share > copy the booking page link,
// e.g. "https://calendar.app.google/abc123". Until this is filled in, "Book a Call" buttons send
// visitors to the contact form instead.
export const BOOKING_URL = "";

// The contact form posts to FormSubmit (https://formsubmit.co), a free form-to-email relay, so the
// site needs no backend. The very first submission triggers a one-time activation email to
// CONTACT_EMAIL; click the link in it and every inquiry after that is delivered to the inbox.
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
