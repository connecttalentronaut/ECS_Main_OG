// src/pages/home/ServicesOverview.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    id: 'transportation',
    name: 'Transportation',
    services: [
      {
        title: 'Sea Transport',
        image: 'https://images.unsplash.com/photo-1751970046974-6d5a27f23ce1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Full container loads, consolidation, and break bulk shipments worldwide.',
        buttons: [
          { text: 'Read more', variant: 'outline', href: '/services/cargo' },
          { text: 'Talk to an expert', variant: 'solid', href: '/contact' }
        ]
      },
      {
        title: 'Air Transport',
        image: 'https://images.unsplash.com/photo-1523833082115-1e8e294bd14e?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Fast and reliable air cargo services for time-sensitive shipments.',
        buttons: [
          { text: 'Read more', variant: 'outline', href: '/services/cargo' },
          { text: 'Talk to an expert', variant: 'solid', href: '/contact' }
        ]
      },
      {
        title: 'Road Transport - FTL, LTL and Groupage services',
        image: 'https://plus.unsplash.com/premium_photo-1664297213086-9edac5ffa4cf?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Interstate express courier with customs clearance and logistics support.',
        buttons: [
          { text: 'Read more', variant: 'outline', href: '/services/courier' },
          { text: 'Talk to an expert', variant: 'solid', href: '/contact' }
        ]
      }
    ]
  },
  {
    id: 'fulfillment',
    name: 'Fulfillment',
    services: [
      {
        title: 'Warehouse Solutions',
        image: 'https://plus.unsplash.com/premium_photo-1681426730828-bfee2d13861d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Complete warehousing and distribution services.',
        buttons: [
          { text: 'Read more', variant: 'outline', href: '/services' },
          { text: 'Talk to an expert', variant: 'solid', href: '/contact' }
        ]
      }
    ]
  },
  {
    id: 'value-added',
    name: 'Value-added services',
    services: [
      {
        title: 'Customs Brokerage',
        image: 'https://plus.unsplash.com/premium_photo-1681487855134-d6c0434f91f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Expert customs clearance and compliance services.',
        buttons: [
          { text: 'Read more', variant: 'outline', href: '/services' },
          { text: 'Talk to an expert', variant: 'solid', href: '/contact' }
        ]
      }
    ]
  }
];

const ServicesOverview = () => {
  const [activeTab, setActiveTab] = useState('transportation');

  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-100 to-white relative">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From express courier services to international freight, we provide
            end-to-end logistics solutions tailored to your business needs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 text-lg font-medium transition-colors relative ${
                activeTab === category.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory?.services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 p-8 h-96 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {service.buttons.map((button, btnIndex) => (
                    <Link
                      key={btnIndex}
                      to={button.href}
                      className={`px-6 py-3 rounded-lg font-medium text-center transition-all duration-300 ${
                        button.variant === 'outline'
                          ? 'bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black'
                          : 'bg-primary hover:bg-primary/90 text-white'
                      }`}
                    >
                      {button.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
