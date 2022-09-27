import { giveInput, giveCurrencySelect, receiveCurrencySelect } from './elements.js';

import getDataCurrency from "./api.js";

import { renderCurrencySelect } from "./render.js";

import { dataState } from "./state.js";

import "./event-handlers.js";

initialApp();
async function initialApp(){ // initialisation app
  const dataCurrency = await getDataCurrency(); // get data 
  dataState.set('currencies', dataCurrency.conversion_rates); //received a list of currencies and their value
  renderCurrencySelect(); // render selects
  dataState.set('selectedGiveCurrency', giveCurrencySelect.value); // after render 
  dataState.set('selectedReceiveCurrency', receiveCurrencySelect.value); // update state
  giveInput.disabled = false; // app state
  giveCurrencySelect.disabled = false; // app state
  receiveCurrencySelect.disabled = false; // app state
}


