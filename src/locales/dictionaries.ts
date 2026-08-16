export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About",
      location: "Location",
    },
    hero: {
      title: "Oasis Lounge",
      subtitle: "Experience perfectly crafted beverages and exquisite desserts in the heart of Riyadh.",
      cta: "Explore Menu",
    },
    menuHighlights: {
      title: "Signature",
      subtitle: "Creations",
      viewFull: "View Full Menu",
    },
    fullMenu: {
      title: "Oasis Lounge",
      subtitle: "Locally roasted. Artisan baked.",
      cta: "Explore Our Menu",
      coffee: "Coffee",
      dessert: "Desserts",
    },
    about: {
      title: "The Oasis",
      subtitle: "Experience.",
      p1: "At Oasis, we believe that every cup of coffee tells a story. From carefully sourced beans to our masterfully crafted desserts, every detail is designed to delight.",
      p2: "Come for the coffee, stay for the ambience.",
    },
    location: {
      title: "Find",
      subtitle: "Us",
      address: "Oasis Lounge, Riyadh, Saudi Arabia",
      hours: "Open Daily 7:00 AM - Midnight",
    },
    footer: {
      demoTag: "Oasis Lounge",
      demoMsg: "The full menu and additional features will be updated upon official launch.",
      rights: "All rights reserved. Oasis Lounge.",
    },
    cart: {
      title: "Your Cart",
      empty: "Your cart is empty.",
      dineIn: "Dine-In",
      takeaway: "Takeaway",
      tableNo: "Table Number",
      customerName: "Customer Name",
      instructions: "Special Instructions (Optional)",
      total: "Total",
      checkout: "Send Order via WhatsApp",
      addToCart: "Add to Cart",
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
      title: "واحة لاونج",
      subtitle: "استمتع بتجربة المشروبات المحضرة بإتقان والحلويات الرائعة في قلب الرياض.",
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
      cta: "استكشف قائمتنا",
    },
    about: {
      title: "تجربة",
      subtitle: "الواحة",
      p1: "في الواحة، نؤمن بأن كل كوب قهوة يحكي قصة. من حبوب البن المختارة بعناية إلى حلوياتنا المصنوعة ببراعة، كل تفصيلة مصممة لإسعادك.",
      p2: "يقع مقهانا في الرياض، وهو واحة من الهدوء والأناقة العصرية، مثالي لروتينك الصباحي أو للاسترخاء المسائي.",
    },
    location: {
      title: "موقعنا",
      subtitle: " ",
      address: "الرياض، المملكة العربية السعودية",
      hours: "مفتوح يومياً: ٧ صباحاً - ١٢ منتصف الليل",
    },
    footer: {
      demoTag: "واحة لاونج",
      demoMsg: "سيتم تحديث القائمة الكاملة والميزات الإضافية عند الإطلاق الرسمي.",
      rights: "جميع الحقوق محفوظة. واحة لاونج.",
    },
    cart: {
      title: "سلة المشتريات",
      empty: "سلة المشتريات فارغة.",
      dineIn: "محلي",
      takeaway: "سفري",
      tableNo: "رقم الطاولة",
      customerName: "اسم العميل",
      instructions: "تعليمات خاصة (اختياري)",
      total: "المجموع",
      checkout: "إرسال الطلب عبر واتساب",
      addToCart: "أضف للسلة",
    }
  }
};

export type Locale = keyof typeof dictionaries;
