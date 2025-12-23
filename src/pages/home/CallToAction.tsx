import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-accent to-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-transparent"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
          <MapPin className="w-4 h-4 mr-2" />
          Get Started Today
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Ship with Confidence?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Get in touch with our logistics experts for a customized shipping solution
          that meets your specific requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg group/btn"
          >
            <Link to="/contact" className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
