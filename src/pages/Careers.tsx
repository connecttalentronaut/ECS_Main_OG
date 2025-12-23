import React, { useState } from 'react';
import { MapPin, Clock, Users, Send, Briefcase, GraduationCap, Star, Award, ArrowRight, CheckCircle, Heart, Target, Globe, FileText, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { sendCareerApplicationEmail } from '@/lib/email';
import JobDetailsModal from '@/components/ui/JobDetailsModal';

const Careers = () => {
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof openPositions[0] | null>(null);
  const { toast } = useToast();

  const openPositions = [
    {
      title: 'Operations & Customer Service Officer',
      location: 'Providence, Mahé – Seychelles',
      availability: 'Immediate',
      openTo: 'Local and expatriate candidates',
      aboutRole: 'This is a transversal position within our freight-forwarding and logistics operations. The Operations & Customer Service Officer will act as the main communication link between our company, customers, shipping lines, airlines, and overseas agents. The role requires excellent organization, strong documentation management, and the ability to follow up on shipments in a structured and timely manner.',
      mainResponsibilities: [
        'Manage daily communication with customers, overseas agents, shipping lines, airlines, and internal teams',
        'Prepare, collect, verify, and distribute all operational documentation (BL/AWB, invoices, packing lists, pre-alerts, arrival notices, transport instructions, etc.)',
        'Track import and export shipments and provide timely status updates to all stakeholders',
        'Coordinate with the operations and customs teams to ensure all steps of the supply chain flow smoothly',
        'Follow up on pending documents, missing information, and operational requirements',
        'Provide customers with accurate and timely information on their shipments',
        'Support the operations team with booking follow-up, pre-alerts, documentation checks, and delivery coordination',
        'Escalate issues proactively and support problem-solving when operational constraints arise',
        'Maintain clear records and ensure internal files are updated and properly structured',
        'Assist in improving internal workflows to increase efficiency and communication consistency',
        'Prepare reports and summaries using Microsoft Office tools'
      ],
      requiredSkills: [
        'Experience in customer service, logistics, freight forwarding, or supply chain preferred',
        'Excellent communication skills in professional English (spoken and written)',
        'Strong organizational and multitasking abilities',
        'Ability to communicate clearly with customers and partners',
        'Competent in Microsoft Office (Excel, Outlook, Word)',
        'Strong attention to detail and accuracy in documentation',
        'Team-oriented mindset with the ability to support multiple departments',
        'Ability to work under pressure and manage multiple deadlines',
        'Positive, proactive, and service-minded attitude',
        'Previous experience in an operations or customer service role in logistics is an advantage',
        'Open to expatriate applicants'
      ],
      whatWeOffer: [
        'A dynamic and supportive work environment',
        'Opportunities for professional growth and training',
        'Exposure to international logistics and global communication',
        'Competitive salary based on experience',
        'Stable, long-term position in a growing company',
        'Training will be available'
      ],
      gradient: 'from-primary to-secondary'
    },
    {
      title: 'Accountant & Administration Officer',
      location: 'Providence, Mahé – Seychelles',
      availability: 'Immediate',
      openTo: 'Expatriate candidates',
      aboutRole: 'We are seeking a reliable and detail-oriented Accountant & Administration Officer to support our finance and administration operations. This position plays a key role in our bookkeeping, cash-flow management, invoicing, debtor control, and preparation of financial information for our external auditors. The role requires excellent coordination with internal teams and strong adherence to financial compliance and processes.',
      mainResponsibilities: [
        'Maintain accurate and up-to-date bookkeeping records for all company transactions',
        'Record and monitor payments, supplier invoices, and bank operations',
        'Perform accounts payable and accounts receivable functions',
        'Prepare, issue, and record customer invoices, ensuring timely debtor follow-up',
        'Support cash flow planning and maintain updated weekly and monthly cash flow statements',
        'Assist management in monitoring expenses, budgets, and variances',
        'Work closely with the external auditors\' office to prepare monthly accounts',
        'Coordinate the compilation of financial information for quarterly audits',
        'Ensure all required supporting documents are available, accurate, and properly filed',
        'Continuously ensure compliance with internal financial procedures and statutory obligations',
        'Implement and follow internal control processes to strengthen financial discipline',
        'Liaise daily with operations, customs, and customer service teams to ensure accurate financial recording',
        'Manage administrative documents, filing systems, account statements, and supporting records',
        'Provide financial updates to company management and assist in strategic financial decisions',
        'Support senior management with ad hoc administrative tasks when needed'
      ],
      requiredSkills: [
        'Diploma or degree in accounting, finance, or business administration (preferred)',
        'Experience in a similar accounting/administration role',
        'Knowledge of bookkeeping, accounts receivable/payable, and payment cycles',
        'Experience with accounting software (QuickBooks or similar)',
        'Strong proficiency in Microsoft Excel and solid understanding of spreadsheets',
        'Professional communication skills in English',
        'Strong attention to detail, analytical mindset, and excellent numerical accuracy',
        'Ability to manage multiple deadlines and work under pressure',
        'High level of professionalism and confidentiality',
        'Open to expatriate applicants'
      ],
      whatWeOffer: [
        'A stable and professional working environment',
        'Continuous exposure to operational and financial processes',
        'Opportunities for skills development and responsibility growth',
        'Competitive salary depending on experience',
        'Long-term career prospects within a growing company',
        'Training will be provided'
      ],
      gradient: 'from-accent to-primary'
    },
    {
      title: 'Customs Declarant',
      location: 'Providence, Mahé – Seychelles',
      availability: 'Immediate',
      openTo: 'Expatriate candidates',
      aboutRole: 'We are a growing freight forwarding and customs brokerage company handling sea freight, air freight, courier, and logistics operations. To support our expanding activities, we are looking for a motivated and skilled Customs Declarant to join our team in Providence.',
      mainResponsibilities: [
        'Prepare and submit customs declarations for import, export, and transit shipments',
        'Classify goods according to the Harmonized System (HS) codes',
        'Ensure full compliance with Seychelles Customs requirements, documentation standards, and regulatory procedures',
        'Coordinate closely with internal teams, customers, and the Customs Department to ensure smooth clearance',
        'Review and verify documentation (invoices, packing lists, BLs, AWBs, certificates)',
        'Monitor the status of each file and ensure timely follow-up to avoid delays',
        'Provide accurate information to clients on duties, taxes, and clearance processes',
        'Track and manage all assigned shipments in a structured, clear, and organised manner',
        'Support operational teams during peak periods and contribute to continuous process improvement',
        'Use Microsoft Office tools to prepare reports, follow-ups, and internal documents',
        'Utilize ASYCUDA World for declaration input (training can be provided)'
      ],
      requiredSkills: [
        'Knowledge of international trade, supply chain processes, and customs formalities',
        'Experience in HS classification and international documentation',
        'Ability to work in a fast-paced environment and handle pressure during peak operational periods',
        'Strong communication skills in professional English',
        'Computer literacy, especially Microsoft Excel and Word',
        'ASYCUDA World knowledge is an advantage',
        'Ability to collaborate with multiple departments and maintain strong customer relationships',
        'Organized, detail-oriented, and capable of managing several shipments at once',
        'Previous experience in a customs brokerage or freight forwarding environment is highly preferred',
        'Open to expatriate applicants'
      ],
      whatWeOffer: [
        'A dynamic and supportive working environment',
        'Opportunities for growth and career development',
        'Exposure to international logistics and customs operations',
        'Competitive remuneration based on experience and performance',
        'Full training for the position'
      ],
      gradient: 'from-secondary to-accent'
    }
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: 'Career Development',
      description: 'Opportunities for professional growth and skills advancement',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Users,
      title: 'Team Environment',
      description: 'Collaborative workplace with supportive colleagues',
      gradient: 'from-accent to-primary'
    },
    {
      icon: GraduationCap,
      title: 'Training Programs',
      description: 'Comprehensive training and certification programs',
      gradient: 'from-secondary to-accent'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and supportive management',
      gradient: 'from-primary to-accent'
    },
    {
      icon: Star,
      title: 'Competitive Benefits',
      description: 'Health insurance, retirement plans, and performance bonuses',
      gradient: 'from-accent to-secondary'
    },
    {
      icon: Award,
      title: 'Recognition Programs',
      description: 'Employee of the month and achievement awards',
      gradient: 'from-secondary to-primary'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendCareerApplicationEmail(applicationData);
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });
      setApplicationData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: ''
      });
    } catch (err) {
      toast({
        title: "Failed to submit",
        description: "Please try again in a moment.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLearnMore = (position: typeof openPositions[0]) => {
    setSelectedJob(position);
    setIsModalOpen(true);
  };

  const handleApplyFromModal = () => {
    if (selectedJob) {
      setApplicationData(prev => ({
        ...prev,
        position: selectedJob.title
      }));
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[100vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1725789088934-e4fba2faf557?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-500/70 via-slate-400/50 to-slate-500/30" />

        {/* centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto w-full">
          <br /><br />

          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              Join Our Team
            </span>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Build Your Career&nbsp;
              <span className="text-white">With ECS Seychelles</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="max-w-2xl text-base sm:text-lg text-white/80 mx-auto">
              Join Seychelles' leading logistics company and be part of a dynamic team shaping the future of island logistics
            </p>
          </div>

          {/* Stats Section */}
          <div className="mb-8 w-full max-w-4xl">
            <div className="rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">11+</div>
                  <div className="text-white/80 text-sm">Years of Excellence</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-white/80 text-sm">Team Members</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-white/80 text-sm">Support Available</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-white/80 text-sm">Employee Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-whiterelative"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Why Choose ECS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a dynamic team that values growth, innovation, and excellence in logistics services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                  <CardContent className="p-8">
                    <div className={`w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
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

      {/* Open Positions */}
      <section className="py-24 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Current Openings
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Available Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore exciting career opportunities across different departments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-6">
                  {/* Header Section */}
                  <div className="mb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary-custom mb-2 line-clamp-2">
                          {position.title}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                        <span className="line-clamp-1">{position.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                        {position.availability}
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                        <span className="line-clamp-1">{position.openTo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Brief About the Role */}
                  <div className="mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      {position.aboutRole}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white group/btn"
                      onClick={() => handleLearnMore(position)}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-accent text-accent hover:bg-accent hover:text-white group/btn"
                      onClick={() => {
                        setApplicationData(prev => ({
                          ...prev,
                          position: position.title
                        }));
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
                <Send className="w-4 h-4 mr-2" />
                Apply Now
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
                Start Your Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Send us your details and we'll get back to you about suitable opportunities
              </p>
            </div>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={applicationData.name}
                        onChange={handleChange}
                        className="w-full h-12 text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={applicationData.email}
                        onChange={handleChange}
                        className="w-full h-12 text-lg"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={applicationData.phone}
                        onChange={handleChange}
                        className="w-full h-12 text-lg"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                        Position of Interest
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={applicationData.position}
                        onChange={handleChange}
                        className="w-full h-12 p-3 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="">Select a position</option>
                        {openPositions.map((pos, idx) => (
                          <option key={idx} value={pos.title}>{pos.title}</option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleChange}
                      className="w-full h-12 p-3 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-3">2-3 years</option>
                      <option value="4-5">4-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                      Cover Letter / Additional Information
                    </label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={applicationData.coverLetter}
                      onChange={handleChange}
                      rows={6}
                      className="w-full text-lg"
                      placeholder="Tell us about yourself, your experience, and why you're interested in joining ECS Seychelles..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-white via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Join Our Family
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Don't see the perfect position? We're always looking for talented individuals
            to join our growing team. Send us your resume and let's talk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg group"
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Send className="w-5 h-5 mr-2" />
              Apply Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <JobDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        job={selectedJob}
        onApply={handleApplyFromModal}
      />
    </div>
  );
};

export default Careers;
