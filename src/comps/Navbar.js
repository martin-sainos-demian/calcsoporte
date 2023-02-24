import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const nav = useNavigate();
    return(
        <>
            <div className="navBarDemma">
                <button className="navBarElementDemma" onClick={nav("/mantenimieniento")}>mantenimieniento</button>
                <button className="navBarElementDemma" onClick={nav("/reingenieria")}>reingenieria</button>
                <button className="navBarElementDemma" onClick={nav("/ambas")}>ambas</button>
            </div>
        </>
    )
}

export default Navbar;