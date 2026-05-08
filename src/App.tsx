import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Blog } from './pages/Blog';
import { BlogItem } from './pages/BlogItem';
import { ComoParticipar } from './pages/ComoParticipar';
import { FacaParte } from './pages/FacaParte';
import { FaleConosco } from './pages/FaleConosco';
import { Home } from './pages/Home';
import { Institucional } from './pages/Institucional';
import { ProcessoSeletivo } from './pages/ProcessoSeletivo';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-instituto" element={<Institucional />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogItem />} />
        <Route path="/como-participar" element={<ComoParticipar />} />
        <Route path="/como-participar/jovens" element={<ComoParticipar />} />
        <Route path="/como-participar/educador" element={<ComoParticipar />} />
        <Route path="/como-contribuir" element={<FacaParte />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/processo-seletivo" element={<ProcessoSeletivo />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
