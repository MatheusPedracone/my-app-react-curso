import { Button } from "@mui/material";
import { Routes, Navigate, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Button variant="contained" color="primary">TESTE</Button>} />

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};
