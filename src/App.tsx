import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import { Heart, PenTool, Users, Sparkles, Gift, Crown, Star, Flower, BookOpen, Quote, Music, Play } from 'lucide-react';

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-2/3 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-300/30 to-pink-300/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>
      {/* Floating Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0,
            }}
            animate={{ 
              y: -100,
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {i % 4 === 0 ? <Sparkles className="w-4 h-4 text-pink-400" /> :
             i % 4 === 1 ? <Star className="w-4 h-4 text-yellow-400" /> :
             i % 4 === 2 ? <Heart className="w-3 h-3 text-red-400" /> :
             <Crown className="w-4 h-4 text-purple-400" />}
          </motion.div>
        ))}
      </div>

      {/* Floating Song Button */}
      <motion.div
        className="fixed top-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            y: [0, -5, 0],
            boxShadow: [
              "0 10px 30px rgba(168, 85, 247, 0.4)",
              "0 20px 40px rgba(236, 72, 153, 0.4)",
              "0 10px 30px rgba(168, 85, 247, 0.4)"
            ]
          }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Button 
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-2xl"
              >
                🎵
              </motion.div>
            </div>
          </Button>
        </motion.div>
      </motion.div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: ['#ff6b9d', '#ffd93d', '#6bcf7f', '#4dabf7', '#9775fa'][i % 5],
                left: Math.random() * 100 + '%',
                top: -20,
              }}
              animate={{
                y: typeof window !== 'undefined' ? window.innerHeight + 100 : 900,
                x: [-50, 50][Math.floor(Math.random() * 2)],
                rotate: 720,
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}



      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl mb-2 bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Happy Birthday Madhu ji! 🎉
          </motion.h1>
          <motion.p 
            className="text-2xl text-purple-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Our beloved "Peddamanishi" 👑
          </motion.p>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Celebrating a respected elder and extraordinary woman on her special day
          </motion.p>
          
          {/* Interactive Birthday Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6"
          >
            <Button 
              onClick={triggerConfetti}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              🎊 Celebrate Peddamanishi! 🎊
            </Button>
          </motion.div>
        </motion.div>

        {/* Cake Section */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <ImageWithFallback
              src="/123.jpg"
              alt="Birthday Cake"
              className="w-96 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
            />
            <motion.div
              className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎂
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🌟
            </motion.div>
            <motion.div
              className="absolute top-1/2 -left-6 bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💝
            </motion.div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Card className="p-8 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 border-2 border-yellow-300 shadow-xl max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <motion.p 
              className="text-2xl italic text-gray-700 mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "A mother's heart is a patchwork of love, sewn together with threads of wisdom, patience, and endless care"
            </motion.p>
            <p className="text-lg text-purple-600">- For our dear Peddamanishi</p>
          </Card>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex justify-center items-center space-x-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center shadow-lg">
                <Crown className="w-12 h-12 text-purple-600" />
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl"
            >
              ✨
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-200 to-pink-200 flex items-center justify-center shadow-lg">
                <Heart className="w-12 h-12 text-red-500" />
              </div>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl"
            >
              🌺
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-200 to-blue-200 flex items-center justify-center shadow-lg">
                <PenTool className="w-12 h-12 text-blue-600" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* About Madhu Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-pink-200 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Users className="w-8 h-8 text-pink-500 mr-3" />
                  </motion.div>
                  <h3 className="text-2xl text-pink-700">Family Woman</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Respected Madhu ji embodies the essence of a devoted family woman, gracefully juggling countless responsibilities with unwavering dedication. Her wisdom and strength lie in her ability to nurture, support, and bring everyone together.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-purple-200 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <PenTool className="w-8 h-8 text-purple-500 mr-3" />
                  </motion.div>
                  <h3 className="text-2xl text-purple-700">Gifted Writer</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  With words as her canvas and imagination as her brush, Madhu ji weaves stories that touch souls and inspire minds. Her writing reflects her deep understanding of life, love, and human emotions.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-yellow-200 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-8 h-8 text-red-500 mr-3" />
                  </motion.div>
                  <h3 className="text-2xl text-red-700">Soft Heart</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Madhu ji's heart is a sanctuary of compassion and kindness. Her empathy knows no bounds, and her gentle nature brings comfort to everyone around her. Her soft heart and maternal wisdom are her greatest strengths.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-green-200 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Crown className="w-8 h-8 text-green-500 mr-3" />
                  </motion.div>
                  <h3 className="text-2xl text-green-700">Peddamanishi</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The title "Peddamanishi" reflects the respect and love she commands. She is the pillar of strength, the wise counselor, and the loving matriarch who guides with grace and dignity.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>



        {/* Birthday Wishes */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <Card className="p-12 bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 border-2 border-pink-300 shadow-2xl">
            <motion.h2 
              className="text-4xl mb-6 text-purple-800"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Birthday Wishes for Our Peddamanishi
            </motion.h2>
            <div className="space-y-4 text-lg text-gray-700 max-w-4xl mx-auto">
              <p>
                Respected Madhu ji, on this special day, I celebrate not just another year of your life, but another year of the incredible impact you've made on everyone around you.
              </p>
              <p>
                Your ability to balance family responsibilities while pursuing your passion for writing is truly inspiring. You show us that it's possible to be devoted to our loved ones while still nurturing our own dreams and talents.
              </p>
              <p>
                Your soft heart and compassionate nature make you like a second mother to many. You offer guidance with patience, love with unconditional acceptance, and wisdom with humble grace that comes from your years of experience.
              </p>
              <p>
                As our beloved Peddamanishi, you represent strength, wisdom, and unconditional love. Your presence brings warmth to every gathering, your words bring comfort to troubled hearts, and your stories bring joy to all who listen.
              </p>
              <p>
                May this new year bring you moments of joy that match the joy you bring to others. May your writing continue to flourish and touch even more hearts. May your family bonds grow stronger, and may you find time for yourself to rest and be cherished as you deserve.
              </p>
              <motion.p 
                className="text-2xl text-pink-700 mt-8"
                animate={{ color: ['#be185d', '#7c3aed', '#d97706', '#be185d'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Happy Birthday, dear Peddamanishi! 🎂✨🎉
              </motion.p>
            </div>
          </Card>
        </motion.div>



        {/* Footer */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
        >
          <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-full px-8 py-4 inline-block shadow-lg">
            <p className="text-purple-800 text-lg">
              With love and respect from Tiru 💝
            </p>
          </div>
          
          {/* Age/Years Celebration */}
          <motion.div
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="text-4xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.2 
                }}
              >
                {['🎈', '🎀', '🌺', '👑', '✨'][i]}
              </motion.div>
            ))}
          </motion.div>

          {/* Final Statement */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg max-w-2xl mx-auto">
              <motion.p 
                className="text-lg text-gray-700 mb-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                "maryada ekkuva ayindi le. Mursipondi"
              </motion.p>
              <motion.p 
                className="text-lg text-blue-600"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                itlu mi venkata venkata venkata venkatesh (Rarest Guy) 😂
              </motion.p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}