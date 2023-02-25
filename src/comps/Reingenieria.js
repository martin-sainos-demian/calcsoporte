import Footer from "./Footer";

const Reingenieria = () => {
    return(
        <>
        <br></br>
        <input type="number" placeholder="P4" className="inputDemma" id="P4"></input>
        <br></br>
        <input type="number" placeholder="P5" className="inputDemma" id="P5"></input>
        <br></br>
        <input type="number" placeholder="P6" className="inputDemma" id="P6"></input>
        <br></br>
        <input type="number" placeholder="P7" className="inputDemma" id="P7"></input>
        <br></br>
        <input type="number" placeholder="P8" className="inputDemma" id="P8"></input>
        <br></br>
        <input type="number" placeholder="P9" className="inputDemma" id="P9"></input>
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
    document.getElementById("resR").innerHTML = cRe();
    return cRe();
}

const cRe = () => {
    let resp = 0;
    let p4 = document.getElementById("P4").value;
    let p5 = document.getElementById("P5").value;
    let p6 = document.getElementById("P6").value;
    let p7 = document.getElementById("P7").value;
    let p8 = document.getElementById("P8").value;
    let p9 = document.getElementById("P9").value;
    let l = document.getElementById("L").value;
    resp = ( p6 - ( (p4 + p5) * (l - p8) ) ) - (p7 * p9);
    return resp;
}

export default Reingenieria;