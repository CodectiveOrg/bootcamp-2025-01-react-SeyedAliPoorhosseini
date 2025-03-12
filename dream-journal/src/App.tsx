import { useEffect, useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemsList from "./components/ItemsList/ItemsList";
import Toolbar from "./components/Toolbar/Toolbar";

import "./App.module.css";

import { Dream } from "./types/dream";

function App() {
  const [dreams, setDreams] = useState<Dream[]>(() => {
    const item = localStorage.getItem("dreams");

    if (item === null) {
      return [];
    }

    return JSON.parse(item);
  });

  const applyHandler = (newDream: Dream): void => {
    setDreams((old) => [...old, newDream]);
  };

  useEffect(() => {
    localStorage.setItem("dreams", JSON.stringify(dreams));
  }, [dreams]);

  return (
    <div className="app">
      <Header />
      <main>
        <Toolbar />
        <ItemsList dreams={dreams} />
      </main>
      <Footer onApply={applyHandler} />
    </div>
  );
}

export default App;
