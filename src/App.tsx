import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

import useRevealOnScroll from "./hooks/useRevealOnScroll";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  // Activate scroll IN / OUT animations globally
  useRevealOnScroll();

  return (
    <Layout>
      {/* ensure this runs inside Router (BrowserRouter should wrap <App /> in index.tsx) */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

// import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Solutions from "./pages/Solutions";
// import About from "./pages/About";
// import CaseStudies from "./pages/CaseStudies";
// import Insights from "./pages/Insights";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact";

// import useRevealOnScroll from "./hooks/useRevealOnScroll";

// export default function App() {
//   // Activate scroll IN / OUT animations globally
//   useRevealOnScroll();

//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/solutions" element={<Solutions />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/case-studies" element={<CaseStudies />} />
//         <Route path="/insights" element={<Insights />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Layout>
//   );
// }
