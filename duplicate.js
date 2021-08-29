

// const names = ['abul', 'kabul', 'tabul', 'kabul', 'sabul', 'tabul', 'rabul', 'habul', 'kabul', 'pobul', 'wabul', 'sabul'];
// function removeDuplicate(names){
//     const unique = [];
//     // for(let i = 0; i < names.length; i++){
//     //     const element = names[i];
//     // }
//     for(const element of names){
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);



// const names = ['abul', 'kabul', 'tabul', 'kabul', 'sabul', 'tabul', 'rabul', 'habul', 'kabul', 'pobul', 'wabul', 'sabul'];
// function removeDuplicate(names){
//     const unique = [];
//     for(const x of names){
//         if(unique.indexOf(x) == -1){
//             unique.push(x);
//         }
//     }
//     return unique;
// }
// const result = removeDuplicate(names);
// console.log(result)



// const names = ['abul', 'kabul', 'tabul', 'kabul', 'sabul', 'tabul', 'rabul', 'habul', 'kabul', 'pobul', 'wabul', 'sabul'];
// function remove(names){
//     let unique = [];
//     for(const element of names){
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const result = remove(names);
// console.log(result);

// const names = ['abul', 'kabul', 'tabul', 'kabul', 'sabul', 'tabul', 'rabul', 'habul', 'kabul', 'pobul', 'wabul', 'sabul'];

// function removeNames(names){
//     const unique = [];
//     for(const element of names){
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const result = removeNames(names);
// console.log(result);

// const names = ['abul', 'kabul', 'tabul', 'kabul', 'sabul', 'tabul', 'rabul', 'habul', 'kabul', 'pobul', 'wabul', 'sabul'];
// function remove(names){
//     const unique = [];
//     for(const element of names){
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const x = remove(names);
// console.log(x);




const names = ['abul', 'kabul', 'tabul', 'kabul', 'sabul', 'tabul', 'rabul', 'habul', 'kabul', 'pobul', 'wabul', 'sabul'];
// function remove(names){
//     const unique = [];
//     for(const element of names){
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const x = remove(names);
// console.log(x);

function remove(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const element = names[i];
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const x = remove(names);
console.log(x);