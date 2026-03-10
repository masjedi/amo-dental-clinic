import React, { useEffect, useMemo, useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Smile,
  Star,
  ArrowRight,
  Moon,
  Sun,
  HeartPulse,
  ShieldPlus,
  ScanLine,
  Wrench,
  Baby,
  Wand2,
  Droplets,
  Gem,
  Palette,
  BadgeCheck,
  Stethoscope,
  Building2,
  GraduationCap,
  Microscope,
} from "lucide-react";
import chairImage from "./assets/images/chair.jpg";
import childrenDentistryImage from "./assets/images/children-dentistry.jpg";
import ceramicAestheticImage from "./assets/images/alignment-care.jpg";
import deepCleaningImage from "./assets/images/deep-cleaning.jpg";
import differentTeethImage from "./assets/images/different-teeth.jpg";
import endpointPrecisionImage from "./assets/images/endpoint-precession.jpg";
import grindersImage from "./assets/images/grinders.jpg";
import labImage from "./assets/images/Lab.avif";
import alignmentCareImage from "./assets/images/alignment-care.jpg";
import conservativeVeneerImage from "./assets/images/conservitive-veneer.jpg";
import orthodancyImage from "./assets/images/orthodancy.jpg";
import smileDetailingImage from "./assets/images/smile-detailing.jpg";
import upperJawImage from "./assets/images/deep-cleaning.jpg";

const slides = [
  {
    image: labImage,
    title: "Professional dental care with comfort and precision",
    subtitle:
      "Amoo Dental Clinic in Kunduz provides modern restorative, cosmetic, and family dental treatments in a clean and welcoming environment.",
  },
  {
    image: chairImage,
    title: "Modern smile care for children and adults",
    subtitle:
      "Led by Dr. Mohammadullah Sharifi, the clinic focuses on trusted treatment, aesthetic results, and patient-friendly care.",
  },
  {
    image: upperJawImage,
    title: "From oral treatment to advanced cosmetic dentistry",
    subtitle:
      "Quality materials, advanced techniques, and dedicated care for healthy, confident smiles in Kunduz, Afghanistan.",
  },
];

const services = [
  {
    title: "Treatment of oral cavity and gum diseases",
    icon: HeartPulse,
    eyebrow: "Periodontal care",
    summary:
      "Structured diagnosis and gum-focused treatment designed to reduce discomfort, control infection, and support long-term oral stability.",
    highlights: [
      "Gum health assessment",
      "Inflammation control",
      "Preventive follow-up",
    ],
    image: chairImage,
  },
  {
    title: "Dental fillings with advanced world-class materials",
    icon: ShieldPlus,
    eyebrow: "Restorative fillings",
    summary:
      "Tooth-colored restorations are planned to preserve structure, seal decay, and restore a natural look with durable modern materials.",
    highlights: [
      "Minimally invasive prep",
      "Shade-matched finish",
      "Durable bonding",
    ],
    image: labImage,
  },
  {
    title: "Fixed and removable dentures",
    icon: Smile,
    eyebrow: "Smile restoration",
    summary:
      "Comfortable fixed and removable denture solutions help restore bite balance, facial support, and day-to-day confidence.",
    highlights: [
      "Bite re-establishment",
      "Custom fit planning",
      "Natural smile profile",
    ],
    image: alignmentCareImage,
  },
  {
    title: "Tooth extractions, including impacted wisdom teeth",
    icon: Wrench,
    eyebrow: "Oral surgery",
    summary:
      "Careful extraction protocols focus on safety, comfort, and clean healing for routine teeth and more complex wisdom tooth cases.",
    highlights: [
      "Careful case review",
      "Comfort-first procedure",
      "Healing guidance",
    ],
    image: upperJawImage,
  },
  {
    title: "Root canal treatment (RCT)",
    icon: Stethoscope,
    eyebrow: "Endodontic precision",
    summary:
      "Root canal therapy is delivered with precision to relieve pain, remove infection, and preserve the natural tooth whenever possible.",
    highlights: [
      "Pain relief planning",
      "Infection management",
      "Tooth preservation",
    ],
    image: endpointPrecisionImage,
  },
  {
    title: "Pediatric dentistry",
    icon: Baby,
    eyebrow: "Children's dentistry",
    summary:
      "Gentle, reassuring dental care for children with an emphasis on comfort, early prevention, and healthy habits from the start.",
    highlights: [
      "Friendly chairside care",
      "Early prevention",
      "Parent guidance",
    ],
    image: childrenDentistryImage,
  },
  {
    title: "Teeth whitening with bleaching method",
    icon: Wand2,
    eyebrow: "Smile brightening",
    summary:
      "Professional bleaching treatments are tailored to brighten smiles more evenly while keeping the process controlled and patient-aware.",
    highlights: [
      "Tone improvement",
      "Controlled sessions",
      "Smile enhancement",
    ],
    image: differentTeethImage,
  },
  {
    title: "Ultrasonic scaling and dental cleaning",
    icon: Droplets,
    eyebrow: "Deep cleaning",
    summary:
      "Ultrasonic scaling and cleaning remove buildup efficiently, refresh the smile, and support stronger gum and overall oral health.",
    highlights: ["Tartar removal", "Surface polishing", "Fresh oral feel"],
    image: deepCleaningImage,
  },
  {
    title: "Orthodontics for misaligned teeth",
    icon: ScanLine,
    eyebrow: "Alignment care",
    summary:
      "Orthodontic planning helps improve tooth position, bite harmony, and smile symmetry with a structured treatment pathway.",
    highlights: [
      "Bite evaluation",
      "Alignment strategy",
      "Progress monitoring",
    ],
    image: orthodancyImage,
  },
  {
    title: "Tooth gems for smile enhancement",
    icon: Gem,
    eyebrow: "Smile detailing",
    summary:
      "For patients seeking a cosmetic accent, tooth gem placement adds a subtle decorative touch with a clean and polished finish.",
    highlights: ["Cosmetic accenting", "Clean application", "Refined finish"],
    image: smileDetailingImage,
  },
  {
    title: "Ceramic veneers",
    icon: Palette,
    eyebrow: "Ceramic aesthetics",
    summary:
      "Ceramic veneers are shaped to refine color, proportion, and front-smile harmony with a premium, polished appearance.",
    highlights: [
      "High-end finish",
      "Smile proportioning",
      "Aesthetic refinement",
    ],
    image: ceramicAestheticImage,
    imageClassName:
      "object-contain bg-[linear-gradient(180deg,#f7efe8,#efe7df)] p-6 sm:p-8 drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:scale-[1.01]",
  },
  {
    title: "Composite veneers",
    icon: BadgeCheck,
    eyebrow: "Conservative veneers",
    summary:
      "Composite veneers provide a versatile aesthetic option for reshaping and refreshing the smile with a more conservative approach.",
    highlights: [
      "Conservative reshaping",
      "Immediate enhancement",
      "Natural texture",
    ],
    image: conservativeVeneerImage,
  },
  {
    title: "Covers and crowns",
    icon: ShieldCheck,
    eyebrow: "Crowns and covers",
    summary:
      "Protective crowns and covers restore strength, improve appearance, and help compromised teeth function with confidence again.",
    highlights: [
      "Strength restoration",
      "Protective coverage",
      "Long-term support",
    ],
    image: grindersImage,
  },
];

const stats = [
  { value: "13+", label: "Specialized services" },
  { value: "2", label: "Clinic phone numbers" },
  { value: "Family", label: "Friendly care" },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const cardInfo = {
  clinicName: "Amoo Dental Clinic",
  doctorName: "Dr. Mohammadullah Sharifi",
  doctorAltName: "Sharifi Aqtash",
  whatsapp: "+93 744547411",
  phone2: "+93 730627740",
  email: "mohammadullahsharifi68@gmail.com",
  location:
    "Sherkat Street, opposite to 5 Start-Hotel, Above Eadi Zada Pharmacy ",
  mapLabel: "Kunduz, Afghanistan",
  education: "MD in Stomatology",
  educationSource: "Kunduz University graduate",
  specialization:
    "Treatment of oral diseases, dental care, and oral & maxillofacial surgery",
  membership: "Member of the Afghanistan Stomatology Association",
  experience:
    "Professional background includes service at the National Curative and Specialized Stomatology Hospital in Kabul.",
};

const whatsappUrl = `https://wa.me/${cardInfo.whatsapp.replace(/\D/g, "")}`;
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  cardInfo.email
)}`;

function Logo({ compact = false, light = false, darkMode = false }) {
  const primary = light ? "#ffffff" : darkMode ? "#6fd3c1" : "#1b174c";
  const accent = darkMode ? "#ffffff" : "#6fd3c1";
  const soft = light
    ? "rgba(255,255,255,0.14)"
    : darkMode
    ? "rgba(255,255,255,0.08)"
    : "#eef1ff";

  return (
    <div className={`flex items-center gap-3 ${compact ? "" : "min-w-0"}`}>
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${primary} 0%, ${accent} 100%)`,
          }}
        />
        <div
          className="relative flex h-8 w-8 items-center justify-center rounded-xl text-sm font-black"
          style={{ background: soft, color: light ? "#fff" : primary }}
        >
          A
        </div>
      </div>
      {!compact && (
        <div className="min-w-0">
          <p
            className="truncate text-lg font-extrabold tracking-[0.18em] uppercase"
            style={{ color: primary }}
          >
            Amoo
          </p>
          <p
            className={`truncate text-xs ${
              light
                ? "text-white/75"
                : darkMode
                ? "text-white/60"
                : "text-slate-500"
            }`}
          >
            Dental Clinic
          </p>
        </div>
      )}
    </div>
  );
}

function SectionHeading({
  badge,
  title,
  description,
  center = false,
  darkMode = false,
  invert = false,
}) {
  const wrapClass = center ? "mx-auto max-w-3xl text-center" : "max-w-2xl";
  const chipClass = invert
    ? "border-white/10 bg-white/10 text-white"
    : darkMode
    ? "border-white/10 bg-white/5 text-[#6fd3c1]"
    : "border-[#1b174c]/10 bg-white text-[#1b174c]";
  const titleClass = invert || darkMode ? "text-white" : "text-slate-900";
  const descriptionClass = invert
    ? "text-white/80"
    : darkMode
    ? "text-slate-300"
    : "text-slate-600";

  return (
    <div className={wrapClass}>
      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] shadow-sm ${chipClass}`}
      >
        <Sparkles className="h-4 w-4" />
        {badge}
      </div>
      <h2
        className={`text-3xl font-black tracking-tight sm:text-4xl ${titleClass}`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionClass}`}>
        {description}
      </p>
    </div>
  );
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 4800);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const activeSlide = useMemo(() => slides[currentSlide], [currentSlide]);
  const activeService = useMemo(() => services[serviceIndex], [serviceIndex]);
  const upcomingServices = useMemo(
    () =>
      [1, 2, 3].map((offset) => {
        const index = (serviceIndex + offset) % services.length;
        return {
          ...services[index],
          index,
        };
      }),
    [serviceIndex]
  );
  const serviceCountLabel = String(services.length).padStart(2, "0");
  const activeServiceLabel = String(serviceIndex + 1).padStart(2, "0");

  const goPrev = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goPrevService = () =>
    setServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  const goNextService = () =>
    setServiceIndex((prev) => (prev + 1) % services.length);

  return (
    <div className="min-h-screen bg-[#f6f8ff] text-slate-800 transition-colors duration-300 dark:bg-[#0e0d26] dark:text-white">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#1b174c] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#1b174c]/25 transition hover:-translate-y-0.5 dark:bg-[#6fd3c1] dark:text-[#0e0d26] sm:bottom-6 sm:right-6 sm:px-5"
      >
        <Phone className="h-4 w-4" />
        WhatsApp Us
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#121133]/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="min-w-0 shrink-0">
            <Logo darkMode={darkMode} />
          </a>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 transition hover:text-[#1b174c] dark:text-slate-300 dark:hover:text-[#6fd3c1]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => setDarkMode((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-[#6fd3c1]"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1b174c]/10 bg-[#1b174c]/5 px-4 py-2 text-sm font-semibold text-[#1b174c] dark:border-[#6fd3c1]/20 dark:bg-[#6fd3c1]/10 dark:text-[#6fd3c1]">
              <Phone className="h-4 w-4" />
              {cardInfo.whatsapp}
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode((v) => !v)}
              className="inline-flex rounded-xl border border-slate-200 p-2 text-slate-700 dark:border-white/10 dark:text-[#6fd3c1]"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex rounded-xl border border-slate-200 p-2 text-slate-700 dark:border-white/10 dark:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#121133] lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-2 inline-flex items-center gap-2 rounded-xl border border-[#1b174c]/10 bg-[#1b174c]/5 px-3 py-3 text-sm font-semibold text-[#1b174c] dark:border-[#6fd3c1]/20 dark:bg-[#6fd3c1]/10 dark:text-[#6fd3c1]">
                <Phone className="h-4 w-4" />
                {cardInfo.whatsapp}
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            ))}
            <div className="absolute inset-0 bg-slate-950/55 dark:bg-[#0a0a18]/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,211,193,0.28),transparent_28%),radial-gradient(circle_at_left,rgba(27,23,76,0.40),transparent_35%)]" />
          </div>

          <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-24">
            <div className="max-w-3xl text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur-md sm:text-xs">
                <ShieldCheck className="h-4 w-4" />
                Professional Dental Care in Kunduz
              </div>

              <h1 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
                {activeSlide.title}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
                {activeSlide.subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#1b174c] shadow-xl transition hover:-translate-y-0.5"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md"
                  >
                    <p className="text-2xl font-black">{item.value}</p>
                    <p className="mt-1 text-sm text-white/75">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full justify-self-end rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-2xl dark:bg-[#17163a]">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
                />
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1b174c]/70 dark:text-[#6fd3c1]/80">
                        Featured Care
                      </p>
                      <h3 className="mt-2 text-lg font-black text-slate-900 dark:text-white sm:text-xl">
                        Amoo Dental Experience
                      </h3>
                    </div>
                    <Smile className="h-10 w-10 text-[#1b174c] dark:text-[#6fd3c1]" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Elegant care, modern methods, and patient-centered treatment
                    designed for healthy and confident smiles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-8 sm:gap-3">
            <button
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/15 sm:h-12 sm:w-12"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/15 sm:h-12 sm:w-12"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#6fd3c1]/20 blur-3xl" />
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(27,23,76,0.10)] dark:border-white/10 dark:bg-[#17163a] dark:shadow-none">
                <img
                  src={differentTeethImage}
                  alt="Amoo Dental Clinic interior"
                  className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[560px]"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                badge="About Amoo"
                title="Modern dentistry rooted in trust, hygiene, and comfort"
                description="Amoo Dental Clinic in Kunduz is led by Dr. Mohammadullah Sharifi and focuses on quality dental treatment, patient comfort, and dependable care using modern techniques."
                darkMode={darkMode}
              />

              <div className="mt-8 rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl shadow-[#1b174c]/10 ring-1 ring-slate-200 dark:bg-[#131233] dark:text-white dark:ring-white/10 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1b174c]/65 dark:text-white/65">
                  Lead Dentist
                </p>
                <h3 className="mt-2 text-2xl font-black">
                  {cardInfo.doctorName}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/80">
                  Dedicated to helping patients improve oral health, restore
                  smile aesthetics, and receive dependable dental solutions in a
                  calm, welcoming setting.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: GraduationCap,
                    title: cardInfo.education,
                    text: cardInfo.educationSource,
                  },
                  {
                    icon: Microscope,
                    title: "Specialization",
                    text: cardInfo.specialization,
                  },
                  {
                    icon: BadgeCheck,
                    title: "Professional Membership",
                    text: cardInfo.membership,
                  },
                  {
                    icon: Building2,
                    title: "Experience",
                    text: cardInfo.experience,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#17163a] dark:shadow-none"
                  >
                    <item.icon className="h-9 w-9 text-[#1b174c] dark:text-[#6fd3c1]" />
                    <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="relative isolate overflow-hidden py-14 sm:py-16"
        >
          <div className="absolute inset-0 bg-white dark:bg-[#090914]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(111,211,193,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(27,23,76,0.10),transparent_26%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(111,211,193,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(27,23,76,0.46),transparent_32%)]" />
          <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-[#6fd3c1]/20 blur-3xl dark:bg-[#6fd3c1]/10" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                badge="Services"
                title="A more curated way to explore the clinic's treatments"
                description="The service wall has been transformed into a guided carousel so patients can focus on one treatment at a time without a long, repetitive scroll."
                darkMode={darkMode}
              />

              <div className="flex items-center gap-2 self-start lg:self-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white/60">
                  <Sparkles className="h-4 w-4 text-[#6fd3c1]" />
                  {activeServiceLabel} / {serviceCountLabel}
                </div>
                <button
                  onClick={goPrevService}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1b174c]/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goNextService}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1b174c]/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  aria-label="Next service"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 xl:grid-cols-[1.18fr_0.82fr]">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#1b174c]/10 bg-[linear-gradient(145deg,#15113c_0%,#1b174c_42%,#0b1027_100%)] p-1 shadow-[0_40px_120px_rgba(27,23,76,0.22)] dark:border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,211,193,0.30),transparent_26%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.14),transparent_20%)]" />

                <div className="relative grid gap-5 overflow-hidden rounded-[calc(2rem-4px)] bg-slate-950/72 p-5 text-white backdrop-blur-xl sm:p-6 lg:grid-cols-[1fr_0.88fr] xl:min-h-[25.5rem]">
                  <div className="relative z-10 flex flex-col">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6fd3c1] backdrop-blur-md">
                      <activeService.icon className="h-4 w-4" />
                      {activeService.eyebrow}
                    </div>

                    <div className="mt-5 flex items-center gap-3 text-white/65">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg shadow-black/15">
                        <activeService.icon className="h-5 w-5 text-[#6fd3c1]" />
                      </span>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                        Signature treatment focus
                      </p>
                    </div>

                    <h3 className="mt-4 max-w-xl text-2xl font-black leading-tight sm:text-[2rem] xl:text-[2.35rem]">
                      {activeService.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/78">
                      {activeService.summary}
                    </p>

                    <div className="mt-5 grid gap-2 sm:grid-cols-3">
                      {activeService.highlights.map((item) => (
                        <div
                          key={item}
                          className="group rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6fd3c1]/80">
                            Detail
                          </p>
                          <p className="mt-1.5 text-sm font-semibold text-white">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3 text-white/55">
                        <div className="h-px w-10 bg-white/15" />
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                          Tailored treatment pathway
                        </p>
                      </div>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#1b174c] shadow-xl transition hover:-translate-y-0.5"
                      >
                        Book this service
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-8 rounded-full bg-[#6fd3c1]/25 blur-3xl" />
                    <div
                      key={activeService.title}
                      className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl"
                    >
                      <img
                        src={activeService.image}
                        alt={activeService.title}
                        className={`h-full min-h-[250px] w-full transition duration-700 lg:min-h-[340px] ${
                          activeService.imageClassName ??
                          "object-cover hover:scale-105"
                        }`}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,24,0.02)_0%,rgba(10,10,24,0.16)_42%,rgba(10,10,24,0.84)_100%)]" />

                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/45 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                        <Star className="h-4 w-4 text-[#6fd3c1]" />
                        Live carousel
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-4 backdrop-blur-xl">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6fd3c1]">
                            Service {activeServiceLabel}
                          </p>
                          <p className="mt-2 text-base font-bold">
                            {activeService.eyebrow}
                          </p>
                          <p className="mt-1.5 text-sm leading-5 text-white/72">
                            Precision-led dental care with modern techniques,
                            cleaner finishes, and a calm patient experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                {upcomingServices.map((service, position) => (
                  <button
                    key={service.title}
                    onClick={() => setServiceIndex(service.index)}
                    className="group text-left"
                    aria-label={`Show ${service.title}`}
                  >
                    <div className="rounded-[1.65rem] border border-slate-200/80 bg-white/80 p-1 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#1b174c]/15 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                      <div className="flex h-full items-start gap-3 rounded-[1.4rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(240,245,255,0.82))] p-4 dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1b174c] text-white shadow-lg shadow-[#1b174c]/20 transition duration-300 group-hover:scale-105 dark:bg-[#6fd3c1] dark:text-[#0e0d26]">
                          <service.icon className="h-5 w-5" />
                          <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#1b174c] ring-2 ring-slate-100 dark:bg-[#0e0d26] dark:text-[#6fd3c1] dark:ring-[#1a1940]">
                            {position + 1}
                          </div>
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-white/45">
                            Up next
                          </p>
                          <h3 className="mt-1.5 text-base font-bold leading-6 text-slate-900 dark:text-white">
                            {service.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-5 text-slate-600 dark:text-slate-300">
                            {service.summary}
                          </p>
                        </div>

                        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-[#1b174c] dark:text-white/45 dark:group-hover:text-[#6fd3c1]" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  onClick={() => setServiceIndex(index)}
                  aria-pressed={index === serviceIndex}
                  className={`min-w-[170px] rounded-[1.2rem] border px-3 py-3 text-left transition duration-300 ${
                    index === serviceIndex
                      ? "border-[#1b174c]/10 bg-[#1b174c] text-white shadow-xl shadow-[#1b174c]/15 dark:border-[#6fd3c1]/20 dark:bg-[#6fd3c1] dark:text-[#0e0d26]"
                      : "border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur-xl hover:-translate-y-0.5 hover:border-[#1b174c]/15 dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${
                        index === serviceIndex
                          ? "bg-white/12 text-white dark:bg-[#0e0d26]/10 dark:text-[#0e0d26]"
                          : "bg-[#1b174c]/6 text-[#1b174c] dark:bg-white/10 dark:text-[#6fd3c1]"
                      }`}
                    >
                      <service.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p
                        className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${
                          index === serviceIndex
                            ? "text-white/70 dark:text-[#0e0d26]/60"
                            : "text-slate-400 dark:text-white/45"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-0.5 text-xs font-semibold">
                        {service.eyebrow}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#131233] dark:text-white dark:shadow-none sm:p-8">
              <SectionHeading
                badge="Contact"
                title="Visit or contact Amoo Dental Clinic"
                description="The clinic card details have been used here so you can later fine-tune the exact map pin or update the email address if needed."
                darkMode={darkMode}
              />

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-[#f8faff] p-5 dark:border-white/10 dark:bg-white/10">
                  <Phone className="mt-0.5 h-5 w-5 text-[#1b174c] dark:text-[#6fd3c1]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-white/70">
                      WhatsApp
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block font-semibold text-slate-900 dark:text-white"
                    >
                      {cardInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-[#f8faff] p-5 dark:border-white/10 dark:bg-white/10">
                  <Phone className="mt-0.5 h-5 w-5 text-[#1b174c] dark:text-[#6fd3c1]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-white/70">
                      Phone
                    </p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      {cardInfo.phone2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-[#f8faff] p-5 dark:border-white/10 dark:bg-white/10">
                  <Mail className="mt-0.5 h-5 w-5 text-[#1b174c] dark:text-[#6fd3c1]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-white/70">
                      Email
                    </p>
                    <a
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block font-semibold text-slate-900 dark:text-white"
                    >
                      {cardInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-[#f8faff] p-5 dark:border-white/10 dark:bg-white/10">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#1b174c] dark:text-[#6fd3c1]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-white/70">
                      Clinic Address
                    </p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      {cardInfo.location}
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-white/75">
                      {cardInfo.mapLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#17163a] dark:shadow-none">
              <div className="border-b border-slate-100 px-5 py-5 dark:border-white/10 sm:px-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  Location Map
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  This map can be updated with the clinic’s exact coordinates
                  once you share the final pin.
                </p>
              </div>
              <iframe
                title="Amoo Dental Clinic Map"
                src="https://www.google.com/maps?q=Kunduz%20Afghanistan&z=13&output=embed"
                className="h-[340px] w-full border-0 sm:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white text-slate-900 dark:border-white/10 dark:bg-[#0a0a18] dark:text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8 lg:py-16">
          <div>
            <Logo light={darkMode} darkMode={darkMode} />
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-600 dark:text-white/70">
              A professional and trustworthy dental clinic website for Amoo in
              Kunduz, with room to expand into appointments, bilingual content,
              and testimonials.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-white/55">
              Navigation
            </h4>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-700 dark:text-white/80">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="transition hover:text-[#1b174c] dark:hover:text-[#6fd3c1]"
                  >
                    {link.name}
                  </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-white/55">
              Contact
            </h4>
            <div className="mt-5 space-y-3 text-sm text-slate-700 dark:text-white/80">
              <p>{cardInfo.doctorName}</p>
              <p className="block">{cardInfo.whatsapp}</p>
              <p className="block">{cardInfo.phone2}</p>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-[#1b174c] dark:hover:text-[#6fd3c1]"
              >
                {cardInfo.email}
              </a>
              <p>{cardInfo.mapLabel}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 px-4 py-5 text-center text-xs text-slate-500 dark:border-white/10 dark:text-white/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Amoo Dental Clinic. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
