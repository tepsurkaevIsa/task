import React from "react";
import styles from "../page.module.css";
import { InputRadio } from "../../components/ui/InputRadio/InputRadio";
import { NowTemperatureContainer } from "@/components/container/NowTemperatureContainer";


function NowTemperaturePage() {

  return (
    <div className={styles.pages}>
      <h1>Просмотр показателя температуры на улице</h1>
      <InputRadio  text={"Малый размер"} />
      <InputRadio  text={"Большой размер"} />
      <NowTemperatureContainer/>
    </div>
  );
};

export default NowTemperaturePage;
