
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";


import {Container} from "@mui/material";

function App() {
  return (
      
        <BrowserRouter>
              <Routes>
                <Route index element={<MainPage/>}/>
              </Routes>
        </BrowserRouter>
      
  );
}

export default App;
