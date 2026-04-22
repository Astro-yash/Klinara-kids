import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { schoolInfo } from '../data/mock';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={schoolInfo.logo}
                alt="Klinara Kids Logo" 
                className="h-14 w-auto"
              />
              <div>
                <h3 className="text-white font-bold text-lg">{schoolInfo.name}</h3>
              </div>
            </div>
            <p className="text-sm mb-4">{schoolInfo.tagline}</p>
            <p className="text-sm text-slate-400">Established {schoolInfo.established}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">Our Programs</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{schoolInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${schoolInfo.phone}`} className="hover:text-white transition-colors">
                  {schoolInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-white transition-colors break-all">
                  {schoolInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">School Hours</h4>
            <p className="text-sm mb-2">Monday - Friday</p>
            <p className="text-sm text-slate-400 mb-4">8:00 AM - 6:00 PM</p>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-klinara-teal transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={schoolInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-klinara-rose transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-klinara-golden transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
