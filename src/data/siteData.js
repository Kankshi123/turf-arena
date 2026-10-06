// ============================================================
// THE COLLECTIVE ARENA — Central Data File
// ============================================================

export const BRAND = {
  name: "The Collective Arena",
  tagline: "Play. Compete. Own The Turf.",
  shortName: "TCA",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@thecollectivearena.com",
  address: "Plot 42, Sports City Road, Hyderabad, Telangana 500081",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.4867!3d17.4065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzIzLjQiTiA3OMKwMjknMTIuMiJF!5e0!3m2!1sen!2sin!4v1234567890",
  hours: {
    weekday: "5:00 AM – 12:00 AM",
    weekend: "4:00 AM – 1:00 AM",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
  },
};

export const STATS = [
  { label: "Matches Played", value: 5000, suffix: "+", icon: "🏏" },
  { label: "Teams Per Week", value: 20, suffix: "+", icon: "🥅" },
  { label: "Turfs Available", value: 3, suffix: "", icon: "🌿" },
  { label: "Star Rating", value: 4.9, suffix: "★", icon: "⭐", decimals: 1 },
];

export const SPORTS = [
  {
    id: "box-cricket",
    name: "Box Cricket",
    icon: "🏏",
    color: "#22c55e",
    description: "Fast-paced indoor cricket with 6 players per side. Ideal for corporate teams, friends, and competitive leagues.",
    features: ["6-a-side format", "Rubber pitch", "Certified umpires", "LED scoreboard"],
    image: "https://images.unsplash.com/photo-1540747913346-19212a4b423a?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "turf-cricket",
    name: "Turf Cricket",
    icon: "🏟️",
    color: "#4ade80",
    description: "Open-air turf cricket on premium synthetic grass. Day & night matches with floodlights.",
    features: ["Premium turf", "Floodlit night matches", "Full crease setup", "Bowling machine available"],
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "turf-football",
    name: "Turf Football",
    icon: "⚽",
    color: "#facc15",
    description: "5-a-side & 7-a-side football on premium FIFA-certified artificial turf with full goal posts.",
    features: ["FIFA certified turf", "Goal posts & nets", "5-a-side & 7-a-side", "Live score display"],
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "pickleball",
    name: "Pickleball",
    icon: "🏓",
    color: "#f97316",
    description: "The fastest growing sport in India. Professional pickleball courts with all equipment available for rent.",
    features: ["Pro courts", "Equipment rental", "Coaching sessions", "Tournaments monthly"],
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "basketball",
    name: "Basketball",
    icon: "🏀",
    color: "#ef4444",
    description: "Full 3-on-3 and half-court basketball with NBA-spec hoops and premium rubber flooring.",
    features: ["NBA-spec hoops", "3v3 & 5v5 format", "Night floodlights", "Shot clock available"],
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "badminton",
    name: "Badminton",
    icon: "🏸",
    color: "#a78bfa",
    description: "Shuttle Pro certified synthetic mat courts with high-speed lighting and tournament-grade nets.",
    features: ["BWF approved mats", "Pro-grade lighting", "Equipment rental", "Coaching available"],
    image: "https://images.unsplash.com/photo-1613918431703-aa50889e3be7?w=1200&q=80&auto=format&fit=crop",
  },
];

export const TURFS = [
  {
    id: "turf-alpha",
    name: "Alpha Court",
    sport: "Box Cricket / Football",
    size: "50ft × 30ft",
    capacity: "12 players",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop",
    features: ["LED Floodlights", "Scoreboard", "Net System", "Dressing Room", "Parking", "Café Access"],
    color: "#22c55e",
  },
  {
    id: "turf-beta",
    name: "Beta Ground",
    sport: "Turf Cricket",
    size: "80ft × 50ft",
    capacity: "22 players",
    image: "https://images.unsplash.com/photo-1540747913346-19212a4b423a?w=1200&q=80&auto=format&fit=crop",
    features: ["Synthetic Turf", "Full Crease", "Night Floodlights", "Umpire Room", "Bowling Machine", "Commentary System"],
    color: "#4ade80",
  },
  {
    id: "turf-gamma",
    name: "Gamma Arena",
    sport: "Football / Multi-sport",
    size: "65ft × 45ft",
    capacity: "14 players",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80&auto=format&fit=crop",
    features: ["FIFA Turf", "Goal Posts", "Ball Storage", "Seating Gallery", "Water Station", "Security"],
    color: "#facc15",
  },
];

export const PRICING = [
  {
    id: "morning",
    label: "Morning",
    time: "5 AM – 9 AM",
    hourlyRate: 800,
    monthlyPass: 8000,
    color: "#facc15",
    popular: false,
    perks: ["Early bird discount", "Free parking", "Complimentary water", "Flexible cancellation"],
  },
  {
    id: "evening",
    label: "Evening",
    time: "9 AM – 6 PM",
    hourlyRate: 1200,
    monthlyPass: 12000,
    color: "#22c55e",
    popular: true,
    perks: ["Most popular slot", "Free coaching session", "Equipment included", "Priority booking", "Café discount 20%"],
  },
  {
    id: "night",
    label: "Night Match",
    time: "6 PM – 12 AM",
    hourlyRate: 1500,
    monthlyPass: 15000,
    color: "#ef4444",
    popular: false,
    perks: ["Floodlit experience", "Scoreboard included", "Night snack combo", "Premium matchday vibes"],
  },
];

export const TOURNAMENTS = [
  {
    id: "t1",
    name: "Arena Premier League – Season 3",
    sport: "Box Cricket",
    date: "2026-11-15",
    registrationDeadline: "2026-11-01",
    prize: "₹50,000",
    teams: 16,
    registered: 11,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80&auto=format&fit=crop",
    status: "open",
  },
  {
    id: "t2",
    name: "Turf Titans Football Cup",
    sport: "Football",
    date: "2026-11-22",
    registrationDeadline: "2026-11-10",
    prize: "₹30,000",
    teams: 8,
    registered: 5,
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80&auto=format&fit=crop",
    status: "open",
  },
  {
    id: "t3",
    name: "Pickleball Invitational 2026",
    sport: "Pickleball",
    date: "2026-12-05",
    registrationDeadline: "2026-11-25",
    prize: "₹20,000",
    teams: 12,
    registered: 3,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&q=80&auto=format&fit=crop",
    status: "open",
  },
];

export const LEADERBOARD = [
  { rank: 1, team: "Thunder Strikers", sport: "Cricket", played: 8, won: 7, points: 14, avatar: "TS" },
  { rank: 2, team: "Green Wolves", sport: "Football", played: 8, won: 6, points: 12, avatar: "GW" },
  { rank: 3, team: "Night Owls CC", sport: "Cricket", played: 8, won: 5, points: 10, avatar: "NO" },
  { rank: 4, team: "Rapid Rascals", sport: "Football", played: 8, won: 4, points: 8, avatar: "RR" },
  { rank: 5, team: "Smash Bros", sport: "Pickleball", played: 8, won: 3, points: 6, avatar: "SB" },
];

export const WHY_US = [
  { icon: "🌿", title: "Premium Synthetic Turf", desc: "FIFA & BWF approved premium turfs maintained to professional standards." },
  { icon: "💡", title: "LED Floodlights", desc: "Stadium-grade LED lighting for perfect visibility in night matches." },
  { icon: "🏆", title: "Certified Umpires", desc: "BCCI & local board certified umpires for all tournament formats." },
  { icon: "🎽", title: "Equipment Rental", desc: "Full cricket & sports kit available on rent – bats, balls, pads & more." },
  { icon: "☕", title: "Café & Lounge", desc: "On-site sports café serving shakes, snacks & energy drinks all day." },
  { icon: "📱", title: "Live Score App", desc: "Real-time live scoring via our mobile app for every match." },
  { icon: "🚗", title: "Free Parking", desc: "Ample free parking for 50+ vehicles right at the venue entrance." },
  { icon: "🎂", title: "Event Packages", desc: "Custom birthday & corporate event packages with full-day venue access." },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajan Mehta",
    role: "Cricket Team Captain",
    rating: 5,
    quote: "The turf quality is world-class. Night matches under the floodlights feel like playing in a real stadium. Our team's go-to venue!",
    avatar: "RM",
    sport: "Cricket",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Corporate HR Manager",
    rating: 5,
    quote: "Organised our company sports day here. The staff was incredibly helpful, facilities spotless. Definitely coming back for our next event!",
    avatar: "PS",
    sport: "Football",
  },
  {
    id: 3,
    name: "Aditya Kumar",
    role: "Football Coach",
    rating: 5,
    quote: "The FIFA-grade turf and excellent lighting make this the best football venue in the city. My players love training here.",
    avatar: "AK",
    sport: "Football",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Pickleball Enthusiast",
    rating: 5,
    quote: "Finally a proper pickleball court in Hyderabad! Smooth surface, great staff, and the coaching sessions are top notch.",
    avatar: "SR",
    sport: "Pickleball",
  },
  {
    id: 5,
    name: "Vikram Naidu",
    role: "Weekend Warrior",
    rating: 5,
    quote: "Book through the app in under 2 minutes. The floodlit box cricket court at night is an unmatched experience. 10/10!",
    avatar: "VN",
    sport: "Cricket",
  },
];

export const FAQS = [
  {
    q: "How do I book a turf slot?",
    a: "You can book directly through our website booking widget, WhatsApp us, or call us. Online bookings get confirmed instantly with a digital receipt.",
  },
  {
    q: "What are the cancellation/refund policies?",
    a: "Full refund if cancelled 24+ hours before your slot. 50% refund for 12–24 hours. No refund within 12 hours of the slot.",
  },
  {
    q: "Is equipment included in the booking price?",
    a: "Basic equipment (balls, stumps) is included for cricket slots. Bats, pads, and full kits can be rented at ₹100–₹300 per person.",
  },
  {
    q: "Do you allow walk-in bookings?",
    a: "Yes, subject to availability! But we strongly recommend booking online to secure your preferred slot, especially for evening and night sessions.",
  },
  {
    q: "Are night matches available on weekdays?",
    a: "Yes! We're open until midnight on weekdays and 1 AM on weekends. Night slots are hugely popular – book early!",
  },
  {
    q: "Do you host corporate or birthday events?",
    a: "Absolutely! We have dedicated event packages with catering, decoration, equipment, and photography options. Contact us to customise your event package.",
  },
  {
    q: "Are umpires and referees provided?",
    a: "Certified umpires are available for tournament bookings and can be added to regular bookings at an additional ₹200/hr per umpire.",
  },
  {
    q: "Is there a café or food available?",
    a: "Yes! Our Arena Café is open from 6 AM to midnight serving protein shakes, snacks, biryanis, and energy drinks.",
  },
];

export const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1540747913346-19212a4b423a?w=1200&q=80&auto=format&fit=crop", category: "Cricket", alt: "Box cricket match in progress" },
  { id: 2, src: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80&auto=format&fit=crop", category: "Football", alt: "Football match on turf" },
  { id: 3, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop", category: "Night Games", alt: "Night match under floodlights" },
  { id: 4, src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80&auto=format&fit=crop", category: "Cricket", alt: "Cricket batting action" },
  { id: 5, src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80&auto=format&fit=crop", category: "Events", alt: "Corporate sports event" },
  { id: 6, src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80&auto=format&fit=crop", category: "Basketball", alt: "Basketball court" },
  { id: 7, src: "https://images.unsplash.com/photo-1613918431703-aa50889e3be7?w=1200&q=80&auto=format&fit=crop", category: "Badminton", alt: "Badminton court" },
  { id: 8, src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&q=80&auto=format&fit=crop", category: "Pickleball", alt: "Pickleball court action" },
  { id: 9, src: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1200&q=80&auto=format&fit=crop", category: "Night Games", alt: "Stadium floodlight atmosphere" },
  { id: 10, src: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80&auto=format&fit=crop", category: "Events", alt: "Trophy ceremony" },
  { id: 11, src: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1200&q=80&auto=format&fit=crop", category: "Football", alt: "Football goalpost" },
  { id: 12, src: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=1200&q=80&auto=format&fit=crop", category: "Cricket", alt: "Cricket ball on pitch" },
];

export const TIME_SLOTS = [
  { time: "05:00 AM", available: true },
  { time: "06:00 AM", available: true },
  { time: "07:00 AM", available: false },
  { time: "08:00 AM", available: false },
  { time: "09:00 AM", available: true },
  { time: "10:00 AM", available: true },
  { time: "11:00 AM", available: true },
  { time: "12:00 PM", available: false },
  { time: "01:00 PM", available: true },
  { time: "02:00 PM", available: true },
  { time: "03:00 PM", available: false },
  { time: "04:00 PM", available: true },
  { time: "05:00 PM", available: false },
  { time: "06:00 PM", available: true },
  { time: "07:00 PM", available: false },
  { time: "08:00 PM", available: true },
  { time: "09:00 PM", available: true },
  { time: "10:00 PM", available: false },
  { time: "11:00 PM", available: true },
];
