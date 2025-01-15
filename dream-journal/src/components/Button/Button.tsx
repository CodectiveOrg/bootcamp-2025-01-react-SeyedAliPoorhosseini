import { ComponentProps } from "react";

import styles from "./Button.module.css";
import clsx from "clsx";

type Shape = "rectangle" | "circle";
type Size = "small" | "large";

type Props = ComponentProps<"button"> & {
  shape?: Shape;
  size?: Size;
  SameWidthHeight?: false;
};

function Button({
  children,
  className,
  shape = "rectangle",
  size = "small",
  SameWidthHeight = "false",
  ...otherProps
}: Props) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[shape],
        styles[size],
        SameWidthHeight && styles["same-width-height"],
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
export default Button;
