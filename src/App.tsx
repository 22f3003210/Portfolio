import { Routes, Route } from 'react-router-dom';
import { PageShell } from './components/PageShell';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { CaseStudies } from './pages/CaseStudies';
import { WorkflowDetail } from './pages/WorkflowDetail';
import { Admin } from './pages/Admin';
import { Portal } from './pages/Portal';
import { Consulting } from './pages/Consulting';
import { HowIWork } from './pages/HowIWork';
import { Tracker } from './pages/Tracker';
import { Roadmap } from './pages/Roadmap';

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/workflows/:slug" element={<WorkflowDetail />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/how-i-work" element={<HowIWork />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </PageShell>
  );
}
