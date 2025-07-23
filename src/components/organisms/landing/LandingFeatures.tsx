import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gift, Heart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LandingFeatures = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 pt-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          {t("features.title")}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t("features.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="border-pink-100 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-pink-600">
              {t("features.profiles.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              {t("features.profiles.description")}
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-purple-600">
              {t("features.wishlist.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              {t("features.wishlist.description")}
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-blue-600">
              {t("features.share.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              {t("features.share.description")}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
