'use client'
import { fetchTemperature } from '@/redux/store/redusers/indicatorSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store/store';
import React, { useEffect } from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./container.module.css"

export const NowTemperatureContainer = () => {

    const nowTemperature = useAppSelector((state: any) => state.data.nowTemperature);
    const size = useAppSelector((state: any) => state.view.value);
    const loading = useAppSelector((state: any) => state.loading);
    
    const dispatch = useAppDispatch()
  
  
    useEffect(() => {
      dispatch(fetchTemperature());
    }, [dispatch, nowTemperature]);
  
    
  return (
    <>
      {loading ? (
        <div className={size ? styles.NowTempetarureMin : styles.NowTempetarure}>
          <CircularProgress />
        </div>
      ) : (
        <div className={size ? styles.NowTempetarureMin : styles.NowTempetarure}>
          <div>
            <p className={styles.name}>{nowTemperature.name}</p>
            <div className={styles.nowValue}>
              <p className={styles.value}>{Math.floor(nowTemperature.value)}</p>
              <p className={styles.units}>{nowTemperature.units}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
