import { ForwardedRef, forwardRef, ReactNode } from "react";
import styles from './VibeInput.module.css';

function VibeInput(_, ref: ForwardedRef<HTMLSelectElement>): ReactNode {
  return (
    <div className={styles["vibe-input"]}>
      <select ref={ref}>
        <option value="good">good dream</option>
        <option value="bad">bad dream</option>
      </select>
    </div>
  );
}

export default forwardRef(VibeInput);
