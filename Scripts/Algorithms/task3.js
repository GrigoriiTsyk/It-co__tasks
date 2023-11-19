function findDig(digs, num){
    let result = [];

    for(let i = 0; i < digs.length - 1; i++){
        for(let j = i + 1; j < digs.length; j++){
            if(digs[i] + digs[j] == num){
                result.push(i);
                result.push(j);

                return result;
            }
        }
    }

    return result;
}

let result = findDig([1, 2, 3, 4, 5, 6], 126);

console.log(result);
