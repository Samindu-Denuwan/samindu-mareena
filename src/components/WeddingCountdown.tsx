import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  const weddingDate = new Date('2026-05-23T00:00:00').getTime();

  useEffect(() => {
    setIsVisible(true);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900 overflow-hidden">
      <div
        className={`min-h-screen flex flex-col items-center justify-center px-4 py-8 transition-all duration-2000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="floating-hearts absolute inset-0 pointer-events-none overflow-hidden">
          <Heart className="absolute text-pink-400 opacity-20 animate-float-1" style={{ top: '10%', left: '10%', width: '30px', height: '30px' }} />
          <Heart className="absolute text-pink-300 opacity-20 animate-float-2" style={{ top: '70%', left: '80%', width: '40px', height: '40px' }} />
          <Heart className="absolute text-pink-500 opacity-20 animate-float-3" style={{ top: '40%', left: '5%', width: '25px', height: '25px' }} />
          <Heart className="absolute text-pink-400 opacity-20 animate-float-4" style={{ top: '20%', right: '15%', width: '35px', height: '35px' }} />
          <Heart className="absolute text-pink-300 opacity-20 animate-float-5" style={{ top: '80%', left: '20%', width: '28px', height: '28px' }} />
        </div>

        <div className="relative z-10 max-w-4xl w-full">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="flex items-center justify-center mb-4 gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-400"></div>
              <Heart className="text-pink-500 animate-pulse-slow" size={24} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-400"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-2 tracking-wide">
              Samindu <span className="text-pink-400 mx-2">&</span> Mareena
            </h1>
            <p className="text-lg md:text-xl text-pink-200 font-light tracking-widest mt-4">
              WE'RE GETTING MARRIED
            </p>
          </div>

          <div className="mb-12 animate-fade-in-up">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-40 animate-pulse-slow"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-pink-500/30">
                <img
                  src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop"
                  alt="Samindu and Mareena"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-10 animate-fade-in">
            <p className="text-2xl md:text-3xl text-white font-light mb-2">
              Save the Date
            </p>
            <p className="text-4xl md:text-5xl font-serif text-pink-400 font-semibold">
              May 23, 2026
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            <div className="countdown-card">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-pink-500/30">
                <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-pink-600">
                  {timeLeft.days}
                </div>
                <div className="text-sm md:text-base text-pink-300 font-medium mt-2 tracking-wider">
                  DAYS
                </div>
              </div>
            </div>
            <div className="countdown-card">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-pink-500/30">
                <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-pink-700">
                  {timeLeft.hours}
                </div>
                <div className="text-sm md:text-base text-pink-300 font-medium mt-2 tracking-wider">
                  HOURS
                </div>
              </div>
            </div>
            <div className="countdown-card">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-pink-500/30">
                <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-pink-500">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm md:text-base text-pink-300 font-medium mt-2 tracking-wider">
                  MINUTES
                </div>
              </div>
            </div>
            <div className="countdown-card">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border border-pink-500/30">
                <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-pink-800">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm md:text-base text-pink-300 font-medium mt-2 tracking-wider">
                  SECONDS
                </div>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <p className="text-white text-lg md:text-xl font-medium tracking-wide">
                Can't wait to celebrate with you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
