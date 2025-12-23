import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Globe, FileText, HelpCircle, Phone, Mail, MessageSquare, Search, BookOpen, ArrowRight, CheckCircle, Users, Clock } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: 'General Services',
      icon: BookOpen,
      gradient: 'from-primary to-secondary',
      questions: [
        {
          q: 'What logistics services do you provide in Seychelles?',
          a: 'We offer complete logistics solutions including sea and air freight, express courier services, customs clearance, warehousing, and local delivery. Whether it’s a single parcel or a full container, we manage the process from pickup to delivery.'
        },
        {
          q: 'Can you handle both business and personal shipments?',
          a: 'Yes, we cater to individuals, small businesses, and large companies. Whether you’re importing goods for your store or sending personal items overseas, we provide solutions tailored to your needs.'
        },
        {
          q: 'Do you provide door-to-door service?',
          a: 'Absolutely. We can arrange collection at the origin, handle international transport, clear customs in Seychelles, and deliver directly to your address.'
        }
      ]
    },
    {
      title: 'Courier Services',
      icon: MessageSquare,
      gradient: 'from-accent to-primary',
      questions: [
        {
          q: 'How fast can you deliver express courier shipments?',
          a: 'Most international express courier shipments reach Seychelles in 2–5 business days, depending on the origin country and service level.'
        },
        {
          q: 'Do you offer same-day delivery in Seychelles?',
          a: 'Yes, for shipments already cleared through customs, we can arrange same-day delivery within Mahé. We also service Praslin and La Digue via scheduled inter-island transport.'
        },
        {
          q: 'Can I track my courier shipment?',
          a: (
            <>
              Yes. All courier shipments come with a tracking number so you can follow your package in real time from pickup to delivery through our partners tracking pages:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <a href="https://www.chronopost.fr/en/track-your-parcel" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Chronopost
                  </a>
                </li>
                <li>
                  <a href="https://www.skynet.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Skynet
                  </a>
                </li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'International Transport Services',
      icon: Users,
      gradient: 'from-secondary to-accent',
      questions: [
        {
          q: 'Do you handle both import and export cargo?',
          a: 'Yes, we manage both inbound and outbound shipments by sea and air, working with a global network of partners to ensure smooth connections to and from Seychelles.'
        },
        {
          q: 'What shipping options do you offer for sea freight?',
          a: 'We provide both Full Container Load (FCL) and Less than Container Load (LCL) services, including our own LCL consolidation services for cost-effective smaller shipments.'
        },
        {
          q: 'Can you arrange air freight for urgent cargo?',
          a: 'Definitely. We work with major airlines to arrange priority air freight for time-sensitive shipments, ensuring the fastest possible transit times.'
        },
        {
          q: 'What types of cargo can you handle?',
          a: 'We handle all types of cargo including general freight, containers (FCL), consolidation shipments (LCL), break bulk, project cargo, out-of-gauge shipments, and temperature-controlled goods.'
        },
        {
          q: 'How often do you have cargo sailings?',
          a: 'We have regular sailings schedules with weekly services from major origin markets such as Dubai, Mauritius, China, India, Europe, by sea groupage or full containers. Air freight is available daily on most origins'
        },
        {
          q: 'Do you provide cargo insurance?',
          a: 'Yes, we offer comprehensive cargo insurance options to protect your shipments against loss, damage, or delays during transportation. Insurance can be arranged for both sea and air freight.'
        }
      ]
    },
    {
      title: 'Pricing Inquiries',
      icon: DollarSign,
      gradient: 'from-primary to-secondary',
      questions: [
        {
          q: 'How can I request a shipping quote?',
          a: 'You can email us at info@ecs-seychelles.com or use our online Quote Request Form on our website. Simply provide your shipment details, and our team will respond promptly with a tailored quotation.'
        },
        {
          q: 'Do you provide quotes for both courier and freight services?',
          a: 'Yes. We offer quotes for express courier shipments, sea freight (FCL and LCL), and air freight, as well as customs clearance and local delivery.'
        },
        {
          q: 'How long does it take to receive a quote?',
          a: 'Most quote requests are answered within 24 hours during working days. For more complex shipments requiring special handling or permits, we will inform you if additional time is needed.'
        }
      ]
    },
    {
      title: 'Service Availability',
      icon: Globe,
      gradient: 'from-accent to-primary',
      questions: [
        {
          q: 'Do you operate services to and from any country?',
          a: 'We serve most major global trade lanes through our network of international partners. For specific destinations, our team will confirm service availability and transit times.'
        },
        {
          q: 'Do you provide local delivery within Seychelles?',
          a: 'Yes. We deliver across Mahé and can arrange transport to Praslin and La Digue via inter-island services.'
        },
        {
          q: 'Can you handle urgent shipments?',
          a: 'Absolutely. We can arrange priority air freight or express courier services for urgent cargo, subject to airline and partner schedules.'
        }
      ]
    },
    {
      title: 'Tracking & Updates',
      icon: CheckCircle,
      gradient: 'from-primary to-accent',
      questions: [
        {
          q: 'How can I track my courier shipment?',
          a: 'Courier shipments can be tracked via our international partner’s website using the tracking number we provide once your shipment is dispatched.'
        },
        {
          q: 'Can I track my sea freight LCL shipment online?',
          a: 'No, not for the time being, but in our constant improvement strategy, we are planning to make that feature available at the earliest possible through our website'
        },
        {
          q: 'Do you send updates during the shipping process?',
          a: 'Yes. We provide shipment status updates at key milestones, such as booking, pickup, departure, arrival, customs clearance, and final delivery. The process is fully transparent for your full information.'
        }
      ]
    },
    {
      title: 'Customs & Documentation',
      icon: FileText,
      gradient: 'from-secondary to-accent',
      questions: [
        {
          q: 'What documents do I need for international shipping?',
          a: 'Required documents typically include commercial invoices, packing lists, export/import licenses, certificates of origin, and specific permits depending on the cargo type. Our team will guide you through all requirements.'
        },
        {
          q: 'How are customs duties calculated?',
          a: 'Customs duties are calculated based on the value, quantity, and classification of goods according to Seychelles customs regulations. The cargo value for customs is always inclusive of the transportation cost from origin to Seychelles. Our customs brokers will provide accurate duty calculations before clearance.'
        },
        {
          q: 'Can you help with import permits and licenses?',
          a: 'Yes, our customs brokerage team assists with obtaining necessary import permits, licenses, and certificates required for specific types of goods entering Seychelles.'
        }
      ]
    }
  ];


  const supportOptions = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our logistics experts',
      contact: '+248 432 5922',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your detailed questions',
      contact: 'info@ecsseychelles.com',
      gradient: 'from-accent to-primary'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[100vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1475914721800-bf8fa52930b5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/30" />

        {/* centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto w-full">
          <br /><br />

          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm text-white">
              <HelpCircle className="mr-2 h-4 w-4" />
              Frequently Asked Questions
            </span>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Get Your Questions&nbsp;
              <span className="text-white">Answered</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="max-w-2xl text-base sm:text-lg text-white/80 mx-auto">
              Find comprehensive answers to common questions about our logistics services and solutions
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mb-8 w-full max-w-4xl">
            <div className="rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-white/80 text-sm">FAQ Answers</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-white/80 text-sm">Support Available</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-white/80 text-sm">Questions Resolved</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">2min</div>
                  <div className="text-white/80 text-sm">Average Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Navigation */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-whiterelative"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Search className="w-4 h-4 mr-2" />
              Browse by Category
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Find What You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse our comprehensive FAQ organized by service categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
            {faqCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-custom mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.questions.length} questions answered
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-accent text-accent hover:bg-accent hover:text-white group/btn"
                      onClick={() => document.getElementById(`category-${index}`)?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      View Questions
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {faqCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <div key={categoryIndex} id={`category-${categoryIndex}`}>
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-primary-custom mb-2">
                          {category.title}
                        </h3>
                        <p className="text-gray-600">
                          {category.questions.length} frequently asked questions
                        </p>
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-6">
                            <span className="text-lg font-semibold text-primary-custom pr-4">
                              {faq.q}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-6 text-base">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              Need More Help?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Our customer support team is here to help with any specific questions about your logistics needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary-custom mb-4">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {option.description}
                      </p>
                      <p className="text-lg font-semibold text-accent-custom">
                        {option.contact}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-white via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Quick Support
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive services or get in touch with our team for personalized logistics solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg group"
            >
              <span className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-primary hover:bg-white hover:text-primary px-8 py-4 text-lg group"
            >
              <span className="flex items-center">
                Contact Support
                <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
