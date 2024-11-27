import { Phone, Clock, MessageCircle } from 'lucide-react';
import { LocationMap } from './map/LocationMap';
import { SITE_CONFIG } from '@/lib/constants';

export function ContactSection() {
  return (
    <div className="bg-white py-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ContactCard
            icon={<Phone className="w-6 h-6" />}
            title="Telefon"
            content={SITE_CONFIG.phone}
            link={`tel:${SITE_CONFIG.phone}`}
          />
          <ContactCard
            icon={<MessageCircle className="w-6 h-6" />}
            title="WhatsApp"
            content={SITE_CONFIG.phone}
            link={`https://wa.me/${SITE_CONFIG.whatsapp}`}
          />
          <ContactCard
            icon={<Clock className="w-6 h-6" />}
            title="Program"
            content={SITE_CONFIG.schedule}
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <LocationMap />
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, content, link }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}) {
  const ContentWrapper = link ? 'a' : 'div';
  const props = link ? { href: link, target: link.startsWith('http') ? '_blank' : undefined } : {};

  return (
    <ContentWrapper
      {...props}
      className={`flex flex-col items-center p-6 bg-gray-50 rounded-lg ${
        link ? 'hover:bg-gray-100 transition-colors cursor-pointer' : ''
      }`}
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{content}</p>
    </ContentWrapper>
  );
}