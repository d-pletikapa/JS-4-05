'use strict';


const calc = (a, b) => {
    const fa = a;
    const fb = b;
    const fm = (+fa + +fb) / 2;
    // console.log('fa', fa);
    // console.log('fb', fb);
    // console.log('fm', fm);

    // const fMax = fm + Math.abs(fa - fb)/2
    const fMin = fm - Math.abs(fa - fb)/2

    // console.log('fMax Максимальное число -', fMax);
    return console.log('fMin Минимальное число -', fMin);


    // if (b - a < 0) return `Первое число: ${a} больше второго: ${b}`
    // return `Второе число: ${b} больше первого: ${a}`;
}

const result = calc(prompt('Введите первое число',
    [8]), prompt('Введите первое второе число', [12]));


