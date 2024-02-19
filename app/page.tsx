import React from "react";
import styles from "./page.module.css";
import { InputRadio } from "@/components/ui/InputRadio/InputRadio";
import { PressureContainer } from "@/components/container/PressureContainer";


function PressurePage() {

  return (
    <div className={styles.pages}>
      <h1 >Просмотр и изменение показателей давления</h1>
      <InputRadio text={"Малый размер"} />
      <InputRadio text={"Большой размер"} />
      <div className={styles.pressure}>
          <PressureContainer/>
      </div>
    </div>
  );
}

export default PressurePage;