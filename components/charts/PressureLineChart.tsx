import React from 'react';
import { Typography } from '@mui/material';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartData } from '@/redux/store/data';

interface Props {
  chart: ChartData[];
  title: string;
}

export const PressureLineChart: React.FC<Props> = ({ chart, title }) => {
  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <LineChart width={550} height={250} data={chart}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={4} dot={{ stroke: '#82ca9d', strokeWidth: 6 }} />
      </LineChart>
    </div>
  );
};

