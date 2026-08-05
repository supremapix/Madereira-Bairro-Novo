import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContacts } from './components/FloatingContacts';
import { ScrollToTop } from './components/ScrollToTop';
import { BudgetModal } from './components/BudgetModal';

import { HomeView } from './views/HomeView';
import { ProductsListView } from './views/ProductsListView';
import { ProductDetailView } from './views/ProductDetailView';
import { LocationsListView } from './views/LocationsListView';
import { LocationDetailView } from './views/LocationDetailView';
import { BlogListView } from './views/BlogListView';
import { BlogPostView } from './views/BlogPostView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { NotFoundView } from './views/NotFoundView';

import { getLocationBySlug } from './data/locations';
import { PRODUCTS_DATA } from './data/products';

function AppContent() {
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [budgetSlug, setBudgetSlug] = useState<string | undefined>();

  const handleOpenBudget = (slug?: string) => {
    setBudgetSlug(slug);
    setBudgetOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Header */}
      <Header onOpenBudget={() => handleOpenBudget()} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomeView onOpenBudget={handleOpenBudget} />} />
          <Route path="/produtos" element={<ProductsListView onOpenBudget={handleOpenBudget} />} />
          <Route path="/produto/:slug" element={<ProductDetailView onOpenBudget={handleOpenBudget} />} />
          <Route path="/regioes-atendidas" element={<LocationsListView />} />
          <Route path="/bairro/:slug" element={<LocationDetailView onOpenBudget={handleOpenBudget} />} />
          <Route path="/cidade/:slug" element={<LocationDetailView onOpenBudget={handleOpenBudget} />} />
          <Route path="/blog" element={<BlogListView />} />
          <Route path="/blog/:slug" element={<BlogPostView onOpenBudget={handleOpenBudget} />} />
          <Route path="/sobre" element={<AboutView onOpenBudget={handleOpenBudget} />} />
          <Route path="/contato" element={<ContactView onOpenBudget={handleOpenBudget} />} />

          {/* Catch-all route to handle legacy or direct slug patterns safely */}
          <Route
            path="*"
            element={
              <FallbackRouteHandler onOpenBudget={handleOpenBudget} />
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenBudget={() => handleOpenBudget()} />

      {/* Smart Radial Floating Contact Options */}
      <FloatingContacts onOpenBudget={() => handleOpenBudget()} />

      {/* Eye-catching Scroll To Top Button */}
      <ScrollToTop />

      {/* Quick Budget Modal */}
      <BudgetModal
        isOpen={budgetOpen}
        onClose={() => setBudgetOpen(false)}
        initialProductSlug={budgetSlug}
      />
    </div>
  );
}

/**
 * Fallback route handler that checks location.pathname manually
 * as required by the critical routing instruction (no wildcard dash asterisks).
 */
function FallbackRouteHandler({ onOpenBudget }: { onOpenBudget: (slug?: string) => void }) {
  const location = useLocation();
  const rawPath = location.pathname.toLowerCase();

  // Check if it matches product slugs
  if (rawPath.startsWith('/madeira-de-pinus') || rawPath.startsWith('/pinus-')) {
    const cleanProdSlug = rawPath.replace(/^\//, '');
    const foundProd = PRODUCTS_DATA.find((p) => p.slug === cleanProdSlug);
    if (foundProd) {
      return <ProductDetailView onOpenBudget={onOpenBudget} />;
    }
  }

  // Check if it matches location patterns (e.g. /conserto-de-geladeira-em-sitio-cercado or /madeireira-em-sitio-cercado)
  const locMatch = getLocationBySlug(rawPath);
  if (locMatch) {
    return <LocationDetailView onOpenBudget={onOpenBudget} />;
  }

  return <NotFoundView />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
