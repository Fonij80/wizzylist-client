
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Heart, Users, Sparkles, Cake, Circle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              WizzyList
            </h1>
          </div>
          <div className="space-x-4">
            <Link to="/create">
              <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                Create List
              </Button>
            </Link>
            <Link to="/browse">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Browse Lists
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4 mb-6">
            <Circle className="w-8 h-8 text-pink-400 animate-bounce" style={{animationDelay: '0s'}} />
            <Cake className="w-10 h-10 text-purple-500 animate-bounce" style={{animationDelay: '0.2s'}} />
            <Circle className="w-8 h-8 text-blue-400 animate-bounce" style={{animationDelay: '0.4s'}} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Make Every Birthday Magical! ✨
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create beautiful birthday wish lists, share them with loved ones, and let friends reserve gifts to make your special day unforgettable.
          </p>
          
          <div className="space-x-4">
            <Link to="/create">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-lg px-8 py-3">
                <Gift className="w-5 h-5 mr-2" />
                Create Your Wish List
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Why WizzyList?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to create the perfect birthday experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-pink-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-pink-600">Beautiful Profiles</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Create stunning birthday profiles with photos, personal messages, and countdown timers to your special day.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-purple-600">Smart Wish Lists</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Add items with images, descriptions, and purchase links. Friends can reserve gifts to avoid duplicates!
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-blue-600">Share & Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Get a unique shareable link and let friends leave heartwarming birthday messages on your profile.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-12 text-center text-white">
          <Sparkles className="w-12 h-12 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Ready to create magic?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of people making birthdays more special with WizzyList
          </p>
          <Link to="/create">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
            <Gift className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold">WizzyList</span>
        </div>
        <p>&copy; 2024 WizzyList. Making birthdays magical, one wish at a time. ✨</p>
      </footer>
    </div>
  );
};

export default Index;
