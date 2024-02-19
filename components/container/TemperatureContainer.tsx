'use client'
import { useAppSelector } from '@/redux/store/store';
import React from 'react'
import { Indicators } from '../Indicators/Indicators';

export const TemperatureContainer = () => {
    const temperature = useAppSelector((state) => state.data.temperature);

  return (
    <Indicators indicator="pulse" valueIndicator={temperature}  />
  )
}
