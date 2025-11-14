import classes from "./CardManageType.module.scss";
import { useState } from "react";
import { HeaderCard } from "./HeaderCard/HeaderCard";
import { MainCard } from "./MainCard/MainCard";

export const CardManageType = () => {
  const [objectType, setObjectType] = useState("");
  return (
    <div className={classes.card}>
      <HeaderCard objectType={objectType} />
      <MainCard objectType={objectType} setObjectType={setObjectType} />
    </div>
  );
};
