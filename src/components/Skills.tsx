import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Smartphone, Terminal, Brain, Cloud, Shield, Cpu } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend Development",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS", "HTML"]
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend Development",
    technologies: ["Node.js", "Python", "Express"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database",
    technologies: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "SQLite"]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI & ML",
    technologies: ["Python", "PyTorch", "OpenAI","scikit-learn"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security",
    technologies: ["OAuth", "JWT", "HTTPS", "Encryption", "Security Best Practices"]
  },
  // {
  //   icon: <Smartphone className="w-8 h-8" />,
  //   title: "Mobile Development",
  //   technologies: ["React Native", "Flutter", "iOS", "Android", "PWA"]
  // },
  // {
  //   icon: <Cpu className="w-8 h-8" />,
  //   title: "Emerging Tech",
  //   technologies: ["Blockchain", "WebAssembly", "IoT", "AR/VR", "5G"]
  // }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#030014]">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-[120px] animate-pulse delay-700" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
