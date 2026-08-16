import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import Composition from "./pages/Composition";
import NotFound from "./pages/NotFound";

// No basename here - HashRouter doesn't need it on GH Pages
const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/composition" element={<Composition />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
