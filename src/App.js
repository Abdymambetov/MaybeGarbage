
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Menu from './pages/menu/Menu'
import Cart from "./components/cart/Cart";
import {Container} from "@mui/material";

function App() {
  return (
      <Container>
        <BrowserRouter>
            <Menu/>
              <Routes>
                <Route index element={<MainPage/>}/>
                <Route path='/cart' element={<Cart/>}/>
              </Routes>
        </BrowserRouter>
      </Container>
  );
}

export default App;
