import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center gradient-bg overflow-hidden max-w-7xl mx-auto mt-40">
      <div className="max-w-7xl mx-auto mt-40 absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center  z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-black max-w-6xl">
            <h1 className="mt-10 text-5xl font-bold tracking-tight mb-6">
              Your complete platform for the web.
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-10">
              Vercel provides the developer tools and cloud infrastructure to
              build, scale, and secure a faster, more personalized web.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#_"
              className="button-primary px-8 py-3 rounded-full text-base font-medium"
            >
              Start Deploying
            </a>
            <a
              href="#_"
              className="button-secondary px-8 py-3 rounded-full text-base font-medium"
            >
              Get a Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="code-window shadow-2xl">
            <div className="bg-vercel-gray-700 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400">Terminal</div>
            </div>
            <div className="p-4 text-left text-sm text-gray-300 font-mono">
              <div className="flex">
                <span className="text-gray-500 mr-2">$</span>
                <span className="typing-animation">
                  npx create-next-app@latest
                </span>
              </div>
              <div className="mt-2">
                <span className="text-green-400">✓</span> Creating a new Next.js
                app in /Users/developer/my-app
              </div>
              <div className="mt-1">
                <span className="text-green-400">✓</span> Initializing project
                with template: app
              </div>
              <div className="mt-1">
                <span className="text-green-400">✓</span> Installing
                dependencies:
              </div>
              <div className="mt-1 pl-4">
                - react
                <br />
                - react-dom
                <br />- next
              </div>
              <div className="mt-2">
                <span className="text-green-400">✓</span> Installation complete!
              </div>
              <div className="mt-2 text-gray-500">
                <span className="text-gray-500 mr-2">$</span>
                <span className="typing-animation">
                  cd my-app && npm run dev
                </span>
              </div>
              <div className="mt-2">
                <span className="text-green-400">✓</span> Ready in 2.8s
              </div>
              <div className="mt-1">
                <span className="text-blue-400">▲</span> Next.js 14.0.0
              </div>
              <div className="mt-1 text-gray-400">
                - Local: http://localhost:3000
                <br />- Network: http://192.168.1.5:3000
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;