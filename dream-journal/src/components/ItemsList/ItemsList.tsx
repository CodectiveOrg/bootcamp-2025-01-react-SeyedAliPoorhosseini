import IconParkTwotoneDelete from "../../icons/IconParkTwotoneDelete";
import IconParkTwotoneWrite from "../../icons/IconParkTwotoneWrite";

import styles from "./ItemsList.module.css";

const dreams = ["falling from a height😲", "school exam📝", "asking for help🙋‍♂️"];

function ItemsList() {
  return (
    <ul className={styles.items}>
      {dreams.map((dream) => (
        <li key={dream}>
          <label>
            <input type="checkbox" />
            <p>{dream}</p>
          </label>
          <div className={styles.actions}>
            <button className={styles.edit}>
              <IconParkTwotoneWrite />
            </button>
            <button className={styles.remove}>
              <IconParkTwotoneDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default ItemsList;
