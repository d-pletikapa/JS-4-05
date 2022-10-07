'use strict';

const calc = (a, b) => {

    while (a !== b) {
        if (a > b) {
            const tmp = a;
            a = b;
            b = tmp;
        }
        b = b - a;
    }
    return a;
}

const result = calc(8, 12);
console.log ('result', result);