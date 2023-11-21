// Описание:
// В данном решении заведено две переменные, хранящие индексы
// самого первого и самого последнего элементов массива (left, right).
// Из-за того, что исходный массив упорядочен по возрастанию, можно 
// прибегнуть к следующему решению:
// Если при сложении получившееся число оказалось меньше искомого, то
// первая переменная (left) смещается вправо, если больше, то смещается
// влево вторая переменная (right) и так пока не найдутся нужные элементы
// или пока переменные не станут равны друг другу, тогда решения нет.

function findDig(digs, num){
    let result = [], left = 0, right = digs.length - 1;

    if(right == 0){
        return result;
    }

    while(left != right){
        if((digs[left] + digs[right]) == num){
            result.push(left);
            result.push(right);

            break;
        }

        if((digs[left] + digs[right]) < num){
            left++;
        }
        else{
            right--;
        }
    }

    return result;
}

let length = Math.floor(Math.random() * 100), digs = [];

for(let i = 0; i < length; i++){
    digs.push(Math.floor(Math.random() * 10));
}

let testDig = Math.floor(Math.random() * 20);

digs.sort();

let result = findDig(digs, testDig);

console.log(digs);
console.log(testDig);
console.log(result);
