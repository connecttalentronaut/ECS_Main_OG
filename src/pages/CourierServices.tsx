import React from 'react';
import { Truck, Clock, Shield, MapPin, CheckCircle, ArrowRight, Zap, Package, Users, Star, Send, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CourierServices = () => {
  const services = [
    {
      icon: Truck,
      title: 'Express Courier Delivery',
      description: 'Fast, reliable door-to-door delivery services across the Seychelles islands',
      features: ['Same-day delivery available', 'Real-time tracking', 'Proof of delivery', 'Signature confirmation'],
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Shield,
      title: 'Customs Clearance',
      description: 'Expert customs processing for seamless interstate deliveries',
      features: ['Import/export documentation', 'Duty calculation', 'Compliance checking', 'Customs liaison'],
      gradient: 'from-accent to-primary'
    },
    {
      icon: MapPin,
      title: 'Logistics & Transportation',
      description: 'Complete logistics solutions from pickup to final destination',
      features: ['Route optimization', 'Multi-modal transport', 'Warehousing', 'Distribution networks'],
      gradient: 'from-secondary to-accent'
    },
    {
      icon: Clock,
      title: 'Time-Critical Services',
      description: 'Urgent delivery options for time-sensitive shipments',
      features: ['Emergency delivery', '24/7 availability', 'Priority handling', 'Expedited processing'],
      gradient: 'from-primary to-accent'
    }
  ];

  const benefits = [
    {
      icon: Package,
      title: 'Comprehensive Tracking',
      description: 'Real-time tracking from pickup to delivery with SMS notifications'
    },
    {
      icon: Shield,
      title: 'Professional Documentation',
      description: 'Expert handling of all customs and shipping documentation'
    },
    {
      icon: Star,
      title: 'Competitive Pricing',
      description: 'Transparent fees with no hidden costs and competitive rates'
    },
    {
      icon: Clock,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance protection for valuable items'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Professional customer support team available 24/7'
    },
    {
      icon: Zap,
      title: 'Flexible Scheduling',
      description: 'Convenient pickup and delivery schedules to fit your needs'
    }
  ];

  const courierStats = [
    { icon: Truck, number: '500+', label: 'Daily Deliveries' },
    { icon: Clock, number: '2hrs', label: 'Average Delivery Time' },
    { icon: Shield, number: '99%', label: 'Success Rate' },
    { icon: Star, number: '24/7', label: 'Customer Support' }
  ];

  const serviceAreas = [
    {
      title: 'Mahé Island',
      description: 'Complete coverage including Victoria, Beau Vallon, and all districts',
      coverage: '100% coverage',
      gradient: 'from-primary to-secondary'
    },
    {
      title: 'Praslin Island',
      description: 'Regular services to Baie Sainte Anne, Grand Anse, and surrounding areas',
      coverage: 'Daily service',
      gradient: 'from-accent to-primary'
    },
    {
      title: 'La Digue & Others',
      description: 'Scheduled services to La Digue and other outer islands',
      coverage: 'Scheduled service',
      gradient: 'from-secondary to-accent'
    }
  ];

  const pricingTiers = [
    {
      title: 'Standard Delivery',
      description: 'Regular delivery within 1-2 business days',
      features: ['Document courier', 'Package delivery', 'Basic tracking', 'Standard insurance'],
    },
    {
      title: 'Express Delivery',
      description: 'Same-day or next-day delivery options',
      features: ['Priority handling', 'Real-time tracking', 'SMS notifications', 'Enhanced insurance'],
    },
    {
      title: 'Premium Service',
      description: 'White-glove service for valuable items',
      features: ['Dedicated courier', 'Special handling', 'Full insurance', 'Direct communication'],
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Uniform Icon Sizes */}
      <section
        className="relative flex items-center justify-center h-[100vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661483466009-f88fafb4e7ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/30" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto w-full">
          <br /><br />

          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm text-white">
              <Truck className="mr-2 w-4 h-4" />
              Courier Services
            </span>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Express Courier&nbsp;
              <span className="text-white">Solutions</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="max-w-2xl text-base sm:text-lg text-white/80 mx-auto">
              Fast, reliable courier services with customs clearance and full logistics support
            </p>
          </div>

          {/* Stats Section - Uniform Icon Sizes */}
          {/* <div className="mb-8 w-full max-w-4xl">
            <div className="rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
                {courierStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center text-white">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold mb-2">{stat.number}</div>
                      <div className="text-white/80 text-xs sm:text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Services Overview - Uniform Icon Sizes */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Package className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-custom mb-4 sm:mb-6 px-2">
              Complete Courier Solutions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
              <span className="hidden sm:inline">Professional courier services designed for efficient interstate deliveries with expert handling at every step</span>
              <span className="sm:hidden">Professional courier services for efficient deliveries</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 sm:hover:-translate-y-2"
                >
                  <CardHeader className="p-4 sm:p-6">
                    {/* Mobile: Stacked layout, Desktop: Side-by-side */}
                    <div className="flex flex-col sm:flex-row sm:items-start mb-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 sm:mx-0 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="text-center sm:text-left flex-1">
                        <CardTitle className="text-lg sm:text-xl lg:text-2xl text-primary-custom mb-2">
                          {service.title}
                        </CardTitle>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 p-4 sm:p-6 sm:pt-0">
                    <div className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start sm:items-center">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-custom mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" />
                          <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Benefits - Uniform Icon Sizes */}
      <section className="py-24 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              The ECS Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our professional courier solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-custom mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas - Uniform Icon Sizes */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Service Coverage
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Island-Wide Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive courier coverage across the Seychelles archipelago
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-custom mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <span className="inline-block bg-accent/10 text-accent-custom px-4 py-2 rounded-full text-sm font-medium">
                    {area.coverage}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information - Uniform Icon Sizes */}
      <section className="py-24 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Send className="w-4 h-4 mr-2" />
              Service Tiers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No hidden fees, competitive rates, and clear pricing structure for all courier services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => {
              const isHighlight = index === 1;
              return (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 ${isHighlight ? 'ring-2 ring-accent' : ''}`}>
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-primary-custom mb-2">{tier.title}</CardTitle>
                    <p className="text-gray-600 leading-relaxed">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-custom mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action - Uniform Icon Sizes */}
      <section className="py-24 bg-gradient-to-b from-white via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Ready to Ship?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Courier Journey
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Get started with our courier services today. Contact us for a custom quote or to schedule a pickup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg group"
            >
              <Link to="/contact" className="flex items-center">
                Get Quote
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-primary hover:bg-white hover:text-primary px-8 py-4 text-lg group"
            >
              <Link to="/services" className="flex items-center">
                View All Services
                <Package className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourierServices;
