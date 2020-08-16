import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBitcoin } from "react-icons/fa";
import "../App.css";

const API_URL = "http://127.0.0.1:3333";

function Panel() {
  const [currency, setCurrency] = useState([]);
  function getCurrency() {
    const url = `${API_URL}/currency/`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        setCurrency(data);
      });
  }

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <>
      <div className="static-panel">
        <div className="panel">
          <div className="flex justify-content-md-center text-justify">
            <div className="info__label row justify-content-md-center text-justify">
              Cotação &nbsp;
              {/* <i class="fab fa-bitcoin"></i> */}
              <FaBitcoin className="text-warning"></FaBitcoin> &nbsp;&nbsp;hoje:
            </div>
            <div className="interdiv">
              <div className="panel__info">
                <span className="info__number">{currency.brl}</span>
                <span className="info__label">BRL</span>
              </div>
              <div className="panel__info">
                <span className="info__number">{currency.usd}</span>
                <span className="info__label">USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="panel-sticky">
        <div className="fab">
          <div className="panel-sticky__info">
            <span className="info__number small">{currency.brl}</span>
            <span className="info__label small">BRL</span>
          </div>
          <div className="panel-sticky__info">
            <span className="info__number small">{currency.usd}</span>
            <span className="info__label small">USD</span>
          </div>
        </div>
        <i className="fab fa-bitcoin bitcoin-icon"></i>
      </div> */}
    </>
  );
}

export default Panel;
