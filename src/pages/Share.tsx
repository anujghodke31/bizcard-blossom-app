
import React from 'react';
import BusinessCard from '@/components/BusinessCard';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Share = () => {
  const { toast } = useToast();
  
  const handleShare = (method: string) => {
    toast({
      title: "Sharing via " + method,
      description: "This feature will be implemented soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            Share Your Card
          </h1>
          <p className="text-gray-600">Choose how you want to share your business card</p>
        </header>
        
        <main className="flex flex-col items-center gap-8">
          <BusinessCard />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
            <Button 
              onClick={() => handleShare('Email')}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Share2 size={20} />
              Share via Email
            </Button>
            
            <Button 
              onClick={() => handleShare('Download')}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Share2 size={20} />
              Download as Image
            </Button>
            
            <Button 
              onClick={() => handleShare('LinkedIn')}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Share2 size={20} />
              Share on LinkedIn
            </Button>
            
            <Button 
              onClick={() => handleShare('QR Code')}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Share2 size={20} />
              Generate QR Code
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Share;
