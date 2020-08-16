"use strict";

const Currency = use("App/Models/Currency");

class CurrencyController {
  async show({ params, request, response, view }) {
    const currencyObject = await Currency.query()
      .orderBy("id_cmb", "desc")
      .limit(2)
      .fetch();
    const currencyList = currencyObject.toJSON();
    const currency = {
      brl: currencyList[0].vlr_cmb,
      usd: currencyList[1].vlr_cmb,
    };
    // const machines = [];
    // result.map((item) => {
    //   const m = { id: item.id_maq };
    //   machine.push(m);
    // });

    return currency;
  }
}

module.exports = CurrencyController;
