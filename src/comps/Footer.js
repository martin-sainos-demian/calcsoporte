const Footer = (parms) => {
    return(
        <>
            <input type="number" placeholder="L" className="inputDemma" id="L"></input>
            <br></br>
            <p className="res" id="res"></p>
            <br></br>
            <button className="buttonDemma" onClick={parms.onClick}>calcular</button>
            <br></br>
        </>
    )
}

export default Footer;