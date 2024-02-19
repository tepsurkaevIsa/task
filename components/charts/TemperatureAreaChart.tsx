import React from 'react';
import { Typography } from '@mui/material';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartData } from '@/redux/store/data';

interface Props {
  chart: ChartData[];
  title: string;
}

export const TemperatureAreaChart: React.FC<Props> = ({ chart, title }) => {
  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <AreaChart width={550} height={250} data={chart}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="date" type="category" />
        <YAxis />
        <Area type="monotone" dataKey="value" fill="#ff5733" stroke="#ff5733" />
      </AreaChart>
    </div>
  );
};


