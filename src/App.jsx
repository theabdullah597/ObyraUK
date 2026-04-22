import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ScrollReveal } from "./components/common/ScrollReveal";

// Pages
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Solutions } from "./pages/Solutions";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy, TermsOfService, CookiePolicy } from "./pages/Legal";

// Company Pages
import { About } from "./pages/Company/About";
import { Process } from "./pages/Company/Process";
import { Careers } from "./pages/Company/Careers";
import { Testimonials } from "./pages/Company/Testimonials";
import { Clients, University, Manifesto } from "./pages/Company/More";
import { Blog, News, Press, Events } from "./pages/Company/Additional";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollReveal />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />

            {/* Company Pages */}
            <Route path="/company/about" element={<About />} />
            <Route path="/company/process" element={<Process />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/testimonials" element={<Testimonials />} />
            <Route path="/company/clients" element={<Clients />} />
            <Route path="/company/university" element={<University />} />
            <Route path="/company/manifesto" element={<Manifesto />} />
            <Route path="/company/blog" element={<Blog />} />
            <Route path="/company/news" element={<News />} />
            <Route path="/company/press" element={<Press />} />
            <Route path="/company/events" element={<Events />} />

            {/* Fallback Route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
