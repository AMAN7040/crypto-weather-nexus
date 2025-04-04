import { fetchCoins } from "@/app/utils/fetchCoins";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchCoinData = createAsyncThunk(
  "coinSlice/fetchCoins",
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await fetchCoins();

      if (!response || response.length === 0) {
        throw new Error("coin data is empty");
      }
      const currentData = getState().coins.data;
      const isSame = JSON.stringify(currentData) === JSON.stringify(response);
      if (isSame) return rejectWithValue("No update needed");

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const coinSlice = createSlice({
  name: "coins",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setInitialData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoinData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCoinData.rejected, (state, action) => {
        state.loading = false;
        if (action.payload !== "No update needed") {
          state.error = action.payload;
        }
      });
  },
});

export const { setInitialData } = coinSlice.actions;

export default coinSlice.reducer;
