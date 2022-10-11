function maxProfit2(prices: number[]): number {
  let profit = 0;
  let buying = prices[0];
  let selling = 0;

  for (let i = 0; i < prices.length; i++) {
    let current = prices[i];
    if (current < buying) {
      profit = selling - buying;
      buying = current;
      selling = 0;
    }

    if (current > selling) {
      selling = current;
      if (profit < selling - buying) {
        profit = selling - buying;
      }
    }
  }

  return profit;
}
