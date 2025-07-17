
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Heart, Send } from "lucide-react";

interface Message {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

interface BirthdayMessagesProps {
  profileId: string;
}

export const BirthdayMessages = ({ profileId }: BirthdayMessagesProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "" });

  useEffect(() => {
    // Load messages from localStorage
    const savedMessages = localStorage.getItem(`messages_${profileId}`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, [profileId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.message.trim()) {
      const newMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        message: formData.message,
        timestamp: new Date().toISOString()
      };
      
      const updatedMessages = [newMessage, ...messages];
      setMessages(updatedMessages);
      localStorage.setItem(`messages_${profileId}`, JSON.stringify(updatedMessages));
      
      setFormData({ name: "", message: "" });
      setShowForm(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold theme-text flex items-center">
          <MessageCircle className="w-8 h-8 mr-3 text-pink-500" />
          Birthday Messages
        </h2>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-pink-500 to-red-500"
        >
          <Heart className="w-4 h-4 mr-2" />
          Leave a Message
        </Button>
      </div>

      {showForm && (
        <Card className="theme-card shadow-lg mb-6">
          <CardHeader>
            <CardTitle>Send Birthday Wishes</CardTitle>
            <CardDescription>Share your heartwarming message!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Birthday Message</Label>
                <Input
                  id="message"
                  placeholder="Write your birthday wishes..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <div className="flex space-x-2">
                <Button type="submit" className="flex-1 bg-gradient-to-r from-pink-500 to-red-500">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {messages.length === 0 ? (
        <Card className="theme-card shadow-lg">
          <CardContent className="p-12 text-center">
            <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No messages yet!</h3>
            <p className="text-gray-500">
              Be the first to send a heartwarming birthday message! 💕
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <Card key={msg.id} className="theme-card shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold theme-text">{msg.name}</h4>
                      <span className="text-xs theme-text-muted">
                        {new Date(msg.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="theme-text-muted">{msg.message}</p>
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
