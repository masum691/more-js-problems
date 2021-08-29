


/*
chairWood = 3 cftk/ chair
tableWood = 10 cft/ table
bedWood = 50 cft/ bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
const firstOption = woodCalculator(0,1,1);
console.log(firstOption);


/*
chairWood = 3 cftk/ chair
tableWood = 10 cft/ table
bedWood = 50 cft/ bed
*/

function wood(chair, table, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chair * perChairWood;
    const tableWoodQuantity = table * perTableWood;
    const bedWoodQuantity = bed * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
const firstOption = wood(1,2,3);
console.log(firstOption);









































































































