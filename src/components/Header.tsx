import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "/ECSLogo.png";
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Cargo', path: '/services/cargo' },
        { name: 'Courier', path: '/services/courier' }
      ]
    },
    { name: 'FAQ', path: '/faq' },
    { name: 'Careers', path: '/careers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 250);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md border-b border-gray-200'
          : 'bg-white shadow-sm border-b border-gray-100'
        }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header bar */}
        <div className="flex items-center justify-between h-14 lg:h-20">
          {/* Logo with better vertical padding and size control */}
          <Link to="/" className="flex items-center gap-3 py-1.5 lg:py-2" aria-label="Go to home">
            <img
              src={logo}
              alt="ECS Logo"
              className="h-9 w-auto lg:h-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`flex items-center gap-1 py-2 transition-colors duration-200 font-medium text-sm ${isServicesOpen || isActive(item.path)
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
                        }`}
                      aria-haspopup="menu"
                      aria-expanded={isServicesOpen}
                      aria-controls="services-menu"
                      type="button"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    {isServicesOpen && (
                      <div
                        id="services-menu"
                        role="menu"
                        className="absolute top-full left-0 mt-2 w-37 justify-center bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className={`block px-4 py-2 transition-colors duration-200 font-medium text-sm ${isActive(dropdownItem.path)
                                  ? 'text-primary-600'
                                  : 'text-gray-700 hover:text-primary-600'
                                }`}
                              onClick={() => setIsServicesOpen(false)}
                              role="menuitem"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`py-2 transition-colors duration-200 font-medium text-sm ${isActive(item.path)
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button with strong contrast and hit area */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 -m-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle mobile menu"
            aria-controls="mobile-nav"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 text-gray-900 transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 text-gray-900 transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation: solid panel, safe insets, scrollable list */}
        <div
          id="mobile-nav"
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-2 border-t border-gray-200 bg-white rounded-b-lg">
            <nav
              className="space-y-1 max-h-[60vh] overflow-y-auto px-2"
              aria-label="Mobile"
            >
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="mt-1">
                      <div className="px-3 py-2 text-gray-900 font-semibold text-base">
                        {item.name}
                      </div>
                      <div className="space-y-1 py-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${isActive(dropdownItem.path)
                                ? 'bg-gray-100 text-primary-700'
                                : 'text-gray-800 hover:bg-gray-50 hover:text-primary-700'
                              }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-3 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                          ? 'bg-gray-100 text-primary-700'
                          : 'text-gray-800 hover:bg-gray-50 hover:text-primary-700'
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Safe area bottom padding for notches */}
              <div className="pb-[max(env(safe-area-inset-bottom),0.5rem)]" />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
