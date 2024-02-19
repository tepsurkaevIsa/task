import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ChartData, Data, FakeDataCharts, data, fakeDataCharts } from "../data";
import axios from "axios";

interface View {
  size: string;
  value: boolean;
}

interface IndicatorState {
  data: Data; 
  view: View;
  loading: boolean;
  charts: FakeDataCharts;
}

export const fetchTemperature = createAsyncThunk<number, void>(
  "indicator/fetchTemp",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?lat=55.7504461&lon=37.6174943&units=metric&appid=a34735bd9a7abe0aef3e86dd7f360974"
      );
      const data: number = response.data.main.temp;
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const indicatorSlice = createSlice({
  name: "indicators",
  initialState: {
    data,
    view: {
      size: "Большой размер",
      value: false,
    },
    loading: true,
    charts: {
      pressureDia: fakeDataCharts.pressureDia,
      pressureSis: fakeDataCharts.pressureSis,
      pulse: fakeDataCharts.pulse,
      temperature: fakeDataCharts.temperature,
    },
  } as IndicatorState,
  reducers: {
    updateValue: (state, { payload }: PayloadAction<string>) => {
      state.data[payload].allow_edit = false;
    },
    cancelUpdate: (state, { payload }: PayloadAction<string>) => {
      state.data[payload].allow_edit = true;
    },
    saveUpdate: (
      state,
      { payload }: PayloadAction<{ indicator: string; input: number | string; cacheElement: ChartData }>
    ) => {
      const { indicator, input, cacheElement } = payload;
      if (state.charts[indicator].length === 4) state.charts[indicator].shift();
      state.charts[indicator].push(cacheElement);
      state.data[indicator].value = input;
      state.data[indicator].allow_edit = true;
    },
    updateSize: (state, { payload }: PayloadAction<View>) => {
      state.view = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemperature.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTemperature.fulfilled, (state, action) => {
        state.data.nowTemperature.value = action.payload;
        state.loading = false;
      });
  },
});

export const { updateValue, cancelUpdate, saveUpdate, updateSize } = indicatorSlice.actions;

export default indicatorSlice.reducer;
