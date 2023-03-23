import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "../App";
import PolicyPriv from "../components/politica"
import Terminos from "../components/terminos"
//import Acercade from "../components/acercade";

//import Contacto from "../components/contacto";
import NotFound from "../components/notFound";

const Router = ()=>(
    <BrowserRouter>
        <Routes>
            <Route index path ="/Booster" element={<App/>}/>
            <Route path ="/politica" element={<PolicyPriv/>}/>
            <Route path ="/terminos" element={<Terminos/>}/>
         {/*    <Route path ="/acercade" element={<Acercade/>}/>
            <Route path ="/contacto" element={<Contacto/>}/>  */}
             <Route path="*" element={<NotFound />} /> {/* // Ruta para el error 404  */}
        </Routes>
    </BrowserRouter>
)

export default Router;