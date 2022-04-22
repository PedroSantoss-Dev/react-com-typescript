import { ThemeProvider } from "@mui/material";
import { BrowserRouter, } from "react-router-dom";
import { AppRoutes } from "./routes/index"
import { LigthTheme } from './themes/ligth'
export const App = () => {
  return (
   <ThemeProvider theme={LigthTheme}>
   <BrowserRouter>
    <AppRoutes/>
   </BrowserRouter>
   </ThemeProvider> 
  );
}


