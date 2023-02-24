import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const nav = useNavigate();
    
    const navMan = () => {
        console.log("navigate to mantenimiento");
        nav("/mantenimieniento");
    }
    const navReIng = () => {
        console.log("navigate to reingenieria");
        nav("/reingenieria");
    }
    const navAmbas = () => {
        console.log("navigate to ambas");
        nav("/ambas");
    }

    return(
        <>
            <div className="navBarDemma">
                <button className="navBarElementDemma" onClick={navMan}>mantenimieniento</button>
                <button className="navBarElementDemma" onClick={navReIng}>reingenieria</button>
                <button className="navBarElementDemma" onClick={navAmbas}>ambas</button>
            </div>
        </>
    )
}

export default Navbar;