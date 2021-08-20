### Max Profit 2

You are given ann array of integers denoting the prices of a stock throughout the day.
Write a function that returns the maximum possible profit that can be gotten from ONLY one buy and sell operation that day.

Constraint: Your sell price cannot occur before your buy price.

Example 1:
input prices = [1, 2, 3, 9, 5]
output: 8
Explanation: buy when price is 1 and sell when price is 9. 9 - 1 = 8

Example 2:
input prices = [10, 18, 4, 5, 9, 6, 16, 12]
output: 12
Explanation: buy when price is 4 and sell when price is 16. 16 - 4 = 8

#### Solution explanation.

Since profit can only be gotten from one diff, we have to keep track of buying and selling prices, and conditionally implement the difference bbetween them, aka - profit.

##### steps

- create profit var and initialize to 0.
- create a buying price var and initialize to the first stock price.
- create a selling price var and initialize to zero.
- loop through prices:
  - if current price is less than buying price:
  - (re)calculate temporary profit before next buy.
  - buy.
  - reset selling to 0 because selling price cannot occur before buying.
  - if current price is greater than selling price:
    - sell.
    - update profit if new diff between selling price and buying price is greater than existing diff (profit).
- return profit.
