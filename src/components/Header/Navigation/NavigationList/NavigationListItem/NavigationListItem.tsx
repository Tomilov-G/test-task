import classes from "./NavigationListItem.module.scss"

import { type RootState } from "../../../../../store/store";
import { useSelector } from "react-redux";


export const NavigationListItem = () => {
  const machineTypes = useSelector(
    (state: RootState) => state.machineTypes.items
  );
  return (
    <>
      <li className={classes.navigationListFirstItem}>All</li>
      {machineTypes.map((machineType) => {
        return <li className={classes.navigationListItem}>{machineType.name}</li>;
      })}
      <li className={classes.navigationListLastItem}>Manage types</li>
    </>
  );
};
