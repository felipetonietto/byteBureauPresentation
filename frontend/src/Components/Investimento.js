import React, { useEffect, useState } from "react";
import axios from "axios";
import s17Bitmain from "../s17Bitmain.jpeg";
const API_URL = "http://127.0.0.1:3333";

function Investimento() {
  const [machines, setMachines] = useState([]);
  function getMachines() {
    const url = `${API_URL}/machines/`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        // this.setState({ users: data })
        // console.log(this.state.users)

        setMachines(data);
      });
  }

  useEffect(() => {
    getMachines();
  }, []);

  return (
    <>
      <div className="hero text-center" id="investimento">
        <h1 className="text-light">Investimento</h1>
        <h2 className="text-muted">
          Atualmente, trabalhamos com as seguintes máquinas:
        </h2>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="bd">
          <table className="mb-3 mt-4 table table-striped table-dark table-bordered table-hover table-sm table-responsive-md">
            <thead>
              <tr>
                <th scope="col">Modelo</th>
                <th scope="col">Descrição</th>
                <th scope="col">Fabricante</th>
                <th scope="col">Rendimento</th>
                <th scope="col">Consumo</th>
                <th scope="col">Preço</th>
              </tr>
            </thead>
            <tbody>
              {machines.map((item) => (
                <tr>
                  <td>{item.id_maq}</td>
                  <td>{item.desc_maq}</td>
                  <td>{item.fabric}</td>
                  <td>{item.rend_ths} THs</td>
                  <td>{item.cons_watts} W</td>
                  <td>{item.prc_vnd_usd} USD</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col text-justify mt-3" style={{ width: "40rem" }}>
          <p>
            Para fazer a conta de rentabilide, recomendamos uma cálculadora de
            rentabilidade que pode ser acessada neste{" "}
            <a
              href="https://www.cryptocompare.com/mining/calculator/btc?HashingPower=56&HashingUnit=TH%2Fs&PowerConsumption=2500&CostPerkWh=0.035&MiningPoolFee=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              link.
            </a>
          </p>
        </div>
        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>
            Recomendamos que seja feita a conta de rentabilidade no momento da
            visita ao site, pois os resultados sofrem influência de mercado.
          </p>
        </div>

        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>Abaixo, foto de uma de das máquinas, a S17 56THs Bitmain.</p>
        </div>

        <img
          className="img-fluid pt-5 rounded mx-auto d-block col-md-9 machine"
          src={s17Bitmain}
          alt="s17Bitmain"
        ></img>
      </div>
    </>
  );
}

export default Investimento;
