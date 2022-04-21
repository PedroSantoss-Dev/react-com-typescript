import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
   
     <Routes>
       <Route path="/pag-inicial" element={<p>pagina inicial</p>}/>
       <Route path="*" element={<Navigate to="/pag-inicial"/>}/>


     </Routes>
   
  );
}