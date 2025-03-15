import { ComponentProps, ReactNode } from "react";

import styles from "./Input.module.css";

type Props = ComponentProps<"input"> & {
  placeholder?: string;
  suffixIcon?: ReactNode;
};

function Input({ placeholder, suffixIcon, ...otherProps }: Props): ReactNode {
  return (
    <div className={styles["date-input"]}>
      <input type="text" placeholder={placeholder} {...otherProps} />
      {suffixIcon}
    </div>
  );
}

export default Input;
