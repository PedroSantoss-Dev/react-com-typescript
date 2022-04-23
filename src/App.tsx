import { BrowserRouter, } from "react-router-dom";
import { AppRoutes } from "./routes/index"
import { AppThemeProvider } from "./shared/contents/ThemeContext";
export const App = () => {
  return (
   <AppThemeProvider>
   <BrowserRouter>
    <AppRoutes/>
   </BrowserRouter>
   </AppThemeProvider> 
  );
}


