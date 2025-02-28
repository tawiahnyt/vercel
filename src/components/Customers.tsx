import React from 'react';
import { motion } from 'framer-motion';

const customers = [
  { name: 'Company 1', logo: 'C1' },
  { name: 'Company 2', logo: 'C2' },
  { name: 'Company 3', logo: 'C3' },
  { name: 'Company 4', logo: 'C4' },
  { name: 'Company 5', logo: 'C5' },
  { name: 'Company 6', logo: 'C6' },
];

const testimonials = [
  {
    quote: "Vercel has completely transformed our development workflow. We're shipping features faster than ever before.",
    author: "Jane Doe",
    role: "CTO, Company 1",
  },
  {
    quote: "The preview deployments for every PR have been a game-changer for our team collaboration.",
    author: "John Smith",
    role: "Lead Developer, Company 2",
  },
];

const Customers: React.FC = () => {
  return (
    <section className="py-24 bg-vercel-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Trusted by the World's Leading Companies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From startups to Fortune 500s, the world's most innovative teams use Vercel.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
        >
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center h-20"
            >
              <div className="w-16 h-16 bg-vercel-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {customer.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-vercel-gray-800 p-8 rounded-lg"
            >
              <p className="text-lg text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;