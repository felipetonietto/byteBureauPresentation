"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Parms_oper extends Model {
  static get table() {
    return "parms_oper";
  }
}

module.exports = Parms_oper;
