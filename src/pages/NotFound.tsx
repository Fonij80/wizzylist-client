import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t("not_found.message")}</h1>
        <a
          href="/create"
          className="text-2xl text-blue-500 hover:text-blue-700 underline"
        >
          {t("not_found.back")}
        </a>
      </div>
    </div>
  );
};
