import React from "react";
import styles from "../Indicators/Indicators.module.css";
import { BlockButtonUpdate } from "../blockButtonUpdate/BlockButtonUpdate";
import { IndicatorsDescription } from "../IndicatorsDescription/IndicatorsDescription";
import { InputUpdate } from "../ui/InputUpdate/InputUpdate";
import { Button } from "../ui/Button/Button";
import { InputRange } from "../ui/InputRange/InputRange";

interface Props {
  size: boolean; 
  item: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdate: () => void;
  indicator: string;
  input: number | string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export const IndicatorsBlockMax: React.FC<Props> = ({
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
          <span className={styles.span}>{item.name}</span>
          <IndicatorsDescription size={size} item={item} />
          <InputRange size={size} onChange={onChange} item={item} />
          <Button size={size} textBtn="Изменить" handleUpdate={handleUpdate} />
        </>
      ) : (
        <>
          <span className={styles.span}>{item.name}</span>
          <InputUpdate input={input} setInput={setInput} />
          <BlockButtonUpdate
            indicator={indicator}
            input={input}
            setInput={setInput}
          />
        </>
      )}
    </>
  );
};
