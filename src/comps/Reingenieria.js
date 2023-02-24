import Footer from "./Footer";

const Reingenieria = () => {
    return(
        <>
        <br></br>
        <br></br>
        <Footer></Footer>
        <br></br>
        <button className="buttonDemma" onClick={showCRe}>calcular</button>
        <br></br>
        <p className="res" id="resR"></p>
        <br></br>
        </>
    )
}

export const showCRe = () => {
    document.getElementById("resM").innerHTML = cRe();
    return cRe();
}

const cRe = () => {
    return 1;
}

export default Reingenieria;