
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, ExternalLink, Check, Plus } from "lucide-react";
import { WishListForm } from "./WishListForm";
import { SocialShare } from "./SocialShare";

interface WishItem {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  reserved: boolean;
}

interface WishListDisplayProps {
  profileId: string;
}

export const WishListDisplay = ({ profileId }: WishListDisplayProps) => {
  const [wishList, setWishList] = useState<WishItem[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [profileName, setProfileName] = useState('');

  useEffect(() => {
    // Load wish list from localStorage
    const savedWishList = localStorage.getItem(`wishlist_${profileId}`);
    if (savedWishList) {
      setWishList(JSON.parse(savedWishList));
    }
    
    // Load profile name for sharing
    const savedProfile = localStorage.getItem(`profile_${profileId}`);
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setProfileName(profile.name);
    }
    
    // Check if current user is the owner (simplified check)
    const currentProfile = localStorage.getItem(`profile_${profileId}`);
    setIsOwner(!!currentProfile);
  }, [profileId]);

  const handleReserveItem = (itemId: string) => {
    const updatedList = wishList.map(item =>
      item.id === itemId ? { ...item, reserved: !item.reserved } : item
    );
    setWishList(updatedList);
    localStorage.setItem(`wishlist_${profileId}`, JSON.stringify(updatedList));
  };

  const handleAddItem = (newItem: Omit<WishItem, 'id' | 'reserved'>) => {
    const item: WishItem = {
      ...newItem,
      id: Math.random().toString(36).substr(2, 9),
      reserved: false
    };
    const updatedList = [...wishList, item];
    setWishList(updatedList);
    localStorage.setItem(`wishlist_${profileId}`, JSON.stringify(updatedList));
    setShowAddForm(false);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold theme-text flex items-center">
          <Gift className="w-8 h-8 mr-3 text-purple-500" />
          Birthday Wish List
        </h2>
        <div className="flex items-center space-x-2">
          <SocialShare 
            url={window.location.href}
            title={`${profileName}'s Birthday Wishlist`}
            description="Check out my birthday wishlist and help make my day special!"
            compact={true}
          />
          {isOwner && (
            <Button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-500"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          )}
        </div>
      </div>

      {showAddForm && (
        <Card className="theme-card shadow-lg mb-6">
          <CardHeader>
            <CardTitle>Add New Wish</CardTitle>
            <CardDescription>What would you love to receive for your birthday?</CardDescription>
          </CardHeader>
          <CardContent>
            <WishListForm
              onSubmit={handleAddItem}
              onCancel={() => setShowAddForm(false)}
            />
          </CardContent>
        </Card>
      )}

      {wishList.length === 0 ? (
        <Card className="theme-card shadow-lg">
          <CardContent className="p-12 text-center">
            <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No wishes yet!</h3>
            <p className="text-gray-500">
              {isOwner 
                ? "Start adding items to your wish list to let friends know what you'd love!"
                : "This person hasn't added any wishes yet. Check back later!"
              }
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishList.map((item) => (
            <Card key={item.id} className={`theme-card shadow-lg transition-all hover:shadow-xl ${item.reserved ? 'opacity-75' : ''}`}>
              <CardContent className="p-0">
                {item.image && (
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {item.reserved && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Reserved ✓
                      </div>
                    )}
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-lg theme-text mb-2">{item.name}</h3>
                  {item.description && (
                    <p className="text-sm theme-text-muted mb-4">{item.description}</p>
                  )}
                  <div className="flex space-x-2">
                    {item.link && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(item.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    )}
                    {!isOwner && (
                      <Button
                        size="sm"
                        variant={item.reserved ? "secondary" : "default"}
                        className={`flex-1 ${!item.reserved ? 'bg-gradient-to-r from-green-500 to-emerald-500' : ''}`}
                        onClick={() => handleReserveItem(item.id)}
                      >
                        <Check className="w-4 h-4 mr-1" />
                        {item.reserved ? "Unreserve" : "Reserve"}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
