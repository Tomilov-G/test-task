import classes from "./Navigation.module.scss";
import { NavigationList } from "./NavigationList/NavigationList";

export const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <NavigationList />
    </nav>
  );
};
