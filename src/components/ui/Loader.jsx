import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <div className="mt-4 text-primary font-mono text-sm animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
