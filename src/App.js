import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './compotentes/Inicio'
import Personaje from './compotentes/Personaje'
function App() {
  return (
    <div className="contenedor">
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio></Inicio>}></Route>
      <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>

    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
