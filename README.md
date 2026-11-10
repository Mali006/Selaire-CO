# Selaire & Co.

Marketing site for Selaire & Co., fully remote administrative transaction coordination for residential real estate professionals in Washington, DC, Maryland and Northern Virginia.

Built with React, Vite, Tailwind CSS v4 and lucide-react.

## Getting started

```bash
npm install
npm run dev      # local dev server with a Desktop / Mobile preview toggle
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

## Project structure

```
index.html            Vite entry, fonts, favicon
public/               Static files served as-is (favicon)
src/
  config.js           Contact email, Google Calendar booking link, form endpoint
  content.js          All site copy: services, FAQ, reviews, process steps, images
  index.css           Tailwind import and the brand color / font tokens
  App.jsx             Page layout and section order
  components/         Shared pieces (buttons, logo, inquiry form, modal)
  sections/           One file per page section
```

## Common updates

- **Booking calendar.** In Google Calendar, open your appointment schedule and choose Share > Website embed > Inline website embed. Copy only the `src="…"` address from the code (it starts with `https://calendar.google.com/calendar/appointments/schedules/`) and paste it into `BOOKING_URL` in `src/config.js`. The calendar then appears in the Book a Call section, and Google handles availability, confirmations and reminders. Until it's set, the "Book a Call" buttons scroll to the contact form instead.
- **Contact form.** Inquiries are delivered to `CONTACT_EMAIL` through [FormSubmit](https://formsubmit.co). The first submission sends a one-time activation email to that inbox. Click the link in it to start receiving messages.
- **Reviews.** Add real reviews to `REVIEWS` in `src/content.js`. The Reviews section and its nav link stay hidden while the list is empty.
- **Copy and FAQs.** Edit the text in `src/content.js`.
- **Colors.** The brown and beige palette is defined once in `src/index.css` under `@theme`.
