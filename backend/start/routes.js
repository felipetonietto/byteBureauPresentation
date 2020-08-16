"use strict";

const Route = use("Route");

Route.get("machines", "MachinesController.show");
Route.get("currency", "CurrencyController.show");
Route.get("fees", "FeesController.show");
Route.get("mining", "MaqRevenuesController.show");
Route.get("date", "DateController.show");
