import classes from "./CloseIcon.module.scss";

export const CloseIcon = () => {
  return (
    <svg
      width={15}
      height={15}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.closeIcon}
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        strokeWidth="2"
        stroke="currentColor" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
