import React from "react";
import styles from "./Button.module.css";
import Image from "next/image";
import icon from "../../../public/Icon.png"

interface ButtonProps {
  size?: boolean;
  handleUpdate: () => void;
  textBtn: string;
}

export const Button: React.FC<ButtonProps> = ({size, handleUpdate, textBtn }) => {
  return (
    <button 
      onClick={handleUpdate} 
      className={size ? styles.btnMin : styles.btn }
    >
      <Image className={styles.img} src={icon}   width={15} height={15} alt="#"/> {textBtn}
    </button>
  );
};



