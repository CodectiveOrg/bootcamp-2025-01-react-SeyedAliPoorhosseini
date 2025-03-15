import ItemTypeFilter from "../ItemTypeFilter/ItemTypeFilter";
import Input from "../Input/Input";

import IconParkTwotoneSearch from "../../icons/IconParkTwotoneSearch";

import styles from "./Toolbar.module.css";
import { ReactNode } from "react";

function Toolbar(): ReactNode {
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
