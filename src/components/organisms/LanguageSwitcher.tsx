import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newLanguage === "fa" ? "rtl" : "ltr";
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm"
    >
      {i18n.language === "en" ? "فارسی" : "English"}
    </Button>
  );
};
