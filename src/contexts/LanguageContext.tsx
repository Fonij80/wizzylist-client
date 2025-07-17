
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'fa';
  setLanguage: (lang: 'en' | 'fa') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.createList': 'Create List',
    'nav.browseLists': 'Browse Lists',
    'nav.share': 'Share',
    'nav.createYourOwn': 'Create Your Own',
    
    // Homepage
    'hero.title': 'Make Every Birthday Magical! ✨',
    'hero.description': 'Create beautiful birthday wish lists, share them with loved ones, and let friends reserve gifts to make your special day unforgettable.',
    'hero.createButton': 'Create Your Wish List',
    
    // Features
    'features.title': 'Why WizzyList?',
    'features.subtitle': 'Everything you need to create the perfect birthday experience',
    'features.profiles.title': 'Beautiful Profiles',
    'features.profiles.description': 'Create stunning birthday profiles with photos, personal messages, and countdown timers to your special day.',
    'features.wishlist.title': 'Smart Wish Lists',
    'features.wishlist.description': 'Add items with images, descriptions, and purchase links. Friends can reserve gifts to avoid duplicates!',
    'features.share.title': 'Share & Connect',
    'features.share.description': 'Get a unique shareable link and let friends leave heartwarming birthday messages on your profile.',
    
    // CTA
    'cta.title': 'Ready to create magic?',
    'cta.subtitle': 'Join thousands of people making birthdays more special with WizzyList',
    'cta.button': 'Get Started Today',
    
    // Footer
    'footer.tagline': 'Making birthdays magical, one wish at a time. ✨',
    
    // Share
    'share.copied': 'Link copied to clipboard! 📋',
    'share.facebook': 'Share on Facebook',
    'share.twitter': 'Share on Twitter',
    'share.whatsapp': 'Share on WhatsApp',
    'share.telegram': 'Share on Telegram',
  },
  fa: {
    // Navigation
    'nav.createList': 'ایجاد لیست',
    'nav.browseLists': 'مرور لیست‌ها',
    'nav.share': 'اشتراک‌گذاری',
    'nav.createYourOwn': 'لیست خود را بسازید',
    
    // Homepage
    'hero.title': 'هر تولدی را جادویی کنید! ✨',
    'hero.description': 'لیست‌های زیبای آرزوهای تولد بسازید، با عزیزانتان به اشتراک بگذارید و به دوستان اجازه دهید هدایا را رزرو کنند.',
    'hero.createButton': 'لیست آرزوهایت را بساز',
    
    // Features
    'features.title': 'چرا WizzyList؟',
    'features.subtitle': 'همه چیزهایی که برای ایجاد تجربه تولد عالی نیاز دارید',
    'features.profiles.title': 'پروفایل‌های زیبا',
    'features.profiles.description': 'پروفایل‌های تولد خیره‌کننده با عکس، پیام‌های شخصی و تایمر شمارش معکوس به روز ویژه‌تان بسازید.',
    'features.wishlist.title': 'لیست آرزوهای هوشمند',
    'features.wishlist.description': 'آیتم‌هایی با تصاویر، توضیحات و لینک‌های خرید اضافه کنید. دوستان می‌توانند هدایا را رزرو کنند!',
    'features.share.title': 'اشتراک‌گذاری و ارتباط',
    'features.share.description': 'لینک منحصربه‌فرد خود را دریافت کنید و اجازه دهید دوستان پیام‌های دلنشین تولد در پروفایلتان بگذارند.',
    
    // CTA
    'cta.title': 'آماده ایجاد جادو هستید؟',
    'cta.subtitle': 'به هزاران نفری بپیوندید که تولدها را با WizzyList ویژه‌تر می‌کنند',
    'cta.button': 'همین امروز شروع کنید',
    
    // Footer
    'footer.tagline': 'تولدها را جادویی می‌کنیم، یک آرزو در هر بار. ✨',
    
    // Share
    'share.copied': 'لینک کپی شد! 📋',
    'share.facebook': 'اشتراک در فیسبوک',
    'share.twitter': 'اشتراک در توییتر',
    'share.whatsapp': 'اشتراک در واتساپ',
    'share.telegram': 'اشتراک در تلگرام',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'fa'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'fa' ? 'rtl' : 'ltr'} dir={language === 'fa' ? 'rtl' : 'ltr'}>
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
