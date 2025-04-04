import { fetchWeather } from "@/app/utils/fetchWeather";
import { getCities } from "@/app/utils/getCities";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchWeatherData = createAsyncThunk(
  "weatherSlice/fetchWeather",
  async (_, { rejectWithValue }) => {
    try {
      const cities = getCities();

      const data = await fetchWeather(cities);

      if (!data || data.length === 0) {
        throw new Error("Weather data is empty");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setInitialWeather: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setInitialWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
