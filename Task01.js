'use strict';
console.log('Задание 1:')

const inputAmount = prompt('Ввведите сумму в евро для обмена на рубли:', [200]);
if (+inputAmount > 0) {
    const convertAmount = (+inputAmount * 1.2) * 73;
    console.log(` Ваша сумма в рублях по текущему курсу: ${convertAmount}`);
}
else {console.log('Ошибка')}