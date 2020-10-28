 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark() {
	
	let algebra = 5;
	let geography = 3;
	let physics = 4;
	let sum = 3;
	
	return (algebra + geography + physics) / sum;
}
averageMark();


function sayHello() {
	
	let myName = 'userName'; 	
    let message = `Привет, мир! Меня зовут ${myName}`;
	
	return message;
}
sayHello();


function calculateFormula() {
	
	let x = 2;
    let y = 22;
    let z = 0;
	let result = x * y + 5 * z + x - 1;

	return result;
}
calculateFormula();