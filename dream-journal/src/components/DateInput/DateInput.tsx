import { ForwardedRef, forwardRef, ReactNode } from "react";

import styles from "./DateInput.module.css";

function DateInput(_, ref: ForwardedRef<HTMLInputElement>): ReactNode {
  return (
    <div className={styles["date-input"]}>
      <input ref={ref} type="date" />
    </div>
  );
}

export default forwardRef(DateInput);
