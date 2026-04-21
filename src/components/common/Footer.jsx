import { Link } from "react-router-dom";
import { Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { ObyraLogo } from "../../assets/logo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <ObyraLogo className="h-10 w-auto" />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Leading UK-based software development company delivering
              innovative mobile and web solutions.
            </p>
            <div className="flex gap-3">
              {[MessageCircle, Send, Globe].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-gray-700 flex items-center justify-center hover:text-blue-400 hover:border-blue-400 transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blockchain
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Game Dev
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-poppins font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/company/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/company/process"
                  className="hover:text-blue-400 transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  to="/company/careers"
                  className="hover:text-blue-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/company/clients"
                  className="hover:text-blue-400 transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/company/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-poppins font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/company/news"
                  className="hover:text-blue-400 transition-colors"
                >
                  News & Updates
                </Link>
              </li>
              <li>
                <Link
                  to="/company/press"
                  className="hover:text-blue-400 transition-colors"
                >
                  Press Release
                </Link>
              </li>
              <li>
                <Link
                  to="/company/events"
                  className="hover:text-blue-400 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/company/manifesto"
                  className="hover:text-blue-400 transition-colors"
                >
                  Manifesto
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-blue-400 transition-colors"
                >
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-poppins font-semibold mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm">+44 (0) 20 XXXX XXXX</div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:hello@obyra.co.uk"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  hello@obyra.co.uk
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin
                  size={18}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <div className="text-sm">London, UK</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Obyra. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
