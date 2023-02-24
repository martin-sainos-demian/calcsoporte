import { Routes, Route , HashRouter } from "react-router-dom";

const Menu = () => {
    return(
        <>
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<p>a</p>}></Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default Menu;