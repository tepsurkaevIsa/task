'use client'
import { useAppSelector } from '@/redux/store/store';
import React from 'react'
import { Indicators } from '../Indicators/Indicators';

export const PressureContainer = () => {
    const pressureDia = useAppSelector((state) => state.data.pressureDia);
    const pressureSis = useAppSelector((state) => state.data.pressureSis);
  return (
    <>
      <Indicators indicator="pressureDia" valueIndicator={pressureDia}  />
      <Indicators indicator="pressureSis" valueIndicator={pressureSis}  />
    </>
  )
}
