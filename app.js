// select all the elements
var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');
var errorBox = document.querySelector('#error');

submitBtn.addEventListener('click', submitHandler);


function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showError(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    } else if ( current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercantage = (profit / initial) * 100;

        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercantage}%`);
    } 
    else {
        showOutput(`No pain no gain and no gain no pain`);
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
    outputBox.style.color = 'green';
}

function showError(message) {
    errorBox.innerHTML = message;
    errorBox.style.color = 'red';
}