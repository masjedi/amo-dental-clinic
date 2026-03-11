import {
  HeartPulse,
  ShieldPlus,
  Smile,
  Wrench,
  Stethoscope,
  Baby,
  Wand2,
  Droplets,
  ScanLine,
  Gem,
  Palette,
  BadgeCheck,
  ShieldCheck,
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

export const translations = {
  en: {
    meta: {
      code: "en",
      dir: "ltr",
      label: "English",
      shortLabel: "EN",
    },

    navLinks: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],

    ui: {
      whatsappUs: "WhatsApp Us",
      toggleTheme: "Toggle theme",
      toggleMenu: "Toggle menu",
      previousSlide: "Previous slide",
      nextSlide: "Next slide",
      previousService: "Previous service",
      nextService: "Next service",
      bookConsultation: "Book a Consultation",
      exploreServices: "Explore Services",
      featuredCare: "Featured Care",
      dentalExperience: "Amoo Dental Experience",
      dentalExperienceText:
        "Elegant care, modern methods, and patient-centered treatment designed for healthy and confident smiles.",
      liveCarousel: "Live carousel",
      serviceNumber: "Service",
      detail: "Detail",
      signatureTreatment: "Signature treatment focus",
      tailoredPathway: "Tailored treatment pathway",
      bookThisService: "Book this service",
      upNext: "Up next",
      navigation: "Navigation",
      contact: "Contact",
      contactDeveloper: "Contact Developer",
      locationMap: "Location Map",
      mapNote:
        "This map can be updated with the clinic’s exact coordinates once you share the final pin.",
      allRightsReserved: "All rights reserved.",
      language: "Language",
      clinicAddress: "Clinic Address",
      phone: "Phone",
      email: "Email",
      whatsapp: "WhatsApp",
      leadDentist: "Lead Dentist",
      specialization: "Specialization",
      professionalMembership: "Professional Membership",
      experience: "Experience",
    },

    logo: {
      title: "Amoo",
      subtitle: "Dental Clinic",
    },

    slides: [
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
    ],

    services: [
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
        highlights: [
          "Cosmetic accenting",
          "Clean application",
          "Refined finish",
        ],
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
    ],

    stats: [
      { value: "13+", label: "Specialized services" },
      { value: "2", label: "Clinic phone numbers" },
      { value: "Family", label: "Friendly care" },
    ],

    cardInfo: {
      clinicName: "Amoo Dental Clinic",
      doctorName: "Dr. Mohammadullah Sharifi",
      doctorAltName: "Sharifi Aqtash",
      whatsapp: "+93 744547411",
      phone2: "+93 730627740",
      email: "mohammadullahsharifi68@gmail.com",
      location:
        "Sherkat Street, opposite to 5 Start-Hotel, Above Eadi Zada Pharmacy",
      mapLabel: "Kunduz, Afghanistan",
      education: "MD in Stomatology",
      educationSource: "Kunduz University graduate",
      specialization:
        "Treatment of oral diseases, dental care, and oral & maxillofacial surgery",
      membership: "Member of the Afghanistan Stomatology Association",
      experience:
        "Professional background includes service at the National Curative and Specialized Stomatology Hospital in Kabul.",
    },

    sections: {
      heroBadge: "Professional Dental Care in Kunduz",

      aboutBadge: "About Amoo",
      aboutTitle: "Modern dentistry rooted in trust, hygiene, and comfort",
      aboutDescription:
        "Amoo Dental Clinic in Kunduz is led by Dr. Mohammadullah Sharifi and focuses on quality dental treatment, patient comfort, and dependable care using modern techniques.",
      leadDentistText:
        "Dedicated to helping patients improve oral health, restore smile aesthetics, and receive dependable dental solutions in a calm, welcoming setting.",

      servicesBadge: "Services",
      servicesTitle: "A more curated way to explore the clinic's treatments",
      servicesDescription:
        "The service wall has been transformed into a guided carousel so patients can focus on one treatment at a time without a long, repetitive scroll.",
      activeServiceCardText:
        "Precision-led dental care with modern techniques, cleaner finishes, and a calm patient experience.",

      contactBadge: "Contact",
      contactTitle: "Visit or contact Amoo Dental Clinic",
      contactDescription:
        "The clinic card details have been used here so you can later fine-tune the exact map pin or update the email address if needed.",

      footerText:
        "A professional and trustworthy dental clinic website for Amoo in Kunduz, with room to expand into appointments, bilingual content, and testimonials.",
    },
  },

  fa: {
    meta: {
      code: "fa",
      dir: "rtl",
      label: "دری",
      shortLabel: "دری",
    },

    navLinks: [
      { name: "صفحه اصلي", href: "#home" },
      { name: "درباره ما", href: "#about" },
      { name: "خدمات", href: "#services" },
      { name: "تماس", href: "#contact" },
    ],

    ui: {
      whatsappUs: "واتساپ ما",
      toggleTheme: "تغییر حالت روشن و تیره",
      toggleMenu: "باز و بسته کردن منو",
      previousSlide: "سلاید قبلی",
      nextSlide: "سلاید بعدی",
      previousService: "خدمت قبلی",
      nextService: "خدمت بعدی",
      bookConsultation: "وقت مشاوره",
      exploreServices: "مشاهده خدمات",
      featuredCare: "خدمات ویژه",
      dentalExperience: "تجربه کلینیک دندان آمو",
      dentalExperienceText:
        "مراقبت حرفه‌ای، روش‌های مدرن و تداوي مریض محور برای لبخند سالم و با اعتمادبه‌نفس.",
      liveCarousel: "نمایش زنده",
      serviceNumber: "خدمت",
      detail: "جزئیات",
      signatureTreatment: "تمرکز ویژه تداوي",
      tailoredPathway: "مسیر تداوي متناسب",
      bookThisService: "وقت این خدمت",
      upNext: "بعدی",
      navigation: "منو",
      contact: "تماس",
      contactDeveloper: "با طراح این ویبسایت به تماس شوید",
      locationMap: "نقشه موقعیت",
      mapNote: "ادرس دقیق کلینیک دندان آمو را درین نقشه دنبال کنید",
      allRightsReserved: "تمام حقوق محفوظ است.",
      language: "زبان",
      clinicAddress: "آدرس کلینیک",
      phone: "شماره تماس",
      email: "ایمیل",
      whatsapp: "واتساپ",
      leadDentist: "داکتر مسئول",
      specialization: "تخصص",
      professionalMembership: "عضویت حرفه‌ای",
      experience: "تجربه",
    },

    logo: {
      title: "امو",
      subtitle: "کلینیک دندان",
    },

    slides: [
      {
        image: labImage,
        title: "مراقبت حرفه‌ای دندان با راحتی و دقت",
        subtitle:
          "کلینیک دندان امو در کندز خدمات مدرن ترمیم، زیبایی و خانوادگی تداوي دندان را در محیط پاک و مسلکي ارائه میکند.",
      },
      {
        image: chairImage,
        title: "مراقبت مدرن از لبخند برای اطفال و بزرگسالان",
        subtitle:
          "تحت نظر داکتر محمدالله شریفی، کلینیک بر درمان قابل اعتماد، نتایج زیبایی و مراقبت دوستانه برای مریض تمرکز دارد.",
      },
      {
        image: upperJawImage,
        title: "از تداوی دهان تا تداوي دندان و زیبايي پیشرفته",
        subtitle:
          "مواد باکیفیت، روشهای پیشرفته و مراقبت متعهدانه برای لبخندهای سالم و بااعتمادبه‌ نفس در کندز، افغانستان.",
      },
    ],

    services: [
      {
        title: "تداوی امراض جوف دهن و لثه",
        icon: HeartPulse,
        eyebrow: "مراقبت لثه",
        summary:
          "تشخیص منظم و تداوي متمرکز بر لثه برای کاهش ناراحتی، کنترل عفونت و حمایت از ثبات درازمدت سلامت دهان.",
        highlights: ["ارزیابی سلامت لثه", "کنترل التهاب", "پیگیری پیشگیرانه"],
        image: chairImage,
      },
      {
        title: "پر کردن دندان با مواد پیشرفته و معیاری",
        icon: ShieldPlus,
        eyebrow: "ترمیم دندان",
        summary:
          "ترمیم‌های همرنگ دندان برای حفظ ساختار، دور کردن پوسیدگی و بازگرداندن ظاهر طبیعی با مواد مدرن و بادوام انجام می‌شود.",
        highlights: [
          "آماده‌سازی محافظه‌کارانه",
          "رنگ هماهنگ",
          "چسبندگی بادوام",
        ],
        image: labImage,
      },
      {
        title: "دندان مصنوعی ثابت و متحرک",
        icon: Smile,
        eyebrow: "بازسازی لبخند",
        summary:
          "راهکارهای راحت دندان مصنوعی ثابت و متحرک به بازگرداندن تعادل بایت، حمایت از فرم صورت و اعتمادبه‌نفس روزانه کمک می‌کند.",
        highlights: ["بازسازی بایت", "طراحی متناسب", "نمای طبیعی لبخند"],
        image: alignmentCareImage,
      },
      {
        title: "کشیدن دندان، شامل دندان عقل نهفته",
        icon: Wrench,
        eyebrow: "جراحی دهان",
        summary:
          "پروتکل‌های دقیق کشیدن دندان با تمرکز بر مصونیت، راحتی و ترمیم پاک برای موارد عادی و پیچیده انجام می‌شود.",
        highlights: ["بررسی دقیق کیس", "راحتی مریض", "راهنمایی بعد از درمان"],
        image: upperJawImage,
      },
      {
        title: "تداوی ریشه دندان (RCT)",
        icon: Stethoscope,
        eyebrow: "دقت اندودانتیک",
        summary:
          "تداوی ریشه با دقت انجام می‌شود تا درد کاهش یابد، عفونت برطرف شود و در صورت امکان دندان طبیعی حفظ گردد.",
        highlights: ["برنامه کاهش درد", "مدیریت عفونت", "حفظ دندان"],
        image: endpointPrecisionImage,
      },
      {
        title: "تداوي دندان اطفال",
        icon: Baby,
        eyebrow: "تداوي دندان اطفال",
        summary:
          "مراقبت آرام و اطمینان‌ بخش برای اطفال با تأکید بر راحتی، پیشگیری زودهنگام و ایجاد عادت‌ های سالم از ابتدا.",
        highlights: ["مراقبت دوستانه", "پیشگیری زودرس", "راهنمایی والدین"],
        image: childrenDentistryImage,
      },
      {
        title: "سفید کردن دندان با روش بلیچینگ",
        icon: Wand2,
        eyebrow: "روشن‌سازی لبخند",
        summary:
          "درمان‌های حرفه‌ای بلیچینگ برای روشنتر شدن یکنواخت لبخند، با روند کنترول‌ شده و مناسب برای مریض انجام می‌شود.",
        highlights: ["بهبود رنگ", "جلسات کنترل‌ شده", "زیبایی لبخند"],
        image: differentTeethImage,
      },
      {
        title: "جرم‌گیری و پاک‌ کاری دندان با اولتراسونیک",
        icon: Droplets,
        eyebrow: "پاک‌ کاری عمیق",
        summary:
          "جرم‌گیری و پاک‌ کاری با اولتراسونیک تجمعات را مؤثرانه برطرف می‌کند، لبخند را تازه میسازد و سلامت لثه را تقویت میکند.",
        highlights: ["حذف جرم", "صیقل سطح", "احساس تازگی"],
        image: deepCleaningImage,
      },
      {
        title: "ارتودنسی برای دندان‌های نامنظم",
        icon: ScanLine,
        eyebrow: "اصلاح نظم دندان",
        summary:
          "برنامه‌ریزی ارتودنسی به بهبود موقعیت دندان، هماهنگی بایت و تقارن لبخند با مسیر درمانی منظم کمک می‌کند.",
        highlights: ["ارزیابی بایت", "استراتژی تنظیم", "پیگیری پیشرفت"],
        image: orthodancyImage,
      },
      {
        title: "نگین دندان برای زیبایی لبخند",
        icon: Gem,
        eyebrow: "جزئیات لبخند",
        summary:
          "برای بیمارانی که به دنبال جزئیات زیبایی هستند، نگین دندان جلوه‌ای ظریف و آراسته به لبخند می‌بخشد.",
        highlights: ["زیبایی ظریف", "کارگذاری پاک", "پرداخت نهایی شیک"],
        image: smileDetailingImage,
      },
      {
        title: "ونیر سرامیکی",
        icon: Palette,
        eyebrow: "زیبایی سرامیکی",
        summary:
          "ونیرهای سرامیکی برای بهبود رنگ، تناسب و هماهنگی لبخند جلویی با نمایی لوکس طراحی می‌شوند.",
        highlights: ["نمای باکیفیت", "تناسب لبخند", "اصلاح زیبایی"],
        image: ceramicAestheticImage,
        imageClassName:
          "object-contain bg-[linear-gradient(180deg,#f7efe8,#efe7df)] p-6 sm:p-8 drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:scale-[1.01]",
      },
      {
        title: "ونیر کامپوزیتی",
        icon: BadgeCheck,
        eyebrow: "ونیر محافظه‌ کارانه",
        summary:
          "ونیر کامپوزیتی یک راهکار زیبایی انعطاف‌پذیر برای فرم‌دهی و تازه‌ سازی لبخند با رویکرد محافظه‌کارانه‌ تر است.",
        highlights: ["فرم‌دهی محافظه‌کارانه", "بهبود فوری", "بافت طبیعی"],
        image: conservativeVeneerImage,
      },
      {
        title: "کراؤن و کاور دندان",
        icon: ShieldCheck,
        eyebrow: "کراؤن و کاور",
        summary:
          "کراؤنها و کاورها استحکام را برمیگردانند، ظاهر را بهتر میسازند و به دندان های آسیب‌ دیده کمک میکنند دوباره با اطمینان عمل کنند.",
        highlights: ["بازگرداندن استحکام", "پوشش محافظ", "حمایت درازمدت"],
        image: grindersImage,
      },
    ],

    stats: [
      { value: "13+", label: "خدمات تخصصی" },
      { value: "2", label: "شماره تماس کلینیک" },
      { value: "خانوادگی", label: "مراقبت دوستانه" },
    ],

    cardInfo: {
      clinicName: "کلینیک دندان امو",
      doctorName: "داکتر محمدالله شریفی ",
      doctorAltName: "شریفی ",
      whatsapp: "+93 744547411",
      phone2: "+93 730627740",
      email: "mohammadullahsharifi68@gmail.com",
      location: "سرک شرکت، مقابل هوتل ۵ ستاره، بالای دواخانه عیدی‌ زاده",
      mapLabel: "بندر کابل کوچه غرض بیگي شهر کندز، افغانستان",
      education: "دکتر طب ستوماتولوژی",
      educationSource:
        "فارغ پوهنتون کندز، کار کرده شده در شفاخانه دولتي میوند کابل",
      specialization: "تداوی امراض دهن، مراقبت دندان و جراحی دهان و فک و صورت",
      membership: "عضو انجمن ستوماتولوژی افغانستان",
      experience:
        "سابقه کاری شامل خدمت در شفاخانه ملی معالجوی و تخصصی ستوماتولوژی کابل می‌ باشد.",
    },

    sections: {
      heroBadge: "مراقبت حرفه‌ای دندان در کندز",

      aboutBadge: "درباره امو",
      aboutTitle: "تداوي مدرن دندان بر اساس اعتماد، صحت و راحتی",
      aboutDescription:
        "کلینیک دندان آمو در کندز تحت مدیریت داکتر محمدالله شریفی فعالیت میکند، و بر تداوي باکیفیت، راحتی مریض، و مراقبت قابل اعتماد با استفاده از روش‌ های مدرن تمرکز دارد.",
      leadDentistText:
        "متعهد به کمک به مریضان برای بهبود سلامت دهان، بازگرداندن زیبایی لبخند و دریافت راهکارهای قابل اعتماد تداوي دندان در محیطی آرام و خوشایند.",

      servicesBadge: "خدمات",
      servicesTitle: "روش حرفه‌ ای‌ تر برای مشاهده خدمات کلینیک",
      servicesDescription:
        "بخش خدمات به یک کاروسل هدایت‌ شده تبدیل شده تا مریضان بتوانند هر بار روی یک خدمت تمرکز کنند، بدون اسکرول طولانی و تکراری.",
      activeServiceCardText:
        "مراقبت دندان‌ پزشکی مبتنی بر دقت با تکنیک‌ های مدرن، نتیجه پاک‌تر و تجربه‌ای آرام برای بیمار.",

      contactBadge: "تماس",
      contactTitle: "به کلینیک دندان آمو مراجعه کنید یا تماس بگیرید",
      contactDescription:
        "جزئیات کارت کلینیک در این بخش استفاده شده تا بعداً بتوانید موقعیت دقیق نقشه یا آدرس ایمیل را در صورت نیاز به‌روزرسانی کنید.",

      footerText:
        "یک وبسایت حرفه‌ ای و قابل اعتماد برای کلینیک دندان آمو در کندز، با ظرفیت توسعه به نوبت‌ دهی، محتوای سه زبان و نظرات مریضان.",
    },
  },

  ps: {
    meta: {
      code: "ps",
      dir: "rtl",
      label: "پښتو",
      shortLabel: "پښتو",
    },

    navLinks: [
      { name: "کور پاڼه", href: "#home" },
      { name: "زموږ په اړه", href: "#about" },
      { name: "خد متو نه", href: "#services" },
      { name: " اړیکه  ", href: "#contact" },
    ],

    ui: {
      whatsappUs: "په واټساپ اړیکه",
      toggleTheme: "د رڼا او تیاره حالت بدلول",
      toggleMenu: "مینو پرانیستل او تړل",
      previousSlide: "مخکینی سلا یډ",
      nextSlide: "راتلو نکي سلا یډ",
      previousService: "مخکینی خدمت",
      nextService: "راتلونکی خدمت",
      bookConsultation: "د مشوري وخت وټاکي",
      exploreServices: "خد متو نه وګورئ",
      featuredCare: "ځانګړې پاملرنه",
      dentalExperience: "د امو د غاښونو کلینیک تجربه",
      dentalExperienceText:
        "مسلکي پاملرنه، عصري لارې او د ناروغ پر بنسټ درملنه. د سالم او ډاډمني موسکا لپاره.",
      liveCarousel: "ژوندۍ ننداره",
      serviceNumber: "خدمت",
      detail: "جزئیات",
      signatureTreatment: "د ځانګړي درملنې تمرکز",
      tailoredPathway: "ستاسو لپاره یوه د درملني مناسبه لاره",
      bookThisService: "د مشوري وخت وټاکي",
      upNext: "راتلونکی",
      navigation: "لارښوونه",
      contact: "اړیکه",
      contactDeveloper: "له جوړوونکي سره اړیکه",
      locationMap: "د پتي څکښت یا نقشه",
      mapNote: "د دي نقشي له لاري د آمو کلینیک دقیقه پته تر لاسه کړي.",
      allRightsReserved: "ټول حقونه خوندي دي.",
      language: "ژبه",
      clinicAddress: "د کلینیک پته",
      phone: "تلیفون",
      email: "برېښنالیک",
      whatsapp: "واټساپ",
      leadDentist: "مسؤول د غاښونو ډاکټر",
      specialization: "تخصص",
      professionalMembership: "مسلکي غړیتوب",
      experience: "تجربه",
    },

    logo: {
      title: "آمو",
      subtitle: "د غاښونو کلینیک",
    },

    slides: [
      {
        image: labImage,
        title: "د ارامۍ او دقت سره مسلکي د غاښونو پاملرنه",
        subtitle:
          "د کندز آمو د غاښونو کلینیک په پاک او هوسا چاپېریال کې عصري ترمیمي، ښکلايي او کورنۍ د غاښونو خدمات وړاندې کوي.",
      },
      {
        image: chairImage,
        title: "د ماشومانو او لویانو لپاره د موسکا عصري پاملرنه",
        subtitle:
          "د ډاکټر محمدالله شریفي تر مشرۍ لاندې، آمو کلینیک پر باوري درملنې، ښکلايي پایلو او د ناروغ په ښي پاملرنې تمرکز کوي.",
      },
      {
        image: upperJawImage,
        title: "د خولې له درملنې تر پرمختللې د غاښونو ښکلايي درملنې پورې",
        subtitle:
          "کیفیت لرونکي مواد، پرمختللې طریقې او ژمنه لرونکې پاملرنه په کندز، افغانستان کې د سالمې او باوري موسکا لپاره.",
      },
    ],

    services: [
      {
        title: "د خولې د جوف او لثې د ناروغیو درملنه",
        icon: HeartPulse,
        eyebrow: "د لثې پاملرنه",
        summary:
          "منظم تشخیص او د لثې پر بنسټ درملنه چې د ناراحتۍ کمولو، د عفونت کنټرول او د خولې د اوږدمهال ثبات لپاره طرحه شوې ده.",
        highlights: ["د لثې ارزونه", "د التهاب کنټرول", "وقایوي تعقیب"],
        image: chairImage,
      },
      {
        title: "د پرمختللو معیاري موادو په وسیله د غاښونو ډکول",
        icon: ShieldPlus,
        eyebrow: "ترمیمي ډکول",
        summary:
          "د غاښ په رنګ ترمیمونه د جوړښت د ساتلو، د خرابۍ د بندولو او د طبیعي بڼې د بېرته راګرځولو لپاره ترسره کېږي.",
        highlights: ["کم مداخله", "له رنګ سره برابر", "دوامدار نښلون"],
        image: labImage,
      },
      {
        title: "ثابت او متحرک مصنوعي غاښونه",
        icon: Smile,
        eyebrow: "د موسکا بیا رغونه",
        summary:
          "هوسا ثابت او متحرک مصنوعي غاښونه د چیچلو تعادل، د مخ ملاتړ او ورځني باور په بیا رغونه کې مرسته کوي.",
        highlights: ["د چیچلو بیا تنظیم", "شخصي فټ", "طبیعي موسکا"],
        image: alignmentCareImage,
      },
      {
        title: "د غاښ ایستل، د عقل بند غاښونو په شمول",
        icon: Wrench,
        eyebrow: "د خولې جراحي",
        summary:
          "د غاښ ایستلو دقیق اصول پر خوندیتوب، آرامۍ او پاکې رغېدنې تمرکز لري، که عادي غاښ وي او که پېچلی د عقل غاښ.",
        highlights: [
          "د قضیې دقیقه ارزونه",
          "د آرامۍ لومړیتوب",
          "د رغېدو لارښوونه",
        ],
        image: upperJawImage,
      },
      {
        title: "د غاښ ریښې درملنه (RCT)",
        icon: Stethoscope,
        eyebrow: "د ریښې دقیق درملنه",
        summary:
          "د ریښې درملنه په دقت سره ترسره کېږي څو درد کم کړي، عفونت له منځه یوسي او د امکان تر حده طبیعي غاښ وساتي.",
        highlights: ["د درد کمول", "د عفونت اداره", "د غاښ ساتنه"],
        image: endpointPrecisionImage,
      },
      {
        title: "د ماشومانو د غاښونو درملنه",
        icon: Baby,
        eyebrow: "د ماشومانو غاښونه",
        summary:
          "د ماشومانو لپاره نرمه او ډاډ بخښونکې پاملرنه چې پر آرامۍ، ژر وقایې او سالمو عادتونو تمرکز لري.",
        highlights: ["دوستانه پاملرنه", "وختي وقایه", "د والدینو لارښوونه"],
        image: childrenDentistryImage,
      },
      {
        title: "د بلیچینګ په وسیله د غاښونو سپینول",
        icon: Wand2,
        eyebrow: "د موسکا روښانتیا",
        summary:
          "مسلکي بلیچینګ درملنې داسې تنظیمېږي چې موسکا په متوازن ډول روښانه کړي او بهیر کنټرول شوی وساتي.",
        highlights: ["د رنګ ښه کېدل", "کنټرول شوې ناستې", "د موسکا ښه والی"],
        image: differentTeethImage,
      },
      {
        title: "د الټراسونیک په وسیله جرم لیرې کول او پاکول",
        icon: Droplets,
        eyebrow: "ژوره پاکونه",
        summary:
          "الټراسونیک جرم لیرې کول او پاکول زېرمې په مؤثر ډول لرې کوي، موسکا تازه کوي او د لثې او خولې روغتیا پیاوړې کوي.",
        highlights: ["د جرم لرې کول", "سطحي پالش", "تازه احساس"],
        image: deepCleaningImage,
      },
      {
        title: "د کږو غاښونو لپاره ارتودنسي",
        icon: ScanLine,
        eyebrow: "د غاښونو تنظیم",
        summary:
          "د ارتودنسي پلان جوړونه د غاښونو موقعیت، د چیچلو همغږي او د موسکا توازن ښه کوي.",
        highlights: ["د چیچلو ارزونه", "د تنظیم تګلاره", "د پرمختګ څارنه"],
        image: orthodancyImage,
      },
      {
        title: "د موسکا د ښکلا لپاره د غاښ نگین",
        icon: Gem,
        eyebrow: "د موسکا ښکلا",
        summary:
          "د هغو ناروغانو لپاره چې ښکلايي ټچ غواړي، د غاښ نگین یو نرم او ښکلی ظاهري بدلون رامنځته کوي.",
        highlights: ["ښکلايي ټچ", "پاک تطبیق", "ښکلی پای"],
        image: smileDetailingImage,
      },
      {
        title: "سرامیک وینیر",
        icon: Palette,
        eyebrow: "سرامیک ښکلا",
        summary:
          "سرامیک وینیر د رنګ، تناسب او د مخکینۍ موسکا د همغږۍ د ښه کولو لپاره په لوړه کچه طرحه کېږي.",
        highlights: ["لوړه پایله", "د موسکا تناسب", "ښکلايي اصلاح"],
        image: ceramicAestheticImage,
        imageClassName:
          "object-contain bg-[linear-gradient(180deg,#f7efe8,#efe7df)] p-6 sm:p-8 drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:scale-[1.01]",
      },
      {
        title: "کامپوزیټ وینیر",
        icon: BadgeCheck,
        eyebrow: "محافظه کار وینیر",
        summary:
          "کامپوزیټ وینیر د موسکا د بڼې او تازګۍ لپاره یو انعطاف منونکی ښکلايي انتخاب دی.",
        highlights: ["محافظه کاره بڼه", "فوري ښه والی", "طبیعي جوړښت"],
        image: conservativeVeneerImage,
      },
      {
        title: "کراؤن او کاور",
        icon: ShieldCheck,
        eyebrow: "کراؤن او کاور",
        summary:
          "کراؤنونه او کاورونه ځواک بېرته راولي، بڼه ښه کوي او زیانمنو غاښونو ته د باور وړ فعالیت ورکوي.",
        highlights: ["د ځواک بیا رغونه", "ساتندوی پوښ", "اوږدمهاله ملاتړ"],
        image: grindersImage,
      },
    ],

    stats: [
      { value: "13+", label: "تخصصي خدمتونه" },
      { value: "2", label: "د کلینیک د اړیکې شمېرې" },
      { value: "کورنۍ", label: "دوستانه پاملرنه" },
    ],

    cardInfo: {
      clinicName: "د امو د غاښونو کلینیک",
      doctorName: "ډاکټر محمدالله شریفي",
      doctorAltName: "شریفي آقتاش",
      whatsapp: "0744547411",
      phone2: "0730627740",
      email: "mohammadullahsharifi68@gmail.com",
      location: "د شرکت سړک، د ۵ ستوري هوټل مقابل، د عیدي زاده درملتون پورته",
      mapLabel: "کندز، افغانستان",
      education: "د ستوماتولوژۍ ډاکټر",
      educationSource: "د کندز پوهنتون فارغ",
      specialization:
        "د خولې ناروغیو درملنه، د غاښونو پاملرنه، او د خولې، ژامې او مخ جراحي",
      membership: "د افغانستان د ستوماتولوژۍ ټولنې غړی",
      experience:
        "مسلکي مخینه پکې د کابل په ملي معالجوي او تخصصي ستوماتولوژۍ روغتون کې خدمت هم شامل دی.",
    },

    sections: {
      heroBadge: "په کندز کې مسلکي د غاښونو پاملرنه",

      aboutBadge: "د امو په اړه",
      aboutTitle: "عصري د غاښونو درملنه چې پر باور، نظافت او آرامۍ ولاړه ده",
      aboutDescription:
        "د امو د غاښونو کلینیک په کندز کې د ډاکټر محمدالله شریفي تر مشرۍ لاندې فعالیت کوي او پر کیفیت لرونکي درملنې، د ناروغ پر آرامۍ او باوري پاملرنې تمرکز لري.",
      leadDentistText:
        "ژمن دی چې له ناروغانو سره د خولې روغتیا په ښه کولو، د موسکا ښکلا بېرته راګرځولو او باوري حللارو په برابرولو کې مرسته وکړي.",

      servicesBadge: "خدمتونه",
      servicesTitle: "د کلینیک د خدمتونو د لیدو لپاره یوه لا ښه منظمه لاره",
      servicesDescription:
        "د خدمتونو برخه په لارښود لرونکي کاروسل بدله شوې څو ناروغان وکولای شي په یو وخت کې پر یوه خدمت تمرکز وکړي.",
      activeServiceCardText:
        "دقیق، عصري او آرامه د غاښونو پاملرنه د پاکو پایلو او ښه ناروغ تجربه سره.",

      contactBadge: "اړیکه",
      contactTitle: "د امو د غاښونو کلینیک ته مراجعه وکړئ یا اړیکه ونیسئ",
      contactDescription:
        "د کلینیک معلومات دلته کارول شوي، څو وروسته وکولای شئ دقیق نقشه یا برېښنالیک نوي کړئ.",

      footerText:
        "په کندز کې د امو د غاښونو کلینیک لپاره یو مسلکي او باوري ویب‌سایټ، چې وروسته پکې نوبت، دوه ژبې او د ناروغانو نظرونه هم اضافه کېدای شي.",
    },
  },
};
