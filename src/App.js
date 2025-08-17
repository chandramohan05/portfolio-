import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';

// ✅ Import ProjectDetail and ProjectsData
import ProjectDetail from './component/ProjectDetail';
import { ProjectsData } from './component/projectsData'; // Make sure path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        {/* Pass projects data to ProjectDetail */}
        <Route path="/project/:id" element={<ProjectDetail projects={ProjectsData} />} />
      </Routes>
    </Router>
  );
}

export default App;
