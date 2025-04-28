
import React from 'react';
import { Card } from "@/components/ui/card";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

interface BusinessCardProps {
  name: string;
  title: string;
  company: string;
  phone: string;
  email: string;
  website: string;
  address: string;
}

const BusinessCard = ({
  name = "Anuj Ghodke",
  title = "Web Developer",
  company = "Infosys",
  phone = "+91 1234567890",
  email = "anujghodke@gmail.com",
  website = "www.anuj.com",
  address = "Amrutdham, Nashik-422003"
}: Partial<BusinessCardProps>) => {
  return (
    <div className="perspective-1000">
      <Card className="w-[400px] h-[225px] rounded-xl p-6 bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm opacity-90">{title}</p>
            <p className="text-sm font-semibold">{company}</p>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} />
              <span>{website}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{address}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BusinessCard;
