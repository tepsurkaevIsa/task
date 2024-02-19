import React from 'react'
import styles from "../page.module.css";
import { InputRadio } from '@/components/ui/InputRadio/InputRadio';
import { PulseContainer } from '@/components/container/PulseContainer';


function PulsePage() {

  return (
    <div className={styles.pages}>
      <h1>Просмотр и изменение показателей пульса</h1>
      <InputRadio text={"Малый размер"} />
      <InputRadio text={"Большой размер"} />
      <PulseContainer/>
    </div>
  );
}

export default PulsePage