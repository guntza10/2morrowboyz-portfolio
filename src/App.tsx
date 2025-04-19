import { useState } from "react";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleCompleted = () => setIsLoaded(true);

  return (
    <>
      {!isLoaded && <LoadingScreen onCompleted={handleCompleted} />}
      <div
        className={`min-h-screen bg-black text-gray-700 ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
      >
        <Navbar />
      </div>
    </>
  );
}

export default App;
