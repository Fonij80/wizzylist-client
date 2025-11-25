import { ThemeSelector } from "@/components/organisms/ThemeSelector";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackBtn } from "@/components/ui/extra";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Gift, Palette } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const CreateProfile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    message: "",
    photo: "",
    theme: "colorful",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a unique ID for the profile
    const profileId = Math.random().toString(36).substr(2, 9);
    // In a real app, this would save to a database
    localStorage.setItem(`profile_${profileId}`, JSON.stringify(formData));
    navigate(`/profile/${profileId}`);
  };

  return (
    <div className="min-h-screen">
      <BackBtn />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Create Your Birthday Profile ✨
            </h2>
            <p className="text-gray-600">
              Let's make your birthday unforgettable! Fill in your details to
              create a magical wish list.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="border-pink-100 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-pink-600">
                  <Camera className="w-5 h-5 mr-2" />
                  Basic Information
                </CardTitle>
                <CardDescription>
                  Tell us about yourself and your special day
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="birthday">Special Date</Label>
                  <Input
                    id="birthday"
                    type="date"
                    value={formData.birthday}
                    onChange={(e) =>
                      setFormData({ ...formData, birthday: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="photo">Profile Photo URL</Label>
                  <Input
                    id="photo"
                    placeholder="https://example.com/your-photo.jpg"
                    value={formData.photo}
                    onChange={(e) =>
                      setFormData({ ...formData, photo: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="message">Personal Birthday Message</Label>
                  <Input
                    id="message"
                    placeholder="What makes this birthday special to you?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Palette className="w-5 h-5 mr-2" />
                  Choose Your Theme
                </CardTitle>
                <CardDescription>
                  Pick a theme that matches your personality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ThemeSelector
                  selectedTheme={formData.theme}
                  onThemeChange={(theme) => setFormData({ ...formData, theme })}
                />
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-lg px-8 py-3"
              >
                <Gift className="w-5 h-5 mr-2" />
                Create My Profile
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
