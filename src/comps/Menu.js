import {useState} from "react";
import { Routes, Route , HashRouter } from "react-router-dom";
import Mantenimiento from "./Mantenimiento";
import Reingenieria from "./Reingenieria";
import Titulo from "./Titulo";
import Ambas from "./Ambas";
import Navbar from "./Navbar";

const Menu = () => {
    return(
        <>
        <HashRouter>
            <Navbar></Navbar>
            <Titulo></Titulo>
            <Routes>
                <Route exact path='/' element={<p>eliga un calculo</p>}></Route>
                <Route path='/mantenimiento' element={<>
                <Mantenimiento></Mantenimiento>
                <br></br>
                <input type="number" placeholder="L" className="inputDemma" id="L"></input>
                </>}></Route>
                <Route path='/reingenieria' element={<>
                <Reingenieria></Reingenieria>
                <br></br>
                <input type="number" placeholder="L" className="inputDemma" id="L"></input>
                </>}></Route>
                <Route path='/ambas' element={<>
                <Ambas></Ambas>
                <br></br>
                <input type="number" placeholder="L" className="inputDemma" id="L"></input>
                </>}></Route>
            </Routes>
        </HashRouter>
        </>
    )
}

export default Menu;