// src/components/QuoteModal.tsx
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    countryCode: '',
    phoneNumber: '',
    email: '',
    transportMode: [] as string[],
    dangerousGood: '',
    termsOfShipment: '',
    collectFrom: '',
    deliverTo: '',
    portOfDeparture: '',
    portOfArrival: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;
      
      // Prevent scrolling on the body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Restore scrolling and position when modal closes
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restore the scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTransportModeChange = (mode: string) => {
    setFormData(prev => ({
      ...prev,
      transportMode: prev.transportMode.includes(mode)
        ? prev.transportMode.filter(m => m !== mode)
        : [...prev.transportMode, mode]
    }));
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  // Close modal when clicking on backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 flex flex-col max-h-[calc(100vh-4rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-primary to-accent text-white rounded-t-2xl flex-shrink-0 mt-8">
          <h2 className="text-2xl font-bold">Get Your Quote</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="h-full flex flex-col">
            <div className="flex-1 p-6">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-primary-custom mb-4">Your Details</h3>
                  
                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>

                  {/* Name Fields */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="First Name"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">First Name</p>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="Last Name"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Last Name</p>
                      </div>
                    </div>
                    <div className="mt-2 bg-red-500 text-white text-xs px-3 py-1 rounded inline-block">
                      This field is required
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <input
                          type="text"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="+248"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Country Code</p>
                      </div>
                      <div className="md:col-span-2">
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="Phone Number"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Phone Number</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-primary-custom mb-4">Shipment Details</h3>
                  
                  {/* Mode of Transport */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Mode of Transport <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.transportMode.includes('sea')}
                          onChange={() => handleTransportModeChange('sea')}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span>Sea</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.transportMode.includes('sea-air')}
                          onChange={() => handleTransportModeChange('sea-air')}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span>Sea & Air</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.transportMode.includes('air')}
                          onChange={() => handleTransportModeChange('air')}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span>Air</span>
                      </label>
                    </div>
                  </div>

                  {/* Dangerous Good */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Dangerous Good <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="dangerousGood"
                          value="yes"
                          checked={formData.dangerousGood === 'yes'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="dangerousGood"
                          value="no"
                          checked={formData.dangerousGood === 'no'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>

                  {/* Terms of Shipment */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Terms of Shipment <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="termsOfShipment"
                      value={formData.termsOfShipment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      required
                    >
                      <option value="">Select terms</option>
                      <option value="ex-works">EXW - Ex Works</option>
                      <option value="fob">FOB - Free on Board</option>
                      <option value="cif">CIF - Cost, Insurance & Freight</option>
                      <option value="ddp">DDP - Delivered Duty Paid</option>
                    </select>
                  </div>

                  {/* Collection and Delivery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Collect from (Town - Postcode/Zip) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="collectFrom"
                        value={formData.collectFrom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Collection location"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Deliver to (Town - Postcode/Zip) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="deliverTo"
                        value={formData.deliverTo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Delivery location"
                        required
                      />
                    </div>
                  </div>

                  {/* Ports */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Port / Airport of Departure (optional)
                      </label>
                      <input
                        type="text"
                        name="portOfDeparture"
                        value={formData.portOfDeparture}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Departure port/airport"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Port / Airport of Arrival (optional)
                      </label>
                      <input
                        type="text"
                        name="portOfArrival"
                        value={formData.portOfArrival}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Arrival port/airport"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Buttons - Fixed */}
            <div className="flex justify-between items-center p-6 bg-gray-50 border-t border-gray-100 rounded-b-2xl flex-shrink-0">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-8 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  Back
                </button>
              )}
              {currentStep < 2 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors ml-auto"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors ml-auto"
                >
                  Get Quote
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
