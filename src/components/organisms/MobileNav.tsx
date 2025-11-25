import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex flex-col space-y-4 mt-8">
          {/* <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Gift className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              WizzyList
            </h2>
          </div> */}

          <Link to="/create" onClick={() => setOpen(false)}>
            <Button
              variant="outline"
              className="w-full border-pink-200 text-pink-600 hover:bg-pink-50"
            >
              {t("nav.createList")}
            </Button>
          </Link>

          {/* <Link to="/browse" onClick={() => setOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              {t("nav.browseLists")}
            </Button>
          </Link> */}

          {/* <div className="pt-4 border-t">
            <LanguageSwitcher />
          </div> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};
