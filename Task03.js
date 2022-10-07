'use strict';


const calculate = (cartSumm, pcs, voucher) => {
    let cartTotalSumm = cartSumm;

    if (pcs > 10) {
        cartTotalSumm = cartTotalSumm - cartTotalSumm * 0.03;
        console.log('Подсчет 1 -3% от 10 товаров', cartTotalSumm);
    }
    if (cartSumm > 30000) {
        cartTotalSumm = cartTotalSumm - ((cartTotalSumm - 30000) * 0.15);
        console.log('Подсчет 2 -15% на сумму свыше 30к', cartTotalSumm);
    }
    if (voucher === 'METHED') {
        cartTotalSumm = cartTotalSumm - cartTotalSumm * 0.10;
        console.log('Подсчет 3 -10% METHED', cartTotalSumm);
    }
    if (voucher === 'G3H2Z1' && cartTotalSumm > 2000) {
        cartTotalSumm -= 500;
        console.log('Подсчет 4 -500', cartTotalSumm);
    }

    return cartTotalSumm;
}

const result = calculate (50000, 11, 'G3H2Z1');

console.log('Результат', result)

console.log('Задача из урока');
const pow2 = (x) =>
{
    if (Number.isNaN(parseFloat(x))) {
        return `${x} - не число`
    }
        return x ** 2;
};

console.log('pow2', pow2('четыре'));
console.log('pow2', pow2({}));
console.log('pow2', pow2(4));
