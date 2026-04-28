/*
  Central content for the KeenForge site.

  Voice rules:
  - Plain spoken. Confident. Specific.
  - Major headlines in Title Case.
  - No em dashes. No hyphenated marketing phrases.
  - Sounds like a serious business owner working with a great copywriter.

  Spine of the site:
  Most businesses are not short on leads. They are short on the system that
  turns interest into revenue.

  Public language rules:
  - No public mention of GoHighLevel or GHL anywhere a visitor can read.
  - Use platform neutral business language: calls, forms, appointments,
    follow up, website, pipeline, CRM, booking, reviews, local search, ads,
    missed opportunities, first response, sales process, lead tracking,
    customer communication, revenue.
*/

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_NAV = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ],
  start: [
    { label: "Book a Growth Review", href: "/book-a-demo" },
    { label: "What We Build", href: "/services" },
    { label: "Who We Serve", href: "/industries" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const PRIMARY_CTA = {
  label: "Book a Growth Review",
  href: "/book-a-demo",
};

/* ------------------------------ HOME -------------------------------- */

export const HERO = {
  headline: "Turn More Leads Into Booked Appointments.",
  subhead:
    "For service based and appointment driven businesses where every missed call, form, or message can cost real revenue. KeenForge installs the operating layer between your marketing and your booked work.",
  primaryCta: PRIMARY_CTA,
  secondaryCta: { label: "See What We Build", href: "/services" },
  trustChips: [
    "Founder led, operator built",
    "Same business day reply",
    "Plan in writing, no pitch deck",
  ],
};

// The line every other section orbits around.
export const SPINE =
  "Most businesses are not short on leads. They are short on the system that turns interest into revenue.";

export const PROBLEM = {
  title: "Most Businesses Are Not Short on Leads. They Are Short on Follow Through.",
  intro:
    "Calls go to voicemail. Forms sit overnight. The website does not push people to take the next step. Quotes never get a second touch. By the time anyone responds, the lead already booked someone else.",
  points: [
    {
      title: "Slow First Response",
      body: "The first business to answer wins more often than the best one. Most teams are not even close to first.",
    },
    {
      title: "Inconsistent Follow Up",
      body: "Estimates and quotes go quiet because nobody owns the next touch. Real revenue gets lost between calls.",
    },
    {
      title: "Disconnected Tools",
      body: "Phones, forms, calendars, ads, and CRM live in different places. Nothing talks. Nothing tracks.",
    },
    {
      title: "Weak Online Presence",
      body: "The website looks dated. The Google profile is half complete. Reviews trickle in instead of stacking up.",
    },
  ],
};

export const SOLUTION = {
  title: "Connect the Pieces That Usually Break Apart.",
  body: "We install the missing layer between marketing and revenue. The phone gets answered when your team cannot pick up. The text goes out the moment a call is missed. The website turns visitors into appointments instead of bookmarks. The CRM follows up without depending on memory. Every lead has a clear next step from first touch to invoice.",
  pull: SPINE,
};

/*
  Five layers, one journey:
  Capture -> Respond -> Organize -> Follow Up -> Improve.

  Each layer is its own piece of the operating system. Together they are how
  a lead becomes booked work.
*/
export const SERVICE_GROUPS = [
  {
    id: "capture",
    layer: "Capture",
    title: "Capture",
    promise:
      "Make it easy for the right people to find you and take the next step.",
    summary:
      "The front of your funnel. The website, search visibility, ads, and forms that turn local demand into leads you can actually act on.",
    services: [
      {
        title: "Website Design",
        body: "A clean, fast, mobile first site built around the way your customers actually buy. Designed to convert, not just to look nice.",
      },
      {
        title: "Landing Pages",
        body: "Focused pages built to match a service, a city, or a paid campaign. The message and the offer match the click, so the click pays back.",
      },
      {
        title: "Lead Capture Forms",
        body: "Forms that ask the right questions in the right order, qualify the lead in real time, and route it into the system the moment it submits.",
      },
      {
        title: "Booking Pages",
        body: "Branded booking pages tied to your calendar, with the rules and buffers you need to keep the schedule sane.",
      },
      {
        title: "Local SEO",
        body: "Map pack visibility for the services and cities that actually pay you. Less theory, more booked phone calls.",
      },
      {
        title: "Google Business Profile",
        body: "A complete, optimized profile, posted to consistently, with reviews and photos that move the needle.",
      },
      {
        title: "Paid Ads Support",
        body: "Search and local ads tied to a real intake system, so every click can be tracked all the way to revenue.",
      },
      {
        title: "Campaign Landing Pages",
        body: "Dedicated pages for ads and promos that convert at a much higher rate than the homepage.",
      },
    ],
  },
  {
    id: "respond",
    layer: "Respond",
    title: "Respond",
    promise:
      "Make sure every call, form, and message gets a fast next step.",
    summary:
      "Speed is the unfair advantage almost nobody operationalizes. The first sixty seconds decides who books the work.",
    services: [
      {
        title: "AI Phone Answering",
        body: "A voice agent that answers like a trained receptionist, qualifies the caller, and books the appointment. Captures the leads your team cannot get to in time.",
      },
      {
        title: "Missed Call Text Back",
        body: "Every missed call gets an instant text. Most leads will book or reply right there instead of calling the next business on the list.",
      },
      {
        title: "Website Chat and Lead Capture",
        body: "A real conversation on your website that answers questions, captures contact info, and routes the right kind of jobs straight to the calendar.",
      },
      {
        title: "Appointment Booking",
        body: "Real time calendars, smart routing, and reminders that protect your most valuable hours and cut the no shows that drain margin.",
      },
    ],
  },
  {
    id: "organize",
    layer: "Organize",
    title: "Organize",
    promise:
      "Keep every opportunity in one place, from first contact to booked work.",
    summary:
      "One CRM, one pipeline, one source of truth. Stop losing leads to inboxes and sticky notes.",
    services: [
      {
        title: "CRM Setup",
        body: "A clean CRM your team will actually use. Stages, statuses, and notes that match how the business really sells.",
      },
      {
        title: "Pipeline Setup",
        body: "Visible deal stages from new lead to booked job to close, so you can see exactly where the next dollar comes from.",
      },
      {
        title: "Lead Source Tracking",
        body: "Every call, form, and chat tagged to the channel that produced it, so the marketing budget stops being a guess.",
      },
    ],
  },
  {
    id: "follow-up",
    layer: "Follow Up",
    title: "Follow Up",
    promise:
      "Win the work that goes quiet between first touch and the close.",
    summary:
      "The follow up your team would do if everyone had perfect memory and unlimited time. Quiet, consistent, and human, not spam.",
    services: [
      {
        title: "Follow Up Workflows",
        body: "Sequenced text and email touches for quotes, estimates, and aging leads. The kind of follow up that actually wins the work.",
      },
      {
        title: "Lead Reactivation",
        body: "We turn old leads back into booked work using the database you already paid to build.",
      },
      {
        title: "Review Request Automation",
        body: "Review requests fire at the moment customers are happiest, with a private feedback path for the rest.",
      },
    ],
  },
  {
    id: "improve",
    layer: "Improve",
    title: "Improve",
    promise:
      "Know what is working, fix what is not, and stop guessing where to spend.",
    summary:
      "See the system from above. Sharper offers, faster scripts, cleaner intake every month.",
    services: [
      {
        title: "Pipeline Reporting",
        body: "Simple dashboards that show pipeline value, win rate, response time, and the work actually getting on the calendar.",
      },
      {
        title: "Conversion Review",
        body: "A monthly look at what is converting, what is leaking, and what we should change next.",
      },
      {
        title: "Ongoing Improvements",
        body: "Quarterly upgrades to scripts, sequences, pages, and offers based on what the numbers are telling us.",
      },
    ],
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Audit",
    body: "We look at how leads come in, how fast they are answered, and where they drop off today. You see your business through the eyes of a real customer.",
  },
  {
    step: "02",
    title: "Build",
    body: "We design and install the system. Website, response, CRM, follow up, and tracking, connected layer by layer so the business is never offline.",
  },
  {
    step: "03",
    title: "Launch",
    body: "We turn it on, train the team, and watch the first week of real leads move through the new pipeline together.",
  },
  {
    step: "04",
    title: "Improve",
    body: "We keep tuning. Sharper offers, faster scripts, cleaner intake. The system gets sharper every month instead of slowly going stale.",
  },
] as const;

export const INDUSTRIES = [
  {
    slug: "home-services",
    name: "Home Services",
    examples:
      "HVAC, plumbing, roofing, electrical, garage door, landscaping, pressure washing, pest control, restoration, junk removal, dumpster rental, tree service",
    problem:
      "Calls hit during jobs. Estimates go quiet. Booked work depends on who answers fastest, not who is best.",
    solution:
      "Live answering, instant text back, follow up that does not stop, and a website that turns local searches into appointments.",
    bestFit: ["AI Phone Answering", "Missed Call Text Back", "Local SEO", "Follow Up Workflows"],
  },
  {
    slug: "med-spas-clinics",
    name: "Med Spas and Clinics",
    examples:
      "Med spas, aesthetics, dental, chiropractic, physical therapy, specialty clinics",
    problem:
      "Front desk is busy. New patient inquiries fall behind. The booking page does not match the brand.",
    solution:
      "A booking flow that feels premium, automated reminders that cut no shows, and review systems that fill the local map pack.",
    bestFit: ["Appointment Booking", "Website Design", "Review Request Automation", "Google Business Profile"],
  },
  {
    slug: "legal-professional",
    name: "Legal and Professional Offices",
    examples:
      "Law firms, accounting, financial services, consulting practices",
    problem:
      "Inquiries come in at all hours. The intake process is uneven. High value cases get the same response as everything else.",
    solution:
      "Qualified intake, polished response, and a CRM that protects billable time while making sure no real opportunity slips.",
    bestFit: ["Website Chat and Lead Capture", "CRM Setup", "Pipeline Setup", "Follow Up Workflows"],
  },
  {
    slug: "automotive",
    name: "Automotive and Repair",
    examples:
      "Auto repair, collision, mobile mechanics, detailing, specialty shops",
    problem:
      "Phones ring while bays are busy. Quote requests pile up. The website looks like 2014.",
    solution:
      "Voice and text response that handles the easy stuff, plus a clean site and tracking that shows which channels actually book work.",
    bestFit: ["AI Phone Answering", "Website Design", "Lead Source Tracking", "Local SEO"],
  },
  {
    slug: "real-estate",
    name: "Real Estate Teams",
    examples:
      "Buyer and seller teams, property managers, niche brokerages",
    problem:
      "Speed to lead is the whole game. Most teams lose deals because the second touch never happens.",
    solution:
      "Instant response, automated nurture for long timelines, and a pipeline that shows exactly which leads are actually moving.",
    bestFit: ["Missed Call Text Back", "Follow Up Workflows", "Lead Reactivation", "Pipeline Setup"],
  },
  {
    slug: "local-service",
    name: "Other Local and Appointment Based Businesses",
    examples:
      "Any business that runs on calls, forms, appointments, and follow up",
    problem:
      "The pieces are there. The system is not. Marketing, response, and sales each live on their own island.",
    solution:
      "We connect the islands. One operating layer for capture, response, follow up, and reporting that matches how you actually sell.",
    bestFit: ["CRM Setup", "Pipeline Setup", "Lead Source Tracking", "Follow Up Workflows"],
  },
] as const;

export const WHY = [
  {
    title: "Built From Real Business Experience",
    body: "KeenForge is not a marketing playbook copied from a course. It comes from running real businesses and feeling the cost of every missed lead.",
  },
  {
    title: "Practical Systems, Not Theory",
    body: "We build what your team will actually use on a Tuesday morning. If a step is too complicated, we cut it.",
  },
  {
    title: "Marketing and Operations Connected",
    body: "Most agencies stop at the click. We follow the lead all the way to booked, paid, and reviewed.",
  },
  {
    title: "Designed Around Response and Follow Up",
    body: "The fastest, most consistent response wins more deals than the lowest price. We make that the default.",
  },
] as const;

export const PROOF = {
  title: "What This Is, And What It Is Not.",
  body: "We are not going to fake proof. Until public case studies are ready, we would rather show you exactly how the system works, what it fixes, and where it creates leverage in the business.",
  is: {
    label: "What This Is",
    items: [
      "A practical operating layer for capturing and converting opportunities.",
      "Built around real business use, with clear scope, setup, and next steps.",
      "Something your team can actually run on a Tuesday morning.",
    ],
  },
  isNot: {
    label: "What This Is Not",
    items: [
      "A reseller dressed up as a software company.",
      "A retainer with no clear work behind the invoice.",
      "A pitch deck pretending to be an installed system.",
    ],
  },
} as const;

export const FAQ = [
  {
    q: "Who is KeenForge best for?",
    a: "Local and service based businesses that run on calls, forms, appointments, and follow up. If your team is busy on the work and leads are falling through the cracks, this is built for you.",
  },
  {
    q: "Do you only work with home service companies?",
    a: "No. Home services are a strong fit, but we also work with med spas, clinics, legal and professional offices, automotive and repair, real estate teams, and other local businesses where speed and follow up move the needle.",
  },
  {
    q: "What if we already have a website?",
    a: "If the site is good, we keep it and build the systems around it. If it is hurting conversion, we will tell you straight, and we can rebuild it the right way.",
  },
  {
    q: "Can you work with our existing CRM?",
    a: "Yes. We work inside the CRM you have when it makes sense, and we can recommend a better fit if it is the bottleneck. Either way, the goal is one system the team will actually use.",
  },
  {
    q: "What if we already run ads?",
    a: "Good. We connect the ads to a real intake system so every click can be tracked through booked work and revenue, not just clicks and form fills.",
  },
  {
    q: "Do you build websites too?",
    a: "Yes. Websites, landing pages, booking pages, and lead capture flows. We design them to convert, not just to look nice.",
  },
  {
    q: "Can you help if we are missing calls?",
    a: "Yes. AI phone answering, missed call text back, and qualified booking flows are some of the highest leverage things we install.",
  },
  {
    q: "What happens after we book a review?",
    a: "We send a short prep note, get on a 30 minute call, and walk through your current intake from the lead's point of view. You leave with a clear plan, with no pressure to buy anything.",
  },
  {
    q: "How fast can we launch improvements?",
    a: "Most engagements have meaningful pieces live within the first two weeks. Full builds are scoped during the review so you know exactly what is shipping and when.",
  },
  {
    q: "Do you replace our marketing team or support them?",
    a: "Whichever fits. Some clients have us run the system. Others have an in house team that we plug into and make the operating layer underneath them stronger.",
  },
  {
    q: "What does it cost?",
    a: "Engagements are scoped to the work, so there is no fixed package price. After the review we send a clear written plan with the price for what we recommend. We do not push you toward a generic package before we understand the business.",
  },
] as const;

export const FINAL_CTA = {
  eyebrow: "Ready When You Are",
  title: "See What Your Business Looks Like With the Right System Around It.",
  body: "A short call, a real review, and a clear plan. No pressure, no fluff, no canned demo.",
  primaryCta: PRIMARY_CTA,
  secondaryCta: { label: "Talk to Us", href: "/contact" },
};

/* ------------------------------ ABOUT ------------------------------- */

export const ABOUT = {
  hero: {
    eyebrow: "About KeenForge",
    title:
      "We Build the Operating Layer Behind Serious Local Businesses.",
    body: "Most businesses do not need another tool. They need the layer underneath all the tools. The part that actually answers the call, sends the next message, and makes sure no real lead falls through. That is what KeenForge installs.",
  },
  mission: {
    eyebrow: "What We Believe",
    title: "Speed and Follow Through Win the Work.",
    points: [
      "The fastest, most consistent response wins more deals than the lowest price.",
      "A system the team will actually use beats a stack of features they will not.",
      "Marketing means nothing if the lead never gets answered.",
      "Booked work is the only metric that matters in the end.",
    ],
  },
  founder: {
    eyebrow: "Founder",
    name: "Logan Keener",
    role: "Founder, KeenForge",
    title: "Built by Someone Who Has Had to Make the Phone Ring.",
    quote:
      "Every business I ran had the same problem. The leads were there. The system underneath them was not. KeenForge is the company I would have hired five years ago.",
    paragraphs: [
      "Logan built KeenForge after years inside small businesses where the same problem kept showing up. The leads were there. Calls got missed. Quotes went cold. The website looked the part and did not convert. The CRM was really just a spreadsheet, and the team had to remember everything important.",
      "He has had to make the phone ring, answer the lead, follow up, and close the deal himself. He runs two businesses today on the systems KeenForge installs, so the work he ships to clients runs in his own companies first.",
      "If we recommend something, it is because we have either run it ourselves or watched it produce booked work in another business we built. We build the layer your business runs on, not a slide deck about it.",
    ],
    credibility: [
      {
        label: "Today",
        value: "Runs two operating businesses on the KeenForge stack",
      },
      {
        label: "Background",
        value: "Built and operated across multiple categories of business",
      },
      {
        label: "Approach",
        value: "Every part of the stack runs inside his own companies first",
      },
    ],
  },
  approach: {
    eyebrow: "How We Are Different",
    title: "We Focus on the Unglamorous Parts That Move the Calendar.",
    body: "Most agencies sell a slice. Ads. Or a website. Or a CRM. We install the part that ties the slices together so every dollar of marketing actually shows up as booked work. The result feels less like an agency engagement and more like adding an operations layer to the business.",
  },
};

/* ------------------------------ DEMO -------------------------------- */

export const DEMO = {
  hero: {
    eyebrow: "Growth Review",
    title:
      "Book a Free Review of Where Your Business Is Losing Leads.",
    body: "We walk through your current intake the way a real customer experiences it. You see where leads slow down, where they drop, and what we would change first. You leave with a clear plan, whether you work with us or not.",
  },
  trustStrip: [
    "30 minute working session",
    "Real review of your current intake",
    "Clear plan, written down",
    "No pitch deck, no pressure",
  ],
  who: [
    "You run a local or service based business that depends on calls and appointments.",
    "You feel like you are leaving money on the table because of slow response or weak follow up.",
    "You want one system instead of six tools that do not talk to each other.",
  ],
  weReview: [
    {
      step: "Where leads come from",
      body: "Calls, forms, ads, search, referrals. We trace each channel back to the work it is producing.",
    },
    {
      step: "How calls and forms are handled",
      body: "Speed of response, who owns the next touch, what gets logged, and what slips.",
    },
    {
      step: "Where opportunities are lost",
      body: "The exact points in the funnel where leads go quiet, drop out, or book somebody else.",
    },
    {
      step: "The highest value fixes",
      body: "We tell you what we would change first, what we would build, and what we would leave alone.",
    },
  ],
  whatHappens: [
    {
      step: "Before the call",
      body: "We send a short prep note so we can use the time well.",
    },
    {
      step: "On the call",
      body: "We walk through your intake from the lead's point of view and show you what the system would look like in your business.",
    },
    {
      step: "After the call",
      body: "You get a clear plan with the next steps. If we are a fit, we move forward. If not, you keep the plan.",
    },
  ],
  faq: [
    {
      q: "How long is the call?",
      a: "Plan on 30 minutes. We finish on time. If a longer working session makes sense, we book it as a separate call.",
    },
    {
      q: "Is this a sales pitch?",
      a: "No. The first call is a real review. We walk through your current setup and show you what is leaking and what we would fix first. You can use that plan with or without us.",
    },
    {
      q: "Who from our team should join?",
      a: "Whoever owns leads and customer response. Usually the owner. If you want a sales lead or office manager on the call too, that is welcome.",
    },
    {
      q: "Do we need to prepare anything?",
      a: "No. We send a short prep note after you book. If you have your website, the basic numbers, and access to your phone or CRM, we have what we need.",
    },
    {
      q: "What if we are not ready to buy?",
      a: "That is fine. We are happy to do a real review either way. We would rather you walk away with a plan you can use than push something that is not the right fit.",
    },
    {
      q: "What happens to my information?",
      a: "It goes to our team and nowhere else. We do not sell or share contact info, and we follow the consent you give on the form for how we reach out.",
    },
    {
      q: "Will you tell me what it costs?",
      a: "The first call focuses on the review, not pricing. After we understand the business, we send a written plan with the price for what we recommend. If you want a fair range on the call, ask, and we will share it.",
    },
  ] as ReadonlyArray<{ q: string; a: string }>,
};

/* ------------------------------ CONTACT ----------------------------- */

export const CONTACT = {
  hero: {
    eyebrow: "Contact",
    title: "Real Questions Get Real Answers.",
    body: "If you have a project, a partnership, or a question that does not need a full review, send a note. We read everything that comes in.",
  },
  email: "hello@keenforge.com",
};
