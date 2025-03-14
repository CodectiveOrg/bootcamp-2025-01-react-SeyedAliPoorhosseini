import { ForwardedRef, ReactNode, forwardRef } from "react";

import styles from "./Input.module.css";

type Props = {
  placeholder?: string;
  suffixIcon?: ReactNode;
};

function Input(
  { placeholder, suffixIcon }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={styles["date-input"]}>
      <input ref={ref} type="text" placeholder={placeholder} />
      {suffixIcon}
    </div>
  );
}

export default forwardRef(Input);
