import React from 'react';
import { Ship, Plane, Container, Package, CheckCircle, ArrowRight, Globe, Anchor, Users, Clock, TrendingUp, MapPin, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CargoServices = () => {
  const services = [
    {
      icon: Ship,
      title: 'Sea Freight Consolidation',
      description: 'Cost-effective consolidation services for Less than Container Load (LCL) shipments',
      features: ['Guaranteed frequency consolidation services', 'Door to door service', 'Customs documentation', 'Cargo insurance'],
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Container,
      title: 'Full Container Load (FCL)',
      description: 'Dedicated container services for large volume shipments',
      features: ['20ft and 40ft containers', 'Door-to-door service', 'Special equipment available', 'Competitive rates'],
      gradient: 'from-accent to-primary'
    },
    {
      icon: Plane,
      title: 'Air Freight Services',
      description: 'Fast international air cargo for time-sensitive shipments',
      features: ['Express air service', 'Temperature controlled', 'Dangerous goods certified', 'Real-time tracking'],
      gradient: 'from-secondary to-accent'
    },
    {
      icon: Package,
      title: 'Specialized Cargo',
      description: 'Break bulk and out-of-gauge shipment handling',
      features: ['Project cargo expertise', 'Heavy lift capabilities', 'Custom packaging', 'Route surveys'],
      gradient: 'from-primary to-accent'
    }
  ];

  const routes = [
    { from: 'Jebel Ali, UAE', to: 'Seychelles', mode: 'Routing - Direct', frequency: 'Fortnightly', gradient: 'from-primary to-secondary' },
    { from: 'Mumbai, India', to: 'Seychelles', mode: 'Routing - Via Mauritius', frequency: 'Weekly', gradient: 'from-accent to-primary' },
    { from: 'Port Louis, Mauritius', to: 'Seychelles', mode: 'Routing - Direct', frequency: 'Weekly', gradient: 'from-secondary to-accent' },
    { from: 'Durban, South Africa', to: 'Seychelles', mode: 'Routing - Direct', frequency: 'Weekly', gradient: 'from-primary to-accent' },
    { from: 'Le Havre, France - and Europe origins', to: 'Seychelles', mode: 'Routing - Via Mauritius', frequency: 'Weekly', gradient: 'from-accent to-secondary' },
    { from: 'Shenzhen, China', to: 'Seychelles', mode: 'Routing - Direct', frequency: 'Weekly', gradient: 'from-secondary to-primary' }
  ];

  const cargoStats = [
    { icon: Container, number: '2000+', label: 'Containers Handled' },
    { icon: Globe, number: '50+', label: 'Global Routes' },
    { icon: Clock, number: '24/7', label: 'Tracking Support' },
    { icon: Shield, number: '99.5%', label: 'Delivery Success' }
  ];

  const industries = [
    { name: 'Tourism & Hospitality', icon: Users },
    { name: 'Construction', icon: Package },
    { name: 'Automotive', icon: Anchor },
    { name: 'Electronics', icon: Zap },
    { name: 'Food & Beverage', icon: Package },
    { name: 'Pharmaceuticals', icon: Shield },
    { name: 'Textiles', icon: Package },
    { name: 'Machinery', icon: Package }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-end h-[100vh] w-full bg-cover bg-left bg-[length:120%]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1670121180583-39ab653a071c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/30" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto w-full">
          <br /><br />

          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm text-white">
              <Ship className="mr-2 w-4 h-4" />
              Cargo Services
            </span>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              International Cargo&nbsp;
              <span className="text-white">Solutions</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="max-w-2xl text-base sm:text-lg text-white/80 mx-auto">
              Comprehensive sea and air freight solutions connecting Seychelles to global markets with reliability and efficiency
            </p>
          </div>

          {/* Stats Section - Uniform Icon Sizes */}
          {/* <div className="mb-8 w-full max-w-4xl">
            <div className="rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
                {cargoStats.map((stat, index) => {
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

      {/* Services Overview - Improved Layout with Better Icon Spacing */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Container className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Comprehensive Cargo Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From sea freight consolidation to specialized cargo handling, we provide complete logistics solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  {/* Header with Icon and Title */}
                  <CardHeader className="pb-4">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl text-primary-custom mb-3">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                    </div>
                  </CardHeader>

                  {/* Features List */}
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
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

      {/* Shipping Routes - Uniform Icon Sizes */}
      <section className="py-24 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Shipping Routes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Global Connectivity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Regular Sea Groupage import services connecting Seychelles to Key international markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routes.map((route, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Ship className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-primary-custom mb-2">
                      {route.from}
                    </div>
                    <div className="text-2xl sm:text-3xl text-accent-custom mb-2">
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-primary-custom mb-6">
                      {route.to}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-sm text-gray-600">
                        <Plane className="w-4 h-4 mr-2" />
                        <span className="font-medium">Mode:</span>&nbsp;{route.mode}
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-medium">Frequency:</span>&nbsp;{route.frequency}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features - Uniform Icon Sizes */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Package className="w-4 h-4 mr-2" />
              Complete Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              End-to-End Cargo Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional handling at every stage of your cargo journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Export Services',
                icon: TrendingUp,
                gradient: 'from-primary to-secondary',
                items: ['Export documentation', 'Customs clearance', 'Port handling', 'Loading supervision', 'Bill of lading']
              },
              {
                title: 'Import Services',
                icon: Globe,
                gradient: 'from-accent to-primary',
                items: ['Import clearance', 'Duty calculation', 'Delivery coordination', 'Warehousing', 'Distribution']
              },
              {
                title: 'Value-Added Services',
                icon: Shield,
                gradient: 'from-secondary to-accent',
                items: ['Cargo insurance', 'Packaging services', 'Quality inspection', 'Storage solutions', 'Project management']
              }
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <CardHeader>
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-primary-custom">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-accent-custom mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
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

      {/* Industries Served - Uniform Icon Sizes */}
      <section className="py-24 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Industries We Serve
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Specialized Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored cargo solutions for diverse industry requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-primary-custom">{industry.name}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documentation & Compliance - Uniform Icon Sizes */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Documentation & Compliance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Expert Documentation Handling
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional handling of all cargo documentation and regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-primary-custom">
                    Export Documentation
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    'Commercial invoices',
                    'Packing lists',
                    'Export licenses',
                    'Certificates of origin',
                    'Insurance certificates',
                    'Shipping instructions'
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-custom mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-primary-custom">
                    Import Documentation
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    'Import permits',
                    'Customs declarations',
                    'Bill of lading/Airway bill',
                    'Duty calculations',
                    'Phytosanitary certificates',
                    'Quality certificates'
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-custom mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action - Uniform Icon Sizes */}
      <section className="py-24 bg-gradient-to-b from-white via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Ship className="w-4 h-4 mr-2" />
            Ready to Ship?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Ship Internationally?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Contact our cargo specialists for a detailed quote and shipping plan tailored to your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg group"
            >
              <Link to="/contact" className="flex items-center">
                Get Cargo Quote
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

export default CargoServices;
