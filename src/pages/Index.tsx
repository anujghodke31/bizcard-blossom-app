
import React from 'react';
import CardEditor from '@/components/CardEditor';

const Index = () => {
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
        </main>
      </div>
    </div>
  );
};

export default Index;
