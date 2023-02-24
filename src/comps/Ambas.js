import Mantenimiento, {showCMan} from "./Mantenimiento";
import Reingenieria, {showCRe} from "./Reingenieria";
import Footer from "./Footer";

const Ambas = () => {
    return(
        <>
            <Mantenimiento></Mantenimiento>
            <Reingenieria></Reingenieria>
            <br></br>
            <p id="res"></p>
            <br></br>
            <button className="buttonDemma" onClick={show}>calcular</button>
            <br></br>
        </>
    )
}

const show = () => {
    document.getElementById("res").innerHTML = calc();
    return calc();
}

const calc = () => {
    let resp = 0;
    resp = showCMan / showCRe;
    return resp;
}

export default Ambas;