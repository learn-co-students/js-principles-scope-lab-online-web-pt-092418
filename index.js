
var customerName = 'bob';
function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}
function setBestCustomer(){
  bestCustomer = 'not bob';
}
function overwriteBestCustomer(somethingElse) {
  bestCustomer = somethingElse;
}
const leastFavoriteCustomer = 'amma';
function changeLeastFavoriteCustomer(whoElse) {
  return leastFavoriteCustomer = whoElse;
}
