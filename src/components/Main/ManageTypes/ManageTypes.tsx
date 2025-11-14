import { Button } from "../../../ui/Button/Button";
import { CardManageType } from "./CardManageType/CardManageType";
import classes from "./ManageTypes.module.scss";

export const ManageTypes = () => {
  return (
    <div className={classes.manageTypes}>
      <CardManageType />
      <Button textContent="Add Type" className={classes.button} />
    </div>
  );
};
