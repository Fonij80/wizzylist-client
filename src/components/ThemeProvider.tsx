
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ThemeProviderProps {
  theme: string;
  children: ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const getThemeClasses = () => {
    switch (theme) {
      case "floral":
        return {
          bg: "bg-gradient-to-br from-green-50 via-pink-50 to-rose-50",
          card: "border-green-100 bg-white/90 backdrop-blur-sm",
          text: "text-green-800",
          textMuted: "text-green-600",
          accent: "from-green-400 to-pink-400"
        };
      case "minimal":
        return {
          bg: "bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100",
          card: "border-gray-200 bg-white/95 backdrop-blur-sm",
          text: "text-gray-800",
          textMuted: "text-gray-600",
          accent: "from-gray-600 to-slate-600"
        };
      default: // colorful
        return {
          bg: "bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50",
          card: "border-pink-100 bg-white/90 backdrop-blur-sm",
          text: "text-purple-800",
          textMuted: "text-purple-600",
          accent: "from-pink-400 to-purple-400"
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={cn("theme-provider", themeClasses.bg)}>
      <style>{`
        .theme-bg { ${themeClasses.bg.replace('bg-gradient-to-br', 'background: linear-gradient(135deg,')} }
        .theme-card { ${themeClasses.card} }
        .theme-text { ${themeClasses.text} }
        .theme-text-muted { ${themeClasses.textMuted} }
        .theme-accent { background: linear-gradient(135deg, var(--${themeClasses.accent.split(' ')[0].replace('from-', '')}), var(--${themeClasses.accent.split(' ')[1].replace('to-', '')})); }
      `}</style>
      {children}
    </div>
  );
};
