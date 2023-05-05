export const getRevenueSharePercentage = (revenueAmount, loanAmount) => {
  return ((0.156 / 6.2055 / revenueAmount) * (loanAmount * 10) * 100).toFixed(
    2
  );
};

export const getDesiredFeePercentage = (feePercentage, loanAmount) => {
  return feePercentage * loanAmount;
};
