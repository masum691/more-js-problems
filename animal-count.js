


function animalCount(miles){
    const animalDensity = 10;
    const animalSecond = 50;
    const animalThird = 100;
    if(miles <= 10){
        const count = miles * animalDensity;
        return count;
    }
    else if(miles <= 20){
        const firstDensity = 10 * animalDensity;
        const restMiles = miles - 10;
        const secondDensity = restMiles * animalSecond;
        const totalAnimals = firstDensity + secondDensity;
        return totalAnimals;
    }
    else{
        const firstDensity = 10 * animalDensity;
        const secondDensity = 10 * animalSecond;
        const restMiles = miles - 20;
        const thirdDensity = restMiles * animalThird;
        const totalAnimals = firstDensity + secondDensity + thirdDensity;
        return totalAnimals;
    }
}
const animals = animalCount(22);
console.log(animals);








































