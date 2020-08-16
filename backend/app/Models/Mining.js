"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Resultado_mineracao extends Model {
  static get table() {
    return "resultado_mineracao";
  }
}

module.exports = Resultado_mineracao;
