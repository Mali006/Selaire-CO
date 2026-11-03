import {
  CalendarDays,
  ClipboardCheck,
  FileText,
  Handshake,
  Heart,
  Home,
  MessageCircle,
  Users,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Site copy and data. Edit text here; layout lives in src/sections.  */
/* ------------------------------------------------------------------ */

const img = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  hero: img("1488190211105-8b0e65b80b4e", 2000), // wooden desk: coffee, journal, laptop
  about: img("1515378791036-0648a3ef77b2", 1200), // caramel sweater, laptop on wood desk
  booking: img("1506784983877-45594efa4cbe", 1200), // monthly planner with coffee
  benefits: img("1593062096033-9a26b09da705", 2000), // warm lamp-lit desk
  reviews: img("1497032628192-86f99bcd76bc", 1200), // dark wood desk flat lay
  faq: img("1456324504439-367cee3b3c32", 1200), // writing in a planner on oak
  contact: img("1587614382346-4ec70e388b28", 1200), // cozy desk: laptop, candle, coffee
};

export const SECTIONS = [
  { label: "Services", id: "services" },
  { label: "Book a Call", id: "booking" },
  { label: "About", id: "about" },
  { label: "Process", id: "process" },
  { label: "Reviews", id: "reviews" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export const SERVICES = [
  {
    icon: Home,
    title: "Contract-to-Close Coordination",
    summary:
      "Full coordination of a ratified buyer or listing file, from the opening email to the archived compliance file.",
    bestFor: "Agents who want every deadline and document handled for them.",
    includes: [
      "Opening email and key-date timeline to all parties within 24 hours",
      "Earnest money deposit confirmation",
      "Inspection, appraisal and loan commitment tracking",
      "Communication with lender, title and the cooperating agent",
      "Weekly status updates in your inbox",
      "Final walkthrough and settlement scheduling",
      "Broker compliance file and digital archive",
    ],
  },
  {
    icon: FileText,
    title: "Listing Coordination",
    summary: "Pre-market support so your listing goes live organized, complete and on schedule.",
    bestFor: "Listing agents preparing a property for market.",
    includes: [
      "Listing agreement and seller disclosure collection",
      "MLS input drafted for your review",
      "Photography, staging and signage scheduling",
      "Showing service setup",
      "Regular seller updates until the listing goes under contract",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & File Review",
    summary: "A second set of eyes on files you run yourself, prepared to your brokerage's standards.",
    bestFor: "Agents who manage their own files but want them audit-ready.",
    includes: [
      "Missing signature and initial check",
      "Document checklist against your brokerage's requirements",
      "Upload and organization in your transaction platform",
      "Final file archive at closing",
    ],
  },
  {
    icon: CalendarDays,
    title: "Deadline Management",
    summary: "Key-date tracking on its own, for agents who handle the paperwork but want nothing slipping.",
    bestFor: "Experienced agents with a high volume of files.",
    includes: [
      "Contract timeline built from the ratified contract",
      "Calendar reminders sent to you ahead of each deadline",
      "Contingency and addendum date updates",
    ],
  },
];

export const PAYMENT_NOTE =
  "No upfront payment. You're invoiced at closing, and the fee can usually be paid through the settlement statement.";

export const NOT_INCLUDED =
  "Selaire & Co. does not provide legal advice, negotiate on your behalf, or perform duties that require a real estate license.";

export const PILLARS = [
  { icon: FileText, label: "Accurate Document Management" },
  { icon: CalendarDays, label: "Timely Deadline Tracking" },
  { icon: Home, label: "Contract to Close Support" },
  { icon: Users, label: "A Reliable Partner" },
];

export const BENEFITS = [
  { icon: MessageCircle, label: "Clear Communication" },
  { icon: ClipboardCheck, label: "Organized Timelines" },
  { icon: Handshake, label: "Reliable Support" },
  { icon: Heart, label: "A Better Client Experience" },
];

export const STEPS = [
  {
    n: "01",
    title: "Contract Received",
    body:
      "Your ratified contract is reviewed, the file is opened, and a timeline of every key date goes out to all parties within 24 hours.",
  },
  {
    n: "02",
    title: "Under Contract",
    body:
      "Earnest money, inspections, appraisal and lender milestones are tracked remotely, with a status update in your inbox each week.",
  },
  {
    n: "03",
    title: "Pre-Closing",
    body:
      "Title, HOA or condo documents, the final walkthrough and closing disclosures are coordinated early, so nothing lands at the last minute.",
  },
  {
    n: "04",
    title: "Closing",
    body:
      "Settlement is confirmed, your invoice is sent and the fee is settled, and the file is compiled for broker compliance and archived neatly for your records.",
  },
];

export const FULL_PROCESS = [
  "Opening email & key-date timeline to all parties",
  "Earnest money deposit confirmation",
  "Inspection & response deadlines",
  "Appraisal and loan commitment tracking",
  "HOA / condo document delivery",
  "Title, survey & settlement scheduling",
  "Final walkthrough coordination",
  "Broker compliance file & digital archive",
  "Invoice sent at closing",
];

// Real client reviews only. The Reviews section and its nav link stay hidden while this is empty.
// Add one per review, e.g. { quote: "…", who: "Listing Agent, Arlington, VA" }
export const REVIEWS = [];

export const FAQS = [
  {
    q: "What does a transaction coordinator do?",
    a: "A transaction coordinator manages the paperwork, deadlines and communication of a real estate transaction once it's under contract, so you can spend your time with clients and on new business.",
  },
  {
    q: "What areas do you serve?",
    a: "Selaire & Co. supports residential transactions in Washington, DC, Maryland and Virginia.",
  },
  {
    q: "Is everything handled remotely?",
    a: "Yes. All coordination is done remotely by email, phone and your transaction management platform, so there's nothing you need to drop off in person.",
  },
  {
    q: "When should I send a new file?",
    a: "As soon as the contract is ratified. For listing coordination, reach out once the listing agreement is signed so the pre-market work can begin.",
  },
  {
    q: "What do you need from me to get started?",
    a: "The ratified contract, contact details for everyone on the transaction, and access to your brokerage's transaction platform and compliance checklist.",
  },
  {
    q: "How will I know where my file stands?",
    a: "You'll receive a timeline at the start of every file, a status update each week, and a note whenever a major milestone is reached.",
  },
  {
    q: "What isn't included?",
    a: NOT_INCLUDED,
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the service and your monthly volume. Book a call or send an inquiry and you'll receive pricing that fits your business.",
  },
  {
    q: "When do I pay?",
    a: "Nothing is due upfront. You're invoiced at closing, and with your approval the fee can be paid through the settlement statement so it comes out of closing funds. If you'd rather pay directly, the invoice includes an online payment link.",
  },
];
