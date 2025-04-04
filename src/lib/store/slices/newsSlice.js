import { fetchNews } from "@/app/utils/fetchNews";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const defaultNews = [
  {
    title: "Bitcoin Hits New All-Time High",
    description:
      "Bitcoin reaches a new all-time high as institutional adoption increases.",
    link: "https://example.com/bitcoin-all-time-high",
  },
  {
    title: "Ethereum 2.0 Upgrade: What to Expect",
    description:
      "Ethereum's upcoming upgrade promises to reduce gas fees and improve scalability.",
    link: "https://example.com/ethereum-2-0-upgrade",
  },
  {
    title: "Ripple's Latest Legal Battle with SEC",
    description:
      "Ripple faces a major legal battle with the SEC over its token classification.",
    link: "https://example.com/ripple-sec-legal-battle",
  },
];

export const fetchNewsData = createAsyncThunk(
  "news/fetchNews",
  async (_, { getState, rejectWithValue }) => {
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
    headlines: defaultNews,
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
