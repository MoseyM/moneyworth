import React from 'react';

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
	let intRateAdj = Math.pow(1+monthlyInterestRate,x);

	let lastPayment = (principal*intRateAdj)-(monthlyPayment*( (intRateAdj - 1)/monthlyInterestRate ));

    return totalOriginalPayments
}

export function calcTotalInterestPaid(data, totalPayments) {
     return (data.payment * totalPayments) - data.principal
}
