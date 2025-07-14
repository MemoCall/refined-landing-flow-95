
import { useState } from "react";

interface LanguageContent {
  fr: any;
  en: any;
}

export const useLanguage = (content: LanguageContent) => {
  const [currentLanguage, setCurrentLanguage] = useState<'fr' | 'en'>('fr');
  
  const changeLanguage = (language: string) => {
    setCurrentLanguage(language as 'fr' | 'en');
  };

  return {
    currentLanguage,
    changeLanguage,
    t: content[currentLanguage]
  };
};
