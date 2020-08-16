import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import CardMaquina from "../Components/CardMaquina";
const API_URL = "http://127.0.0.1:3333";

function Rentabilidade() {
  const [mining, setMining] = useState([]);

  function getMining() {
    const url = `${API_URL}/mining/`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        setMining(data);
      });
  }

  useEffect(() => {
    getMining();
  }, []);

  return (
    <div>
      <div className="hero text-center" id="rentabilidade">
        <h1 className="text-light">Rentabilidade</h1>
        <h2 className="text-muted">de cada máquina</h2>
        <h2 className="text-muted" date-locale="pt-br">
          no dia {moment().format("LL")}
        </h2>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            {mining.map((item) => (
              <div className="col-auto">
                <CardMaquina item={item}></CardMaquina>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="col text-justify pt-4" style={{ width: "40rem" }}>
          <p>
            O campo hashing power deve ser preenchido com o rendimento da
            máquina.
          </p>
        </div>

        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>
            Power consumption (w) deve ser preenchido com o consumo em watts da
            máquina.
          </p>
        </div>
        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>Cost per Kwh($) indica o valor do Kwh da operação.</p>
        </div>
        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>Pool fee(%) é a taxa do pool em que trabalhamos.</p>
        </div>
        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>
            A tabela a direita mostra o total estimado minerado por dia, semana,
            mês e ano. O campo profit representa qual o valor recebido pelo
            período, já deduzido os custos de energia e pool. Para saber o
            resultado do período, é necessário deduzir ainda os custos
            administartivos da empresa, indicados na tabela acima.
          </p>
        </div>
        <div className="col text-justify pb-5" style={{ width: "40rem" }}>
          <p>
            Na data do exemplo, a máquina S19Pro renderia 206USD brutos no mês.
            Porém, deduzindo as taxas administrativas (19%) o líquido seria de
            166.86USD.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Rentabilidade;
