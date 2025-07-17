
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface WishListFormProps {
  onSubmit: (item: { name: string; description: string; image: string; link: string }) => void;
  onCancel: () => void;
}

export const WishListForm = ({ onSubmit, onCancel }: WishListFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    link: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim()) {
      onSubmit(formData);
      setFormData({ name: "", description: "", image: "", link: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Item Name *</Label>
        <Input
          id="name"
          placeholder="What do you wish for?"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          placeholder="Why do you want this? Any specific details?"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <div>
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          placeholder="https://example.com/image.jpg"
          value={formData.image}
          onChange={(e) => setFormData({...formData, image: e.target.value})}
        />
      </div>

      <div>
        <Label htmlFor="link">Purchase Link</Label>
        <Input
          id="link"
          placeholder="https://store.com/product"
          value={formData.link}
          onChange={(e) => setFormData({...formData, link: e.target.value})}
        />
      </div>

      <div className="flex space-x-2">
        <Button type="submit" className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500">
          Add to Wish List
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
