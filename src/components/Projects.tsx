import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import lmg1 from '../assests/logo.png';
import lmg2 from '../assests/logo (1).png';
import lmg3 from '../assests/formboost-high-resolution-logo-transparent.png';

const projects = [
  {
    title: "Formboost - Form Builder",
    description: "Effortlessly collect data with just a few clicks—connect your form and receive submissions directly to your email. No backend required!",
    image: lmg3,
    github: "https://github.com",
    live: "https://demo.com",
    tech: ["React js", "Node js", "Sequelize", "Mysql Workbench", "Express", "Tailwind CSS"]
  },
  {
    title: "Quickbites - Food Delivery App",
    description: "QuickBites is a food delivery app with Admin, Seller, Delivery, and User panels for seamless order management and real-time updates.",
    image: lmg1,
    github: "https://github.com",
    live: "https://demo.com",
    tech: ["React js", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
  },
  {
    title: "Notify - Student Notice Management System",
    description: "Notify is a Student Notice Management System designed to streamline communication between administrators and students.",
    image: lmg2,
    github: "https://github.com",
    live: "https://demo.com",
    tech: ["React js", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#030014]">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-[120px] animate-pulse delay-500" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent z-10" />
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>
                <div className="p-6 relative z-30">
                  <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75 group-hover/link:opacity-100 transition-opacity duration-300" />
                      <div className="relative p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 group-hover/link:border-white/20 transition-all duration-300">
                        <Github className="w-6 h-6 text-blue-400" />
                      </div>
                    </motion.a>
                    <motion.a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75 group-hover/link:opacity-100 transition-opacity duration-300" />
                      <div className="relative p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 group-hover/link:border-white/20 transition-all duration-300">
                        <ExternalLink className="w-6 h-6 text-blue-400" />
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
