// src/lib/email.ts
import emailjs from '@emailjs/browser';

export type ContactFormData = {
  company: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  transportMode: string[];
  dangerousGood: string;
  termsOfShipment: string;
  collectFrom: string;
  deliverTo: string;
  portOfDeparture: string;
  portOfArrival: string;
};

export type CareerApplicationData = {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
};

const SERVICE_ID = 'service_87ksk9b';
const CONTACT_TEMPLATE_ID = 'template_hw8mooo';
const CAREER_TEMPLATE_ID = 'template_1akess9';
const PUBLIC_KEY = 'y7c1Eg9N9bLNsCi5y';

export async function sendContactEmail(data: ContactFormData) {
  const templateParams = {
    company: data.company || '',
    first_name: data.firstName || '',
    last_name: data.lastName || '',
    full_name: `${data.firstName} ${data.lastName}`.trim(),
    email: data.email || '',
    phone_number: `${data.countryCode} ${data.phoneNumber}`.trim(),
    transport_mode: (data.transportMode || []).join(', '),
    dangerous_good: data.dangerousGood || '',
    terms_of_shipment: data.termsOfShipment || '',
    collect_from: data.collectFrom || '',
    deliver_to: data.deliverTo || '',
    port_of_departure: data.portOfDeparture || '',
    port_of_arrival: data.portOfArrival || '',
    submitted_at: new Date().toISOString(),
  };

  return emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, templateParams, PUBLIC_KEY);
}

export async function sendCareerApplicationEmail(data: CareerApplicationData) {
  const templateParams = {
    fullName: data.name || '',
    email: data.email || '',
    phone: data.phone || '',
    position: data.position || 'Not specified',
    experience: data.experience || 'Not specified',
    coverLetter: data.coverLetter || '',
    submissionDate: new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    }),
  };

  return emailjs.send(SERVICE_ID, CAREER_TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
