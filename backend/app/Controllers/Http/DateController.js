"use strict";

const Database = use("Database");

class DateController {
  async show({ view }) {
    const date = await Database.raw(
      `select max(dt_ref) from resultado_mineracao rm
    `
    );
    return date.rows;
  }
}

module.exports = DateController;
