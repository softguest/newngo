import p1 from "@/assets/p1.jpg";
// import p2 from "@/assets/p2.jpg";
import p5 from "@/assets/p5.jpg";
// import p3 from "@/assets/p3.jpg";
// import p4 from "@/assets/p4.jpg";
// import p5 from "@/assets/p5.jpg";
// import p6 from "@/assets/p6.jpg";

export const site = {
  name: "Subjectspot",
  tagline: "NGO Storytelling Videographer — Cameroon",
  whatsapp: "https://wa.me/237673589999",
  whatsappDisplay: "+237 6 73 58 99 99",
  email: "hello@subjectspot.com",
  calendly: "https://calendly.com/subjectspot/consult",
  location: "Bamenda, Cameroon",
  socials: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    vimeo: "https://vimeo.com",
    linkedin: "https://linkedin.com",
  },
};

export const stats = [
  { value: "120+", label: "Stories Crafted" },
  { value: "45+", label: "NGO Partners" },
  { value: "$2.4M", label: "Funds Raised by Clients" },
  { value: "8 yrs", label: "On the Ground" },
];

export const services = [
  { icon: "Film", title: "NGO Impact Storytelling", desc: "Long-form documentary films that move donors to action." },
  { icon: "Calendar", title: "Event Coverage", desc: "Galas, conferences, field visits — captured cinematically." },
  { icon: "HeartHandshake", title: "Fundraising Campaign Videos", desc: "Donor-funnel videos engineered to convert giving." },
  { icon: "Users", title: "Community Documentary Films", desc: "Authentic stories from villages, schools, and clinics." },
  { icon: "Smartphone", title: "Social Media Reels", desc: "Scroll-stopping vertical content for Instagram & TikTok." },
  { icon: "Mic", title: "Beneficiary Interviews", desc: "Human-first conversations that center real voices." },
  { icon: "Plane", title: "Drone Coverage", desc: "Aerial cinematography across rural and urban Cameroon." },
  { icon: "Camera", title: "Photography", desc: "Editorial NGO photography for reports, press, and grants." },
];

export const portfolio = [
  { id: 1, title: "Hope Clinic — Maternal Health", category: "Health Campaigns", image: p1, ratio: "aspect-[4/3]" },
  { id: 2, title: "Brighter Minds Initiative", category: "Education Programs", image: p5, ratio: "aspect-[4/3]" },
];

export const videos = [
  {
    id: 1,
    title: "Documentary Story",
    category: "NGO Storytelling",
    url: "https://www.youtube.com/embed/qccMmjNmSrw",
  },
  {
    id: 2,
    title: "Community Impact",
    category: "Field Report",
    url: "https://www.youtube.com/embed/qCTNqgtBMhs",
  },
];

export const portfolioCategories = [
  "All",
  "NGO Events",
  "Community Outreach",
  "Humanitarian Projects",
  "Education Programs",
  "Health Campaigns",
];

export const processSteps = [
  { n: "01", title: "Discovery", desc: "We listen deeply to your mission, audience, and the change you want to create." },
  { n: "02", title: "Story Planning", desc: "Narrative architecture, beneficiary mapping, shot lists, and field logistics." },
  { n: "03", title: "Filming", desc: "Cinema-grade cameras, drone, sound — captured with dignity and consent." },
  { n: "04", title: "Editing & Delivery", desc: "Color, sound design, music, and multi-format deliverables for every channel." },
];

export const testimonials = [
  {
    quote: "Donations to our maternal health program rose 38% the quarter after we released the film. It opened doors we'd been knocking on for years.",
    name: "Dr. Aïcha Mbeki",
    role: "Director, Hope Clinic Foundation",
  },
  {
    quote: "He doesn't just film — he listens. Our beneficiaries felt safe, seen, and proud. That's rare.",
    name: "Pastor Emmanuel Tchana",
    role: "Faith & Community Network",
  },
  {
    quote: "The most cinematic, emotionally honest NGO work I've seen in Central Africa. Every grant application is stronger with his footage.",
    name: "Sarah Linden",
    role: "Program Lead, Brighter Minds Initiative",
  },
];

export const partnerLogos = [
  "UNICEF Partner", "Red Cross", "World Vision", "Plan Intl.",
  "Save The Children", "CARE", "Oxfam", "Mercy Corps",
];

export const whyPoints = [
  { icon: "Eye", title: "Attention is the new currency", stat: "8 sec", desc: "Average donor attention span. Story is the only thing that holds it." },
  { icon: "Heart", title: "Emotion drives giving", stat: "55%", desc: "More likely to donate after watching a story-driven impact video." },
  { icon: "TrendingUp", title: "Video multiplies reach", stat: "12×", desc: "Higher engagement on social than text or static images." },
  { icon: "Award", title: "Trust compounds funding", stat: "2.3×", desc: "Donor retention for orgs that publish recurring video reports." },
];
