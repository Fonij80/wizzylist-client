import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { MobileNav } from "@/components";
import logoImage from "@/assets/images/wizzylist.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newLanguage === "fa" ? "rtl" : "ltr";
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <NavLink to="/">
            <img src={logoImage} alt="Logo" className="h-12" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Profile"
            />
            <AvatarFallback>
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>

          {/* <LanguageSwitcher /> */}

          <Link to="/create">
            <Button
              variant="outline"
              className="border-pink-200 text-pink-600 hover:bg-pink-50"
            >
              {t("nav.createList")}
            </Button>
          </Link>
          {/* <Link to="/browse">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              {t("nav.browseLists")}
            </Button>
          </Link> */}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Profile"
            />
            <AvatarFallback>
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};
