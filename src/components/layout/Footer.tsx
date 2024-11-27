import { Recycle, Phone, MapPin, Clock } from 'lucide-react';
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Program și Contact</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary">
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {SITE_CONFIG.schedule}
              </p>
            </div>
          </div>

          {/* Location Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Locație</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <p>{SITE_CONFIG.location.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${SITE_CONFIG.location.lat},${SITE_CONFIG.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm mt-2 inline-block"
                >
                  Deschide în Google Maps
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