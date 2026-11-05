import { Compass, Gem, Heart, ShieldCheck } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Site copy and data. Edit text here; layout lives in src/sections.  */
/* ------------------------------------------------------------------ */

const img = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  hero: img("1488190211105-8b0e65b80b4e", 2000), // wooden desk: coffee, journal, laptop
  about: img("1515378791036-0648a3ef77b2", 1200), // caramel sweater, laptop on wood desk
  booking: img("1506784983877-45594efa4cbe", 1200), // monthly planner with coffee
  values: img("1593062096033-9a26b09da705", 2000), // warm lamp-lit desk
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

export const SERVICE_INTRO = [
  "Behind every successful real estate transaction are countless details that deserve careful attention.",
  "At Selaire & Co., our goal is to provide thoughtful, dependable administrative support that helps residential real estate professionals stay organized from ratified contract through closing.",
];

export const SERVICES = [
  {
    n: "01",
    title: "Transaction File Organization",
    body: "Digital file setup, organization of executed transaction documents, administrative checklists, and tracking of outstanding paperwork.",
  },
  {
    n: "02",
    title: "Deadline Tracking & Reminders",
    body: "Calendar management and reminders for agent-confirmed transaction dates, upcoming milestones, and administrative deadlines.",
  },
  {
    n: "03",
    title: "Administrative Communication",
    body: "Routine scheduling assistance, agent-directed follow-ups, and administrative status updates to help keep transaction participants informed.",
  },
  {
    n: "04",
    title: "Closing Preparation",
    body: "Administrative tracking of outstanding documents, appointment coordination, and closing preparation checklists.",
  },
  {
    n: "05",
    title: "File Wrap-Up",
    body: "Organization of final transaction documents and administrative file completion support.",
  },
];

export const WHO_WE_SERVE =
  "Selaire & Co. supports residential real estate agents and brokerages handling buyer-side and seller-side transactions throughout the DMV.";

export const NOT_INCLUDED = ["Legal advice", "Contract negotiation", "Real estate brokerage representation"];

export const SERVICE_DISCLOSURE =
  "Services are administrative in nature and subject to applicable licensing requirements and supervising brokerage approval. All services are provided in accordance with applicable real estate regulations and brokerage requirements.";

export const PAYMENT_NOTE =
  "No upfront payment. You're invoiced at closing, and the fee can usually be paid through the settlement statement.";

export const ABOUT_INTRO = [
  "At Selaire & Co., we believe that excellence is found in the details and that meaningful service begins with a heart for others.",
  "Selaire & Co. was founded with a love for organization, a commitment to excellence, and a genuine delight in serving people.",
  "As a developing residential real estate transaction coordination business, our mission is to provide thoughtful, dependable administrative support that helps real estate professionals stay organized, communicate effectively, and focus on the people they serve.",
  "We believe that behind every transaction are people, important milestones, and new beginnings. Every detail deserves to be handled with care.",
];

export const SELAIRE_STORY = [
  "The name Selaire draws inspiration from the biblical word Selah, often associated with pausing and reflecting.",
  "In an industry that moves quickly, this serves as a reminder that even the smallest details are worth approaching with intentionality.",
  "Our olive branch is inspired by Genesis 8:11, where a dove returns to Noah carrying an olive leaf, symbolizing hope, peace, and new beginnings.",
  "Together, these elements reflect our desire to approach every responsibility with thoughtfulness, purpose, and grace.",
];

export const FOUNDER_STORY = [
  "I've always had a genuine love for organization, discipline, and doing things well. I find joy in bringing order to the details, working diligently, and seeing things come together.",
  "But just as much as I love organization, I love people! I genuinely enjoy building relationships, working alongside others, and finding ways to make their lives a little easier.",
  "Above all, I love Jesus, and my faith is at the heart of why I started Selaire & Co.",
  "Because of the love and grace I've received through Christ, I delight in the opportunity to serve others. My desire is that the faithfulness, joy, and love that flow from my relationship with Him would also be reflected in the way I conduct my business.",
  "Selaire & Co. gives me an opportunity to bring together my love for organization, my commitment to working diligently, and my joy in serving God's people.",
  "Colossians 3:23 reminds me to work wholeheartedly, as for the Lord. My hope is to carry that same spirit into every responsibility entrusted to me, whether big or small.",
  "For me, Selaire & Co. is more than a business. It's an opportunity to be intentional with the gifts God has given me and to use them in service to others.",
];

export const VALUES = [
  {
    icon: Gem,
    title: "Excellence",
    body: "We believe that every responsibility, no matter how small, deserves diligence, care, and attention to detail.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "We value honesty, accountability, confidentiality, and building relationships grounded in trust.",
  },
  {
    icon: Heart,
    title: "Joyful Service",
    body: "We believe that serving others is both a privilege and a joy. We strive to approach every interaction with patience, kindness, and genuine care.",
  },
  {
    icon: Compass,
    title: "Intentionality",
    body: "We believe in working with purpose, taking thoughtful care of the details, and recognizing the people behind every transaction.",
  },
];

export const PROCESS_INTRO = [
  "At Selaire & Co., we believe that a well-organized transaction begins with thoughtful preparation and intentional communication.",
  "Our process is designed to provide real estate professionals with dependable administrative support throughout the contract-to-close journey, allowing them to devote more of their attention to the clients they serve.",
];

export const STEPS = [
  {
    n: "01",
    title: "Connect & Discover",
    tagline: "Every great partnership begins with a conversation.",
    body: [
      "We begin by learning about you, your brokerage, and your transaction coordination needs. This initial conversation allows us to understand your workflow, expectations, and how Selaire & Co. may best support you.",
    ],
  },
  {
    n: "02",
    title: "Partner & Prepare",
    tagline: "Building a foundation for thoughtful service.",
    body: [
      "Once we determine that our services are a good fit, we'll confirm the scope of administrative support, applicable brokerage requirements, and service agreement.",
      "From there, we'll establish the onboarding process and gather the information necessary to begin organizing your transaction.",
    ],
  },
  {
    n: "03",
    title: "Organize & Coordinate",
    tagline: "Bringing order to the details.",
    body: [
      "With the necessary information in place, we'll begin organizing your transaction file, maintaining administrative checklists, and tracking agent-confirmed deadlines and important milestones.",
      "Our goal is to help create an organized workflow so that important administrative details remain visible throughout the transaction.",
    ],
  },
  {
    n: "04",
    title: "Communicate & Support",
    tagline: "Thoughtful communication throughout the journey.",
    body: [
      "As the transaction progresses, we'll assist with routine administrative follow-ups, scheduling coordination, and updates within our agreed scope of services.",
      "We believe that clear, consistent communication helps create a more organized and collaborative experience for everyone involved.",
    ],
  },
  {
    n: "05",
    title: "Close With Care",
    tagline: "Finishing with the same intentionality with which we began.",
    body: [
      "As closing approaches, we'll assist with tracking outstanding administrative items, coordinating approved scheduling details, and organizing the final transaction file. Your invoice is sent at closing.",
      "Because at Selaire & Co., we believe the smallest details deserve care from beginning to end.",
    ],
  },
];

// Real client reviews only. The Reviews section and its nav link stay hidden while this is empty.
// Add one per review, e.g. { quote: "…", who: "Listing Agent, Arlington, VA" }
export const REVIEWS = [];

export const FAQS = [
  {
    q: "What does a transaction coordinator do?",
    a: "A transaction coordinator provides administrative support from ratified contract through closing. That includes organizing the transaction file, tracking agent-confirmed dates and milestones, assisting with routine follow-ups and scheduling, and helping prepare for closing, so you can devote more of your attention to your clients.",
  },
  {
    q: "When should I bring a TC into my transaction?",
    a: "As soon as your contract is ratified. It helps to connect even earlier, so the scope of support, brokerage approval, and onboarding are already in place when your next contract comes in.",
  },
  {
    q: "Do you work with buyer-side and seller-side transactions?",
    a: "Yes. Selaire & Co. supports residential real estate agents and brokerages handling both buyer-side and seller-side transactions.",
  },
  {
    q: "Do you work with agents throughout the DMV?",
    a: "Selaire & Co. is preparing to serve residential real estate professionals throughout Washington, DC, Maryland, and Northern Virginia. Service availability is subject to applicable real estate regulations and brokerage requirements.",
  },
  {
    q: "Can you work with my brokerage's transaction management software?",
    a: "We'll confirm your brokerage's requirements and the software you use during onboarding, so we can work within your existing process wherever possible.",
  },
  {
    q: "What responsibilities remain with the agent and broker?",
    a: "Our services are administrative in nature. Selaire & Co. does not provide legal advice, contract negotiation, or real estate brokerage representation. Those responsibilities, along with confirming transaction dates and approving the scope of support, remain with the agent and supervising broker.",
  },
  {
    q: "How do you protect confidential transaction documents?",
    a: "Confidentiality is part of our commitment to integrity. We'll agree on a secure way to share documents during onboarding, and transaction information is used only to provide your agreed services. Please don't send contracts or client information through the website inquiry form.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the scope of support you need. Book a complimentary introductory call or send an inquiry, and we'll be happy to talk through pricing and availability.",
  },
  {
    q: "When do I pay?",
    a: "Nothing is due upfront. You're invoiced at closing, and with your approval the fee can be paid through the settlement statement so it comes out of closing funds. If you'd rather pay directly, you can pay the invoice yourself.",
  },
];

export const SERVICE_AREAS = ["Washington, DC", "Maryland", "Northern Virginia", "Multiple DMV jurisdictions"];

export const INQUIRY_TOPICS = ["Transaction coordination inquiry", "Pricing and availability", "General question"];
