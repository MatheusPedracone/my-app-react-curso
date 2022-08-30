import { useEffect } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { useDrawerContext } from "../shared/context";

import { Dashboard } from "../pages/dashboard/Dashboard";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();
  useEffect(( ) => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/dashboard',
        label: 'Página inicial',
      },
      {
        icon: 'star',
        path: '/a',
        label: 'Página 2',
      }
    ]);
  }, [])

  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard/>} />

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};
