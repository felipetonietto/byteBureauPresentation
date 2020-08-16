import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:3333";

function Parametros() {
  const [fees, setFees] = useState([]);
  function getFees() {
    const url = `${API_URL}/fees/`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        setFees(data);
      });
  }

  useEffect(() => {
    getFees();
  }, []);

  function formatPercentage(n) {
    return `${n * 100}%`;
  }

  return (
    <>
      <div className="hero text-center" id="parametros">
        <h1 className="text-light">Parâmetros</h1>
        <h2 className="text-muted">de nossa operação</h2>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="col text-justify mt-4" style={{ width: "40rem" }}>
          <p>
            A rentabilidade da atividade da mineração depende da eficiência do
            equipamento sendo usado, o quanto ele gera de potência computacional
            na tentativa de solucionar o problema – também chamado de hash rate
            – e de alguns fatores de mercado, como o preço do bitcoin, a
            concorrência entre os mineradores (que é calculada a partir da
            somatória da potência total competindo), a dificuldade da mineração
            e o custo elétrico e operacional. Fatores como hash rate do
            equipamento e preço do bitcoin têm impacto diretamente proporcional
            à remuneração da atividade, ou seja, quanto maior a potência e
            quanto maior o preço, maior a rentabilidade. Tendo impacto
            inversamente proporcionais na atividade estão o consumo do
            equipamento, concorrência da rede, dificuldade do problema, custo
            elétrico e operacional, ou seja, quanto maiores forem esses fatores,
            menos rentável será a atividade.
          </p>
        </div>
        <div className="col text-justify mt-1 mb-4" style={{ width: "40rem" }}>
          <p>
            Os seguintes parâmetros devem ser levados em conta para construir o
            cálculo de rentabilidade de nossa operação:
          </p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="bd">
            <table className="mb-3 mt-4 table table-striped table-dark table-bordered table-hover table-sm table-responsive-md">
              <thead>
                <tr>
                  {fees.map((item) => (
                    <>
                      <th scope="col">KWh</th>
                      <th scope="col">{item.kwh} USD</th>
                    </>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fees.map((item) => (
                  <>
                    <tr>
                      <td>Taxas administrativas</td>
                      <td>{formatPercentage(item.tx_adm)}</td>
                    </tr>
                    <tr>
                      <td>Taxa pool</td>
                      <td>{formatPercentage(item.tx_pool)}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col text-justify mt-4 mb-4" style={{ width: "40rem" }}>
          <p>
            Um Killowatt hora (Kwh) representa um equipamento de 1000 watts
            ligado durante uma hora. O custo é auferido uma vez ao mês na conta
            de energia.
          </p>
        </div>
      </div>
    </>
  );
}

export default Parametros;
