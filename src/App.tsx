import { Routes, Route } from 'react-router-dom';
import { PageShell } from './components/PageShell';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Insights } from './pages/Insights';
import { WorkflowDetail } from './pages/WorkflowDetail';

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/workflows/:slug" element={<WorkflowDetail />} />
      </Routes>
    </PageShell>
  );
}
