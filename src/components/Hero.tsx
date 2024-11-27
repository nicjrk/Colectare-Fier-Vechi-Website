import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <>
      {/* Meta description for SEO */}
      <meta
        name="description"
        content="Servicii de colectare și reciclare a fierului vechi în București și Ilfov. Oferim transport gratuit și cântărire la domiciliu."
      />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Colectare Fier Vechi",
          "description": "Servicii complete de colectare și reciclare pentru materiale feroase și neferoase în București și Ilfov.",
          "areaServed": {
            "@type": "Place",
            "name": "București și Ilfov"
          },
          "provider": {
            "@type": "Organization",
            "name": "Colectare Fier Vechi SRL",
            "telephone": "+40722808554",
            "url": "https://example.com"
          }
        })}
      </script>

      {/* Hero Section */}
      <section
        className="relative bg-gray-900 h-[600px]"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          {/* Hidden Image for SEO */}
          <img
            src="https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Imagine reprezentativă pentru reciclarea fierului vechi"
            className="hidden"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            {/* H1 Heading for SEO */}
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Colectăm Fier Vechi în București și Ilfov
            </h1>

            {/* Descriptive Paragraph */}
            <p className="text-xl text-gray-200 mb-8">
              Servicii complete de colectare și reciclare pentru materiale
              feroase și neferoase. Transport și cântărire gratuită la
              domiciliu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Button to Call */}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => {
                  window.location.href = 'tel:40722808554';
                }}
                aria-label="Sună acum pentru colectare fier vechi"
              >
                Sună Acum
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Button to Scroll to Services */}
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Vezi serviciile oferite de colectare fier vechi"
              >
                Vezi Serviciile
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
