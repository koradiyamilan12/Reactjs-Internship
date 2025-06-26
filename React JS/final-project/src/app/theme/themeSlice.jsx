import { createSlice } from "@reduxjs/toolkit";

const initialTheme = "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: initialTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      const themeValue = state.darkMode ? "dark" : "light";
      localStorage.setItem("theme", themeValue);
      const root = document.documentElement;
      root.classList.toggle("dark", state.darkMode);
    },
    setTheme: (state, action) => {
      state.darkMode = action.payload === "dark";
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
