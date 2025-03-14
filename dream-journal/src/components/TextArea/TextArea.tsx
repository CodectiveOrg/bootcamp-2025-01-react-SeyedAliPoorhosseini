import { ForwardedRef, forwardRef, ReactNode } from "react";

import styles from "./TextArea.module.css";

type Props = {
  placeholder?: string;
};

function TextArea(
  { placeholder }: Props,
  ref: ForwardedRef<HTMLTextAreaElement>
): ReactNode {
  return (
    <div className={styles["text-area"]}>
      <textarea ref={ref} placeholder={placeholder} rows={3}/>
    </div>
  );
}

export default forwardRef(TextArea);
