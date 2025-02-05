import ItemTypeFilter from "../ItemTypeFilter/ItemTypeFilter";
import Input from "../Input/Input";

import IconParkTwotoneSearch from "../../icons/IconParkTwotoneSearch";

import styles from "./Toolbar.module.css";

function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <Input
        placeholder="Create a new dream..."
        suffixIcon={<IconParkTwotoneSearch />}
      />
      <ItemTypeFilter />
    </div>
  );
}

export default Toolbar;
