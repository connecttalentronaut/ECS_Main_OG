import React from 'react';
import { Heart, Lightbulb, Globe, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {

  const values = [
    {
      icon: Heart,
      title: "Customer Experience Excellence",
      description:
        "We put our customers at the heart of every decision, delivering service that exceeds expectations",
    },
    {
      icon: Lightbulb,
      title: "Innovation and Progress",
      description:
        "We embrace change, continuously improving our solutions, and bringing fresh ideas to our local market",
    },
    {
      icon: Globe,
      title: "Global Reliability, Local Expertise",
      description:
        "We combine worldwide reach with a deep local knowledge",
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
            Why Choose ECS Seychelles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built on core values that drive everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-custom mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
