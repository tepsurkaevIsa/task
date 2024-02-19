import React from 'react';
import styles from './IndicatorsDescription.module.css';

interface Props {
  size: boolean; 
  item: {
    value: number | null; 
    units: string; 
  };
}

export const IndicatorsDescription: React.FC<Props> = ({ size, item: { value, units } }) => {
  return (
        <div className={size ? styles.DescriptionMin : styles.Description}>
            {value} <span className={styles.span}>{units}</span>
        </div>
  );
};
