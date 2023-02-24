import {useState} from "react";
import { Routes, Route , HashRouter } from "react-router-dom";
import Mantenimiento from "./Mantenimiento";
import Reingenieria from "./Reingenieria";
import Titulo from "./Titulo";
import Ambas from "./Ambas";
import Navbar from "./Navbar";

const Menu = () => {
    [func, setFunc] = useState();
    return(
        <>
        <HashRouter>
            <Navbar></Navbar>
            <Titulo></Titulo>
            <Routes>
                <Route exact path='/' element={<p>eliga un calculo</p>}></Route>
                <Route path='/mantenimiento' element={<Mantenimiento onClick={setFunc}></Mantenimiento>}></Route>
                <Route path='/reingenieria' element={<Reingenieria onClick={setFunc}></Reingenieria>}></Route>
                <Route path='/ambas' element={<Ambas onClick={setFunc}></Ambas>}></Route>
            </Routes>
            <p className="res" id="res"></p>
            <br></br>
            <button className="buttonDemma" onClick={func}>calcular</button>
            <br></br>
        </HashRouter>
        </>
    )
}

export default Menu;