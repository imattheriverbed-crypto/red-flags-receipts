import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { CartProvider } from '@/lib/CartContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import CommerceLinkBridge from './components/CommerceLinkBridge';
// Add page imports here
import ComingSoon from './pages/ComingSoon';
import FlagIntro from './pages/FlagIntro';
import AboutFounder from './pages/AboutFounder';
import Contact from './pages/Contact';
import BusinessCard from './pages/BusinessCard';
import Shop from './pages/Shop';
import Collections from './pages/Collections';
import Drop from './pages/Drop';
import Journal from './pages/Journal';
import JournalEntry from './pages/JournalEntry';
import JournalAdmin from './pages/admin/JournalAdmin';
import Confess from './pages/Confess';
import ProductPage from './pages/ProductPage';
import HelpModal from '@/components/coming-soon/HelpModal';
import Chat from './pages/Chat';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<FlagIntro />} />
      <Route path="/home" element={<ComingSoon />} />
      <Route path="/about" element={<AboutFounder />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/business-card" element={<BusinessCard />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:slug" element={<ProductPage />} />
      <Route path="/chat/:advisor" element={<Chat />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:slug" element={<Drop />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/journal/:slug" element={<JournalEntry />} />
      <Route path="/admin/journal" element={<JournalAdmin />} />
      <Route path="/confess" element={<Confess />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <CommerceLinkBridge />
            <AuthenticatedApp />
            <HelpModal />
          </Router>
          <Toaster />
        </CartProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
