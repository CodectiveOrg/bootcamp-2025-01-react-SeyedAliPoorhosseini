import Button from "../Button/Button";

import IconParkTwotoneMoon from "../../icons/IconParkTwotoneMoon";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Dream Board</h1>
      <Button SameWidthHeight>
        <IconParkTwotoneMoon/>
      </Button>
    </header>
  );
}
export default Header;
