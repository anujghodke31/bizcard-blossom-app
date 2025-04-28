
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessCard from '@/components/BusinessCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Design = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            Design Your Card
          </h1>
          <p className="text-gray-600">Customize the look of your business card</p>
        </header>
        
        <main className="flex flex-col items-center gap-8">
          <BusinessCard />
          <div className="flex justify-center mt-4">
            <Button 
              onClick={() => navigate('/share')}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Proceed to Share
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Design;
