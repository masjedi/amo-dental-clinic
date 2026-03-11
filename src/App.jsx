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
  BadgeCheck,
  Building2,
  GraduationCap,
  Microscope,
  Languages,
} from "lucide-react";
import doctorImage from "./assets/images/doctor-image.png";
import { translations } from "./translations";

function Logo({
  compact = false,
  light = false,
  darkMode = false,
  title = "Amoo",
  subtitle = "Dental Clinic",
}) {
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
            className={`truncate text-lg font-extrabold tracking-[0.18em] ${
              title === "Amoo" ? "uppercase" : ""
            }`}
            style={{ color: primary }}
          >
            {title}
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
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
}

function WhatsAppIcon({
  className = "",
  bubbleColor = "currentColor",
  detailColor = bubbleColor,
}) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path
        fill={bubbleColor}
        d="M27.22 4.77A15.72 15.72 0 0 0 16.03.13C7.37.13.33 7.17.33 15.83c0 2.76.72 5.46 2.09 7.84L0 31.87l8.41-2.21a15.66 15.66 0 0 0 7.62 1.95h.01c8.66 0 15.7-7.04 15.7-15.7 0-4.19-1.63-8.13-4.52-11.14Zm-11.19 24.2h-.01a12.98 12.98 0 0 1-6.61-1.81l-.47-.28-4.99 1.31 1.33-4.87-.31-.5a13.01 13.01 0 0 1-1.99-6.99c0-7.17 5.84-13.01 13.02-13.01 3.47 0 6.73 1.35 9.18 3.82a12.93 12.93 0 0 1 3.82 9.19c0 7.17-5.84 13.01-13 13.14h.03Z"
      />
      <path
        fill={detailColor}
        d="M19.11 17.31c-.29-.15-1.71-.84-1.98-.93-.26-.1-.45-.15-.64.15-.19.29-.73.93-.89 1.12-.16.19-.33.22-.62.08-.29-.15-1.2-.44-2.28-1.41-.84-.75-1.41-1.68-1.58-1.97-.16-.29-.02-.45.12-.59.13-.13.29-.33.44-.49.15-.16.19-.27.29-.45.1-.19.05-.35-.02-.5-.08-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.54c-.19 0-.5.07-.76.35-.26.29-1 1-.98 2.44.02 1.45 1.03 2.84 1.17 3.03.15.19 2.03 3.12 5.01 4.25.71.31 1.27.49 1.7.62.71.23 1.35.2 1.85.12.57-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.16-1.37-.08-.12-.26-.19-.55-.34Z"
      />
    </svg>
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
  const wrapClass = center
    ? "mx-auto max-w-3xl text-center"
    : "max-w-2xl text-start";

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
        className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.24em] shadow-sm ${chipClass}`}
      >
        <Sparkles className="h-4 w-4 shrink-0" />
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
  const [language, setLanguage] = useState(() => {
    return window.localStorage.getItem("language") || "en";
  });

  const isRTL = language === "fa" || language === "ps";
  const t = translations[language] || translations.en;

  const slides = t.slides;
  const services = t.services;
  const stats = t.stats;
  const navLinks = t.navLinks;
  const cardInfo = t.cardInfo;

  const whatsappUrl = `https://wa.me/${cardInfo.whatsapp.replace(/\D/g, "")}`;
  const developerWhatsappUrl = "https://wa.me/93730827253";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    cardInfo.email
  )}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 4800);

    return () => clearInterval(timer);
  }, [services.length]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = t.meta.code;
    document.documentElement.dir = t.meta.dir;
    document.body.dir = t.meta.dir;
    window.localStorage.setItem("language", language);
  }, [language, t.meta.code, t.meta.dir]);

  useEffect(() => {
    setMobileOpen(false);
    setCurrentSlide(0);
    setServiceIndex(0);
  }, [language]);

  const activeSlide = useMemo(
    () => slides[currentSlide],
    [slides, currentSlide]
  );
  const activeService = useMemo(
    () => services[serviceIndex],
    [services, serviceIndex]
  );

  const upcomingServices = useMemo(
    () =>
      [1, 2, 3].map((offset) => {
        const index = (serviceIndex + offset) % services.length;
        return {
          ...services[index],
          index,
        };
      }),
    [serviceIndex, services]
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
    <div
      className={`min-h-screen bg-[#f6f8ff] text-slate-800 transition-colors duration-300 dark:bg-[#0e0d26] dark:text-white ${
        isRTL ? "font-[Vazirmatn]" : ""
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={t.ui.whatsappUs}
        title={t.ui.whatsappUs}
        className={`whatsapp-fab fixed bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/35 transition hover:-translate-y-1 hover:scale-105 dark:bg-[#25D366] dark:text-white sm:bottom-6 sm:h-16 sm:w-16 ${
          isRTL ? "left-4 sm:left-6" : "right-4 sm:right-6"
        }`}
      >
        <span className="sr-only">{t.ui.whatsappUs}</span>
        <WhatsAppIcon
          className="h-7 w-7 text-white sm:h-8 sm:w-8"
          detailColor="#ffffff"
        />
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#121133]/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="min-w-0 shrink-0">
            <Logo
              darkMode={darkMode}
              title={t.logo.title}
              subtitle={t.logo.subtitle}
            />
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
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-white/5">
              <button
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  language === "en"
                    ? "bg-[#1b174c] text-white dark:bg-[#6fd3c1] dark:text-[#0e0d26]"
                    : "text-slate-600 dark:text-slate-300"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>

              <button
                onClick={() => setLanguage("fa")}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  language === "fa"
                    ? "bg-[#1b174c] text-white dark:bg-[#6fd3c1] dark:text-[#0e0d26]"
                    : "text-slate-600 dark:text-slate-300"
                }`}
                aria-label="Switch to Dari"
              >
                دری
              </button>

              <button
                onClick={() => setLanguage("ps")}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  language === "ps"
                    ? "bg-[#1b174c] text-white dark:bg-[#6fd3c1] dark:text-[#0e0d26]"
                    : "text-slate-600 dark:text-slate-300"
                }`}
                aria-label="Switch to Pashto"
              >
                پښتو
              </button>
            </div>

            <button
              onClick={() => setDarkMode((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-[#6fd3c1]"
              aria-label={t.ui.toggleTheme}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <div
              className={`inline-flex items-center gap-2 rounded-full border border-[#1b174c]/10 bg-[#1b174c]/5 px-4 py-2 text-sm font-semibold text-[#1b174c] dark:border-[#6fd3c1]/20 dark:bg-[#6fd3c1]/10 dark:text-[#6fd3c1] ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <Phone className="h-4 w-4 shrink-0" />
              {cardInfo.whatsapp}
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode((v) => !v)}
              className="inline-flex rounded-xl border border-slate-200 p-2 text-slate-700 dark:border-white/10 dark:text-[#6fd3c1]"
              aria-label={t.ui.toggleTheme}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() =>
                setLanguage((prev) =>
                  prev === "en" ? "fa" : prev === "fa" ? "ps" : "en"
                )
              }
              className="inline-flex rounded-xl border border-slate-200 p-2 text-slate-700 dark:border-white/10 dark:text-white"
              aria-label={t.ui.language}
            >
              <Languages className="h-5 w-5" />
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex rounded-xl border border-slate-200 p-2 text-slate-700 dark:border-white/10 dark:text-white"
              aria-label={t.ui.toggleMenu}
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
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-start sm:px-6 lg:px-8">
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

              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                    language === "en"
                      ? "bg-[#1b174c] text-white dark:bg-[#6fd3c1] dark:text-[#0e0d26]"
                      : "border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("fa")}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                    language === "fa"
                      ? "bg-[#1b174c] text-white dark:bg-[#6fd3c1] dark:text-[#0e0d26]"
                      : "border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200"
                  }`}
                >
                  دری
                </button>
                <button
                  onClick={() => setLanguage("ps")}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                    language === "ps"
                      ? "bg-[#1b174c] text-white dark:bg-[#6fd3c1] dark:text-[#0e0d26]"
                      : "border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200"
                  }`}
                >
                  پښتو
                </button>
              </div>

              <div
                className={`mt-2 inline-flex items-center gap-2 rounded-xl border border-[#1b174c]/10 bg-[#1b174c]/5 px-3 py-3 text-sm font-semibold text-[#1b174c] dark:border-[#6fd3c1]/20 dark:bg-[#6fd3c1]/10 dark:text-[#6fd3c1] ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <Phone className="h-4 w-4 shrink-0" />
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
            <div className="max-w-3xl text-start text-white">
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.24em] backdrop-blur-md sm:text-xs ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <ShieldCheck className="h-4 w-4 shrink-0" />
                {t.sections.heroBadge}
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
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#1b174c] shadow-xl transition hover:-translate-y-0.5 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  {t.ui.bookConsultation}
                  <ArrowRight
                    className={isRTL ? "h-4 w-4 rotate-180" : "h-4 w-4"}
                  />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  {t.ui.exploreServices}
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
                    <div className="text-start">
                      <p className="text-xs font-semibold tracking-[0.24em] text-[#1b174c]/70 dark:text-[#6fd3c1]/80">
                        {t.ui.featuredCare}
                      </p>
                      <h3 className="mt-2 text-lg font-black text-slate-900 dark:text-white sm:text-xl">
                        {t.ui.dentalExperience}
                      </h3>
                    </div>
                    <Smile className="h-10 w-10 shrink-0 text-[#1b174c] dark:text-[#6fd3c1]" />
                  </div>
                  <p className="mt-4 text-start text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {t.ui.dentalExperienceText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-8 sm:gap-3">
            <button
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/15 sm:h-12 sm:w-12"
              aria-label={t.ui.previousSlide}
            >
              {isRTL ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <ChevronLeft className="h-5 w-5" />
              )}
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
              aria-label={t.ui.nextSlide}
            >
              {isRTL ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div
                className={`absolute -top-6 h-32 w-32 rounded-full bg-[#6fd3c1]/20 blur-3xl ${
                  isRTL ? "-right-6" : "-left-6"
                }`}
              />
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(27,23,76,0.10)] dark:border-white/10 dark:bg-[#17163a] dark:shadow-none">
                <img
                  src={doctorImage}
                  alt={cardInfo.doctorName}
                  className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[560px]"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                badge={t.sections.aboutBadge}
                title={t.sections.aboutTitle}
                description={t.sections.aboutDescription}
                darkMode={darkMode}
              />

              <div className="mt-8 rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl shadow-[#1b174c]/10 ring-1 ring-slate-200 dark:bg-[#131233] dark:text-white dark:ring-white/10 sm:p-8">
                <p className="text-sm font-semibold tracking-[0.24em] text-[#1b174c]/65 dark:text-white/65">
                  {t.ui.leadDentist}
                </p>
                <h3 className="mt-2 text-2xl font-black">
                  {cardInfo.doctorName}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/80">
                  {t.sections.leadDentistText}
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
                    title: t.ui.specialization,
                    text: cardInfo.specialization,
                  },
                  {
                    icon: BadgeCheck,
                    title: t.ui.professionalMembership,
                    text: cardInfo.membership,
                  },
                  {
                    icon: Building2,
                    title: t.ui.experience,
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
                badge={t.sections.servicesBadge}
                title={t.sections.servicesTitle}
                description={t.sections.servicesDescription}
                darkMode={darkMode}
              />

              <div className="flex items-center gap-2 self-start lg:self-auto">
                <div
                  className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold tracking-[0.24em] text-slate-500 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white/60 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <Sparkles className="h-4 w-4 text-[#6fd3c1]" />
                  {activeServiceLabel} / {serviceCountLabel}
                </div>

                <button
                  onClick={goPrevService}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1b174c]/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  aria-label={t.ui.previousService}
                >
                  {isRTL ? (
                    <ChevronRight className="h-5 w-5" />
                  ) : (
                    <ChevronLeft className="h-5 w-5" />
                  )}
                </button>

                <button
                  onClick={goNextService}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1b174c]/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  aria-label={t.ui.nextService}
                >
                  {isRTL ? (
                    <ChevronLeft className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 xl:grid-cols-[1.18fr_0.82fr]">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#1b174c]/10 bg-[linear-gradient(145deg,#15113c_0%,#1b174c_42%,#0b1027_100%)] p-1 shadow-[0_40px_120px_rgba(27,23,76,0.22)] dark:border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,211,193,0.30),transparent_26%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.14),transparent_20%)]" />

                <div className="relative grid gap-5 overflow-hidden rounded-[calc(2rem-4px)] bg-slate-950/72 p-5 text-white backdrop-blur-xl sm:p-6 lg:grid-cols-[1fr_0.88fr] xl:min-h-[25.5rem]">
                  <div className="relative z-10 flex flex-col text-start">
                    <div
                      className={`inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.24em] text-[#6fd3c1] backdrop-blur-md ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <activeService.icon className="h-4 w-4 shrink-0" />
                      {activeService.eyebrow}
                    </div>

                    <div
                      className={`mt-5 flex items-center gap-3 text-white/65 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg shadow-black/15">
                        <activeService.icon className="h-5 w-5 text-[#6fd3c1]" />
                      </span>
                      <p className="text-[11px] font-semibold tracking-[0.24em]">
                        {t.ui.signatureTreatment}
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
                          className="group rounded-3xl border border-white/10 bg-white/5 p-3 text-start backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                        >
                          <p className="text-[11px] font-semibold tracking-[0.24em] text-[#6fd3c1]/80">
                            {t.ui.detail}
                          </p>
                          <p className="mt-1.5 text-sm font-semibold text-white">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <div
                        className={`flex items-center gap-3 text-white/55 ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div className="h-px w-10 bg-white/15" />
                        <p className="text-[11px] font-semibold tracking-[0.24em]">
                          {t.ui.tailoredPathway}
                        </p>
                      </div>

                      <a
                        href="#contact"
                        className={`inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#1b174c] shadow-xl transition hover:-translate-y-0.5 ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        {t.ui.bookThisService}
                        <ArrowRight
                          className={isRTL ? "h-4 w-4 rotate-180" : "h-4 w-4"}
                        />
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

                      <div
                        className={`absolute top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/45 px-3 py-1.5 text-[11px] font-semibold tracking-[0.24em] text-white backdrop-blur-md ${
                          isRTL ? "right-4 flex-row-reverse" : "left-4"
                        }`}
                      >
                        <Star className="h-4 w-4 text-[#6fd3c1]" />
                        {t.ui.liveCarousel}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-4 text-start backdrop-blur-xl">
                          <p className="text-[11px] font-semibold tracking-[0.24em] text-[#6fd3c1]">
                            {t.ui.serviceNumber} {activeServiceLabel}
                          </p>
                          <p className="mt-2 text-base font-bold">
                            {activeService.eyebrow}
                          </p>
                          <p className="mt-1.5 text-sm leading-5 text-white/72">
                            {t.sections.activeServiceCardText}
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
                    className="group text-start"
                    aria-label={`Show ${service.title}`}
                  >
                    <div className="rounded-[1.65rem] border border-slate-200/80 bg-white/80 p-1 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#1b174c]/15 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                      <div
                        className={`flex h-full items-start gap-3 rounded-[1.4rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(240,245,255,0.82))] p-4 dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1b174c] text-white shadow-lg shadow-[#1b174c]/20 transition duration-300 group-hover:scale-105 dark:bg-[#6fd3c1] dark:text-[#0e0d26]">
                          <service.icon className="h-5 w-5" />
                          <div
                            className={`absolute -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#1b174c] ring-2 ring-slate-100 dark:bg-[#0e0d26] dark:text-[#6fd3c1] dark:ring-[#1a1940] ${
                              isRTL ? "-left-1" : "-right-1"
                            }`}
                          >
                            {position + 1}
                          </div>
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] font-semibold tracking-[0.24em] text-slate-400 dark:text-white/45">
                            {t.ui.upNext}
                          </p>
                          <h3 className="mt-1.5 text-base font-bold leading-6 text-slate-900 dark:text-white">
                            {service.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-5 text-slate-600 dark:text-slate-300">
                            {service.summary}
                          </p>
                        </div>

                        {isRTL ? (
                          <ArrowRight className="mt-1 h-5 w-5 shrink-0 rotate-180 text-slate-400 transition duration-300 group-hover:-translate-x-1 group-hover:text-[#1b174c] dark:text-white/45 dark:group-hover:text-[#6fd3c1]" />
                        ) : (
                          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-[#1b174c] dark:text-white/45 dark:group-hover:text-[#6fd3c1]" />
                        )}
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
                  className={`min-w-[170px] rounded-[1.2rem] border px-3 py-3 text-start transition duration-300 ${
                    index === serviceIndex
                      ? "border-[#1b174c]/10 bg-[#1b174c] text-white shadow-xl shadow-[#1b174c]/15 dark:border-[#6fd3c1]/20 dark:bg-[#6fd3c1] dark:text-[#0e0d26]"
                      : "border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur-xl hover:-translate-y-0.5 hover:border-[#1b174c]/15 dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
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
                        className={`text-[10px] font-semibold tracking-[0.24em] ${
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
                badge={t.sections.contactBadge}
                title={t.sections.contactTitle}
                description={t.sections.contactDescription}
                darkMode={darkMode}
              />

              <div className="mt-8 space-y-4">
                <div
                  className={`flex items-start gap-4 rounded-3xl border border-slate-200 bg-[#f8faff] p-5 dark:border-white/10 dark:bg-white/10 ${
                    isRTL ? "flex-row-reverse text-start" : ""
                  }`}
                >
                  <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#1b174c] dark:text-[#6fd3c1]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-white/70">
                      {t.ui.whatsapp}
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

                <div
                  className={`flex items-start gap-4 rounded-3xl border border-slate-200 bg-[#f8faff] p-5 dark:border-white/10 dark:bg-white/10 ${
                    isRTL ? "flex-row-reverse text-start" : ""
                  }`}
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#1b174c] dark:text-[#6fd3c1]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-white/70">
                      {t.ui.phone}
                    </p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      {cardInfo.phone2}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-4 rounded-3xl border border-slate-200 bg-[#f8faff] p-5 dark:border-white/10 dark:bg-white/10 ${
                    isRTL ? "flex-row-reverse text-start" : ""
                  }`}
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#1b174c] dark:text-[#6fd3c1]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-white/70">
                      {t.ui.email}
                    </p>
                    <a
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block break-all font-semibold text-slate-900 dark:text-white"
                    >
                      {cardInfo.email}
                    </a>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-4 rounded-3xl border border-slate-200 bg-[#f8faff] p-5 dark:border-white/10 dark:bg-white/10 ${
                    isRTL ? "flex-row-reverse text-start" : ""
                  }`}
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1b174c] dark:text-[#6fd3c1]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-white/70">
                      {t.ui.clinicAddress}
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
                <h3 className="text-start text-xl font-black text-slate-900 dark:text-white">
                  {t.ui.locationMap}
                </h3>
                <p className="mt-2 text-start text-sm text-slate-600 dark:text-slate-300">
                  {t.ui.mapNote}
                </p>
              </div>
              <iframe
                title={t.ui.locationMap}
                src="https://maps.google.com/maps?q=36.7283707,68.8664703&z=17&output=embed"
                className="h-[340px] w-full rounded-b-[2rem] sm:h-[460px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white text-slate-900 dark:border-white/10 dark:bg-[#0a0a18] dark:text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8 lg:py-16">
          <div className="text-start">
            <Logo
              light={darkMode}
              darkMode={darkMode}
              title={t.logo.title}
              subtitle={t.logo.subtitle}
            />
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-600 dark:text-white/70">
              {t.sections.footerText}
            </p>
          </div>

          <div className="text-start">
            <h4 className="text-sm font-bold tracking-[0.24em] text-slate-500 dark:text-white/55">
              {t.ui.navigation}
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

          <div className="text-start">
            <h4 className="text-sm font-bold tracking-[0.24em] text-slate-500 dark:text-white/55">
              {t.ui.contact}
            </h4>
            <div className="mt-5 space-y-3 text-sm text-slate-700 dark:text-white/80">
              <p>{cardInfo.doctorName}</p>
              <p className="block">{cardInfo.whatsapp}</p>
              <p className="block">{cardInfo.phone2}</p>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="block break-all transition hover:text-[#1b174c] dark:hover:text-[#6fd3c1]"
              >
                {cardInfo.email}
              </a>
              <p>{cardInfo.mapLabel}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/10">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 text-xs text-slate-500 dark:text-white/50 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:px-6 lg:px-8">
            <div className="hidden sm:block" aria-hidden="true" />
            <p className="text-center">
              © {new Date().getFullYear()} {cardInfo.clinicName}.{" "}
              {t.ui.allRightsReserved}
            </p>
            <a
              href={developerWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-center text-xs font-semibold text-[#1b174c] transition hover:text-[#0f0c33] dark:text-[#6fd3c1] dark:hover:text-white sm:justify-self-end sm:text-right"
            >
              {t.ui.contactDeveloper}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
