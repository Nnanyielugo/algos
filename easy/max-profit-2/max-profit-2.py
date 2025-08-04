def maxProfit2(prices):
  profit = 0
  buying  = prices[0]
  selling = 0

  for i in range(len(prices)):
    current = prices[i]
    if current < buying:
      profit = selling - buying
      buying = current
      selling = 0
    
    if current > selling:
      selling = current
      if profit < selling - buying:
        profit = selling - buying

  return profit
  