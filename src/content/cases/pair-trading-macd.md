---
title: "MACD Pair Trading Strategy"
year: "2024"
kicker: "Python"
tags: ["Quantitative Finance", "Python", "Algorithmic Trading"]
excerpt: "Most technical trading rules are tested in isolation against a passive benchmark. We wanted to see what happens when the same signal is used to drive two strategies — a directional MACD trade in MSFT, and a paired long-short structure with SPY — and compare them on both return and risk."
finding: "Pairing the MACD signal with an opposite SPY leg cut maximum drawdown from -21.7% to -8.9% and produced the highest Sharpe ratio of the three strategies — showing that portfolio structure matters as much as the signal itself."
documents:
  - label: "Research Report"
    file: "/documents/pair-trading-macd.pdf"
    type: "pdf"
  - label: "Python Notebook"
    file: "/documents/pair-trading-macd.html"
    type: "notebook"
---

## The Challenge

Most backtests evaluate a trading signal in its simplest form: go long when the indicator fires, short otherwise, and compare the result to buy and hold. We wanted to go a step further and ask whether the same MACD signal becomes more useful when placed inside a hedged portfolio structure — and whether that change in structure could meaningfully improve the risk profile without abandoning the signal entirely.

## Our Approach

We built the full strategy pipeline in Python using pandas, NumPy, and Matplotlib — from raw price data through signal construction, position sizing, return calculation, and drawdown analysis. The implementation covered three parallel approaches on MSFT and SPY daily data across the 1999 sample:

- **MACD Signal Construction:** Calculated a 5-day and 10-day EMA on MSFT using `ewm()`, defined MACD as the spread between them, and mapped it to +1 (long) and -1 (short) positions. The signal was lagged by one day before being multiplied by returns to prevent look-ahead bias.
- **Strategy 1 — Directional MACD:** Applied the signal to MSFT alone, tracking cumulative returns and drawdown against a buy-and-hold benchmark.
- **Strategy 2 — MSFT/SPY Pair Trade:** Kept the same MACD signal on MSFT but added an equal and opposite position in SPY, scaling each leg to 0.5 so the combined portfolio starts at a net capital of 1.0. This converts the directional trade into a relative-value position between MSFT and the broader market.
- **Risk & Performance Analysis:** Computed annualized return, volatility, a Sharpe-like ratio, and full drawdown episodes — including peak date, trough date, recovery date, and duration — for all three approaches.

## The Outcome

Buy and hold finished with the highest terminal value (1.68, +65% annualized), but Strategy 2 delivered the strongest risk-adjusted result. Adding the SPY leg reduced annualized volatility from 37.5% to 15.2% and cut maximum drawdown from -21.7% to -8.9%, while still generating a Sharpe ratio of 1.67 — above buy and hold's 1.53. Strategy 1 was the weakest of the three: it gave up return without improving drawdown, showing that the MACD signal alone is not enough to justify active trading in this sample. The main takeaway is that the signal's value only became visible once the portfolio structure was designed to isolate the relative call on MSFT versus the market.
