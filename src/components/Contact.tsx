import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#030014]">
        <div className="absolute bottom-1/2 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-[120px] animate-pulse delay-300" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Contact Information
            </h3>
            {[
              { icon: <Mail className="w-6 h-6" />, text: "savaliyaridham46@gmail.com" },
              { icon: <Phone className="w-6 h-6" />, text: "+91 7861068642" },
              { icon: <MapPin className="w-6 h-6" />, text: "Surat Gujarat, India" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="group relative"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {[
              { label: "Name", type: "text", placeholder: "Your name" },
              { label: "Email", type: "email", placeholder: "your@email.com" }
            ].map((field, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-focus-within:opacity-75 transition-opacity duration-300" />
                <label className="block text-sm font-medium text-gray-300 mb-2">{field.label}</label>
                <input
                  type={field.type}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white backdrop-blur-xl transition-all duration-300"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-focus-within:opacity-75 transition-opacity duration-300" />
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white backdrop-blur-xl transition-all duration-300"
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                <span className="text-lg font-semibold">Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
