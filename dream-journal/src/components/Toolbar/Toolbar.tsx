import ItemTypeFilter from "../ItemTypeFilter/ItemTypeFilter";
import Input from "../Input/Input";

import IconParkTwotoneSearch from "../../icons/IconParkTwotoneSearch";

import styles from "./Toolbar.module.css";


function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <Input
        placeholder="create a new dream..."
        SuffixIcon={<IconParkTwotoneSearch />}
      />
      <ItemTypeFilter />
    </div>
  );
}
export default Toolbar;
