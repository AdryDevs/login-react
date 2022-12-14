
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Implementamos React-router-dom en app.js, por eso importamos....

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importaciones de containers y componentes

import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';

function App() {
  return (
    // Todos los elementos en React van a estar en lenguaje JSX.
    <div className="App">

      {/* Genero el entorno de React Router Dom para el enrutado de vistas y componentes */}
      
      <BrowserRouter>
      
      
        <Routes>
        {/* La parte cambiante es lo que contiene Routes DENTRO */}

            {/* Cada Route contendrĂ¡ una vista..... */} 

            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>


        </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
