import { ComponentProps, ReactNode } from "react";

import styles from "./DateInput.module.css";

type Props = ComponentProps<"input"> & {};

function DateInput({ ...otherProps }: Props): ReactNode {
  return (
    <div className={styles["date-input"]}>
      <input type="date" {...otherProps} />
    </div>
  );
}

export default DateInput;
