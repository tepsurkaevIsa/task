import React from 'react'
import styles from "../page.module.css";
import { InputRadio } from '@/components/ui/InputRadio/InputRadio';
import { TemperatureContainer } from '@/components/container/TemperatureContainer';


function TemperaturePage() {

  return (
    <div className={styles.pages}>
      <h1>Просмотр и изменение показателей температуры</h1>
      <InputRadio  text={"Малый размер"} />
      <InputRadio  text={"Большой размер"} />
      <TemperatureContainer/>
    </div>
  );
}


export default TemperaturePage