const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  //password must be longer that two characters
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  return {
    errors,
    isValid: isEmpty(errors)
    //errors is an object but we want to use a string for Validator Module
  };
};
