import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InviteRedeemProps {
  onInviteRedeemed?: (code: string) => void;
}

export function InviteRedeem({ onInviteRedeemed }: InviteRedeemProps) {
  const [inviteCode, setInviteCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteCode.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    
    onInviteRedeemed?.(inviteCode);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">
      {/* Cinematic Hero Background */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1691120254965-5158046d3929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2luZW1hdGljJTIwbHV4dXJ5JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTY2MTg3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6">
        <motion.div 
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.0, 0.2, 1] }}
        >
          {/* Headline */}
          <h1 className="text-5xl font-display text-white mb-8 tracking-tight leading-tight">
            An Invitation to Something Rare
          </h1>
          
          {/* Subtext */}
          <p className="text-[#BDBDBD] text-lg mb-12 font-body leading-relaxed">
            You've been selected to join an exclusive community
          </p>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Invite Code Input */}
            <div className="relative">
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="Enter your invite code"
                className="w-full bg-[#121212]/80 border border-[#2A2A2A] rounded-[12px] px-6 py-4 text-white placeholder-[#8C8C8C] font-body text-lg focus:outline-none focus:border-[#C9A44C] transition-colors backdrop-blur-sm"
                autoComplete="off"
                autoCapitalize="none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={!inviteCode.trim() || isLoading}
              className="w-full bg-[#C9A44C] text-[#0A0A0A] py-4 px-6 rounded-[12px] font-medium text-lg font-body disabled:opacity-50 disabled:cursor-not-allowed"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.12 }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />
                  Verifying...
                </div>
              ) : (
                'Enter'
              )}
            </motion.button>
          </motion.form>

          {/* Footer text */}
          <motion.p 
            className="text-[#8C8C8C] text-sm mt-8 font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            By invitation only
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}