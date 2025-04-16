import "./App.css";

import { useState } from "react";

import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleCompleted = () => setIsLoaded(true);

  return <>{!isLoaded && <LoadingScreen onCompleted={handleCompleted} />}</>;
}

export default App;
