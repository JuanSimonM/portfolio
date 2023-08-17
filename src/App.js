import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioPage from "./pages/InicioPage";
import AnadirPage from "./pages/AnadirPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/anadir" element={<AnadirPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
