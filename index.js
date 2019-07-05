const returnFibArray = function(limit) {
    let numbers = [0, 1];
    let temp;
    
    while(numbers[numbers.length - 1] < limit){
        temp = numbers[numbers.length -1] + numbers[numbers.length -2];
        numbers.push(temp);
    }
    if(numbers[numbers.length -1] > limit){
        numbers.pop();
    }

    return numbers;
}
// Start recording time.
console.time('returnFibArray');

// Takes one parameter which is the max number.
let fibSeq = returnFibArray(100);

// End recording time and output.
console.timeEnd('returnFibArray');

console.log(fibSeq);
