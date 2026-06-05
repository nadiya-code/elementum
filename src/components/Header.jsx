import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Studio', path: '#studio' },
    { name: 'Services', path: '#services' },
    { name: 'Contact', path: '#contact' },
    { name: 'FAQs', path: '#faqs' },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="w-[201px] h-[46px] top-[27px] left-[160px] text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-[hsl(var(--elementum-purple))]">
            Elementum
          </Link>
          
          {/* Desktop Navigation */}
          <nav className=" w-[533px] h-[24px] top-[38px] left-[694px] hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className=" h-[24px] text-base font-semibold text-foreground/80 hover:text-[hsl(var(--elementum-purple))] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[hsl(var(--elementum-purple))] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left pb-1"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-foreground hover:text-[hsl(var(--elementum-purple))] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-bold text-foreground">Elementum</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-foreground/70 hover:text-foreground bg-gray-100 rounded-full"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-foreground hover:text-[hsl(var(--elementum-purple))] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
export default Header;