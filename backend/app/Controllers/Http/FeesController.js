"use strict";

const Fees = use("App/Models/Fees");

class FeesController {
  async show({ params, request, response, view }) {
    const fees = await Fees.all();
    return fees;
  }
}

module.exports = FeesController;
