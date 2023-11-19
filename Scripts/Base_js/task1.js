"use strict";

// Yor code here ...
function dscount(input, s1, s2){
    let result = 0;

    for(let i = 0; i < input.length - 1; i++){
        if((s1 + s2).toLowerCase() == (input[i] + input[i + 1]).toLowerCase())
            result++;
    }

    return result;
}
// ... //

// Для удобства можно использовать эти тесты:
try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    test(dscount, ['asdfasddfAldfSfsjla', 'a', 'S'], 2);
    test(dscount, ['', 'a', 'S'], 0);
    test(dscount, ['aSASAsas', 'a', 'S'], 4);
    test(dscount, ['  ', ' ', ' '], 1);
    test(dscount, ['1S_1s__1S', '1', 'S'], 3);
    test(dscount, ['1S``sdfwws1s1239234584fFkshfFS1S', '1', 'S'], 3);


    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}