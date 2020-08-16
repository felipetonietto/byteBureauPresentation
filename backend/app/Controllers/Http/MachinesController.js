"use strict";

const Machines = use("App/Models/Machines");

class MachinesController {
  async show({ params, request, response, view }) {
    const machines = await Machines.all();
    return machines;
  }
}

module.exports = MachinesController;
