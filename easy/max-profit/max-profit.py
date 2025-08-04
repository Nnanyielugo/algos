def maxProfit(prices):
  profit = 0

  for ind, price in enumerate(prices):
    futurePrice = None
    if ind + 1 < len(prices):
      futurePrice = prices[ind+1]

    if (futurePrice and price < futurePrice):
      diff = futurePrice - price
      profit += diff

  return profit

print(maxProfit([7, 1, 5, 3, 6, 4]))
print(maxProfit([1, 2, 3, 4, 5]))