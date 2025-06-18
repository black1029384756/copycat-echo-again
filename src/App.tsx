
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Signup from "./pages/Signup";
import PartnerRole from "./pages/PartnerRole";
import CampusAmbassadorSignup from "./pages/CampusAmbassadorSignup";
import PartnerInstitutionSignup from "./pages/PartnerInstitutionSignup";
import SeminarsWebinars from "./pages/SeminarsWebinars";
import CertificateProgram from "./pages/CertificateProgram";
import CorporateTraining from "./pages/CorporateTraining";
import InstrumentationHandsOn from "./pages/InstrumentationHandsOn";
import PsychologyCounselling from "./pages/PsychologyCounselling";
import CareerCounselling from "./pages/CareerCounselling";
import InstitutionalPlanPricing from "./pages/InstitutionalPlanPricing";
import CampusAmbassador from "./pages/CampusAmbassador";
import ScientificCommunication from "./pages/ScientificCommunication";
import JoinCommunity from "./pages/JoinCommunity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/partner-role" element={<PartnerRole />} />
          <Route path="/campus-ambassador-signup" element={<CampusAmbassadorSignup />} />
          <Route path="/partner-institution-signup" element={<PartnerInstitutionSignup />} />
          <Route path="/seminars-webinars" element={<SeminarsWebinars />} />
          <Route path="/certificate-program" element={<CertificateProgram />} />
          <Route path="/corporate-training" element={<CorporateTraining />} />
          <Route path="/instrumentation-hands-on" element={<InstrumentationHandsOn />} />
          <Route path="/psychology-counselling" element={<PsychologyCounselling />} />
          <Route path="/career-counselling" element={<CareerCounselling />} />
          <Route path="/institutional-plan-pricing" element={<InstitutionalPlanPricing />} />
          <Route path="/campus-ambassador" element={<CampusAmbassador />} />
          <Route path="/scientific-communication" element={<ScientificCommunication />} />
          <Route path="/join-community" element={<JoinCommunity />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
