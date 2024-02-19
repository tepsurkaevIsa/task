import React, { useState } from "react";
import styles from "./Indicators.module.css";
import { saveUpdate, updateValue } from "../../redux/store/redusers/indicatorSlice";
import { IndicatorsBlockMin } from "../IndicatorsBlock/IndicatorsBlockMin";
import { IndicatorsBlockMax } from "../IndicatorsBlock/IndicatorsBlockMax";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";

interface Props {
  indicator: string;
  valueIndicator: any; 
}

export const Indicators: React.FC<Props> = ({ indicator, valueIndicator }) => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  const size = useAppSelector((state) => state.view.value);

  const handleUpdate = () => dispatch(updateValue(indicator));
  const handleUpdateSave = (e: React.ChangeEvent<HTMLInputElement>) => {
     // если расскоментить строку ниже палзунок начнет работать
   // dispatch(saveUpdate({ indicator, input: e.target.value }));
  };

  return (
    <div className={size ? styles.IndicatorsMin : styles.Indicators}>
      {size ? (
        <IndicatorsBlockMin
          onChange={handleUpdateSave}
          handleUpdate={handleUpdate}
          size={size}
          item={valueIndicator}
          indicator={indicator}
          input={input}
          setInput={setInput}
        />
      ) : (
        <IndicatorsBlockMax
          onChange={handleUpdateSave}
          handleUpdate={handleUpdate}
          size={size}
          item={valueIndicator}
          indicator={indicator}
          input={input}
          setInput={setInput}
        />
      )}
    </div>
  );
};

