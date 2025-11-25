import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const BackBtn = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-6">
      <Link to="/">
        <Button
          variant="outline"
          className="border-pink-200 text-pink-600 hover:bg-pink-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("back_btn")}
        </Button>
      </Link>
    </div>
  );
};
