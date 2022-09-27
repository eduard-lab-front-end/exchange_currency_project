import { giveInput} from './elements.js'
import { dataState } from './state.js';

function inputNumberValue(value) {
    value = value.replace(/\D/, ''); // delete all except numbers
    if (value === '') return 0;
    else return value;
  }
  function submitValidate(argument) {
    if (dataState.get('isChecked') && giveInput.value && giveInput.value !== '')  {
      return true;
    } else {


     if(!dataState.get('isChecked')){
     alert('Checkbox need to fill');
    }
     if(!dataState.get('isChecked') || giveInput.value === ''){
     alert('Give Input need to fill');
    }
  
    }
}


export {
    inputNumberValue,
    submitValidate
}