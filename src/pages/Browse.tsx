import { useState } from "react";
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
import { Gift, Heart, Users, Eye, User } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";
import { LanguageSwitcher } from "@/components/organisms/LanguageSwitcher";
import { SocialShare } from "@/components/organisms/SocialShare";
import { useLanguage } from "@/contexts/LanguageContext";

interface WishListTemplate {
  id: string;
  name: string;
  birthday: string;
  message: string;
  photo: string;
  theme: string;
  items: Array<{
    name: string;
    description: string;
    image: string;
    link: string;
  }>;
  category: string;
}

export const Browse = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const templates: WishListTemplate[] = [
    {
      id: "template-1",
      name: "Emma Johnson",
      birthday: "2024-12-15",
      message: "🎉 Help make my 25th birthday unforgettable!",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face",
      theme: "pink",
      category: "birthday",
      items: [
        {
          name: "Wireless Headphones",
          description: "Noise-canceling headphones for my daily commute",
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
          link: "https://amazon.com/headphones",
        },
        {
          name: "Coffee Table Book",
          description: "Beautiful photography book about travel",
          image:
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
          link: "https://amazon.com/book",
        },
        {
          name: "Yoga Mat",
          description: "Eco-friendly yoga mat for my morning routine",
          image:
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
          link: "https://amazon.com/yoga-mat",
        },
      ],
    },
    {
      id: "template-2",
      name: "Alex Chen",
      birthday: "2024-11-28",
      message: "🎮 Gaming enthusiast turning 30!",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      theme: "blue",
      category: "gaming",
      items: [
        {
          name: "Mechanical Keyboard",
          description: "RGB mechanical keyboard for gaming",
          image:
            "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
          link: "https://amazon.com/keyboard",
        },
        {
          name: "Gaming Mouse",
          description: "High-precision gaming mouse",
          image:
            "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
          link: "https://amazon.com/mouse",
        },
        {
          name: "Monitor Stand",
          description: "Adjustable dual monitor stand",
          image:
            "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=300&fit=crop",
          link: "https://amazon.com/stand",
        },
      ],
    },
    {
      id: "template-3",
      name: "Sarah Williams",
      birthday: "2024-10-20",
      message: "📚 Book lover celebrating another chapter!",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      theme: "purple",
      category: "books",
      items: [
        {
          name: "E-Reader",
          description: "Waterproof e-reader for reading anywhere",
          image:
            "https://images.unsplash.com/photo-1481932037130-0128b0a90dc1?w=400&h=300&fit=crop",
          link: "https://amazon.com/ereader",
        },
        {
          name: "Book Light",
          description: "Rechargeable reading light",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
          link: "https://amazon.com/booklight",
        },
        {
          name: "Bookshelf",
          description: "Minimalist floating bookshelf",
          image:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
          link: "https://amazon.com/bookshelf",
        },
      ],
    },
  ];

  const categories = [
    { key: "all", label: "All Templates" },
    { key: "birthday", label: "Birthday" },
    { key: "gaming", label: "Gaming" },
    { key: "books", label: "Books & Reading" },
  ];

  const filteredTemplates =
    selectedCategory === "all"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  const handleUseTemplate = (template: WishListTemplate) => {
    // Save template to localStorage as a new profile
    const profileId = `template-${Date.now()}`;
    const profileData = {
      name: template.name,
      birthday: template.birthday,
      message: template.message,
      photo: template.photo,
      theme: template.theme,
    };

    localStorage.setItem(`profile_${profileId}`, JSON.stringify(profileData));
    localStorage.setItem(
      `wishlist_${profileId}`,
      JSON.stringify(
        template.items.map((item, index) => ({
          id: `item-${index}`,
          ...item,
          reserved: false,
        }))
      )
    );

    // Redirect to the new profile
    window.location.href = `/profile/${profileId}`;
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

            <LanguageSwitcher />

            <SocialShare
              url={window.location.href}
              title="Browse WizzyList Templates"
              description="Discover amazing birthday wishlist templates"
            />

            <Link to="/create">
              <Button
                variant="outline"
                className="border-pink-200 text-pink-600 hover:bg-pink-50"
              >
                Create List
              </Button>
            </Link>
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

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Browse Wishlist Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get inspired by these beautiful wishlist templates or use them as a
            starting point for your own
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={
                selectedCategory === category.key ? "default" : "outline"
              }
              className={
                selectedCategory === category.key
                  ? "bg-gradient-to-r from-pink-500 to-purple-500"
                  : "border-pink-200 text-pink-600 hover:bg-pink-50"
              }
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={template.photo}
                    alt={template.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <CardDescription>
                      {new Date(template.birthday).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                      })}
                    </CardDescription>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "{template.message}"
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm text-gray-700">
                    Wishlist Items:
                  </h4>
                  {template.items.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  {template.items.length > 3 && (
                    <p className="text-xs text-gray-500">
                      + {template.items.length - 3} more items
                    </p>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500"
                    onClick={() => handleUseTemplate(template)}
                  >
                    Use Template
                  </Button>
                  <SocialShare
                    url={`${window.location.origin}/profile/${template.id}`}
                    title={`${template.name}'s Birthday Wishes`}
                    description={template.message}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
