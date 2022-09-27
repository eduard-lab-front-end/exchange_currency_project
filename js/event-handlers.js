import {
  exchangeForm, giveInput,
  giveCurrencySelect,receiveCurrencySelect,
  formCheckbox, modalWrapper, 
  modalClose, demonstrationLinks,
  logInBtns, logOutBtns,
} from './elements.js';

import {
  DEMO_HEAD, DEMO_MESSAGE
} from "./consts.js";

import { dataState } from "./state.js";

import {
  updateCurriency, exchange,
  callToModal, login
} from "./app-main-functions.js";

import { inputNumberValue,submitValidate } from "./validate.js";

logInBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    login(true)
  })
})

logOutBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    login(false)
  })
})


// Event handlers
demonstrationLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    callToModal(DEMO_HEAD, DEMO_MESSAGE);
  })
})

giveCurrencySelect.addEventListener('change', function () {
  dataState.set('selectedGiveCurrency', this.value);
  // validation currentGive field 
  updateCurriency();
})

receiveCurrencySelect.addEventListener('change', function () {
  dataState.set('selectedReceiveCurrency', this.value);
  updateCurriency();
})

giveInput.addEventListener('input', function(){
 if (this.value[0] === '0' && this.value.length > 1 ) {
   this.value = this.value.slice(1);
 }

 this.value = inputNumberValue(this.value);

  dataState.set('currentGive', this.value);
  updateCurriency();
})


exchangeForm.addEventListener('submit', function(event){
  event.preventDefault();
  if (submitValidate()) {
    exchange();
  }
  
})

formCheckbox.addEventListener('change', function(){
   dataState.set('isChecked', this.checked);
})

modalClose.addEventListener('click', function(){
   modalWrapper.style.display = 'none';
})