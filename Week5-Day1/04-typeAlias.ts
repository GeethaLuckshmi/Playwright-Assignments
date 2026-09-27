/* Create a type alias called PaymentMethod that allows only the following values: "UPI"
"CreditCard" "PayPal"
2. Create a function named makePayment that: Accepts a parameter of type PaymentMethod.
Prints the selected payment method to the console.
3. Call the function using the following arguments: "UPI" "CreditCard" */

type PaymentMethod="UPI"|"CreditCard"|"PayPal"

function selectPayment(paymentname:PaymentMethod){
    console.log(paymentname);
}

selectPayment("PayPal");