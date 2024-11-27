import { MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function LocationMap() {
  return (
    <div className="w-full h-[200px] bg-gray-100 rounded-lg flex items-center justify-center p-6">
      <div className="flex items-center space-x-4">
        <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
        <div>
          <h3 className="font-semibold mb-1">{SITE_CONFIG.location.address}</h3>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${SITE_CONFIG.location.lat},${SITE_CONFIG.location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Deschide în Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}