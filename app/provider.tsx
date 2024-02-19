'use client'

import { Provider as ReduxProvaider } from 'react-redux';
import { ReactNode } from 'react';
import { store } from '@/redux/store/store';

export function Provider({ children }: { children: ReactNode }) {
    return <ReduxProvaider store={store} >{children}</ReduxProvaider>;
  }