"use strict";

function checkSyntax (input){
    let result = 0, i = 0, index;
    let open = ["<","[","{","("], close = [">","]","}",")"], brackets = [];
    let string = "";

    for(i = 0; i < input.length; i++){
        if(open.includes(input[i])){
            brackets.push(input[i]);

            string += input[i];
        }

        if(close.includes(input[i])){
            for(let j = 0; j < close.length; j++){
                if(input[i] == close[j]){
                    string += input[i];

                    index = j;
                }
            }

            if(open[index] != brackets[brackets.length - 1]){
                result = 1;

                break;
            }
            else{
                brackets.pop();
            }
        }
        
    }

    return result;
}

//Для удобства можно использовать эти тесты:
try {
    test(checkSyntax, ["---(++++)----"], 0);
    test(checkSyntax, [""], 0);
    test(checkSyntax, ["before ( middle []) after "], 0);
    test(checkSyntax, [") ("], 1);
    test(checkSyntax, ["} {"], 1);
    test(checkSyntax, ["<(   >)"], 1);
    test(checkSyntax, ["(  [  <>  ()  ]  <>  )"], 0);
    test(checkSyntax, ["   (      [)"], 1);

    test(checkSyntax, ["((((((((((((((((()))))))))))))))))"], 0);
    test(checkSyntax, ["><"], 1);
    test(checkSyntax, ["]["], 1);
    test(checkSyntax, ["())(()"], 1);
    test(checkSyntax, ["(<{[]}>)"], 0);

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