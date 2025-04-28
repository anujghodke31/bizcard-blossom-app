
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import BusinessCard from './BusinessCard';

const CardEditor = () => {
  const [cardData, setCardData] = useState({
    name = "Anuj Ghodke",
    title = "Web Developer",
    company = "Infosys",
    phone = "+91 1234567890",
    email = "anujghodke@gmail.com",
    website = "www.anuj.com",
    address = "Amrutdham, Nashik-422003"
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Edit Your Card</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={cardData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              name="title"
              value={cardData.title}
              onChange={handleChange}
              placeholder="Enter your job title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={cardData.company}
              onChange={handleChange}
              placeholder="Enter your company"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={cardData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={cardData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              name="website"
              value={cardData.website}
              onChange={handleChange}
              placeholder="Enter your website"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={cardData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>
        </div>
      </div>
      <div className="sticky top-4">
        <h2 className="text-2xl font-bold mb-6">Preview</h2>
        <BusinessCard {...cardData} />
      </div>
    </div>
  );
};

export default CardEditor;
