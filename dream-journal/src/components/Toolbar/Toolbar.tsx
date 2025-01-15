import ItemTypeFilter from "../ItemTypeFilter/ItemTypeFilter";
import SearchBox from "../SearchBox/SearchBox";

import styles from "./Toolbar.module.css"

function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <SearchBox />
      <ItemTypeFilter />
    </div>
  );
}
export default Toolbar;
