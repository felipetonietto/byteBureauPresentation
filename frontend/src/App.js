import React from "react";
// import Table from "react-bootstrap/Table";
import Introducao from "./Components/Introducao";
import Parametros from "./Components/Parametros";
import Investimento from "./Components/Investimento";
import Rentabilidade from "./Components/Rentabilidade";
// import Maquina from "./Components/Maquina";
import Mineracao from "./Components/Mineracao";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Operacao from "./Components/Operacao";

import "./App.css";

function App() {
  return (
    <>
      <div className="">
        <div className="d-flex flex-column">
          <NavBar />
          <Introducao />
          <Mineracao />
          <Operacao />
          <Investimento />
          <Rentabilidade />
          <Parametros />
          {/* <Maquina /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
