// import React from 'react';
// import NavBar from './components/NavBar';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { ToastContainer, toast } from 'react-toastify';

// const App = () => {
//   return (
//     <>
//       <ToastContainer />

//       <NavBar />
//       <section id="home">
//         <Hero />
//       </section>
//       <section id="services">
//         <Services />
//       </section>
//       <section id="about">
//         <About />
//       </section>
//       <section id="skills">
//         <Skills />
//       </section>
//       <section id="projects">
//         <Projects />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default App;

import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <ToastContainer />
      <NavBar />
      <motion.section id="home" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
        <Hero />
      </motion.section>
      <motion.section id="services" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
        <Services />
      </motion.section>
      <motion.section id="about" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
        <About />
      </motion.section>
      <motion.section id="skills" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
        <Skills />
      </motion.section>
      <motion.section id="projects" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
        <Projects />
      </motion.section>
      <motion.section id="contact" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}>
        <Contact />
      </motion.section>
      <Footer />
    </>
  );
};

export default App;
