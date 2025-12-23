import React, { useEffect } from 'react';
import { X, MapPin, Clock, Globe, FileText, CheckCircle, Star, Award, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JobPosition {
  title: string;
  location: string;
  availability: string;
  openTo: string;
  aboutRole: string;
  mainResponsibilities: string[];
  requiredSkills: string[];
  whatWeOffer: string[];
  gradient: string;
}

interface JobDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobPosition | null;
  onApply: () => void;
}

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ isOpen, onClose, job, onApply }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen || !job) return null;

  // Close modal when clicking on backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleApplyClick = () => {
    onClose();
    onApply();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8 flex flex-col max-h-[calc(100vh-4rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-primary to-accent text-white rounded-t-2xl flex-shrink-0">
          <div className="flex-1 pr-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{job.title}</h2>
            <div className="flex flex-wrap gap-3 text-sm md:text-base text-white/90">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1.5" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5" />
                {job.availability}
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1.5" />
                {job.openTo}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* About the Role */}
          <div>
            <h3 className="text-xl font-semibold text-primary-custom mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-accent" />
              About the Role
            </h3>
            <p className="text-gray-700 leading-relaxed text-base">
              {job.aboutRole}
            </p>
          </div>

          {/* Main Responsibilities */}
          <div>
            <h3 className="text-xl font-semibold text-primary-custom mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-accent" />
              Main Responsibilities
            </h3>
            <ul className="space-y-2">
              {job.mainResponsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="text-accent mr-3 mt-1.5 flex-shrink-0">•</span>
                  <span className="text-base leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Skills & Qualifications */}
          <div>
            <h3 className="text-xl font-semibold text-primary-custom mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-accent" />
              Required Skills & Qualifications
            </h3>
            <ul className="space-y-2">
              {job.requiredSkills.map((skill, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span className="text-base leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div>
            <h3 className="text-xl font-semibold text-primary-custom mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-accent" />
              What We Offer
            </h3>
            <ul className="space-y-2">
              {job.whatWeOffer.map((offer, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <Heart className="w-4 h-4 text-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span className="text-base leading-relaxed">{offer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer - Fixed */}
        <div className="flex justify-center md:justify-end items-center p-6 bg-gray-50 border-t border-gray-100 rounded-b-2xl flex-shrink-0">
          <Button
            onClick={handleApplyClick}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg group w-full md:w-auto"
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;
