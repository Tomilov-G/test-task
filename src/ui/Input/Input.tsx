// ui/Input/Input.tsx
import React from "react";
import classes from "./Input.module.scss";

interface InputProps {
  id?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input = ({
  id,
  type = "text",
  placeholder,
  className,
  onChange,
  value,
}: InputProps) => {
  const combinedClassName = `${classes.defaultInput} ${className ?? ""}`.trim();

  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      className={combinedClassName}
      onChange={onChange}
      value={value}
    />
  );
};
