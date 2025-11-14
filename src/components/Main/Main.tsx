import classes from "./Main.module.scss";
import { type ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <main className={classes.main}>{children}</main>;
};
