
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'fa';
  setLanguage: (lang: 'en' | 'fa') => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.createList': 'Create List',
    'nav.browseLists': 'Browse Lists',
    'nav.createYourOwn': 'Create Your Own',
    'nav.share': 'Share',
    
    // Hero Section
    'hero.title': 'Make Every Birthday Magical! ✨',
    'hero.description': 'Create beautiful birthday wish lists, share them with loved ones, and make gift-giving a delightful experience for everyone.',
    'hero.createButton': 'Create Your Wishlist',
    
    // Features
    'features.title': 'Why Choose WizzyList?',
    'features.subtitle': 'Everything you need to create the perfect birthday wishlist experience',
    'features.profiles.title': 'Personal Profiles',
    'features.profiles.description': 'Create beautiful personalized profiles with photos, messages, and countdown timers to your special day.',
    'features.wishlist.title': 'Smart Wishlists',
    'features.wishlist.description': 'Add items with photos, descriptions, and links. Friends can reserve items to avoid duplicate gifts.',
    'features.share.title': 'Easy Sharing',
    'features.share.description': 'Share your wishlist via social media or direct links. Let everyone know what would make you happy!',
    
    // CTA
    'cta.title': 'Ready to Get Started?',
    'cta.subtitle': 'Join thousands of people making birthdays more special with WizzyList',
    'cta.button': 'Create My Wishlist',
    
    // Footer
    'footer.tagline': 'Making birthdays magical, one wish at a time.',
    
    // Share
    'share.copied': 'Link copied!',
    'share.facebook': 'Facebook',
    'share.twitter': 'Twitter',
    'share.whatsapp': 'WhatsApp',
    'share.telegram': 'Telegram',

    // Browse
    'browse.title': 'Browse Wishlist Templates',
    'browse.description': 'Get inspired by these beautiful wishlist templates or use them as a starting point for your own',
    'browse.useTemplate': 'Use Template',
    'browse.allTemplates': 'All Templates',
    'browse.birthday': 'Birthday',
    'browse.gaming': 'Gaming',
    'browse.books': 'Books & Reading',
  },
  fa: {
    // Navigation
    'nav.createList': 'ایجاد لیست',
    'nav.browseLists': 'مرور لیست‌ها',
    'nav.createYourOwn': 'خودتان بسازید',
    'nav.share': 'اشتراک',
    
    // Hero Section
    'hero.title': 'هر تولدی را جادویی کنید! ✨',
    'hero.description': 'لیست‌های زیبای آرزوهای تولد بسازید، با عزیزانتان به اشتراک بگذارید و هدیه دادن را تجربه‌ای لذت‌بخش برای همه کنید.',
    'hero.createButton': 'لیست آرزوهایتان را بسازید',
    
    // Features
    'features.title': 'چرا WizzyList را انتخاب کنید؟',
    'features.subtitle': 'تمام آنچه برای ایجاد تجربه کامل لیست آرزوهای تولد نیاز دارید',
    'features.profiles.title': 'پروفایل‌های شخصی',
    'features.profiles.description': 'پروفایل‌های زیبا و شخصی‌سازی شده با عکس، پیام و تایمر شمارش معکوس تا روز ویژه‌تان بسازید.',
    'features.wishlist.title': 'لیست‌های هوشمند آرزو',
    'features.wishlist.description': 'اقلام را با عکس، توضیحات و لینک اضافه کنید. دوستان می‌توانند اقلام را رزرو کنند تا از هدایای تکراری جلوگیری شود.',
    'features.share.title': 'اشتراک‌گذاری آسان',
    'features.share.description': 'لیست آرزوهایتان را از طریق شبکه‌های اجتماعی یا لینک مستقیم به اشتراک بگذارید. به همه بگویید چه چیزی شما را خوشحال می‌کند!',
    
    // CTA
    'cta.title': 'آماده شروع هستید؟',
    'cta.subtitle': 'به هزاران نفری که با WizzyList تولدها را ویژه‌تر می‌کنند بپیوندید',
    'cta.button': 'لیست آرزوهایم را بساز',
    
    // Footer
    'footer.tagline': 'تولدها را جادویی می‌کنیم، یک آرزو در هر زمان.',
    
    // Share
    'share.copied': 'لینک کپی شد!',
    'share.facebook': 'فیسبوک',
    'share.twitter': 'توییتر',
    'share.whatsapp': 'واتساپ',
    'share.telegram': 'تلگرام',

    // Browse
    'browse.title': 'مرور قالب‌های لیست آرزو',
    'browse.description': 'از این قالب‌های زیبای لیست آرزو الهام بگیرید یا آنها را به عنوان نقطه شروعی برای خودتان استفاده کنید',
    'browse.useTemplate': 'استفاده از قالب',
    'browse.allTemplates': 'همه قالب‌ها',
    'browse.birthday': 'تولد',
    'browse.gaming': 'بازی',
    'browse.books': 'کتاب و مطالعه',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'fa'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'fa' ? 'rtl' : 'ltr'} className={language === 'fa' ? 'font-persian' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
