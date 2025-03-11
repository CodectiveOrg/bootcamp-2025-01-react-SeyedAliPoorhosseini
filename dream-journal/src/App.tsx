import { useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemsList from "./components/ItemsList/ItemsList";
import Toolbar from "./components/Toolbar/Toolbar";

import "./App.module.css";

import { Dream } from "./types/dream";

function App() {
  const [dreams, setDreams] = useState<Dream[]>(() => {
    const item = localStorage.getItem("dreams");

    if (!item) {
      return [];
    }

    return JSON.parse(item);
  });

  return (
    <div className="app">
      <Header />
      <main>
        <Toolbar />
        <ItemsList dreams={dreams} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
