import { CardStack } from './CardStack';

// Mock data for demonstration
const mockProfiles = [
  {
    id: '1',
    name: 'Alexander',
    age: 32,
    photo: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTY2MTgyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Investment Banker',
    bio: 'Passionate about art, fine dining, and weekend adventures in the Hamptons.'
  },
  {
    id: '2',
    name: 'Marcus',
    age: 29,
    photo: 'https://images.unsplash.com/photo-1679485895677-2e685b04c3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMGJ1c2luZXNzbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NjE4MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Tech Entrepreneur',
    bio: 'Building the future while collecting vintage watches and sailing on weekends.'
  },
  {
    id: '3',
    name: 'Sebastian',
    age: 35,
    photo: 'https://images.unsplash.com/photo-1754485115880-fc5d5103d0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBtYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTY2MTgyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Architect',
    bio: 'Designing spaces that inspire, with a love for jazz and Mediterranean cuisine.'
  },
  {
    id: '4',
    name: 'Julian',
    age: 31,
    photo: 'https://images.unsplash.com/photo-1568184737116-394a80864236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NjE4MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Art Dealer',
    bio: 'Curator of beauty, collector of stories, believer in serendipitous encounters.'
  },
  {
    id: '5',
    name: 'Maximilian',
    age: 28,
    photo: 'https://images.unsplash.com/photo-1609818902866-a1076a14484a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWFuJTIwcGhvdG98ZW58MXx8fHwxNzU2NjE4MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Sommelier',
    bio: 'Discovering exceptional wines and sharing them with those who appreciate the finer things.'
  }
];

interface ForYouProps {
  onDecision?: (profileId: string, decision: 'yes' | 'no' | 'maybe' | 'open') => void;
}

export function ForYou({ onDecision }: ForYouProps) {
  const handleDecision = (profileId: string, decision: 'yes' | 'no' | 'maybe' | 'open') => {
    console.log(`Decision for ${profileId}: ${decision}`);
    onDecision?.(profileId, decision);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      {/* Header */}
      <header className="px-6 pt-12 pb-8">
        <h1 className="text-4xl font-display text-white tracking-tight mb-2">
          For You
        </h1>
        <p className="text-[#BDBDBD] font-body">
          Curated introductions await your consideration
        </p>
      </header>

      {/* Main Content */}
      <div className="flex-1 px-6 pb-20 flex flex-col">
        <CardStack 
          profiles={mockProfiles} 
          onDecision={handleDecision}
        />
      </div>
    </div>
  );
}