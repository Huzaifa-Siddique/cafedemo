export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About",
      location: "Location",
    },
    hero: {
      title: "Locais Cafe",
      subtitle: "Experience perfectly crafted beverages and exquisite desserts in the heart of Al Aqiq.",
      cta: "Explore Menu",
    },
    menuHighlights: {
      title: "Signature",
      subtitle: "Creations",
      viewFull: "View Full Menu",
    },
    fullMenu: {
      title: "Our Full",
      subtitle: "Menu",
      coffee: "Coffee",
      dessert: "Dessert",
    },
    about: {
      title: "The Locais",
      subtitle: "Experience",
      p1: "At Locais, we believe that every cup of coffee tells a story. From carefully sourced beans to our masterfully crafted desserts, every detail is designed to delight.",
      p2: "Located in the vibrant Al Aqiq district, our space is an oasis of calm and modern elegance, perfect for your morning ritual or an evening wind-down.",
    },
    location: {
      title: "Find",
      subtitle: "Us",
      address: "Al Aqiq, Riyadh, Saudi Arabia",
      hours: "Open Daily: 7 AM - 12 AM",
    },
    footer: {
      demoTag: "End of Demo",
      demoMsg: "The full menu and additional features will be updated upon official launch.",
      rights: "All rights reserved. LOCAIS Cafe.",
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      menu: "القائمة",
      about: "من نحن",
      location: "الموقع",
    },
    hero: {
      title: "مقهى لوكايس",
      subtitle: "استمتع بتجربة المشروبات المحضرة بإتقان والحلويات الرائعة في قلب العقيق.",
      cta: "استكشف القائمة",
    },
    menuHighlights: {
      title: "إبداعات",
      subtitle: "مميزة",
      viewFull: "عرض القائمة الكاملة",
    },
    fullMenu: {
      title: "قائمتنا",
      subtitle: "الكاملة",
      coffee: "قهوة",
      dessert: "حلويات",
    },
    about: {
      title: "تجربة",
      subtitle: "لوكايس",
      p1: "في لوكايس، نؤمن بأن كل كوب قهوة يحكي قصة. من حبوب البن المختارة بعناية إلى حلوياتنا المصنوعة ببراعة، كل تفصيلة مصممة لإسعادك.",
      p2: "يقع مقهانا في حي العقيق النابض بالحياة، وهو واحة من الهدوء والأناقة العصرية، مثالي لروتينك الصباحي أو للاسترخاء المسائي.",
    },
    location: {
      title: "موقعنا",
      subtitle: " ",
      address: "العقيق، الرياض، المملكة العربية السعودية",
      hours: "مفتوح يومياً: ٧ صباحاً - ١٢ منتصف الليل",
    },
    footer: {
      demoTag: "نهاية النسخة التجريبية",
      demoMsg: "سيتم تحديث القائمة الكاملة والميزات الإضافية عند الإطلاق الرسمي.",
      rights: "جميع الحقوق محفوظة. مقهى لوكايس.",
    }
  }
};

export type Locale = keyof typeof dictionaries;
