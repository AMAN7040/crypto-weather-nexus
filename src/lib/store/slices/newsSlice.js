import { fetchNews } from "@/app/utils/fetchNews";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewsData = createAsyncThunk(
  "news/fetchNews",
  async (_, {getState, rejectWithValue }) => {
    try {
      const data = await fetchNews();
      const currentData = getState().news.headlines;

      const isSame = JSON.stringify(currentData) === JSON.stringify(data);
      if (isSame) return rejectWithValue("No update needed");

      if (!data.ok) {
        throw new Error("Failed to fetch news");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    headlines: [],
    loading: false,
    error: null,
  },
  reducers: {
    setNewsData: (state, action) => {
      state.headlines = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.headlines = action.payload;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.loading = false;
        if (action.payload !== "No update needed") {
          state.error = action.payload;
        }
      });
  },
});

export const { setNewsData } = newsSlice.actions;

export default newsSlice.reducer;
