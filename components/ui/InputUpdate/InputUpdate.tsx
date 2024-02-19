import React from "react";
import styles from "./InputUpdate.module.css";

interface InputUpdateProps {
  input: number | string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export const InputUpdate: React.FC<InputUpdateProps> = ({ input, setInput }) => {
  return (
    <input
      placeholder="Введите значение..."
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      className={styles.InputText}
      type="number"
    />
  );
};

