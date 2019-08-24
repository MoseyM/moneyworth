export function calcNumOfPayments(interest, payment, principal) {
	const monthlyInterest = (interest/100)/12;
	//-log(1-iA/P)
	let numerator = (Math.log(1-monthlyInterest*principal/payment))*(-1)
	//log(1+i)
	let denominator = Math.log(1+monthlyInterest);

	return numerator/denominator;
}

export function calcLastPayment(...args) {
	let [principal,
		interest,
		payment,
		months] = args;
	let nth = Math.floor(months) - 1;
	let int =  interest/1200;
	let bal = calcRemainingBalance(principal, int, payment, nth);

	return bal * (1 + int);
}

export function calcRemainingBalance(...args) {
	let [principal,
		 interest,
		 payment,
		 nthMonth] = args;
	let bal = (principal*Math.pow((1+interest), nthMonth)) - (payment*((Math.pow((1+interest), nthMonth) - 1)/interest));
	return bal;
}

export function calcTotalInterestPaid(payment, principal, interest, totalPayments)
{
	if(totalPayments % 1 == 0) {
		return (payment * totalPayments) - principal;
	} else {
		var int = interest/1200
		let pmts = Math.floor(totalPayments) - 1;
		let remainderBal = calcRemainingBalance(principal,int,payment, pmts)
		let totalInterestPaid = ( (payment * pmts) + (remainderBal * (1 + int)) ) - principal

		return totalInterestPaid.toFixed(2);
	}
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

export function calcFutureValueOfMoney(interest, principal, payment) {
	//P(1+rt)
	let totalNumOfPmts = calcNumOfPayments(interest, payment, principal);
	let totalInterest = calcTotalInterestPaid(payment, principal, interest, totalNumOfPmts);

	return principal + parseFloat(totalInterest);
}