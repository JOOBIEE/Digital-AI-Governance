import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ProgrammesPage } from "./pages/ProgrammesPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { GovernovaPage } from "./pages/GovernovaPage";
import { InsightsPage } from "./pages/InsightsPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import DirectorPage from "./pages/DirectorPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/directors/:slug" element={<DirectorPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="programmes" element={<ProgrammesPage />} />
        <Route path="governova" element={<GovernovaPage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="insights/:slug" element={<ArticlePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-use" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
