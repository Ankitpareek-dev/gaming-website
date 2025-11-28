// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
} from "lucide-react";
import { theme } from "./theme";

const Footer = () => {
  return (
    <footer
      className={`mt-auto border-t ${theme.colors.border} ${theme.colors.bg} pt-16 pb-8`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Top Section: 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1: Contact Us */}
          <div className="space-y-6">
            <h3 className={`text-lg font-bold ${theme.colors.textMain}`}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li
                className={`flex items-start gap-3 ${theme.colors.textSecondary}`}
              >
                <Phone
                  size={18}
                  className={`mt-0.5 ${theme.colors.accentText}`}
                />
                <span className="text-sm">+91-4953 67457</span>
              </li>
              <li
                className={`flex items-start gap-3 ${theme.colors.textSecondary}`}
              >
                <Mail
                  size={18}
                  className={`mt-0.5 ${theme.colors.accentText}`}
                />
                <span className="text-sm">random@randomemail.com</span>
              </li>
              <li
                className={`flex items-start gap-3 ${theme.colors.textSecondary}`}
              >
                <MapPin
                  size={18}
                  className={`mt-0.5 ${theme.colors.accentText}`}
                />
                <span className="text-sm leading-relaxed">
                  XYZ, Random Street, Random City
                </span>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`${theme.colors.textMuted} hover:${theme.colors.accentText} transition-colors duration-200`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: My Account */}
          <div>
            <h3 className={`text-lg font-bold ${theme.colors.textMain} mb-6`}>
              My Account
            </h3>
            <ul className="space-y-3 text-sm">
              {["Dashboard", "My Orders", "My Reviews", "My Profile"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`${theme.colors.textSecondary} hover:${theme.colors.accentText} transition-colors`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className={`text-lg font-bold ${theme.colors.textMain} mb-6`}>
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "All Categories",
                "Custom Build PC",
                "New Arrival",
                "Top Selling",
                "Brands",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`${theme.colors.textSecondary} hover:${theme.colors.accentText} transition-colors`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Information */}
          <div>
            <h3 className={`text-lg font-bold ${theme.colors.textMain} mb-6`}>
              Information
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Privacy Policy",
                "Return & Refund Policy",
                "Terms & Conditions",
                "Warranties",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className={`${theme.colors.textSecondary} hover:${theme.colors.accentText} transition-colors`}
                  >
                    {item}
                  </Link>
                </li>
              ))}

              {/* Contact Button */}
              <li>
                <Link
                  to="/contact"
                  className={`${theme.colors.textSecondary} hover:${theme.colors.accentText} transition-colors`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Tags */}
          <div>
            <h3 className={`text-lg font-bold ${theme.colors.textMain} mb-6`}>
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Accessories",
                "Entertainment",
                "Furniture",
                "Gadgets",
                "Gaming",
                "Hot deals",
                "Lifestyle",
                "ROG",
                "Servers",
                "Workstation",
              ].map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className={`text-xs font-medium px-3 py-1.5 border ${theme.colors.border} rounded-md ${theme.colors.textSecondary} hover:${theme.colors.accentBorder} hover:${theme.colors.accentText} transition-all duration-200`}
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t ${theme.colors.border} pt-8 flex flex-col md:flex-row items-center justify-between gap-4`}
        >
          <div className={`text-sm ${theme.colors.textSecondary}`}>
            © 2022 XclusiveMoonTrading
          </div>

          {/* Payment Icons (Simulated with simple visual blocks) */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
