import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Ship, Plane, Shield, ArrowRight, Package, Globe, CheckCircle, Users, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Courier Services (Interstate)',
      description: 'Fast, reliable courier services with customs clearance and logistics support',
      icon: Truck,
      link: '/services/courier',
      gradient: 'from-primary to-secondary',
      services: [
        'Express courier delivery',
        'Customs clearance',
        'Door-to-door service',
        'Package tracking',
        'Same-day delivery',
        'Document courier'
      ]
    },
    {
      title: 'Cargo Services (International)',
      description: 'Comprehensive international cargo solutions by sea and air',
      icon: Ship,
      link: '/services/cargo',
      gradient: 'from-accent to-primary',
      services: [
        'Sea freight consolidation',
        'Full container load (FCL)',
        'Air freight services',
        'Break bulk cargo',
        'Out-of-gauge shipments',
        'Project cargo'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: 'Customs Brokerage',
      description: 'Expert customs clearance and compliance services for seamless imports and exports',
      gradient: 'from-secondary to-accent'
    },
    {
      icon: Plane,
      title: 'Express Air Freight',
      description: 'Time-critical air cargo services with real-time tracking and delivery confirmation',
      gradient: 'from-primary to-accent'
    }
  ];

  const serviceStats = [
    { icon: Package, number: '2000+', label: 'Shipments Monthly' },
    { icon: Globe, number: '50+', label: 'Countries Served' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Star, number: '99%', label: 'Customer Satisfaction' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Discuss your specific logistics requirements with our experts',
      icon: Users
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Develop a customized logistics solution tailored to your needs',
      icon: Package
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Implement the solution with full tracking and communication',
      icon: Truck
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Ensure successful delivery with confirmation and documentation',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-slate-300 via-blue-100 to-indigo-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12 sm:mb-16 relative z-10 px-4 sm:px-6">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Our Services
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-b from-secondary/20 to-accent bg-clip-text text-transparent">
                Comprehensive
              </span>
              <span className="block bg-gradient-to-b from-accent to-primary bg-clip-text text-transparent">
                logistics Solutions
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              From express courier to international cargo, we provide end-to-end logistics solutions tailored to your business needs
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {serviceStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-custom mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-whiterelative"></div>        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Ship className="w-4 h-4 mr-2" />
              Core Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our specialized service categories designed to meet different logistics requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <CardHeader className="text-center pb-6">
                    <div className={`w-24 h-24 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-primary-custom mb-4">
                      {category.title}
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-8">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-accent-custom mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-lg group/btn">
                      <Link to={category.link} className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Additional Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Complementary Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized services to support your complete logistics needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-custom mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A streamlined approach to handling your logistics requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 relative group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{process.step}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-custom mb-4">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Why Choose ECS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              The ECS Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              What makes us the preferred logistics partner in Seychelles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Reliability',
                description: 'Consistent, dependable service you can count on'
              },
              {
                icon: Clock,
                title: 'Responsiveness',
                description: 'Quick turnaround times and proactive communication'
              },
              {
                icon: Globe,
                title: 'Professionalism',
                description: 'Expert handling with industry-leading standards'
              },
              {
                icon: Users,
                title: 'Experience',
                description: '15+ years of logistics expertise in the region'
              },
              {
                icon: Package,
                title: 'Comprehensive',
                description: 'End-to-end solutions for all your logistics needs'
              },
              {
                icon: Star,
                title: 'Quality',
                description: 'Commitment to excellence in every shipment'
              }
            ].map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-custom mb-4">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-white via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Solve Your Logistics Challenges
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Contact our logistics experts to discuss your specific requirements and get a customized solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg group"
            >
              <Link to="/contact" className="flex items-center">
                Get Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg group"
            >
              <Link to="/about" className="flex items-center">
                Learn More
                <Users className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
