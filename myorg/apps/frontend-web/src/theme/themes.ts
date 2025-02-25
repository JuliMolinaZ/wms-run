// src/theme/themes.ts
import { createTheme } from "@mui/material/styles";

export const theme1 = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#6adbef" },
    secondary: { main: "#5ce1e6" },
    background: { default: "#f5f5f5", paper: "#ffffff" },
  },
  components: {
    MuiAppBar: { styleOverrides: { root: { backgroundColor: "#212121" } } },
  },
});

export const theme2 = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#03A9F4" },
    secondary: { main: "#FF5722" },
    background: { default: "#303030", paper: "#424242" },
  },
  components: {
    MuiAppBar: { styleOverrides: { root: { backgroundColor: "#000000" } } },
  },
});

export const theme3 = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#4CAF50" },
    secondary: { main: "#FFC107" },
    background: { default: "#e0f7fa", paper: "#ffffff" },
  },
});

export const theme4 = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#9C27B0" },
    secondary: { main: "#FF4081" },
    background: { default: "#303030", paper: "#424242" },
  },
});

export const theme5 = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#FF5722" },
    secondary: { main: "#795548" },
    background: { default: "#fff3e0", paper: "#ffffff" },
  },
});

export const theme6 = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#607D8B" },
    secondary: { main: "#FF9800" },
    background: { default: "#ECEFF1", paper: "#ffffff" },
  },
});

export const theme7 = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#E91E63" },
    secondary: { main: "#03A9F4" },
    background: { default: "#212121", paper: "#424242" },
  },
});

export const themes = [theme1, theme2, theme3, theme4, theme5, theme6, theme7];

export const getDailyTheme = () => {
  const dayIndex = new Date().getDay(); // 0 (Domingo) a 6 (Sábado)
  return themes[dayIndex];
};
