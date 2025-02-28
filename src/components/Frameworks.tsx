import React from 'react';
import { motion } from 'framer-motion';

const frameworks = [
  { name: 'Next.js', logo: 'N', color: 'bg-black border border-white' },
  { name: 'React', logo: 'R', color: 'bg-blue-600' },
  { name: 'Vue', logo: 'V', color: 'bg-green-600' },
  { name: 'Nuxt', logo: 'N', color: 'bg-green-800' },
  { name: 'Angular', logo: 'A', color: 'bg-red-600' },
  { name: 'Svelte', logo: 'S', color: 'bg-orange-600' },
  { name: 'Solid', logo: 'S', color: 'bg-blue-800' },
  { name: 'Astro', logo: 'A', color: 'bg-purple-800' },
  { name: 'Gatsby', logo: 'G', color: 'bg-purple-600' },
  { name: 'Remix', logo: 'R', color: 'bg-indigo-800' },
  { name: 'SvelteKit', logo: 'SK', color: 'bg-orange-700' },
  { name: 'Ember', logo: 'E', color: 'bg-red-700' },
];

const Frameworks: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Works With Your Framework
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Deploy any frontend framework, static site, or Serverless Function with zero configuration.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="framework-card bg-vercel-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center"
            >
              <div className={`w-12 h-12 ${framework.color} rounded-full flex items-center justify-center text-white font-bold mb-4`}>
                {framework.logo}
              </div>
              <h3 className="text-lg font-medium">{framework.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a href="#" className="button-secondary px-8 py-3 rounded-md text-base font-medium inline-block">
            View All Frameworks
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Frameworks;