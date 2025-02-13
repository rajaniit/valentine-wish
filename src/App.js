import { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ValentineWish() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-4">
      {!clicked ? (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="bg-red-500 text-white p-4 rounded-full shadow-lg"
          onClick={handleClick}
        >
          <Heart size={48} />
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-red-600 mb-4">Happy Valentine\'s Day, My Love!</h1>
          <p className="text-xl text-gray-700">You make my world brighter every day. Love you forever!</p>
        </motion.div>
      )}
    </div>
  );
}
