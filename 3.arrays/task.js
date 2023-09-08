function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	if (arr1 instanceof Array && arr2 instanceof Array) {
		return arr1.every((element, index) => {
			return element === arr2[index];
		});
	} else {
		console.log("Это не массив")
	}
	return false;

}
const arr1 = [8, 9, 5, 4];
const arr2 = [8, 9, 5, 4, 8, 3, 5];
console.log(compareArrays(arr1, arr2));

function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender);
	if (filteredUsers.length === 0) {
		return 0; //"Нет пользователей данного пола в списке"; 
	}
	const ages = filteredUsers.map(user => user.age);
	const totalAge = ages.reduce((accumulator, currentAge) => accumulator + currentAge, 0);
	const averageAge = totalAge / filteredUsers.length;
	return  averageAge; //`Средний возраст ${gender === "мужской"? "мужчин":"женщин"}: ${averageAge}`;
}
const users = [{
		firstName: "Александр",
		secondName: "Карпов",
		age: 17,
		gender: "мужской"
	},
	{
		firstName: "Егор",
		secondName: "Морозов",
		age: 21,
		gender: "мужской"
	},
	{
		firstName: "Мелисса",
		secondName: "Леонова",
		age: 40,
		gender: "женский"
	},
	{
		firstName: "Мелания",
		secondName: "Савельева",
		age: 37,
		gender: "женский"
	},
	{
		firstName: "Мария",
		secondName: "Овчинникова",
		age: 18,
		gender: "женский"
	},
	{
		firstName: "Марьяна",
		secondName: "Котова",
		age: 17,
		gender: "женский"
	},
	{
		firstName: "Фёдор",
		secondName: "Селезнев",
		age: 50,
		gender: "мужской"
	},
	{
		firstName: "Георгий",
		secondName: "Петров",
		age: 35,
		gender: "мужской"
	},
	{
		firstName: "Даниил",
		secondName: "Андреев",
		age: 49,
		gender: "мужской"
	},
	{
		firstName: "Дарья",
		secondName: "Савельева",
		age: 25,
		gender: "женский"
	},
	{
		firstName: "Михаил",
		secondName: "Шаров",
		age: 22,
		gender: "мужской"
	},
	{
		firstName: "Владислав",
		secondName: "Давыдов",
		age: 40,
		gender: "мужской"
	},
	{
		firstName: "Илья",
		secondName: "Казаков",
		age: 35,
		gender: "мужской"
	},
	{
		firstName: "Евгений",
		secondName: "Кузьмин",
		age: 19,
		gender: "мужской"
	},
];
const gender = "мужской";
const result = getUsersNamesInAgeRange(users, gender);
console.log(result);