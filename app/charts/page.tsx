'use client'
import React, { useEffect, useState } from 'react';
import styles from "../page.module.css";
import { useAppSelector } from "@/redux/store/store";
import { PressureLineChart } from '@/components/charts/PressureLineChart';
import { PulseBarChart } from '@/components/charts/PulseBarChart';
import { TemperatureAreaChart } from '@/components/charts/TemperatureAreaChart';


function ChartsPage() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const charts = useAppSelector((state)=> state.charts);

  return (
    <div>
    {isClient &&

    <div className={styles.charts}>
        <PressureLineChart title={"История изменения Диастолического давления"} chart={charts.pressureDia}/>
        <PressureLineChart title={"История изменения Систолического давления"} chart={charts.pressureSis}/>
        <PulseBarChart title={"История изменения Пульса"} chart={charts.pulse}/>
        <TemperatureAreaChart title={"История изменения Температуры"} chart={charts.temperature}/>
    </div> 
    }
    </div> 
  );
}

export default ChartsPage;
