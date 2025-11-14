import classes from "./NavigationList.module.scss";
import { NavigationListItem } from "./NavigationListItem/NavigationListItem";

export const NavigationList = () => {
  return (
    <ul className={classes.navigationList}>
      <NavigationListItem />
    </ul>
  );
};
