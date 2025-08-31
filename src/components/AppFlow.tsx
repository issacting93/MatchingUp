import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { InviteRedeem } from './InviteRedeem';
import { Onboarding } from './Onboarding';
import { ForYou } from './ForYou';
import { MatchNotification } from './MatchNotification';

type FlowState = 'invite' | 'onboarding' | 'discover' | 'match';

interface OnboardingData {
  firstName: string;
  age: string;
  photo: File | null;
  bio: string;
}

interface MatchData {
  profileId: string;
  name: string;
  photo: string;
}

export function AppFlow() {
  const [flowState, setFlowState] = useState<FlowState>('invite');
  const [userProfile, setUserProfile] = useState<OnboardingData | null>(null);
  const [currentMatch, setCurrentMatch] = useState<MatchData | null>(null);

  const handleInviteRedeemed = (code: string) => {
    console.log('Invite redeemed:', code);
    // Here you would validate the invite code
    setFlowState('onboarding');
  };

  const handleOnboardingComplete = (data: OnboardingData) => {
    console.log('Onboarding complete:', data);
    setUserProfile(data);
    setFlowState('discover');
  };

  const handleDecision = (profileId: string, decision: 'yes' | 'no' | 'maybe' | 'open') => {
    console.log(`Decision for ${profileId}: ${decision}`);
    
    // Simulate a match (20% chance on "yes")
    if (decision === 'yes' && Math.random() < 0.2) {
      // Mock match data - in real app this would come from your backend
      const mockMatches: Record<string, MatchData> = {
        '1': { profileId: '1', name: 'Alexander', photo: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTY2MTgyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
        '2': { profileId: '2', name: 'Marcus', photo: 'https://images.unsplash.com/photo-1679485895677-2e685b04c3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMGJ1c2luZXNzbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NjE4MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
      };
      
      const match = mockMatches[profileId];
      if (match) {
        setTimeout(() => {
          setCurrentMatch(match);
          setFlowState('match');
        }, 1000); // Delay to let card animation finish
      }
    }
  };

  const handleSayHello = () => {
    console.log('Say hello to:', currentMatch?.name);
    // Here you would navigate to chat or send initial message
    setCurrentMatch(null);
    setFlowState('discover');
  };

  const handleCloseMatch = () => {
    setCurrentMatch(null);
    setFlowState('discover');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <AnimatePresence mode="wait">
        {flowState === 'invite' && (
          <InviteRedeem 
            key="invite"
            onInviteRedeemed={handleInviteRedeemed} 
          />
        )}
        
        {flowState === 'onboarding' && (
          <Onboarding 
            key="onboarding"
            onComplete={handleOnboardingComplete} 
          />
        )}
        
        {flowState === 'discover' && (
          <ForYou 
            key="discover"
            onDecision={handleDecision} 
          />
        )}
      </AnimatePresence>

      {/* Match Notification Overlay */}
      <AnimatePresence>
        {flowState === 'match' && currentMatch && (
          <MatchNotification
            key="match"
            matchPhoto={currentMatch.photo}
            matchName={currentMatch.name}
            onSayHello={handleSayHello}
            onClose={handleCloseMatch}
          />
        )}
      </AnimatePresence>
    </div>
  );
}