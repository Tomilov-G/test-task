import React from "react";
import { Button } from "../../../../../ui/Button/Button";
import { Input } from "../../../../../ui/Input/Input";
import classes from "./MainCard.module.scss";

interface MainCardProps {
  objectType: string;
  setObjectType: (value: string) => void;
}

type InputType = "text" | "number" | "date" | "checkbox";

interface RequestField {
  id: number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: InputType;
  label: string;
}

export const MainCard = ({ objectType, setObjectType }: MainCardProps) => {
  const requestFields: RequestField[] = [
    {
      id: 1,
      label: "Object type",
      placeholder: "",
      onChange: (e) => setObjectType(e.target.value),
      value: objectType,
      type: "text",
    },
    { id: 2, label: "Object Title", placeholder: "Title", type: "text" },
    { id: 3, label: "Fields", placeholder: "Title", type: "text" },
  ];

  return (
    <div className={classes.mainCard}>
      <div className={classes.mainCardFirstBlock}>
        {requestFields.map((field) => {
          const inputId = `field-${field.id}`;

          if (field.id === 3) {
            return (
              <div key={field.id} className={classes.fieldRow}>
                <label htmlFor={inputId}>{field.label}</label>
                <div className={classes.inputWithButton}>
                  <Input
                    id={inputId}
                    placeholder={field.placeholder}
                    onChange={field.onChange}
                    type={field.type}
                    value={field.value}
                  />
                  <Button textContent="Add" onClick={() => {}} />
                </div>
              </div>
            );
          }

          return (
            <div key={field.id} className={classes.fieldRow}>
              <label htmlFor={inputId}>{field.label}</label>
              <Input
                id={inputId}
                placeholder={field.placeholder}
                onChange={field.onChange}
                type={field.type}
                value={field.value}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
