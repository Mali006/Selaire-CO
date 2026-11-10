# Selaire & Co.

Marketing site for Selaire & Co., fully remote administrative transaction coordination for residential real estate professionals in Washington, DC, Maryland and Northern Virginia.

Built with React, Vite, Tailwind CSS v4 and lucide-react.

## Getting started

```bash
npm install
npm run dev      # local dev server with a Desktop / Mobile preview toggle
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm test         # run the test suite once
npm run test:watch  # re-run tests as you edit
```

Node 22 is used in CI and on Netlify (see `.nvmrc`).

## Tests

Tests use [Vitest](https://vitest.dev) and React Testing Library, and sit next to the code they cover (`*.test.js` / `*.test.jsx`):

- `src/App.test.jsx`: every nav link has a section, Reviews stays hidden while empty, every service is listed, the Work With Me form opens and closes, and the FAQ opens one answer at a time.
- `src/components/InquiryForm.test.jsx`: the form sends the right fields to the form endpoint, shows the thank-you message, falls back to the email address on errors, and won't send when required fields are empty.
- `src/booking.test.js`: only real Google Calendar appointment pages are embedded on the site.

## CI/CD

- **CI (GitHub Actions, `.github/workflows/ci.yml`).** Runs on every pull request and every push to `main`: installs dependencies, runs the tests, builds the site, then builds the Docker image and checks that the container serves the page with its security headers.
- **CD (Netlify, `netlify.toml`).** Once the repository is connected to Netlify, every push to `main` deploys the site, and pull requests get preview links. Netlify runs the tests before building, so a failing test stops the deploy.
- **Security headers.** `netlify.toml` and `nginx.conf` set a Content Security Policy and related headers. If the site starts loading something from a new domain (a new image host, form service or embed), add that domain to the matching `*-src` list in both files, or the browser will block it.

## Docker

Netlify doesn't need it, but the site can also run as a container (nginx, non-root, port 8080):

```bash
docker build -t selaire-co .
docker run --rm -p 8080:8080 selaire-co   # then open http://localhost:8080
```

## Project structure

```
index.html            Vite entry, fonts, favicon
public/               Static files served as-is (favicon)
Dockerfile            Container image (build with Node, serve with nginx)
nginx.conf            nginx settings and security headers for the container
netlify.toml          Netlify build settings and security headers
.github/workflows/    GitHub Actions CI pipeline
src/
  config.js           Contact email, Google Calendar booking link, form endpoint
  content.js          All site copy: services, FAQ, reviews, process steps, images
  index.css           Tailwind import and the brand color / font tokens
  App.jsx             Page layout and section order
  components/         Shared pieces (buttons, logo, inquiry form, modal)
  sections/           One file per page section
  test/setup.js       Test setup (browser APIs jsdom doesn't provide)
```

## Common updates

- **Booking calendar.** In Google Calendar, open your appointment schedule and choose Share > Website embed > Inline website embed. Copy only the `src="…"` address from the code (it starts with `https://calendar.google.com/calendar/appointments/schedules/`) and paste it into `BOOKING_URL` in `src/config.js`. The calendar then appears in the Book a Call section, and Google handles availability, confirmations and reminders. Until it's set, the "Book a Call" buttons scroll to the contact form instead.
- **Contact form.** Inquiries are delivered to `CONTACT_EMAIL` through [FormSubmit](https://formsubmit.co). The first submission sends a one-time activation email to that inbox. Click the link in it to start receiving messages.
- **Reviews.** Add real reviews to `REVIEWS` in `src/content.js`. The Reviews section and its nav link stay hidden while the list is empty.
- **Copy and FAQs.** Edit the text in `src/content.js`.
- **Colors.** The brown and beige palette is defined once in `src/index.css` under `@theme`.
