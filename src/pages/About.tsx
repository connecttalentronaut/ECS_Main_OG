import React from 'react';
import { Shield, Users, Globe, Award, Building, Target, Heart, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { number: '2014', label: 'Established (Courier)' },
    { number: '2022', label: 'Established (Cargo)' },
    { number: '11', label: 'Years of Experience' },
    { number: '24/7', label: 'Shipment Visibility' }
  ];

  const team = [
    {
      name: 'ECS Seychelles',
      position: 'Brand',
      description: 'Marketing communications under ECS Seychelles, with operations by Excel Courier Services (customs brokerage, local logistics) and Excel Cargo Services (air & sea freight).',
      initials: 'ECS'
    },
    {
      name: 'Excel Courier Services',
      position: 'Customs & Local Logistics',
      description: 'Fully licensed customs brokerage, import permits and certifications, inspections, and last-mile delivery across Seychelles.',
      initials: 'EC'
    },
    {
      name: 'Excel Cargo Services',
      position: 'Air & Sea Freight',
      description: 'Air freight import/export, sea freight FCL, and LCL consolidation including buyer’s consol with strong global partners.',
      initials: 'XC'
    }
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Courier & Brokerage Established',
      description: 'Excel Courier Services launched in Victoria, Seychelles with licensed customs brokerage and local logistics.'
    },
    {
      year: '2022',
      title: 'Cargo & Freight Expansion',
      description: 'Excel Cargo Services established to deliver air freight, sea FCL, and LCL consolidation services.'
    },
    {
      year: 'Latest',
      title: 'Network & Capabilities',
      description: 'Built a strong agents network across five continents and secured preferred rates and space with airlines and liners.'
    },
    {
      year: 'Today',
      title: 'End-to-End Solutions',
      description: 'Door-to-door logistics, buyer’s consol platforms, and real-time updates supporting Seychelles businesses.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[100vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617472701191-cab2182b0038?q=80&w=1097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/30" />

        {/* centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto w-full">
          <br /><br />

          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm text-white">
              <Building className="mr-2 h-4 w-4" />
              About ECS Seychelles
            </span>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              <span className="text-white">Global transport & logistics for Seychelles</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="max-w-2xl text-base sm:text-lg text-white/80 mx-auto">
              Every business has unique requirements, and ECS Seychelles design tailored strategies to optimize our customers supply chain.
            </p>
          </div>

          {/* Stats Section */}
          <div className="mb-8 w-full max-w-4xl">
            <div className="rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Our Purpose
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fully licensed customs brokerage, optimized logistics, and seamless end-to-end transport for Seychelles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group bg-primary">
              <CardContent className="p-12 text-white min-h-[400px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
                      <p className="text-white/80 text-lg">What We Do</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    Deliver reliable, cost-controlled air and ocean freight, fully licensed customs clearance, and local last‑mile services—with real-time updates and transparent communication.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      <span>Seamless import and export movements</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      <span>Tailored strategies that optimize supply chains</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      <span>Transparent pricing and end‑to‑end service</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group bg-primary">
              <CardContent className="p-12 text-white min-h-[400px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Our Vision</h3>
                      <p className="text-white/80 text-lg">Where We're Going</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    Be the trusted Seychelles logistics partner—combining Chronopost express courier, strong liner and airline partnerships, and a five‑continent agency network for fast, reliable delivery.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      <span>Regional credibility through quality and speed</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      <span>Innovation with real‑time visibility and tracking</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      <span>Reliable, responsive, and integrity‑led service</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-24 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Growing with Seychelles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Licensed customs expertise, strong maritime and airline partnerships, and a global agency network powering Seychelles trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-white">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-custom mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reliability, responsiveness, professionalism, and integrity—delivered across every shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Reliability',
                description: 'Consistent, safe, and on‑time delivery across Seychelles and worldwide.'
              },
              {
                icon: Zap,
                title: 'Responsiveness',
                description: 'Proactive communication and fast resolution from pickup to last mile.'
              },
              {
                icon: Globe,
                title: 'Professionalism',
                description: 'International standards, licensed brokerage, and secure handling.'
              },
              {
                icon: Award,
                title: 'Integrity',
                description: 'Transparent pricing, open updates, and accountable operations.'
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
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

      {/* Leadership Team */}
      {/* <section className="py-24 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Leadership Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Meet Our Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For launch, we prioritize establishing the ECS Seychelles brand and will personalize leadership later.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-custom mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent-custom font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-white via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Ready to Partner?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the ECS Seychelles Advantage
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Express courier (Chronopost), licensed customs clearance, sea LCL/FCL and buyer’s consol, and cost‑controlled air freight with real‑time updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg group/btn"
            >
              <span className="flex items-center">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
