import IconParkTwotoneAdd from "../../icons/IconParkTwotoneAdd";

import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Button className={styles.button} SameWidthHeight shape="circle" size="medium">
        <IconParkTwotoneAdd />
      </Button>
      <dialog>
        <div className={styles.content}>
          <div className={styles.title}>New Dream</div>
          <Input placeholder="input your new dream..."></Input>
          <div className={styles.actions}>
            <Button size="small" variant="outlined">
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
