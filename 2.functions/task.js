function getArrayParams(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	const avg = sum / arr.length;
	const avgString = avg.toFixed(2);
	const avgNumber = parseFloat(avgString);

	return {
		min: min,
		max: max,
		avg: avgNumber
	};
}
const result = getArrayParams(1, 2, 3, -100, 10);
console.log(result);

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return  sum;
}
const result2 = summElementsWorker(0, 0, 0, -1, -100);
console.log(result2);

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	const min2 = Math.min(...arr);
	const max2 = Math.max(...arr);
	return max2 - min2;
}
const result3 = differenceMaxMinWorker(0, 0, 0, -1, -100);
console.log(result3);

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;

}
const result4 = differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35);
console.log(result4);


function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}
	return sumEvenElement / countEvenElement;

}
const result5 = averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(result5);

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result6 = func(...arrOfArr[i]);
		if (result6 > maxWorkerResult) {
			maxWorkerResult = result6;
		}
	}
	return maxWorkerResult;
}
const result7 = makeWork ([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]]);
console.log(result7);