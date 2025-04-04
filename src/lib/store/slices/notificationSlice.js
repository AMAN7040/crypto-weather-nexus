import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    data: [],
  },
  reducers: {
    addNotification: (state, action) => {
      console.log("🔵 Notification reducer called:", action.payload);
      state.data.unshift(action.payload);
      if (state.data.length > 10) {
        state.data = state.data.slice(0, 10);
      }
    },
    clearNotification: (state) => {
      state.data = [];
    },
  },
});

export const { addNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
