
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardEditor from '@/components/CardEditor';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Details = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            BizCard Pro
          </h1>
          <p className="text-gray-600">Create your professional business card in minutes</p>
        </header>
        
        <main>
          <CardEditor />
          <div className="flex justify-center mt-8">
            <Button 
              onClick={() => navigate('/design')}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Proceed to Design
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Details;
