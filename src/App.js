import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import CloutPage from "./pages/CloutPage";
import RDACTDPage from "./pages/RDACTDPage";
import MatrisakhiPage from "./pages/MatrisakhiPage";
import LeadnicsPage from "./pages/LeadnicsPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Connect />
      <Footer />
    </>
  );
}

function WorkPage() {
  return (
    <>
      <Work />
      <Connect />
      <Footer />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <About />
      <Connect />
      <Footer />
    </>
  );
}

function ProjectPage({ children }) {
  return (
    <>
      {children}
      <Connect />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-bg min-h-screen relative">
        <Navbar />
        <main className="pt-[139px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work/clout" element={<ProjectPage><CloutPage /></ProjectPage>} />
            <Route path="/work/rdactd" element={<ProjectPage><RDACTDPage /></ProjectPage>} />
            <Route path="/work/matrisakhi" element={<ProjectPage><MatrisakhiPage /></ProjectPage>} />
            <Route path="/work/leadnics" element={<ProjectPage><LeadnicsPage /></ProjectPage>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
