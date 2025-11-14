import { CloseIcon } from "../CloseIcon/CloseIcon";
import classes from "./HeaderCard.module.scss";

interface HeaderCardProps {
  objectType: string;
}
export const HeaderCard = ({ objectType }: HeaderCardProps) => {
  return (
    <div className={classes.headerCard}>
      <h5 className={classes.typeName}>{objectType}</h5>
      <CloseIcon />
    </div>
  );
};
