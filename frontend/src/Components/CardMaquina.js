import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { GoDashboard } from "react-icons/go";
import { FaIndustry } from "react-icons/fa";
import { FiHardDrive } from "react-icons/fi";

function CardMaquina({ item }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {" "}
            <FiHardDrive></FiHardDrive>&nbsp;
            {item.desc_maq}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <FaIndustry></FaIndustry> {item.fabric}
          </Card.Subtitle>
          <Card.Text>fabricante</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <GoDashboard></GoDashboard> {item.rend_ths} THs
          </Card.Subtitle>
          <Card.Text>rendimento</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <AiFillThunderbolt></AiFillThunderbolt> {item.cons_watts} W
          </Card.Subtitle>
          <Card.Text>consumo</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <FaBitcoin></FaBitcoin> {(item.rend_brt_btc_mes * 1).toFixed(6)}
          </Card.Subtitle>
          <Card.Text>rendimento bruto</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <FaBitcoin></FaBitcoin> {(item.custos_btc_mes * 1).toFixed(6)}
          </Card.Subtitle>
          <Card.Text>custo</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <FaBitcoin></FaBitcoin> {(item.tx_adm_btc_mes * 1).toFixed(6)}
          </Card.Subtitle>
          <Card.Text>taxa administrativa</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <FaBitcoin></FaBitcoin> {(item.res_liq_btc_mes * 1).toFixed(6)}
          </Card.Subtitle>
          <Card.Text>resultado líquido</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <FaBitcoin></FaBitcoin> {item.rend_brt_usd_mes}
          </Card.Subtitle>
          <Card.Text>rendimento</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <AiFillDollarCircle></AiFillDollarCircle>
            {item.custos_usd_mes}
          </Card.Subtitle>
          <Card.Text>custo</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <AiFillDollarCircle></AiFillDollarCircle> {item.tx_adm_usd_mes}
          </Card.Subtitle>
          <Card.Text>taxa administrativa</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <AiFillDollarCircle></AiFillDollarCircle> {item.res_liq_usd_mes}
          </Card.Subtitle>
          <Card.Text>resultado líquido</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <FaPercentage></FaPercentage> {item.ret_perc_mes}
          </Card.Subtitle>
          <Card.Text>retorno percentual</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardMaquina;
