export function calcTotalPayments(input) {
	let principal =
		parseFloat(input.principal);
	let interestRate =
		parseFloat(input.interest)/100;
	let monthlyPayment =
		parseFloat(input.payment);

	// formula: N = −log(1−iA/P) / log(1+i)
	let monthlyInterestRate = interestRate/12;
	let totalOriginalPayments =
		-Math.log(
			1-(monthlyInterestRate*principal)/
			monthlyPayment)/
		Math.log(1+monthlyInterestRate);
	//calculate a last payment
	let x = Math.floor(totalOriginalPayments)
    // let lastPayment = 
    //     (principal*intRateAdj)-
    //     (monthlyPayment*( (intRateAdj - 1)/monthlyInterestRate
    //      ));
	let intRateAdj = Math.pow(1+monthlyInterestRate,x);

    return totalOriginalPayments
}

export function calcRemainingBalance(...args) {
	let [principal,
		 interest,
		 payment,
		 nthMonth] = args;
		 interest = interest/100;
		 
		let FV = principal*Math.pow((1+interest), nthMonth) - payment*((Math.pow((1+interest), nthMonth) - 1)/interest);

		 return FV;
}

export function calcTotalInterestPaid(data, totalPayments)
{
     return (data.payment * totalPayments) - data.principal
}

export function calcPaymentAmount(principal, numOfPayments, annualInterest)
{
    let adjustedInterestRate = annualInterest/1200;
    let rate = Math.pow((1+adjustedInterestRate), numOfPayments);
    let discountor_top       = rate - 1;
    let discountor_bottom    = adjustedInterestRate*rate;
    let discountor           = discountor_top/discountor_bottom;

    return (principal / discountor);
}

export function getLastPaymentAmount(data)
{

}