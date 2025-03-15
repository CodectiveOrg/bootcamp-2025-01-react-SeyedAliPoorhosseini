import { ComponentProps, ReactNode } from "react";

import styles from "./TextArea.module.css";

type Props = ComponentProps<"textarea"> & {
  placeholder?: string;
};

function TextArea({ placeholder, ...otherProps }: Props): ReactNode {
  return (
    <div className={styles["text-area"]}>
      <textarea placeholder={placeholder} rows={3} {...otherProps} />
    </div>
  );
}

export default TextArea;
