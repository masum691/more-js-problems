



// function largest(numbers){
//     let max = numbers[0];
//     for(let i = 0; i<numbers.length; i++){
//         const element = numbers[i];
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// const num = largest([23,53,1323,54,645,234,434]);
// console.log(num);


// function largestNumber(num){
//     let max = num[0];
//     for(let i = 0; i < num.length; i++){
//         const element = num[i];
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// const num = [43,645,353,67,86,435,786,335];
// const largest = largestNumber(num);
// console.log(largest);



// function largestNum(num){
//     let max = num[0];
//     for(let i = 0; i < num.length; i++){
//         let element = num[i];
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// const result = largestNum([43,6498,24,645,365,24,6,245,234,765,824,223,54]);
// console.log(result);


function smallestNum(num){
    let min = num[0];
    for(let i = 0; i < num.length; i++){
        let element = num[i];
        if(element < min){
            min = element;
        }
    }
    return min;
}

const result = smallestNum([5,35,54,76,4,75, -1,76,35,76,2,767,97]);
console.log(result);

























































