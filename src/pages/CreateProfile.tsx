import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gift, ArrowLeft, Calendar, Camera, Palette } from "lucide-react";
import { WishListForm } from "@/components/organisms/WishListForm";
import { ThemeSelector } from "@/components/organisms/ThemeSelector";

export const CreateProfile = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              WizzyList
            </h1>
          </Link>
          <Link to="/">
            <Button
              variant="outline"
              className="border-pink-200 text-pink-600 hover:bg-pink-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

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
                  <Label htmlFor="birthday">Birthday Date</Label>
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
