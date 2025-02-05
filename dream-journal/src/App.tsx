import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemsList from "./components/ItemsList/ItemsList";
import Toolbar from "./components/Toolbar/Toolbar";

import "./App.module.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Toolbar />
        <ItemsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
