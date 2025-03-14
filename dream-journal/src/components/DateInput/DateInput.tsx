import { forwardRef, ReactNode } from "react";

import styles from "./DateInput.module.css";

const DateInput = forwardRef<HTMLInputElement>(function(
  _ ,
  ref
): ReactNode {
  return (
    <div className={styles["date-input"]}>
      <input ref={ref} type="date" />
    </div>
  );
});

export default DateInput;
