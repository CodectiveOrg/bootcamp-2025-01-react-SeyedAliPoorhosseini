import { useRef, FormEvent, ReactNode } from "react";

import IconParkTwotoneAdd from "../../icons/IconParkTwotoneAdd";

import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./Footer.module.css";
import { Dream } from "../../types/dream";
import DateInput from "../DateInput/DateInput";
import TextArea from "../TextArea/TextArea";
import VibeInput from "../VibeInput/VibeInput";
import { Vibe } from "../../types/vibe";

type Props = {
  onApply: (dream: Dream) => void;
};

function Footer({ onApply }: Props): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openButtonClickHandler = () => {
    dialogRef.current?.showModal();
  };

  const closeButtonClickHandler = () => {
    dialogRef.current?.close();
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    console.log(e.currentTarget)
    const formData = new FormData(e.currentTarget);

    const title = formData.get("title");
    const date = formData.get("date");
    const desc = formData.get("desc");
    const vibe = formData.get("vibe");

    e.preventDefault();
    if (!title) {
      return;
    }
    if (!date) {
      return;
    }
    if (!desc) {
      return;
    }
    if (!vibe) {
      return;
    }

    const dream: Dream = {
      id: crypto.randomUUID(),
      title: title as string,
      content: desc as string,
      date: new Date(date as string),
      vibe: vibe as Vibe,
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
        <form className={styles.content} onSubmit={formSubmitHandler}>
          <div className={styles.title}>New Dream</div>
          <Input name="title" placeholder="input your new dream..."></Input>
          <DateInput name="date"></DateInput>
          <TextArea
            name="desc"
            placeholder="input your desc dream..."
          ></TextArea>
          <VibeInput name="vibe"></VibeInput>
          <div className={styles.actions}>
            <Button
              size="small"
              variant="outlined"
              onClick={closeButtonClickHandler}
            >
              Cancel
            </Button>
            <Button size="small" type="submit">Apply</Button>
          </div>
        </form>
      </dialog>
    </footer>
  );
}

export default Footer;
