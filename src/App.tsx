import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Technologies from "./pages/Technologies";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import ProjectDetail from "./pages/ProjectDetail";
import PerformanceMarketing from "./pages/services/PerformanceMarketing";
import SEOContent from "./pages/services/SEOContent";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import EmailSMSMarketing from "./pages/services/EmailSMSMarketing";
import AnalyticsCRO from "./pages/services/AnalyticsCRO";
import WebAppServices from "./pages/services/WebAppServices";
import StrategyConsultation from "./pages/services/StrategyConsultation";
import IndustryPackages from "./pages/services/IndustryPackages";
import ToolsIntegrations from "./pages/services/ToolsIntegrations";
import ClientPortal from "./pages/services/ClientPortal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/services/performance-marketing"
            element={<PerformanceMarketing />}
          />
          <Route path="/services/seo-content" element={<SEOContent />} />
          <Route
            path="/services/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="/services/email-sms-marketing"
            element={<EmailSMSMarketing />}
          />
          <Route path="/services/analytics-cro" element={<AnalyticsCRO />} />
          <Route
            path="/services/web-app-services"
            element={<WebAppServices />}
          />
          <Route
            path="/services/strategy-consultation"
            element={<StrategyConsultation />}
          />
          <Route
            path="/services/industry-packages"
            element={<IndustryPackages />}
          />
          <Route
            path="/services/tools-integrations"
            element={<ToolsIntegrations />}
          />
          <Route path="/services/client-portal" element={<ClientPortal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
