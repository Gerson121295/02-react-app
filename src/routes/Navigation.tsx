import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router"

import logo from '../assets/react.svg'
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage"

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={logo} alt="React Logo" />
            <ul>
                <li>
                    {/* desestructura isActive y valida si es true le agrega el estilo CSS 'nav-active' sino no agrega nada, regresa un string vacio '' */}
                    <NavLink to={"/"} className={ ({isActive}) => isActive ? 'nav-active' : '' }>Shoping</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"} className={ ({isActive}) => isActive ? 'nav-active' : '' }>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/users"} className={ ({isActive}) => isActive ? 'nav-active' : '' }>Users</NavLink>
                </li>
            </ul>
        </nav>
    
        <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="about" element={ <h1>About</h1>  } />  {/* <h1>lazy1</h1> */}
            <Route path="users" element={ <h1>Users</h1> } />
            <Route path="/" element={ <ShoppingPage />  } />

            {/* //Si la ruta ingresada no existe redirija al home, y con replace definimos que no pueda regresar */}
            <Route path="/*" element={ <Navigate to="/lazy1" replace/> } />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

