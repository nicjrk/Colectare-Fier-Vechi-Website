import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';

import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
       
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;