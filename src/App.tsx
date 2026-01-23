import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OneWeb from "./pages/services/OneWeb";
import Starlink from "./pages/services/Starlink";
import VSAT from "./pages/services/VSAT";
import IridiumCertus from "./pages/services/IridiumCertus";
import FleetBroadband from "./pages/services/FleetBroadband";
import ValueAddedServices from "./pages/services/ValueAddedServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/oneweb" element={<OneWeb />} />
          <Route path="/services/starlink" element={<Starlink />} />
          <Route path="/services/vsat" element={<VSAT />} />
          <Route path="/services/iridium-certus" element={<IridiumCertus />} />
          <Route path="/services/fleet-broadband" element={<FleetBroadband />} />
          <Route path="/services/value-added-services" element={<ValueAddedServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
