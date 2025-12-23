// src/pages/home/HomeHero.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, ArrowRight, Calculator } from "lucide-react";
import QuoteModal from "../../components/ui/quotemodal";

const highlights = [
  {
    icon: "/EXCEl_Cargo.png",
    title: "Cargo Services",
    desc: "Air & Sea freight for Seychelles: FCL, LCL, buyer's consol, and door-to-door solutions.",
    href: "/services/cargo",
  },
  {
    icon: "/Excel.png",
    title: "Courier Services",
    desc: "Chronopost partner for documents, small packages, and fast fashion with real-time tracking.",
    href: "/services/courier",
  },
];

const HomeHero = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1604506522146-316c8bedd874?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/30" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-4 max-w-6xl mx-auto w-full py-4 sm:py-8 sm:py-16">

        {/* Badge */}
        <div className="md:my-8 pt-8 sm:pt-6 mb-6 sm:mb-6">
          <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm sm:text-xs text-white">
            <Globe className="mr-2 h-4 w-4 sm:mr-1.5 sm:h-3.5 sm:w-3.5" />
            <span className="sm:hidden">International logistics for Seychelles</span>
            <span className="hidden sm:inline">
              A full range of international transport and logistics solutions for Seychelles
            </span>
          </span>
        </div>

        {/* Heading */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-4xl leading-tight sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white sm:leading-tight">
            <span className="block sm:inline">Tailored Logistics</span>
            <span className="block sm:inline sm:ml-2 text-white">for Seychelles</span>
          </h1>
        </div>

        {/* Description */}
        <div className="mb-6 sm:mb-8">
          <p className="max-w-xs sm:max-w-2xl text-sm sm:text-base lg:text-lg text-white/90 sm:text-white/80 mx-auto leading-relaxed">
            <span className="sm:hidden">
              Tailored strategies to optimize your supply chain in Seychelles.
            </span>
            {/* <span className="hidden sm:inline">
              Every business has unique requirements, and ECS Seychelles design tailored strategies to
              optimize our customers supply chain.
            </span> */}
          </p>
        </div>

        {/* Mobile highlights */}
        <div className="sm:hidden w-full max-w-xs">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-4">
            {highlights.map(({ icon, title, href }) => (
              <div key={title} className="flex flex-col items-center text-center text-white">
                <div className="mb-2 w-auto h-auto rounded-full flex items-center justify-center">
                  <img
                    src={icon}
                    alt={title}
                    className="h-24 w-24 sm:h-24 sm:w-24 object-contain"
                  />
                </div>
                {/* <h3 className="text-base font-semibold mb-2">{title}</h3> */}
                <p className="text-xs leading-relaxed mb-2 text-white/80">
                  {title === "Cargo Services"
                    ? "Air & Sea freight solutions"
                    : "Fast courier with tracking"}
                </p>
                <Link
                  to={href}
                  className="inline-flex items-center text-xs font-medium hover:text-accent transition-colors bg-white/10 px-3 py-1.5 rounded-full"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop highlights old*/}
        {/* <div className="hidden sm:block mb-6 sm:mb-8 w-full max-w-4xl">
          <div className="rounded-lg bg-white/5 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {highlights.map(({ icon, title, desc, href }) => (
                <div
                  key={title}
                  className="p-4 sm:p-6 flex flex-col items-center text-center text-white"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="mb-2 sm:mb-3 h-24 w-24 sm:h-20 sm:w-20 object-contain"
                  />
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-xs sm:text-sm mb-3 leading-relaxed">
                    <span className="hidden sm:inline">{desc}</span>
                    <span className="sm:hidden">
                      {title === "Cargo Services"
                        ? "Air & Sea freight solutions for Seychelles"
                        : "Fast courier with real-time tracking"}
                    </span>
                  </p>
                  <Link
                    to={href}
                    className="inline-flex items-center text-xs sm:text-sm font-medium hover:text-accent transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div> */}

                {/* Desktop highlights */}
        <div className="hidden sm:block mb-6 sm:mb-8 w-full max-w-4xl">
          <div className="rounded-lg bg-white/5 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x-2 divide-white/20">
              {highlights.map(({ icon, title, desc, href }) => (
                <div
                  key={title}
                  className="p-4 sm:p-6 flex items-center justify-between text-white"
                >
                  {/* Logo Left */}
                  <div className="flex-shrink-0 pr-4">
                    <img
                      src={icon}
                      alt={title}
                      className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
                    />
                  </div>

                  {/* Separator Line */}
                  <div className="w-px h-full bg-white/20"></div>

                  {/* Content Right */}
                  <div className="flex-1 pl-4 text-left">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-xs sm:text-sm mb-3 leading-relaxed">
                      <span className="hidden sm:inline">{desc}</span>
                      <span className="sm:hidden">
                        {title === "Cargo Services"
                          ? "Air & Sea freight solutions for Seychelles"
                          : "Fast courier with real-time tracking"}
                      </span>
                    </p>
                    <Link
                      to={href}
                      className="inline-flex items-center text-xs sm:text-sm font-medium hover:text-accent transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:block w-full max-w-3xl">
          <div className="rounded-lg bg-white/10 backdrop-blur-sm p-4 sm:p-6">
            <div className="flex flex-col items-center text-center text-white">
              <div className="flex items-center mb-3 sm:mb-4">
                <Calculator className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <h3 className="text-base sm:text-lg font-semibold">Get an instant quote</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-6">
                Quote, book and get full control of your shipments with real-time visibility and open
                updates.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 py-3 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg transition-colors text-base"
              >
                Get Quote Now
              </button>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="block sm:hidden w-full max-w-3xl">
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="w-full px-6 py-4 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg transition-colors text-base mt-16"
          >
            Get Quotes
          </button>
        </div>

        {/* Modal */}
        {isQuoteModalOpen && (
          <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        )}
      </div>
    </section>
  );
};

export default HomeHero;
