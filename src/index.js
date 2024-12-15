//1 задание
//реализация функции pickPropArray
function pickPropArray(array, property) {
    return array
        .filter(item => item.hasOwnProperty(property)) // Отбираем только объекты, у которых есть указанное свойство
        .map(item => item[property]); // Извлекаем значение свойства
}

//проверка
console.log("Задание 1");
const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
 ]
 
 const result = pickPropArray(students, 'name')
 
 console.log(result) 
 
//после проверки
//['Павел', 'Иван', 'Эдем', 'Денис', 'Виктория'] - все верно!


//2 задание 
//реализация функции createCounter
function createCounter() {
    let count = 0; 

    return function () {
        count += 1; 
        console.log(count); 
        return count; 
    };
}

//проверка 
console.log("Задание 2");
const counter1 = createCounter()
counter1() 
counter1() 

const counter2 = createCounter()
counter2() 
counter2() 

//после проверки
//1
//2
//1
//2

//3 задание
//реализация функции spinWords
function spinWords(sentence) {
    return sentence
        .split(' ') 
        .map(word => word.length >= 5 ? word.split('').reverse().join('') : word) // Переворачиваем слова длиной 5+ символов
        .join(' '); 
}

//проверка
console.log("Задание 3");
const result1 = spinWords("Привет от Legacy");
console.log(result1); 

const result2 = spinWords("This is a test");
console.log(result2); 

//после проверки
//тевирП от ycageL
//This is a test


//4 задание 
//реализуем функцию 
function twoSumAllPairs(nums, target) {
    const map = new Map(); 
    const result = []; 

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; 

        if (map.has(complement)) { 
            result.push([map.get(complement), i]); 
        }

        map.set(nums[i], i); 
    }

    return result; 
}


//проверка
console.log("Задание 4");
const nums = [2, 7, 11, 15];
const nums_1 = [2, 7, 11, 15, 2];
const target = 9;

const res = twoSumAllPairs(nums, target);
const res_1 = twoSumAllPairs(nums_1, target);
console.log(res); 
console.log(res_1); 

//после проверки
//[0, 1]

//0: (2) [0, 1]
//1: (2) [1, 4]


//5 задание 
//
function longestCommonSuffix(strs) {
    if (strs.length < 2) return ""; 

    const findCommonSuffix = (str1, str2) => {
        let i = 0;
        while (
            i < str1.length &&
            i < str2.length &&
            str1[str1.length - 1 - i] === str2[str2.length - 1 - i]
        ) {
            i++;
        }
        return str1.slice(-i);
    };

    let commonSuffix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        commonSuffix = findCommonSuffix(commonSuffix, strs[i]);
        if (commonSuffix.length < 2) return ""; 
    }

    return commonSuffix;
}

//проверка
console.log("Задание 5");
const strs1 = ["цветок", "поток", "хлопок"];
console.log(longestCommonSuffix(strs1));

const strs2 = ["собака", "гоночная машина", "машина"];
console.log(longestCommonSuffix(strs2)); 


//после проверки
//ок


