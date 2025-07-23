import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-12 text-center text-white">
        <Sparkles className="w-12 h-12 mx-auto mb-6" />
        <h3 className="text-3xl font-bold mb-4">{t("cta.title")}</h3>
        <p className="text-xl mb-8 opacity-90">{t("cta.subtitle")}</p>
        <Link to="/create">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            {t("cta.button")}
          </Button>
        </Link>
      </div>
    </section>
  );
};
