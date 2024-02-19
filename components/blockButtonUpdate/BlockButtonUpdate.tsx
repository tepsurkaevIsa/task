import React from 'react';
import styles from './BlockButtonUpdate.module.css';
import { ButtonUpdate } from '../ui/ButtonUpdate/ButtonUpdate';
import { cancelUpdate, saveUpdate } from '@/redux/store/redusers/indicatorSlice';
import { useAppDispatch } from '@/redux/store/store';

interface Props {
  indicator: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  input: number | string;
}

export const BlockButtonUpdate: React.FC<Props> = ({ indicator, setInput, input }) => {
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(cancelUpdate(indicator));
    setInput('');
  };

  const handleSave = () => {
    const cacheElement = { date: new Date().toISOString().slice(0, 10), value: input };
    dispatch(saveUpdate({ indicator, input, cacheElement }));
    setInput('');
  };

  return (
    <div className={styles.block_btn}>
      <ButtonUpdate handleCanselAndSave={handleCancel} value="✕" />
      <ButtonUpdate handleCanselAndSave={handleSave} value="✓" />
    </div>
  );
};
