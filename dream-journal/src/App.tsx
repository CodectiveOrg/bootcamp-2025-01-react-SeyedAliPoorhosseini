import "./App.css";
import IconamoonModeDark from "./icons/IconamoonModeDark";
import { IconParkTwotoneSearch } from "./icons/IconParkTwotoneSearch";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Dream Board</h1>
        <button className="theme">
          <IconamoonModeDark className="icon" />
        </button>
      </header>
      <main>
        <div className="toolbar">
          <div className="search-box">
            <input type="text" />
            <IconParkTwotoneSearch className="icon"></IconParkTwotoneSearch>
          </div>
          <select>
            <option value="" key="">ALL</option>
            <option value="" key="">Filter 1</option>
            <option value="" key="">Filter 2</option>
          </select>
        </div>
        <ul className="items"></ul>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
