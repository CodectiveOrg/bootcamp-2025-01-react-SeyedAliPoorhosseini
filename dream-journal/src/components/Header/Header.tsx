import Button from "../Button/Button";

import IconamoonModeDark from "../../icons/IconamoonModeDark";

function Header() {
  return (
    <header>
      <h1>Dream Board</h1>
      <Button className="theme" >
        <IconamoonModeDark className="icon" />
      </Button>
    </header>
  );
}
export default Header;
