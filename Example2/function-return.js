//2.1 ---------------------------------Return ---------------------------------//
function add(a, b) {
  return a + b; // Returns the sum of a and b
}

const result = add(10, 55); // Calls the function and assigns its return value (65) to 'result'
console.log(result); // Outputs: 65




//2.2 ----------------------------Return then do thing else--------------------//
function calculateTax(income) {
  const taxRate = 0.2; // 20% tax rate
  const taxAmount = income * taxRate;
  console.log(taxAmount)
  return taxAmount;
}

const salary = 50000;
const taxToPay = calculateTax(salary);
console.log(taxToPay)

console.log(`Your salary is ${salary}, and you need to pay ${taxToPay} in taxes.`);

const remainingIncome = salary - taxToPay;
console.log(`After paying taxes, your remaining income is ${remainingIncome}.`);
