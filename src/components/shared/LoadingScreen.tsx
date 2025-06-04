import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

// constant value
const welcomeMessage = "<Hello, Welcome to my portfolio />";

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setMessage(welcomeMessage.slice(0, index));
      index++;
      if (index > welcomeMessage.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1500);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-black text-white">
      <h1 className="mb-6 font-mono text-sm font-bold md:text-2xl lg:text-4xl">
        {message} <span className="animate-blink">|</span>
      </h1>
      <div className="h-[2px] w-[200px] overflow-hidden rounded-full bg-gray-800 md:w-[400px] lg:w-[600px]">
        <div className="animate-loading h-full w-[40%] bg-blue-500"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
