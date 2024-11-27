import {
  Truck,
  Recycle,
  Building,
  Car,
  Weight,
  Package,
} from 'lucide-react';

export function ServicesSection() {
  return (
    <div className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Serviciile Noastre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Recycle className="w-8 h-8" />}
            title="Colectare Materiale"
            description="Colectăm fier vechi, cupru, aluminiu, bronz, fontă, inox, plumb și alte materiale reciclabile"
          />
          <ServiceCard
            icon={<Truck className="w-8 h-8" />}
            title="Transport Gratuit"
            description="Asigurăm transport gratuit, încărcare și cântărire la domiciliul dumneavoastră"
          />
          <ServiceCard
            icon={<Building className="w-8 h-8" />}
            title="Debarasare"
            description="Debarasăm curți, hale, apartamente, spații comerciale și subsoluri"
          />
          <ServiceCard
            icon={<Car className="w-8 h-8" />}
            title="Colectare Auto"
            description="Ridicăm mașini pentru fier vechi sau dezmembrări direct de la domiciliu"
          />
          <ServiceCard
            icon={<Weight className="w-8 h-8" />}
            title="Cântărire la Fața Locului"
            description="Oferim servicii de cântărire precisă direct la locația dumneavoastră"
          />
          <ServiceCard
            icon={<Package className="w-8 h-8" />}
            title="Electrocasnice"
            description="Colectăm calorifere și electrocasnice vechi pentru reciclare"
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}