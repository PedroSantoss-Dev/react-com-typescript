import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contents/ThemeContext";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext()
  return (
   
     <Routes>
       <Route path="/pag-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}>teste</Button>}/>
       <Route path="*" element={<Navigate to="/pag-inicial"/>}/>


     </Routes>
   
  );
}