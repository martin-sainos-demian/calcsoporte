import { Routes, Route , HashRouter } from "react-router-dom";
import Mantenimiento from "./Mantenimiento";
import Reingenieria from "./Reingenieria";
import Titulo from "./Titulo";
import Navbar from "./Navbar";

const Menu = () => {
    return(
        <>
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<p>a</p>}></Route>
                <Route path='/mantenimiento' element={<Mantenimiento></Mantenimiento>}></Route>
                <Route path='/reingenieria' element={<Reingenieria></Reingenieria>}></Route>
            </Routes>
        </HashRouter>
        <Titulo></Titulo>
        <Navbar></Navbar>
        </>
    )
}

export default Menu;