import React from "react";
import styles from "../Indicators/Indicators.module.css";
import { BlockButtonUpdate } from "../blockButtonUpdate/BlockButtonUpdate";
import { IndicatorsDescription } from "../IndicatorsDescription/IndicatorsDescription";
import { Button } from "../ui/Button/Button";
import { InputRange } from "../ui/InputRange/InputRange";
import { InputUpdate } from "../ui/InputUpdate/InputUpdate";

interface Props {
  size: boolean; 
  item: any; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdate: () => void;
  indicator: string;
  input: number | string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export const IndicatorsBlockMin: React.FC<Props> = ({
  size,
  item,
  onChange,
  handleUpdate,
  indicator,
  input,
  setInput,
}) => {
  return (
    <>
      {item.allow_edit ? (
        <>
          <span className={styles.btnMin + ' ' + styles.span}>
            {item.name} <Button textBtn={''} size={size} handleUpdate={handleUpdate} />
          </span>
          <span className={styles.indDescRange + ' ' + styles.span}>
            <IndicatorsDescription size={size} item={item} />
            <InputRange size={size} onChange={onChange} item={item} />
          </span>
        </>
      ) : (
        <>
          <span className={styles.btnMin + ' ' + styles.span}>
            {item.name}
            <BlockButtonUpdate
              indicator={indicator}
              input={input}
              setInput={setInput}
            />
          </span>
          <InputUpdate input={input} setInput={setInput} />
        </>
      )}
    </>
  );
};
