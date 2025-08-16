import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Counselors from "./pages/Counselors";
import EAP from "./pages/EAP";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminLayout } from "./components/admin/AdminLayout";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <AdminAuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute>
                    <AdminLayout>
                      <Routes>
                        <Route path="/" element={<AdminDashboard />} />
                        <Route path="/counselors" element={<div>Counselors Management (Coming Soon)</div>} />
                        <Route path="/blog" element={<div>Blog Management (Coming Soon)</div>} />
                        <Route path="/schedules" element={<div>Schedule Management (Coming Soon)</div>} />
                      </Routes>
                    </AdminLayout>
                  </ProtectedRoute>
                }
              />
              
              {/* Public Routes */}
              <Route path="/*" element={
                <div className="flex flex-col min-h-screen">
                  <Header />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/counselors" element={<Counselors />} />
                      <Route path="/eap" element={<EAP />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/gallery" element={<Gallery />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                  <WhatsAppFloat />
                </div>
              } />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AdminAuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
