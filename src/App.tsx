import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import LoanTypes from "./pages/LoanTypes";
import EmiCalculator from "./pages/EmiCalculator";
import BankInfo from "./pages/BankInfo";
import RegionalInsights from "./pages/RegionalInsights";
import Examples from "./pages/Examples";
import Offers from "./pages/Offers";
import TipsGuides from "./pages/TipsGuides";
import CompareLoan from "./pages/CompareLoan";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/loan-types" element={<LoanTypes />} />
            <Route path="/emi-calculator" element={<EmiCalculator />} />
            <Route path="/bank-info" element={<BankInfo />} />
            <Route path="/regional-insights" element={<RegionalInsights />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/tips-guides" element={<TipsGuides />} />
            <Route path="/compare-loan" element={<CompareLoan />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
