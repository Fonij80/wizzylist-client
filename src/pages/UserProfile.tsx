import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Gift,
  Heart,
  Calendar,
  Clock,
  Share2,
  MessageCircle,
  ArrowLeft,
  User,
} from "lucide-react";
import { WishListDisplay, MobileNav } from "@/components";
import { BirthdayCountdown } from "@/components/organisms/BirthdayCountdown";
import { BirthdayMessages } from "@/components/organisms/BirthdayMessages";
import { ThemeProvider } from "@/components/organisms/ThemeProvider";
import { LanguageSwitcher } from "@/components/organisms/LanguageSwitcher";
import { SocialShare } from "@/components/organisms/SocialShare";
import { useTranslation } from "react-i18next";

interface ProfileData {
  name: string;
  birthday: string;
  message: string;
  photo: string;
  theme: string;
}

export const UserProfile = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Load profile data from localStorage (in a real app, this would be from a database)
    const savedProfile = localStorage.getItem(`profile_${profileId}`);
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, [profileId]);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <CardContent>
            <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              Profile Not Found
            </h2>
            <p className="text-gray-600 mb-4">
              This wish list doesn't exist or has been removed.
            </p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500">
                Go Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <ThemeProvider theme={profile.theme}>
      <div className="min-h-screen theme-bg">
        <div className="container mx-auto px-4 py-8">
          {/* Profile Header */}
          <div className="max-w-4xl mx-auto">
            <Card className="theme-card shadow-xl mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    {profile.photo ? (
                      <img
                        src={profile.photo}
                        alt={profile.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center border-4 border-white shadow-lg">
                        <Gift className="w-16 h-16 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl font-bold theme-text mb-2">
                      {profile.name}'s Birthday Wishes ✨
                    </h1>
                    {profile.message && (
                      <p className="text-lg theme-text-muted mb-4">
                        "{profile.message}"
                      </p>
                    )}
                    <div className="flex items-center justify-center md:justify-start space-x-4 text-sm theme-text-muted">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(profile.birthday).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Birthday Countdown */}
            <BirthdayCountdown birthday={profile.birthday} />

            {/* Wish List */}
            <WishListDisplay profileId={profileId!} />

            {/* Birthday Messages */}
            <BirthdayMessages profileId={profileId!} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
