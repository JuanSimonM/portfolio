import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import InicioPage from './pages/InicioPage';
import AnadirPage from './pages/AnadirPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InicioPage/>} />
        <Route path='/anadir' element={<AnadirPage/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
