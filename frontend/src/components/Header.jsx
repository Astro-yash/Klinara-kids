import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { schoolInfo } from '../data/mock';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Elthea AI', path: '/elthea' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-klinara-rose/20 to-klinara-beige/20 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex gap-4 items-center">
            <a href="tel:7673920886" className="flex items-center gap-1 text-klinara-brown hover:text-klinara-teal transition-colors">
              <Phone className="w-3 h-3" />
              <span>7673920886</span>
            </a>
            <a href="mailto:admissions@klinarakids.com" className="flex items-center gap-1 text-klinara-brown hover:text-klinara-teal transition-colors">
              <Mail className="w-3 h-3" />
              <span className="text-xs sm:text-sm">admissions@klinarakids.com</span>
            </a>
          </div>
          <div className="text-klinara-brown-dark">
            <span className="hidden sm:inline">Established 2026 | Hyderabad</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={schoolInfo.logo}
              alt="Klinara Kids Logo" 
              className="h-16 w-auto group-hover:scale-105 transition-transform"
            />
            <div>
              <h1 className="text-2xl font-bold text-klinara-brown">Klinara Kids</h1>
              <p className="text-xs text-klinara-brown-dark">Pre-School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-klinara-brown bg-klinara-rose/30'
                    : 'text-klinara-brown hover:text-klinara-teal hover:bg-klinara-beige/20'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/admissions">
              <Button className="ml-4 bg-klinara-teal hover:bg-klinara-teal-light text-white font-semibold">
                Enroll Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-klinara-brown hover:bg-klinara-beige/20 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-klinara-brown bg-klinara-rose/30'
                    : 'text-klinara-brown hover:bg-klinara-beige/20'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-klinara-teal hover:bg-klinara-teal-light text-white font-semibold">
                Enroll Now
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
