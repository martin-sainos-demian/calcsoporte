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
                <Route path='/mantenimiento' element={<>
                    <Mantenimiento></Mantenimiento>
                    <input type="number" placeholder="L" className="inputDemma" id="L"></input>
                    </>}></Route>
                <Route path='/reingenieria' element={<>
                    <Reingenieria></Reingenieria>
                    <input type="number" placeholder="L" className="inputDemma" id="L"></input>
                    </>}></Route>
                <Route path='/ambas' element={<>
                    <Mantenimiento></Mantenimiento>
                    <Reingenieria></Reingenieria>
                    <input type="number" placeholder="L" className="inputDemma" id="L"></input>
                    </>}></Route>
            </Routes>
        </HashRouter>
        <Titulo></Titulo>
        <Navbar></Navbar>
        </>
    )
}

export default Menu;