import { Routes, Route , HashRouter } from "react-router-dom";
import Mantenimiento from "./Mantenimiento";
import Reingenieria from "./Reingenieria";
import Titulo from "./Titulo";
import Ambas from "./Ambas";
import Navbar from "./Navbar";

const Menu = () => {
    return(
        <>
        <Navbar></Navbar>
        <Titulo></Titulo>
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<p>a</p>}></Route>
                <Route path='/mantenimiento' element={<Mantenimiento></Mantenimiento>}></Route>
                <Route path='/reingenieria' element={<Reingenieria></Reingenieria>}></Route>
                <Route path='/ambas' element={<Ambas></Ambas>}></Route>
            </Routes>
        </HashRouter>
        </>
    )
}

export default Menu;