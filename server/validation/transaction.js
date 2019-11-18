const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateTransactionInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.amount = !isEmpty(data.amount) ? data.amount : "";
  data.vendor = !isEmpty(data.vendor) ? data.vendor : "";
  data.category = !isEmpty(data.category) ? data.category : "";

  // Balance checks
  if (Validator.isEmpty(data.amount)) {
    errors.amount = "Amount field is required";
  } else if (!Validator.isNumeric(data.amount)) {
    errors.amount = "Amount is invalid";
  }
  // Vendor checks
  if (Validator.isEmpty(data.vendor)) {
    errors.vendor = "Vendor field is required";
  }
  // Category checks
  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};