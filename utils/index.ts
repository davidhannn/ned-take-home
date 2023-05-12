export const getRevenueSharePercentage = (revenueAmount, loanAmount) => {
  return ((0.156 / 6.2055 / revenueAmount) * (loanAmount * 10) * 100).toFixed(
    2
  );
};

export const getDesiredFeePercentage = (feePercentage, loanAmount) => {
  return feePercentage * loanAmount;
};

export const parseDesiredRepaymentDelay = (value) => {
  return parseInt(value.split(" ")[0]);
};

export const getExpectedTransfers = (
  totalRevenueShare,
  sharedFrequency,
  businessRevenue,
  revenueSharePercentage
) => {
  return (
    (totalRevenueShare * sharedFrequency) /
    (businessRevenue * revenueSharePercentage)
  );
};

export const getExpectedCompletionDate = (
  expectedTransfers,
  repaymentDelay
) => {
  const now = new Date();

  return new Date(
    new Date(now).setDate(now.getDate() + expectedTransfers * repaymentDelay)
  ).toLocaleDateString();
};
