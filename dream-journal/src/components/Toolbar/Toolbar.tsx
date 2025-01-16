import ItemTypeFilter from "../ItemTypeFilter/ItemTypeFilter";
import Input from "../Input/Input";

import styles from "./Toolbar.module.css"

import IconParkTwotoneSearch from "../../icons/IconParkTwotoneSearch";

function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <Input placeholder="create a new dream..." SuffixIcon={<IconParkTwotoneSearch/>} />
      <ItemTypeFilter />
    </div>
  );
}
export default Toolbar;
