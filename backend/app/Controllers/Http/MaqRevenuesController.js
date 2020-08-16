"use strict";

const Machines = use("App/Models/Machines");
const Fees = use("App/Models/Fees");
const Mining = use("App/Models/Mining");
const Database = use("Database");

class MaqRevenuesController {
  async show({ view }) {
    const mining = await Database.raw(
      `select
    s.desc_maq,   
    s.fabric, 
    s.rend_ths, 
    m2.cons_watts,
    (s.rend_btc_dia * 30) rend_brt_btc_mes,
    (s.custos_btc_dia * 30) custos_btc_mes,
    (s.tx_adm_btc_dia * 30) tx_adm_btc_mes,
    (s.resliq_btc_dia * 30) res_liq_btc_mes,
    (s.rend_usd_dia * 30) rend_brt_usd_mes,
    (s.custos_usd_dia * 30) custos_usd_mes,
    (s.tx_adm_usd_dia * 30) tx_adm_usd_mes,
    (s.resliq_usd_dia * 30) res_liq_usd_mes,
    (s.ret_perc) ret_perc_mes   
    from fn_get_maq_revenues() s inner join maquinas m2 on m2.id_maq = s.id_maq;
    `
    );
    return mining.rows;
  }
}

module.exports = MaqRevenuesController;
