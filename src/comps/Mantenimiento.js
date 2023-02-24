import Footer from "./Footer";

const Mantenimiento = (params) => {
   params.setFunc(showCMan);
     return(
         <>
            <br></br>
            <input type="number" placeholder="P1" className="inputDemma" id="P1"></input>
            <br></br>
            <input type="number" placeholder="P2" className="inputDemma" id="P2"></input>
            <br></br>
            <input type="number" placeholder="P3" className="inputDemma" id="P3"></input>
            <br></br>
            <Footer></Footer>
            <br></br>
         </>
     )
}

const showCMan = () => {
   document.getElementById("res").innerHTML = cMan();
}

const cMan = () => {
   let resp = 0;
   let p1 = document.getElementById("P1").value;
   let p2 = document.getElementById("P2").value;
   let p3 = document.getElementById("P3").value;
   let l = document.getElementById("L").value;
   resp = (p3 - (p1 + p2)) * l;
   return resp;
}

export default Mantenimiento;