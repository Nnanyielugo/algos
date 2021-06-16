function maxProfit(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    const futurePrice = prices[i + 1];
    if (currentPrice < futurePrice) {
      profit += futurePrice - currentPrice;
    }
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
