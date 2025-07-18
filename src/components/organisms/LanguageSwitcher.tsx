
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="border-pink-200 text-pink-600 hover:bg-pink-50"
    >
      <Languages className="w-4 h-4 mr-2" />
      {language === 'en' ? 'فا' : 'EN'}
    </Button>
  );
};
