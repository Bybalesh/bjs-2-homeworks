"use strict";

function solveEquation(a, b, c) {
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return []; // No roots
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		return [root]; // One root
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2]; // Two roots
	}
}

// Примеры использования
const roots1 = solveEquation(1, 5, 4); // Должно вернуть [-1, -4]
const roots2 = solveEquation(1, 2, 1); // Должно вернуть [-1]
const roots3 = solveEquation(1, 2, 10); // Должно вернуть []

console.log("должно вернуться 2 корня уравнения: ", roots1);
console.log("должен вернуться 1 корень уравнения: ", roots2);
console.log("пустой массив, корней нет: ", roots3);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (percent < 0 || percent > 100) {
		return false; // Если процент не в допустимом диапазоне, возвращаем false.
	}
	const monthlyRate = percent / 100 / 12;
	const loanBody = amount - contribution;
	const payment = loanBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** 12) - 1)));
	const totalAmount = payment * countMonths;
	return parseFloat(totalAmount.toFixed(2));
}
const result = calculateTotalMortgage(10, 20000, 20000, 24); // Должно вернуть 0
console.log("Total payment:", result);