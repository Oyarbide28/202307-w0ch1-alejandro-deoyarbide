const counter = document.getElementById('counter');
const increment = document.getElementById('increment-button');
const decrement = document.getElementById('decrement-button');
const restart = document.getElementById('reset-button');

let counterData = 0; // Mi base de datos. Es decir, donde guardamos el valor.

const setCounter = () => {
  counter.innerText = counterData; // Transfiere el dato al elemento html (h1)
}

const onClickIncrement = () => {
  counterData++;
  if(counterData==11){
    return counterData=10;
  }
  setCounter();
}

const onClickDecrement = () => {
  counterData--;
  if(counterData==-1){
    return counterData=0;
  }
  setCounter();
}

const onClickReset = () => {
  counterData = 0;
  setCounter();
}

increment.onclick = onClickIncrement;
decrement.onclick = onClickDecrement;
restart.onclick = onClickReset;
