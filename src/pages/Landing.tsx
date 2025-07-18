import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Gift, Heart, Users, Sparkles, Cake, Circle, User } from "lucide-react";
import { MobileNav, LanguageSwitcher, SocialShare } from "@/components";
import logoImage from "@/assets/images/wizzylist.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
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

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
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

      {/* CTA Section */}
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
    </div>
  );
};
