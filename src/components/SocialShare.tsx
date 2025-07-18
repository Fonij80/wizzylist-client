
import { useState } from 'react';
import { Share2, Facebook, Twitter, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  compact?: boolean;
}

export const SocialShare = ({ url, title, description = '', compact = false }: SocialShareProps) => {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const { t } = useLanguage();

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const openShareWindow = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="relative">
      {showCopiedMessage && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm z-50 whitespace-nowrap">
          {t('share.copied')}
        </div>
      )}
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size={compact ? "sm" : "default"}
            className="border-pink-200 text-pink-600 hover:bg-pink-50"
          >
            <Share2 className="w-4 h-4 mr-2" />
            {!compact && t('nav.share')}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white border shadow-lg">
          <DropdownMenuItem onClick={handleCopyLink} className="cursor-pointer">
            <Share2 className="w-4 h-4 mr-2" />
            Copy Link
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => openShareWindow(shareUrls.facebook)} 
            className="cursor-pointer"
          >
            <Facebook className="w-4 h-4 mr-2" />
            {t('share.facebook')}
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => openShareWindow(shareUrls.twitter)} 
            className="cursor-pointer"
          >
            <Twitter className="w-4 h-4 mr-2" />
            {t('share.twitter')}
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => openShareWindow(shareUrls.whatsapp)} 
            className="cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            {t('share.whatsapp')}
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => openShareWindow(shareUrls.telegram)} 
            className="cursor-pointer"
          >
            <Send className="w-4 h-4 mr-2" />
            {t('share.telegram')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
