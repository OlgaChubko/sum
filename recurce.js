let testArray = [1, 2, [3, 4, [5, 6], 7], 8, [9, 10]];

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
console.log(flatten(testArray));

let arr = flatten(testArray);
let sum=0;
for(let i=0;i<arr.length;i++){
    sum = sum + parseInt(arr[i]);

}
console.log(sum);




let testArray2 = [1, 2, 2, 2, [9, 5, 10], 2, 2,[3, 4, 2, 2, [5, 2,  2, [9, 10], 6], 7], 8, [9, 10]];

function deepFlatten(arr) {
    return flatten(                  // return shalowly flattened array
        arr.map(x=>                  // with each x in array
            Array.isArray(x)         // is x an array?
                ? deepFlatten(x)     // if yes, return deeply flattened x
                : x                  // if no, return just x
        )
    )
}
console.log(deepFlatten(testArray2));

let mas = deepFlatten(testArray2);
    let sum1 = 0;
    for(let i = 0; i < mas.length; i++){
        sum1 += mas[i];
    }
console.log(sum1);
