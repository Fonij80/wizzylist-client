import { LandingFeatures, LandingHero } from "@/components";
import { useTranslation } from "react-i18next";

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <LandingHero />
      <LandingFeatures />
    </div>
  );
};
