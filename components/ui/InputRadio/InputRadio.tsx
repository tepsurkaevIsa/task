"use client"
import React from 'react';
import styles from './InputRadio.module.css';
import { useAppDispatch, useAppSelector } from '@/redux/store/store';
import { updateSize } from '@/redux/store/redusers/indicatorSlice';


export const InputRadio = ({ text } : {text: string;}) => {

  const view = useAppSelector((state)=> state.view)
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(updateSize({size: e.target.value, value: e.target.value !== "Большой размер"}))
  }
  
  return (
    <label className={styles.label}>
      <input
        className={styles.inputRadio}
        type="radio"
        name="option"
        value={text}
        checked={view.size === text}
        onChange={handleChange}
      />
      {text}
    </label>
  );
};

 

