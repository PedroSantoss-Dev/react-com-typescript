import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
   
     <Routes>
       <Route path="/pag-inicial" element={<Button variant="contained" color="primary">teste</Button>}/>
       <Route path="*" element={<Navigate to="/pag-inicial"/>}/>


     </Routes>
   
  );
}