import { ComponentProps, ReactNode } from "react";
import styles from "./VibeInput.module.css";

type Props = ComponentProps<"select"> & {};

function VibeInput({ ...otherProps }: Props): ReactNode {
  return (
    <div className={styles["vibe-input"]}>
      <select {...otherProps}>
        <option value="good">good dream</option>
        <option value="bad">bad dream</option>
      </select>
    </div>
  );
}

export default VibeInput;
