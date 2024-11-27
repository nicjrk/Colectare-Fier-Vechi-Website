import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PriceCalculator } from './components/PriceCalculator';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <div className="py-16 bg-white" id="calculator">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Calculator Preț</h2>
            <PriceCalculator />
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;