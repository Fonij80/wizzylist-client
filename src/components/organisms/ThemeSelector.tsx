
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Flower, Palette, Sparkles } from "lucide-react";

interface ThemeSelectorProps {
  selectedTheme: string;
  onThemeChange: (theme: string) => void;
}

const themes = [
  {
    id: "colorful",
    name: "Colorful",
    icon: Sparkles,
    description: "Bright and vibrant",
    preview: "bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
  },
  {
    id: "floral",
    name: "Floral",
    icon: Flower,
    description: "Soft and elegant",
    preview: "bg-gradient-to-r from-green-300 via-pink-300 to-rose-300"
  },
  {
    id: "minimal",
    name: "Minimal",
    icon: Palette,
    description: "Clean and simple",
    preview: "bg-gradient-to-r from-gray-300 via-slate-300 to-gray-400"
  }
];

export const ThemeSelector = ({ selectedTheme, onThemeChange }: ThemeSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {themes.map((theme) => {
        const IconComponent = theme.icon;
        return (
          <Card
            key={theme.id}
            className={cn(
              "cursor-pointer transition-all hover:shadow-lg",
              selectedTheme === theme.id 
                ? "ring-2 ring-purple-500 shadow-lg" 
                : "hover:ring-1 hover:ring-purple-300"
            )}
            onClick={() => onThemeChange(theme.id)}
          >
            <CardContent className="p-4 text-center">
              <div className={cn("h-16 rounded-lg mb-3", theme.preview)} />
              <div className="flex items-center justify-center mb-2">
                <IconComponent className="w-5 h-5 mr-2 text-purple-600" />
                <h3 className="font-semibold text-gray-800">{theme.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{theme.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
