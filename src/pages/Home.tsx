import React from 'react';
import HomeHero from './home/HomeHero';
import ServicesOverview from './home/ServicesOverview';
import WhyChooseUs from './home/WhyChooseUs';
import CallToAction from './home/CallToAction';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HomeHero />
      <ServicesOverview />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default Home;
