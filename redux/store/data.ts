export interface Data {
  [key: string]: {
    name: string;
    value: number | string;
    units: string;
    max_value?: number;
    min_value?: number;
    allow_edit: boolean;
  };
}

export const data: Data = {
  pressureDia: {
    name: "Диастолическое давление",
    value: 80,
    units: "мм. рт. ст.",
    max_value: 300,
    min_value: 50,
    allow_edit: true,
  },
  pressureSis: {
    name: "Систолическое давление",
    value: 120,
    units: "мм. рт. ст.",
    max_value: 350,
    min_value: 50,
    allow_edit: true,
  },
  pulse: {
    name: "Пульс",
    value: 75,
    units: "уд./мин.",
    max_value: 200,
    min_value: 30,
    allow_edit: true,
  },
  temperature: {
    name: "Температура",
    value: 36,
    units: "°C",
    max_value: 100,
    min_value: -100,
    allow_edit: true,
  },
  nowTemperature: {
    name: "Температура",
    value: '',
    units: "°C",
    allow_edit: false,
  },
};

export interface ChartData {
  date: string;
  value: number | string;
}

export interface FakeDataCharts {
  [key: string]: ChartData[];
}

export const fakeDataCharts: FakeDataCharts = {
  pressureDia: [
    { date: '2024-02-11', value: 80 },
    { date: '2024-02-12', value: 77 },
    { date: '2024-02-13', value: 90 }, 
    { date: '2024-02-14', value: 72 }, 
  ],
  pressureSis: [
    { date: '2024-02-11', value: 114 },
    { date: '2024-02-12', value: 110 },
    { date: '2024-02-13', value: 125 }, 
    { date: '2024-02-15', value: 133 },
  ],
  pulse: [
    { date: '2024-02-11', value: 60 },
    { date: '2024-02-13', value: 75 }, 
    { date: '2024-02-14', value: 90 }, 
    { date: '2024-02-15', value: 65 },
  ],
  temperature: [
    { date: '2024-02-11', value: 36 },
    { date: '2024-02-13', value: 34 }, 
    { date: '2024-02-14', value: 40 }, 
    { date: '2024-02-15', value: 41 },
  ],
};
