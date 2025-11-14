import classes from "./NavigationListItem.module.scss";
import { NavLink } from "react-router-dom";
import { type RootState } from "../../../../../store/store";
import { useSelector } from "react-redux";

export const NavigationListItem = () => {
  const machineTypes = useSelector(
    (state: RootState) => state.machineTypes.items
  );

  return (
    <>
      <li className={classes.navigationListFirstItem}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${classes.navigationListItemLink} ${classes.active}`
              : classes.navigationListItemLink
          }
        >
          All
        </NavLink>
      </li>

      {machineTypes.map((machineType) => (
        <li key={machineType.id} className={classes.navigationListItem}>
          <NavLink
            to={`/type/${machineType.id}`}
            className={({ isActive }) =>
              isActive
                ? `${classes.navigationListItemLink} ${classes.active}`
                : classes.navigationListItemLink
            }
          >
            {machineType.name}
          </NavLink>
        </li>
      ))}

      <li className={classes.navigationListLastItem}>
        <NavLink
          to="/manage-types"
          className={({ isActive }) =>
            isActive
              ? `${classes.navigationListItemLink} ${classes.active}`
              : classes.navigationListItemLink
          }
        >
          Manage types
        </NavLink>
      </li>
    </>
  );
};
