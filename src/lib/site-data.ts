// Central site content — single source of truth.
// Items tagged [CONFIRM] are placeholders the client must verify before launch.

export const SITE = {
  name: "JV'S Tuition Center",
  shortName: "JV'S",
  tagline: "Maths · Science · JEE · Banking & All Competitive Exams",
  rating: "5.0",
  reviews: "27",
  address: "Lumbatngen, Law-U-Sib, near Risa Higher Sec. School, Shillong, Meghalaya 793014",
  phoneDisplay: "+91 69098 42500",
  phoneHref: "tel:+916909842500",
  whatsappHref: "https://wa.me/916909842500",
  mapEmbed:
    "https://maps.google.com/maps?q=25.5631099,91.9128437&z=16&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=JV'S+Tuition+Center+Shillong",
  hours: "8:00 am – 7:00 pm · Mon–Sat [CONFIRM]",
  // [CONFIRM] — client email for the inquiry form
  formEmail: "jvs-tuition@example.com",
};

export const NAV = [
  { label: "Standard", href: "#standard" },
  { label: "Subjects", href: "#subjects" },
  { label: "Schedule", href: "#schedule" },
  { label: "Fees", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

export const STATS = [
  { value: 5.0, decimals: 1, suffix: "", label: "Google rating" },
  { value: 27, decimals: 0, suffix: "", label: "Verified reviews" },
  { value: 4, decimals: 0, suffix: "", label: "Exam tracks" },
  { value: 12, decimals: 0, suffix: "+", label: "Subjects covered" },
];

export const STORY_BEATS = [
  {
    kicker: "Rigorous",
    text: "Concept-first teaching that builds deep understanding — not rote memory.",
  },
  {
    kicker: "Personal",
    text: "Small batches and dedicated teachers who know every student by name.",
  },
  {
    kicker: "Exam-ready",
    text: "Board, JEE, Banking — mapped to real syllabi with mock tests and doubt clinics.",
  },
  {
    kicker: "Proven",
    text: "5.0★ rated by parents and students across Shillong's Law-U-Sib community.",
  },
];

export const WHY = [
  {
    title: "Dedicated teachers",
    body: "The single word in every review: teachers. Helpful, friendly, and invested in each child's future.",
    icon: "users",
  },
  {
    title: "One centre, every goal",
    body: "School subjects for Class I–XII and competitive tracks — JEE, Banking and more — under one roof.",
    icon: "target",
  },
  {
    title: "Real progress reports",
    body: "Parents get honest visibility into attendance, tests and improvement — no surprises at exam time.",
    icon: "chart",
  },
  {
    title: "Small batches",
    body: "Room for questions. Every doubt gets answered the same day, not next week.",
    icon: "users",
  },
];

export const SUBJECT_TRACKS = [
  "Mathematics",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "JEE Foundation",
  "Banking Exams",
  "Competitive Exams",
];

export const CLASS_LEVELS = [
  { range: "Class I – V", note: "Foundations" },
  { range: "Class VI – VIII", note: "Core skills" },
  { range: "Class IX – X", note: "Board prep" },
  { range: "Class XI – XII", note: "Physics · Maths" },
  { range: "JEE / Banking", note: "Aspirant tracks" },
];

// [CONFIRM] — weekly schedule placeholder
export const SCHEDULE = {
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  sessions: [
    { time: "8:00", label: "Morning batch" },
    { time: "10:00", label: "Mid-morning" },
    { time: "15:30", label: "After-school" },
    { time: "17:00", label: "Evening" },
    { time: "18:30", label: "Late evening" },
  ],
  note: "Weekly timetable — final slots confirmed with the centre.",
};

export type PlanId = "foundations" | "achievers" | "elite";

// [CONFIRM] — pricing placeholders grounded in Shillong market rates
export const PLANS: {
  id: PlanId;
  name: string;
  who: string;
  monthly: string;
  term: string;
  per: string;
  features: string[];
  highlight?: boolean;
}[] = [
  {
    id: "foundations",
    name: "Foundations",
    who: "Class I – V",
    monthly: "₹1,500",
    term: "₹4,000",
    per: "per subject / month",
    features: [
      "Maths & Science basics",
      "Homework & concept support",
      "2 classes per week",
      "Monthly parent update",
    ],
  },
  {
    id: "achievers",
    name: "Achievers",
    who: "Class VI – X · boards",
    monthly: "₹2,000",
    term: "₹5,500",
    per: "per subject / month",
    features: [
      "Board-aligned syllabus (MBOSE / CBSE / ICSE)",
      "Weekly tests + doubt clinics",
      "3 classes per week",
      "Exam strategy sessions",
    ],
    highlight: true,
  },
  {
    id: "elite",
    name: "Elite",
    who: "Class XI – XII · JEE · Banking",
    monthly: "₹3,000",
    term: "₹8,500",
    per: "per subject / month",
    features: [
      "Physics & Maths for XII",
      "JEE Foundation & Banking tracks",
      "Mock test series",
      "1:1 doubt slots",
    ],
  },
];

export const PERKS = [
  "Free trial class",
  "Sibling discount",
  "Term-payment discount",
];

export const TESTIMONIALS = [
  {
    quote:
      "The best coaching hub for Class 10 (Science and Maths) and Class 12 (Physics and Maths). Total dedication by teachers to build a child's future.",
    name: "Sanjay Joshi",
    role: "Parent · Google review",
  },
  {
    quote:
      "Sir, thank you so much for everything you have taught me. I am able to cope with what you had taught me — we learned so much from you.",
    name: "Douglas Warjri",
    role: "Student · Google review",
  },
  {
    quote:
      "God bless you with good health so that many get benefits. My child has improved a lot — thank you sir.",
    name: "Mon Bahadur Sunar",
    role: "Parent · Google review",
  },
  {
    quote: "Best coaching center, teachers are very helpful and friendly.",
    name: "Google review",
    role: "5.0 ★ rated",
  },
];

export const SUBJECT_OPTIONS = [
  "Mathematics",
  "Science (Physics / Chemistry / Biology)",
  "English",
  "JEE Foundation",
  "Banking Exams",
  "Competitive Exams",
  "Not sure — need advice",
];

export const BATCH_OPTIONS = [
  "Morning (8:00 am)",
  "Mid-morning (10:00 am)",
  "After-school (3:30 pm)",
  "Evening (5:00 pm)",
  "Late evening (6:30 pm)",
  "Flexible / 1:1",
];