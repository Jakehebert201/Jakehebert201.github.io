'use strict';

const updateCurrency = (currency) => {

    let currencyPerSecond = window.AllGens[0].multiplier * window.AllGens[0].amount;
    
    if(currenbcy > 1e7){
        currencyPerSecond = currencyPerSecond.toFixed(2);
    }
    else{
        currencyPerSecond = currencyPerSecond.toFixed(0);
    }
    



}