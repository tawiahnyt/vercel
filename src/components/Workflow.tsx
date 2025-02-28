import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitMerge, GitPullRequest } from 'lucide-react';

const workflowSteps = [
  {
    icon: <GitBranch className="h-8 w-8 text-vercel-blue" />,
    title: 'Create Branch',
    description: 'Create a new branch for your feature or fix.',
    delay: 0,
  },
  {
    icon: <GitPullRequest className="h-8 w-8 text-vercel-purple" />,
    title: 'Open Pull Request',
    description: 'Vercel automatically creates a preview deployment for every pull request.',
    delay: 0.2,
  },
  {
    icon: <GitMerge className="h-8 w-8 text-vercel-cyan" />,
    title: 'Merge to Production',
    description: 'Once approved, merge your changes to automatically deploy to production.',
    delay: 0.4,
  },
];

const Workflow: React.FC = () => {
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
            Streamlined Workflow
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Vercel integrates with your Git workflow to make deployments automatic and reversible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              className="bg-vercel-gray-800 p-8 rounded-lg relative"
            >
              {index < workflowSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="code-window shadow-2xl max-w-4xl mx-auto">
            <div className="bg-vercel-gray-700 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400">Preview Deployment</div>
            </div>
            <div className="p-4 text-left text-sm text-gray-300 font-mono">
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">▲</span>
                <span>Vercel</span>
              </div>
              <div className="mt-2">
                <span className="text-green-400">✓</span> Production: https://my-project.vercel.app
              </div>
              <div className="mt-1">
                <span className="text-yellow-400">○</span> Preview: https://my-project-git-feature-username.vercel.app
              </div>
              <div className="mt-4 text-gray-400">
                <span className="text-gray-500 mr-2">$</span>
                <span>git push origin feature</span>
              </div>
              <div className="mt-2">
                <span className="text-green-400">✓</span> Creating preview deployment...
              </div>
              <div className="mt-1">
                <span className="text-green-400">✓</span> Preview deployment ready!
              </div>
              <div className="mt-1 text-gray-400">
                Preview: https://my-project-git-feature-username.vercel.app
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;