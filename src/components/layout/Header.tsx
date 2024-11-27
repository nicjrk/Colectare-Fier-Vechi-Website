import { useState } from 'react';
import { Menu, X, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Recycle className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">{SITE_CONFIG.name}</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <Button 
              variant="default"
              onClick={() => window.location.href = `tel:${SITE_CONFIG.phone}`}
            >
              Sună-ne acum!
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLinks mobile />
              <Button 
                variant="default"
                onClick={() => window.location.href = `tel:${SITE_CONFIG.phone}`}
                className="w-full"
              >
                Sună-ne acum!
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const baseStyles = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium"
    : "px-3 py-2 rounded-md text-sm font-medium";

  const links = [
    { href: "#services", label: "Servicii" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`${baseStyles} text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}