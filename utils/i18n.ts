import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import translationEn from "../locales/en/translation.json";
import translationKr from "../locales/ko/translation.json";

const resources = {
  ko: { translation: translationKr },
  en: { translation: translationEn },
};

export const initI18n = async (callback?: () => void) => {
  let savedLanguage = await AsyncStorage.getItem("language");

  console.log("savedLanguage", savedLanguage);
  if (!savedLanguage) {
    savedLanguage = Localization.getLocales()[0].languageCode!;
    console.log("savedLanguage", savedLanguage);
    AsyncStorage.setItem("language", savedLanguage);
  }

  await i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: savedLanguage,
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
  });

  callback?.();
};

export default i18n;
