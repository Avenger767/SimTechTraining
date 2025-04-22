import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const AFGLogo = () => (
  <div className="mb-6">
    <img src="/afg-logo.png" alt="AFG Logo" className="w-32" />
  </div>
);

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <AFGLogo />
      <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Welcome to the Sim Tech Training Hub
      </motion.h1>
      <motion.input
        type="text"
        placeholder="Enter your name"
        className="border p-2 mb-4 rounded w-64 text-center"
        value={name}
        onChange={(e) => setName(e.target.value)}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      />
      <motion.button
        onClick={() => router.push('/module')}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={!name}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start
      </motion.button>
    </div>
  );
}
