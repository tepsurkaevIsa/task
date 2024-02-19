import React from 'react';
import { Typography } from '@mui/material';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartData } from '@/redux/store/data';

interface Props {
  chart: ChartData[];
  title: string;
}

export const PulseBarChart: React.FC<Props> = ({ chart, title }) => {
  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <BarChart width={550} height={250} data={chart}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};


