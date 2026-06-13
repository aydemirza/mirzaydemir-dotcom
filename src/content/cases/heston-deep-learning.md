---
title: "Heston Model Calibration with Deep Learning"
year: "2026"
kicker: "Python"
tags: ["Python", "Machine Learning", "Derivatives"]
excerpt: "Traditional Heston calibration is slow and sensitive to noisy data, making it impractical for live use. We wanted to know whether deep learning could make it faster and more accurate without discarding the model's financial interpretability."
finding: "Layering a surrogate pricing network, a noise-smoothing PAN, and a residual correction network on top of Heston calibration cut computation from seconds to microseconds per option — while producing parameter estimates that still told a financially coherent story across the volatility term structure."
documents:
  - label: "Research Report"
    file: "/documents/heston-deep-learning.pdf"
    type: "pdf"
---

## The Challenge

The Heston stochastic volatility model captures real market dynamics that Black-Scholes ignores — volatility smiles, time-varying variance, and the leverage effect — but its calibration requires repeated pricing evaluations that take nearly a second per option. In a live optimization loop over thousands of contracts, that cost makes it impractical. We wanted to build a pipeline that preserved Heston's financial structure while making it fast and stable enough for real-world use.

## Our Approach

We built a full Python pipeline in PyTorch that layers four neural network components on top of the standard Heston framework:

- **Synthetic Data Generation:** Produced 1.6 million Heston parameter-price pairs using a Latin Hypercube sampler, covering a wide range of market conditions to give the surrogate network a robust training set.
- **Surrogate Pricing Network (10→128→64→32→1):** Trained a feedforward network to approximate Heston call prices in microseconds, replacing the slow semi-closed-form solution during calibration. Achieved a validation MSE of 0.000005 and RMSE of ~$2.19 across the full parameter range.
- **Price Approximator Network / PAN (1→8→8→1):** Pulled real S&P 500 call option data via `yfinance`, cleaned it (duplicate removal, IV floors, outlier strikes), and trained a small network to learn a smooth strike-to-price curve. This gave the optimizer a clean target surface rather than raw bid-ask noise.
- **Initial Heston Calibration:** Used scipy to minimize MSE between surrogate-implied Heston prices and PAN-smoothed market prices, recovering the five structural parameters (κ, θ, σ, ρ, v₀). The optimizer converged in 157 iterations with a final RMSE of 0.001471.
- **Calibration Correction Network / CCN (7-sigmoid → 7-tanh → 1):** Trained a final adjustment layer to learn the systematic residual errors the base Heston fit could not remove — correcting the output without replacing the interpretable parameter structure underneath.

Extended the full pipeline from a single maturity to 3, 6, and 12-month horizons by feeding time-to-maturity and interpolated treasury yields into the PAN and CCN, allowing the framework to capture the full term structure of implied volatility in one calibration run.

## The Outcome

The pipeline outperformed standard Heston calibration at every maturity. The 6-month horizon produced the best relative fit (MRE 16.5%), and the CCN correction consistently reduced the systematic pricing errors left behind by the initial calibration. More importantly, the recovered parameters told a financially coherent story: elevated near-term uncertainty (high κ and θ at 3 months), relative stabilization around 6 months, and renewed structural uncertainty at 12 months. Negative ρ persisted across all maturities, consistent with the equity leverage effect. The model was picking up real market signals — not just fitting noise.
