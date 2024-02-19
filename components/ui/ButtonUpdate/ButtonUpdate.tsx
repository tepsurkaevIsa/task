import React from "react";
import styles from "./ButtonUpdate.module.css";

interface ButtonUpdateProps {
  handleCanselAndSave: () => void;
  value: string;
}

export const ButtonUpdate: React.FC<ButtonUpdateProps> = ({ handleCanselAndSave, value }) => {
  return (
    <button onClick={handleCanselAndSave} className={styles.btn}>
      {value}
    </button>
  );
};


