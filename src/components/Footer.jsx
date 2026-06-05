import React from 'react';

function Footer() {
  return (
    <footer className="bg-mint-light pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[40px] md:gap-[60px] mb-16">
          
          {/* Column 1: Company */}
          <div>
            <h3 className="footer-heading">Company</h3>
            <ul className="space-y-4">
              {['Home', 'Studio', 'Services', 'Contact', 'FAQs'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Terms & Policies */}
          <div>
            <h3 className="footer-heading">Terms & Policies</h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Accessibility'].map(link => (
                <li key={link}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <ul className="space-y-4">
              {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map(link => (
                <li key={link}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Heading specified as 'Terms & Policies' in requirements) */}
          <div>
            <h3 className="footer-heading">Terms & Policies</h3>
            <ul className="space-y-4 text-gray-600 text-base">
              <li>2070 Hague, IL 63801, USA</li>
              <li>
                <a href="tel:5550000000" className="footer-link">(555) 000-0000</a>
              </li>
              <li>
                <a href="mailto:info@elementum.com" className="footer-link">info@elementum.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-gray-300/60 pt-8 text-center">
          <p className="text-sm text-gray-500">©2025 Elementum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;