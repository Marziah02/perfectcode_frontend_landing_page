import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import UseCases from "./pages/UseCases";
import Product from "./pages/Product";
import Enterprise from "./pages/Enterprise";
import Resources from "./pages/Resources";
import Showcase from "./pages/Showcase";
import ShowcaseDetail from "./pages/ShowcaseDetail";
import AppPage from "./pages/App";
import AdminLayout from "./pages/admin/AdminLayout";
import Overview from "./pages/admin/Overview";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminUsage from "./pages/admin/AdminUsage";
import AdminDeployments from "./pages/admin/AdminDeployments";
import AdminFlags from "./pages/admin/AdminFlags";
import AdminContent from "./pages/admin/AdminContent";
import AdminSupport from "./pages/admin/AdminSupport";
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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/product" element={<Product />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/showcase/:appSlug" element={<ShowcaseDetail />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Overview />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="usage" element={<AdminUsage />} />
            <Route path="deployments" element={<AdminDeployments />} />
            <Route path="flags" element={<AdminFlags />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="support" element={<AdminSupport />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
