import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Organisations from './pages/Organisations';
import Documents from './pages/Documents';
import Contact from './pages/Contact';
import Merch from './pages/Merch';
import Surveys from './pages/Surveys';

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/organisations" element={<Organisations />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/surveys" element={<Surveys />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}
