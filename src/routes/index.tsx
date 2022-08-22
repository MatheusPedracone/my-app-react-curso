import { Button } from "@mui/material";
import { Routes, Navigate, Route } from "react-router-dom";
import { useAppThemeContext } from "../shared/context";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route path="dashboard" element={<Button variant="contained" color="primary" onClick={toggleTheme}>toggle theme</Button>} />

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};
