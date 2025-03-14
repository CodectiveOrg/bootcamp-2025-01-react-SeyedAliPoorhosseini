import { useRef } from "react";

import IconParkTwotoneAdd from "../../icons/IconParkTwotoneAdd";

import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./Footer.module.css";
import { Dream } from "../../types/dream";
import DateInput from "../DateInput/DateInput";
import TextArea from "../TextArea/TextArea";

type Props = {
  onApply: (dream: Dream) => void;
};

function Footer({ onApply }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const openButtonClickHandler = () => {
    dialogRef.current?.showModal();
  };

  const closeButtonClickHandler = () => {
    dialogRef.current?.close();
  };

  const applyButtonClickHandler = () => {
    const title = inputRef.current?.value;
    const date = dateRef.current?.value;

    if (!title) {
      return;
    }
    if (!date) {
      return;
    }

    const dream: Dream = {
      id: crypto.randomUUID(),
      title,
      content: "",
      date: new Date(date),
      vibe: "good",
    };

    onApply(dream);
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
          <Input ref={inputRef} placeholder="input your new dream..."></Input>
          <DateInput ref={dateRef}></DateInput>
          <TextArea placeholder="input your desc dream..."></TextArea>
          <div className={styles.actions}>
            <Button
              size="small"
              variant="outlined"
              onClick={closeButtonClickHandler}
            >
              Cancel
            </Button>
            <Button size="small" onClick={applyButtonClickHandler}>
              Apply
            </Button>
          </div>
        </div>
      </dialog>
    </footer>
  );
}

export default Footer;
