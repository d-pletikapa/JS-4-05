'use strict';
console.log('Задание 2:');


function transkriptor (strokeInput) {

    return strokeInput = strokeInput[0].toUpperCase() + strokeInput.slice(1).toLowerCase();

};


console.log('Вывод', transkriptor(prompt('Введите сообщение с маленькой буквы'), ['привет Мир']));