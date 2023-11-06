/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var days = prices.length;
    if (days < 2){
        return 0;
    }
    var lowest = prices[0];
    var profit = 0;
    for (let i = 1; i < days; i++){
        if (prices[i] < lowest){
            lowest = prices[i];
        }
        if (prices[i]-lowest > profit){
            profit = prices[i]-lowest;
        }
    }
    return profit;
};