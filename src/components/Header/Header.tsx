import classes from "./Header.module.scss";

import { Logo } from "./Logo/Logo";
import { Name } from "./Name/Name";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Name />
      <Logo />
      <Navigation />
    </header>
  );
};
