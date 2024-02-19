import React from "react";
import styles from "./InputRange.module.css";

interface InputRangeProps {
  size: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  item: {
    value: number;
    min_value: number;
    max_value: number;
  };
}

export const InputRange: React.FC<InputRangeProps> = ({ size, onChange, item: { value, min_value, max_value } }) => {
  return (
    <input
      className={size ? styles.InputRangeMin : styles.InputRange}
      type="range"
      min={min_value}
      max={max_value}
      value={value}
      onChange={onChange}
    />
  );
};

