import { MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function LocationMap() {
  // Since we don't have a valid API key, we'll show the fallback UI
  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg flex flex-col items-center justify-center text-gray-600">
      <MapPin className="w-12 h-12 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{SITE_CONFIG.location.address}</h3>
      <p className="text-sm">Ne găsiți la această adresă</p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${SITE_CONFIG.location.lat},${SITE_CONFIG.location.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-primary hover:underline"
      >
        Deschide în Google Maps
      </a>
    </div>
  );
}