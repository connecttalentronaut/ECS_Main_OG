import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/lib/email';


const Contact = () => {
  const [formData, setFormData] = useState({
    company: '',
    firstName: '',
    lastName: '',
    countryCode: '+248',
    phoneNumber: '',
    email: '',
    transportMode: [], // Initialize as empty array
    dangerousGood: '',
    termsOfShipment: '',
    collectFrom: '',
    deliverTo: '',
    portOfDeparture: '',
    portOfArrival: ''
  });

  const { toast } = useToast();

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendContactEmail(formData);
      toast({ title: 'Message Sent!', description: "Thank you for your inquiry. We'll get back to you within 24 hours." });
    } catch (err) {
      toast({ title: 'Failed to send', description: 'Please try again in a moment.' });
    }
    // Reset form with correct field names
    setFormData({
      company: '',
      firstName: '',
      lastName: '',
      countryCode: '+248',
      phoneNumber: '',
      email: '',
      transportMode: [],
      dangerousGood: '',
      termsOfShipment: '',
      collectFrom: '',
      deliverTo: '',
      portOfDeparture: '',
      portOfArrival: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Add the missing handleTransportModeChange function
  const handleTransportModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      transportMode: checked
        ? [...(prev.transportMode || []), value]
        : (prev.transportMode || []).filter(mode => mode !== value)
    }));
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1530890448995-4d82724f702c?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/30" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get in Touch
            </span>
          </div>

          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Contact Our&nbsp;
              <span className="text-white">Expert Team</span>
            </h1>
          </div>

          <div className="mb-8">
            <p className="max-w-2xl text-lg sm:text-xl text-white/80 mx-auto">
              Ready to discuss your logistics requirements? Let's connect and find the perfect solution for your needs.
            </p>
          </div>

          <div>
            <Button
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg group"
            >
              <Send className="w-5 h-5 mr-2" />
              Send a Message
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section id="contact-form" className="py-24 bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Send className="w-5 h-5 mr-2" />
              Send Us a Message
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tell us about your logistics needs and we'll provide a customized solution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl text-primary-custom flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  Your Details
                </CardTitle>
                <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-12 text-lg"
                      placeholder="Enter your company name"
                    />
                  </div>

                  {/* Name Section */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                      <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded">
                        This field is required
                      </span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-xs text-gray-600 mb-1">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full h-12 text-lg"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs text-gray-600 mb-1">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full h-12 text-lg"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone Number Section */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-1">
                        <label htmlFor="countryCode" className="block text-xs text-gray-600 mb-1">
                          Country Code
                        </label>
                        <select
                          id="countryCode"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="w-full h-12 p-3 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                        >
                          <option value="+248">+248 (Seychelles)</option>
                          <option value="+1">+1 (US/Canada)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+33">+33 (France)</option>
                          <option value="+49">+49 (Germany)</option>
                          <option value="+91">+91 (India)</option>
                          <option value="+86">+86 (China)</option>
                          <option value="+81">+81 (Japan)</option>
                          <option value="+61">+61 (Australia)</option>
                          <option value="+27">+27 (South Africa)</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="phoneNumber" className="block text-xs text-gray-600 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="tel"
                          required
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="w-full h-12 text-lg"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-12 text-lg"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Mode of Transport - Fixed with safe access */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mode of Transport *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="transportMode"
                          value="sea"
                          checked={(formData.transportMode || []).includes('sea')}
                          onChange={handleTransportModeChange}
                          className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                        />
                        <span>Sea</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="transportMode"
                          value="air"
                          checked={(formData.transportMode || []).includes('air')}
                          onChange={handleTransportModeChange}
                          className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                        />
                        <span>Air</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="transportMode"
                          value="sea_air"
                          checked={(formData.transportMode || []).includes('sea_air')}
                          onChange={handleTransportModeChange}
                          className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                        />
                        <span>Sea & Air</span>
                      </label>
                    </div>
                  </div>

                  {/* Dangerous Good */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Dangerous Good *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="dangerousGood"
                          value="yes"
                          checked={formData.dangerousGood === 'yes'}
                          onChange={handleChange}
                          className="w-4 h-4 text-accent border-gray-300 focus:ring-accent"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="dangerousGood"
                          value="no"
                          checked={formData.dangerousGood === 'no'}
                          onChange={handleChange}
                          className="w-4 h-4 text-accent border-gray-300 focus:ring-accent"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>

                  {/* Terms of Shipment */}
                  <div>
                    <label htmlFor="termsOfShipment" className="block text-sm font-semibold text-gray-700 mb-2">
                      Terms of Shipment *
                    </label>
                    <select
                      id="termsOfShipment"
                      name="termsOfShipment"
                      required
                      value={formData.termsOfShipment}
                      onChange={handleChange}
                      className="w-full h-12 p-3 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select terms of shipment</option>
                      <option value="exw">EXW (Ex Works)</option>
                      <option value="fca">FCA (Free Carrier)</option>
                      <option value="cpt">CPT (Carriage Paid To)</option>
                      <option value="cip">CIP (Carriage and Insurance Paid To)</option>
                      <option value="dap">DAP (Delivered At Place)</option>
                      <option value="dpu">DPU (Delivered At Place Unloaded)</option>
                      <option value="ddp">DDP (Delivered Duty Paid)</option>
                      <option value="fas">FAS (Free Alongside Ship)</option>
                      <option value="fob">FOB (Free On Board)</option>
                      <option value="cfr">CFR (Cost and Freight)</option>
                      <option value="cif">CIF (Cost, Insurance and Freight)</option>
                    </select>
                  </div>

                  {/* Location Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="collectFrom" className="block text-sm font-semibold text-gray-700 mb-2">
                        Collect from (Town - Postcode/Zip) *
                      </label>
                      <Input
                        id="collectFrom"
                        name="collectFrom"
                        type="text"
                        required
                        value={formData.collectFrom}
                        onChange={handleChange}
                        className="w-full h-12 text-lg"
                        placeholder="Enter collection location"
                      />
                    </div>
                    <div>
                      <label htmlFor="deliverTo" className="block text-sm font-semibold text-gray-700 mb-2">
                        Deliver to (Town - Postcode/Zip) *
                      </label>
                      <Input
                        id="deliverTo"
                        name="deliverTo"
                        type="text"
                        required
                        value={formData.deliverTo}
                        onChange={handleChange}
                        className="w-full h-12 text-lg"
                        placeholder="Enter delivery location"
                      />
                    </div>
                  </div>

                  {/* Optional Port/Airport Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="portOfDeparture" className="block text-sm font-semibold text-gray-700 mb-2">
                        Port / Airport of Departure (optional)
                      </label>
                      <Input
                        id="portOfDeparture"
                        name="portOfDeparture"
                        type="text"
                        value={formData.portOfDeparture}
                        onChange={handleChange}
                        className="w-full h-12 text-lg"
                        placeholder="Enter departure port/airport"
                      />
                    </div>
                    <div>
                      <label htmlFor="portOfArrival" className="block text-sm font-semibold text-gray-700 mb-2">
                        Port / Airport of Arrival (optional)
                      </label>
                      <Input
                        id="portOfArrival"
                        name="portOfArrival"
                        type="text"
                        value={formData.portOfArrival}
                        onChange={handleChange}
                        className="w-full h-12 text-lg"
                        placeholder="Enter arrival port/airport"
                      />
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="w-full h-16 sm:h-14 text-lg"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-white h-16 sm:h-14 text-lg group"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Map and Office Info */}
            <div className="space-y-8">
              {/* Google Maps Card */}
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-primary-custom flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    Visit Our Office
                  </CardTitle>
                  <p className="text-gray-600">Victoria, Mahé, Seychelles</p>
                </CardHeader>
                <CardContent className="p-0">
                  <iframe
                    title="ECS Seychelles Office Location"
                    src="https://maps.google.com/maps?q=Victoria,+Seychelles&z=15&output=embed"
                    className="w-full h-80 border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </CardContent>
              </Card>

              {/* Office Hours Card */}
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-custom">Contact & Hours</h3>
                      <p className="text-gray-600">Get in touch or visit us</p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-primary-custom mr-4" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <a href="tel:+248 432 5922" className="text-primary-custom font-semibold hover:underline">
                          +248 432 5922
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-primary-custom mr-4" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a href="mailto:info@ecs-seychelles.com" className="text-primary-custom font-semibold hover:underline">
                          info@ecs-seychelles.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 pt-6 mb-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Office Hours</h4>
                  </div>

                  {/* Office Hours */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Monday - Friday</span>
                      <span className="text-primary-custom font-semibold">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Saturday</span>
                      <span className="text-primary-custom font-semibold">8:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-gray-700">Sunday</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-24 bg-gradient-to-b from-white via-accent to-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Headphones className="w-4 h-4 mr-2" />
            Emergency Support
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Urgent Assistance?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Our emergency hotline is available 24/7 for critical shipments and urgent logistics support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency: +248 432 5922
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button> */}
           <Button
  size="lg"
  className="bg-accent hover:bg-accent/90 text-white px-6 py-4 text-base sm:text-lg group
             flex items-center justify-between
             whitespace-nowrap overflow-hidden"
  onClick={() => {
    const phoneNumber = "+2484325922";
    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      window.open(`https://wa.me/${phoneNumber.replace("+", "")}`, "_blank");
    }
  }}
>
  <Phone className="w-5 h-5 shrink-0" />

  <span className="mx-3 truncate">
    Call Emergency: +248 432 5922
  </span>

  <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
</Button>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
