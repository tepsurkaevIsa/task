'use client'
import { useAppSelector } from '@/redux/store/store';
import React from 'react'
import { Indicators } from '../Indicators/Indicators';

export const PulseContainer = () => {
    const pulse = useAppSelector((state) => state.data.pulse);
  return (
    <Indicators indicator="pulse" valueIndicator={pulse}  />
  )
}
