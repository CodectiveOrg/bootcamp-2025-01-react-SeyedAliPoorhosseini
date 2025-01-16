import { ComponentProps } from "react";

import styles from "./Button.module.css";
import clsx from "clsx";

type Variant = "solid" | "outlined";
type Shape = "rectangle" | "circle";
type Size = "small" | "medium" | "large";

type Props = ComponentProps<"button"> & {
  variant?: Variant;
  shape?: Shape;
  size?: Size;
  SameWidthHeight?: false;
};

function Button({
  children,
  className,
  variant = "solid",
  shape = "rectangle",
  size = "medium",
  SameWidthHeight = "false",
  ...otherProps
}: Props) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
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
