import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
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

/**
 * ScrollToTopOnNavigation
 * Mandatory hook/component that scrolls viewport directly to top / hero section
 * whenever route or page parameters change.
 */
function ScrollToTopOnNavigation() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname, search]);

  return null;
}

/**
 * AnimatedRoutes
 * Wraps page navigation in premium Motion transitions with subtle scale & fade effects.
 */
function AnimatedRoutes({ onOpenBudget }: { onOpenBudget: (slug?: string) => void }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomeView onOpenBudget={onOpenBudget} />} />
          <Route path="/produtos" element={<ProductsListView onOpenBudget={onOpenBudget} />} />
          <Route path="/produto/:slug" element={<ProductDetailView onOpenBudget={onOpenBudget} />} />
          <Route path="/regioes-atendidas" element={<LocationsListView />} />
          <Route path="/bairro/:slug" element={<LocationDetailView onOpenBudget={onOpenBudget} />} />
          <Route path="/cidade/:slug" element={<LocationDetailView onOpenBudget={onOpenBudget} />} />
          <Route path="/blog" element={<BlogListView />} />
          <Route path="/blog/:slug" element={<BlogPostView onOpenBudget={onOpenBudget} />} />
          <Route path="/sobre" element={<AboutView onOpenBudget={onOpenBudget} />} />
          <Route path="/contato" element={<ContactView onOpenBudget={onOpenBudget} />} />

          {/* Catch-all route to handle legacy or direct slug patterns safely */}
          <Route
            path="*"
            element={
              <FallbackRouteHandler onOpenBudget={onOpenBudget} />
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function AppContent() {
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [budgetSlug, setBudgetSlug] = useState<string | undefined>();

  const handleOpenBudget = (slug?: string) => {
    setBudgetSlug(slug);
    setBudgetOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Scroll strictly to top hero section on navigation */}
      <ScrollToTopOnNavigation />

      {/* Header */}
      <Header onOpenBudget={() => handleOpenBudget()} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatedRoutes onOpenBudget={handleOpenBudget} />
      </main>

      {/* Footer */}
      <Footer onOpenBudget={() => handleOpenBudget()} />

      {/* Floating Share, Quick Contact and Back to Top Actions */}
      <FloatingActions onOpenBudget={() => handleOpenBudget()} />

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
