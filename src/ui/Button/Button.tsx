import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  textContent: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ className, textContent, onClick }: ButtonProps) => {
  const combinedClassName = `${classes.defaultButton} ${
    className ?? ""
  }`.trim();

  return (
    <button onClick={onClick} className={combinedClassName} type="button">
      {textContent}
    </button>
  );
};
