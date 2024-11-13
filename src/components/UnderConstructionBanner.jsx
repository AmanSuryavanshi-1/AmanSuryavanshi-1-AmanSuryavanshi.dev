"use client"
import React, { useState, useEffect } from 'react';

const ConstructionAlert = () => {
  const [isVisible, setIsVisible] = useState(true);


  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-4 right-4 max-w-sm p-4 
        bg-yellow-50 border-l-4 border-yellow-400 rounded-md shadow-md
        animate-fade-in"
      role="alert"
    >
      <div className="flex items-center gap-3">
        <span className="text-yellow-400">🚧</span>
        <p className="text-sm text-yellow-700 font-medium">
          This site is under construction
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-auto text-yellow-400 hover:text-yellow-600"
          aria-label="Dismiss alert"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ConstructionAlert;