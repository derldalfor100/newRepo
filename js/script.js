var populationArray = [];
var maxPopulation = 150000;
var isOverPopulated = true;

populationArray[0] = 220000;
populationArray[1] = 140000;
populationArray[2] = 330000;
populationArray[3] = 180000;
populationArray[4] = 60000;

var i;

for (i = 0; i < populationArray.length; i++){
    if(populationArray[i] > maxPopulation){
        console.log('larger');
    }
    else if(populationArray[i] == maxPopulation){
        console.log('equals');
    } else {
        console.log('smaller');
    }
}

var arrLength = populationArray.length;

if (populationArray[arrLength - 3] < 100000 && populationArray[arrLength - 2] < 100000 && populationArray[arrLength - 1] < 100000 && maxPopulation < 100000 || !isOverPopulated){
    console.log('Small cities!!!');
} else {
    console.log('Large cities!!!');
}