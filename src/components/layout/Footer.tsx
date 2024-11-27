import { Recycle, Facebook, Instagram, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Recycle className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-white">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm">
              Servicii profesionale de colectare și reciclare materiale feroase și neferoase
              în București și Ilfov.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-primary">Servicii</a></li>
              <li><a href="#calculator" className="hover:text-primary">Calculator Preț</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary">
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p>{SITE_CONFIG.schedule}</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}