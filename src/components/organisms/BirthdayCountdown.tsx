
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, Gift } from "lucide-react";

interface BirthdayCountdownProps {
  birthday: string;
}

export const BirthdayCountdown = ({ birthday }: BirthdayCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const today = new Date();
      const birthdayDate = new Date(birthday);
      
      // Set birthday to current year
      const thisYearBirthday = new Date(today.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate());
      
      // If birthday has passed this year, set it to next year
      if (thisYearBirthday < today) {
        thisYearBirthday.setFullYear(today.getFullYear() + 1);
      }
      
      const difference = thisYearBirthday.getTime() - today.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
        if (days === 0 && hours === 0 && minutes < 1) {
          setIsBirthday(true);
          setTimeLeft("🎉 IT'S BIRTHDAY TIME! 🎉");
        } else if (days === 0) {
          setTimeLeft(`${hours}h ${minutes}m until birthday! 🎂`);
        } else {
          setTimeLeft(`${days} days, ${hours}h ${minutes}m until birthday! 🎈`);
        }
        setIsBirthday(false);
      } else {
        // Check if today is the birthday
        const todayStr = today.toDateString();
        const birthdayStr = thisYearBirthday.toDateString();
        if (todayStr === birthdayStr) {
          setIsBirthday(true);
          setTimeLeft("🎉 HAPPY BIRTHDAY! 🎉");
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [birthday]);

  return (
    <Card className={`theme-card shadow-lg mb-8 ${isBirthday ? 'animate-pulse' : ''}`}>
      <CardContent className="p-6 text-center">
        <div className="flex items-center justify-center mb-4">
          {isBirthday ? (
            <Gift className="w-8 h-8 text-yellow-500 mr-2" />
          ) : (
            <Clock className="w-8 h-8 text-purple-500 mr-2" />
          )}
          <h3 className={`text-2xl font-bold ${isBirthday ? 'text-yellow-600' : 'theme-text'}`}>
            {isBirthday ? "Birthday Celebration!" : "Birthday Countdown"}
          </h3>
        </div>
        <p className={`text-xl ${isBirthday ? 'text-yellow-600 font-bold animate-bounce' : 'theme-text-muted'}`}>
          {timeLeft}
        </p>
        {isBirthday && (
          <div className="mt-4 text-4xl animate-bounce">
            🎂🎈🎊🎁✨
          </div>
        )}
      </CardContent>
    </Card>
  );
};
