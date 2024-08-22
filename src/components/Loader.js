import React from 'react';
import { Html, useProgress } from '@react-three/drei';

// Loader Component
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center className="flex flex-col items-center">
      <div className="loader"></div>
      <p className="text-xs font-semibold mt-4 text-light">{progress.toFixed(2)}%</p>
      <style jsx>{`
        .loader {
          border: 8px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          border-top: 8px solid #ffffff;
          width: 50px;
          height: 50px;
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Html>
  );
};

export default Loader;
