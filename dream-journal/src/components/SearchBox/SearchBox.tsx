import IconParkTwotoneSearch from "../../icons/IconParkTwotoneSearch";

import styles from "./SearchBox.module.css";

function SearchBox() {
  return (
    <div className={styles['search-box']}>
      <input type="text" placeholder="write a new dream ..." />
      <IconParkTwotoneSearch></IconParkTwotoneSearch>
    </div>
  );
}
export default SearchBox;
