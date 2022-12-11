import { useEffect } from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// aos library
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, []);

    return (
        <div style={{ overflowX: 'hidden' }}>
            <NavBar />
            <Home />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
