import { DialogHTMLAttributes, useRef } from "react";

import IconParkTwotoneAdd from "../../icons/IconParkTwotoneAdd";

import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./Footer.module.css";

function Footer() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openButtonClickHandler = () => {
    dialogRef.current?.showModal();
  };
  const closeButtonClickHandler = () => {
    dialogRef.current?.close();
  };

  return (
    <footer className={styles.footer}>
      <Button
        className={styles.button}
        sameWidthHeight
        shape="circle"
        size="medium"
        onClick={openButtonClickHandler}
      >
        <IconParkTwotoneAdd />
      </Button>
      <dialog ref={dialogRef}>
        <div className={styles.content}>
          <div className={styles.title}>New Dream</div>
          <Input placeholder="input your new dream..."></Input>
          <div className={styles.actions}>
            <Button
              size="small"
              variant="outlined"
              onClick={closeButtonClickHandler}
            >
              Cancel
            </Button>
            <Button size="small">Apply</Button>
          </div>
        </div>
      </dialog>
    </footer>
  );
}

export default Footer;
