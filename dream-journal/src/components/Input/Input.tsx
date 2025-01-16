import { ReactNode } from "react";
import styles from "./Input.module.css";

type Props = {
  placeholder?: string;
  SuffixIcon?: ReactNode;
};

function Input({ placeholder, SuffixIcon }: Props) {
  return (
    <div className={styles["search-box"]}>
      <input type="text" placeholder={placeholder} />
      {SuffixIcon}
    </div>
  );
}
export default Input;
