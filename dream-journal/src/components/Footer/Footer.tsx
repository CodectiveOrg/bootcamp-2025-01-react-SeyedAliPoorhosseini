import IconParkTwotoneAdd from "../../icons/IconParkTwotoneAdd";

import Button from "../Button/Button";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Button SameWidthHeight shape="circle">
        <IconParkTwotoneAdd/>
      </Button>
    </footer>
  );
}
export default Footer;
