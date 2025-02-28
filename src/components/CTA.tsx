import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Building on Vercel Today
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join the thousands of developers and teams building the future on Vercel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="button-primary px-8 py-3 rounded-md text-base font-medium">
              Start Deploying
            </a>
            <a href="#" className="button-secondary px-8 py-3 rounded-md text-base font-medium">
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;