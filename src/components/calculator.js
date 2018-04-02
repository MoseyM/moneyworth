export function calcTotalPayments(princ, interest, payment) {
	let principal =
		parseFloat(princ);
	let interestRate =
		parseFloat(interest)/100;
	let monthlyPayment =
		parseFloat(payment);

	// formula: N = −log(1−iA/P) / log(1+i)
	let monthlyInterestRate = interestRate/12;
	let totalOriginalPayments =
		-Math.log(
			1-(monthlyInterestRate*principal)/
			monthlyPayment)/
		Math.log(1+monthlyInterestRate);
	//calculate a last payment
	let x = Math.floor(totalOriginalPayments)
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

export function calcTotalInterestPaid(payment, principal, totalPayments)
{
     return (payment * totalPayments) - principal;
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

export function calcDiff(first, second)
{
	const diff = Number(first) - Number(second);
	
	return Number(diff).toFixed(2);
}

export function getLastPaymentAmount(data)
{  
	// let lastPayment = 
    //     (principal*intRateAdj)-
    //     (monthlyPayment*( (intRateAdj - 1)/monthlyInterestRate
    //      ));

}