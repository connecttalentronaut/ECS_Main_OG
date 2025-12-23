// src/pages/legal/TermsOfService.tsx
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 py-12 md:py-16 max-w-5xl mx-auto">
        <header className="mb-10 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Terms of Service</h1>
          <p className="mt-3 text-gray-600">
            These Terms of Service govern the use of logistics, courier, customs brokerage, air and sea
            freight services provided under the ECS Seychelles brand by Excel Courier Services and Excel
            Cargo Services. By requesting a quote, placing a booking, or using any service, you agree to
            these terms.
          </p>
        </header>

        <section className="space-y-10 text-gray-800">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Who We Are</h2>
            <p className="mt-2">
              Marketing and communications are under the ECS Seychelles brand. Operations are performed by:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Excel Courier Services: customs brokerage, import permits and certification, local logistics, door delivery, and express courier agency.</li>
              <li>Excel Cargo Services: air freight import/export, sea freight full container load (FCL), less-than-container load (LCL) consolidation, and buyer’s consolidation services.</li>
            </ul>
            <p className="mt-2">
              Registered office: Maison Ste Claire – Room 41, PO Box 541, Victoria, Mahé, Seychelles.
              Contact: info@ecs-seychelles.com.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Scope of Services</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Express courier services for documents, small packages, and fast fashion orders, with tracking and last‑mile delivery in Seychelles.</li>
              <li>Customs brokerage including permits, phytosanitary certificates, inspections, and compliance with Seychelles regulations for fast clearance.</li>
              <li>Sea freight: own LCL import consolidations from key markets (including Mauritius, South Africa, China via Hong Kong/Shenzhen, and Dubai), FCL, and buyer’s consol.</li>
              <li>Air freight: preferred rates and negotiated space on main routes for cost‑controlled and time‑definite options with real‑time visibility.</li>
              <li>Local logistics: container packing/unpacking in port or warehouse, storage solutions, multi‑site deliveries, and reliable last‑mile operations across Seychelles.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Customer Obligations</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide accurate shipment details, documentation, and contact information necessary for transport, customs clearance, and delivery.</li>
              <li>Ensure goods are properly packed, labeled, and compliant with applicable regulations and restrictions.</li>
              <li>Pay all charges, duties, taxes, and fees when due and respond promptly to requests that affect transport or clearance timelines.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Bookings, Quotes, and Pricing</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Quotes are based on information provided and are subject to revision if shipment details, routes, or requirements change.</li>
              <li>Pricing may include freight, handling, brokerage, storage, insurance if selected, and other operational charges as applicable.</li>
              <li>Space and schedules are subject to carrier availability; preferred rates and negotiated space are applied where available.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Transit Times and Schedules</h2>
            <p className="mt-2">
              Indicative transit times are provided based on regular services and may vary due to carrier operations,
              customs inspections, documentation issues, and external events. Regular sea consolidation departures
              and time‑definite air options are offered where available, but exact delivery times are not guaranteed unless expressly stated in writing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Customs and Compliance</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Customs clearance is performed in adherence to Seychelles law and applicable international requirements.</li>
              <li>Permits, certificates, and inspections are managed as needed to enable fast, compliant import and export movements.</li>
              <li>Any delays or costs arising from inaccurate or incomplete documents provided by the shipper/consignee are the customer’s responsibility.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Courier Tracking and Notifications</h2>
            <p className="mt-2">
              Courier shipments include a tracking number enabling real‑time updates from pickup to delivery through partner tracking pages. Notifications may be sent to support timely receipt and service quality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Liability and Risk</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Handling of goods follows professional standards; however, inherent transport risks remain across international logistics.</li>
              <li>Optional transport insurance and risk mitigation services may be offered to protect cargo from potential losses or damages; coverage applies only if explicitly arranged and confirmed.</li>
              <li>ECS Seychelles and its operating companies are not liable for indirect, consequential, or special losses, or for delays caused by carriers, authorities, or events beyond reasonable control, unless prohibited by law.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Prohibited and Restricted Items</h2>
            <p className="mt-2">
              Certain items may be subject to prohibitions, restrictions, or special handling requirements. It is the customer’s responsibility to disclose the nature of goods and ensure compliance with all applicable laws and carrier conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Payments and Charges</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>All charges must be settled per agreed terms. Duties, taxes, and government fees are payable by the responsible party unless otherwise agreed in writing.</li>
              <li>Storage, demurrage, and additional handling may apply where delays or operational requirements occur.</li>
              <li>Unpaid amounts may result in suspension of services and application of lawful remedies, including liens where applicable.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">International Partners</h2>
            <p className="mt-2">
              Services may involve global partners, including the Seychelles partnership with Chronopost for express courier and international shipping lines, airlines, and agents for sea and air freight. Data sharing limited to operational needs may occur to perform services and provide visibility.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Changes to Services</h2>
            <p className="mt-2">
              ECS Seychelles may adapt services, routes, partners, and schedules to maintain reliability, responsiveness, and integrity. Material changes affecting confirmed bookings will be communicated as practicable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Privacy</h2>
            <p className="mt-2">
              Personal information is processed to deliver logistics services, ensure compliance, and provide tracking and updates. For details, see the Privacy Policy available through our website or by request at info@ecs-seychelles.com.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Termination</h2>
            <p className="mt-2">
              Either party may terminate service arrangements according to agreed terms and applicable law. Outstanding obligations, including charges and regulatory responsibilities, survive termination as required.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Governing Law</h2>
            <p className="mt-2">
              These terms are governed by the laws and regulations applicable in Seychelles and any mandatory international conventions governing carriage that may apply to specific modes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Contact</h2>
            <p className="mt-2">
              For questions about these Terms of Service or specific shipments, contact ECS Seychelles at info@ecs-seychelles.com, Maison Ste Claire – Room 41, PO Box 541, Victoria, Mahé, Seychelles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Updates</h2>
            <p className="mt-2">
              ECS Seychelles may update these Terms of Service to reflect operational, regulatory, or partner changes. Updates will be posted on this page with the effective date.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default TermsOfService;
