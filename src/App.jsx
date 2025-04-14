import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './routes/Home';
import About from './routes/About';
import Skill from './routes/Skill';
import Project from './routes/Projects';
import Learning from './routes/Learning';
import Plan from './routes/Plan';
import Resume from './routes/Resume';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/skill" element={<><Navbar /><Skill /></>} />
        <Route path="/projects" element={<><Navbar /><Project /></>} />
        <Route path="/learning" element={<><Navbar /><Learning /></>} />
        <Route path="/plan" element={<><Navbar /><Plan /></>} />
        <Route path="/resume" element={<><Navbar /><Resume /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="*" element={<Home />} /> {/* Catch-all route */}

      </Routes>
    </div>
  );
}

export default App;
