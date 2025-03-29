import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Hero3D } from './components/Hero3D';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import myimage from './assests/myimage(blue).jpg'

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative">
        {/* Animated background gradients */}
        <div className="absolute inset-0 w-full h-full bg-[#030014]">
          <div className="absolute top-0 left-[-20%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-[-20%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-[120px] animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center relative z-10">
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <img 
                src={myimage}
                alt="Ridham Savaliya"
                className="w-40 h-40 rounded-full border-4 border-white/10 shadow-lg relative z-10 object-cover"
              />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            >
              Ridham Savaliya
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text"
            >
              Full Stack Developer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Crafting exceptional digital experiences with cutting-edge technologies and innovative solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-6"
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 transform">
                  <Github className="w-7 h-7" />
                </div>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 transform">
                  <Linkedin className="w-7 h-7" />
                </div>
              </a>
              <a 
                href="mailto:contact@example.com"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 transform">
                  <Mail className="w-7 h-7" />
                </div>
              </a>
            </motion.div>
          </div>
          <div className="lg:w-1/2 h-[600px]">
            <Hero3D />
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.6, 
            duration: 1, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('skills')}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
              <ChevronDown className="w-8 h-8 text-blue-400" />
            </div>
          </div>
        </motion.div>
      </section>

      <Skills />
      <Projects />
      <Contact />

      <footer className="bg-[#030014]/80 text-white py-8 border-t border-white/10 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Ridham Savaliya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
