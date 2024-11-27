// Site-wide configuration settings
export const SITE_CONFIG = {
  // Company name used throughout the application
  name: 'Colectare Fier Vechi',
  
  // Contact information
  phone: '+40722808554',
  whatsapp: '40722808554',
  
  // Business hours
  schedule: 'Luni-Duminică: 07:00 - 22:00',
  
  // Location coordinates (Piața Obor area in București)
  location: {
    lat: 44.4502,
    lng: 26.1271,
    address: 'București, Sector 2, România'
  }
};

// Material prices in RON per kilogram
export const MATERIAL_PRICES = {
  iron: { name: 'Fier Vechi', price: 1.5 },
  copper: { name: 'Cupru', price: 25 },
  aluminum: { name: 'Aluminiu', price: 8 },
  brass: { name: 'Alamă', price: 15 },
  stainless: { name: 'Inox', price: 5 },
  lead: { name: 'Plumb', price: 4 }
} as const;