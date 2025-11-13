// lib/i18n.ts
"use client";  // 👈 very important

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
        },
      },
      hi: {
        translation: {
          welcome: "स्वागत है",
        },
      },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
