// Write your solution in this file!
var customerName= 'bob'

function upperCaseCustomerName () {
  customerName = customerName.toUpperCase();
  // return customerName;
}

function setBestCustomer () {
  bestCustomer = "not bob"
}

var bestCustomer

function  overwriteBestCustomer () {
  bestCustomer = "maybe bob"  //want it to be global
}

const leastFavoriteCustomer = 123

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 456
}
