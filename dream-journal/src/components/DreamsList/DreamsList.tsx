import IconParkTwotoneDelete from "../../icons/IconParkTwotoneDelete";
import IconParkTwotoneWrite from "../../icons/IconParkTwotoneWrite";

import { Dream } from "../../types/dream";

import styles from "./DreamsList.module.css";

// const dreams = [
//   "falling from a height😲",
//   "school exam📝",
//   "asking for help🙋‍♂️",
//   "Flying in a dream✈",
//   "Seeing an old friend🤝",
//   "Drowning in water🌊",
//   "Car accident🚗",
//   "Arriving late🏃‍♂️",
//   "Inability to move👨‍🦯",
// ];

type Props = {
  dreams: Dream[];
};

function DreamsList({ dreams }: Props) {
  return (
    <ul className={styles["dreams-list"]}>
      {dreams.map((dream) => (
        <li key={dream.id}>
          <p className={styles.date}>{dream.date.toLocaleDateString()}</p>
          <p className={styles.title}>{dream.title}</p>
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

export default DreamsList;
