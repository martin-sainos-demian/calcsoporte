import { Routes, Route , HashRouter } from "react-router-dom";
import Mantenimiento from "./Mantenimiento";
import Reingenieria from "./Reingenieria";

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
        </>
    )
}

export default Menu;