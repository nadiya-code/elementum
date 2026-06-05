import React from 'react';

function Footer() {
  return (
    <footer className="bg-mint-light pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid: 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-[60px] mb-12">

          {/* Column 1: Company */}
          <div>
            <h3 className="footer-heading text-sm font-semibold uppercase tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {['Home', 'Studio', 'Services', 'Contact', 'FAQs'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="footer-link text-sm sm:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Terms & Policies */}
          <div>
            <h3 className="footer-heading text-sm font-semibold uppercase tracking-wide mb-4">
              Terms & Policies
            </h3>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Accessibility'].map(link => (
                <li key={link}>
                  <a href="#" className="footer-link text-sm sm:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="footer-heading text-sm font-semibold uppercase tracking-wide mb-4">
              Follow Us
            </h3>
            <ul className="space-y-3">
              {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map(link => (
                <li key={link}>
                  <a href="#" className="footer-link text-sm sm:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="footer-heading text-sm font-semibold uppercase tracking-wide mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="leading-snug">2070 Hague, IL 63801, USA</li>
              <li>
                <a href="tel:5550000000" className="footer-link">(555) 000-0000</a>
              </li>
              <li>
                <a href="mailto:info@elementum.com" className="footer-link break-all">
                  info@elementum.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-300/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            ©2025 Elementum. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Made with ♥ by Elementum
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;