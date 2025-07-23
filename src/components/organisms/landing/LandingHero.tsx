import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, Cake, Circle } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LandingHero = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 pt-16 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-4 mb-6">
          <Circle
            className="w-8 h-8 text-pink-400 animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <Cake
            className="w-10 h-10 text-purple-500 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <Circle
            className="w-8 h-8 text-blue-400 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
          {t("hero.title")}
        </h2>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {t("hero.description")}
        </p>

        <div className="space-x-4">
          <Link to="/create">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-lg px-8 py-3"
            >
              <Gift className="w-5 h-5 mr-2" />
              {t("hero.createButton")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
