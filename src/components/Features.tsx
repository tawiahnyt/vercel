import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Lock, BarChart } from 'lucide-react';

const featureItems = [
  {
    icon: <Zap className="h-8 w-8 text-vercel-blue" />,
    title: 'Performance',
    description: 'Get the fastest page loads for your users with automatic performance optimization.',
  },
  {
    icon: <Globe className="h-8 w-8 text-vercel-cyan" />,
    title: 'Global Edge Network',
    description: 'Deploy to our global edge network for the fastest content delivery to your users.',
  },
  {
    icon: <Lock className="h-8 w-8 text-vercel-purple" />,
    title: 'Built-in Security',
    description: 'Every site is automatically secured with SSL encryption and DDoS protection.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-vercel-violet" />,
    title: 'Analytics',
    description: 'Get insights into your site\'s performance and user experience with built-in analytics.',
  },
];

const Features: React.FC = () => {
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
            The Complete Platform for Modern Web Development
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From local development to global deployment, Vercel is the platform for frontend developers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-vercel-gray-800 p-8 rounded-lg hover:bg-vercel-gray-700 transition-colors duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a href="#" className="button-primary px-8 py-3 rounded-md text-base font-medium inline-block">
            Explore All Features
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;