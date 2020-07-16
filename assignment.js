        // feetToMile
function feetToMile(feetValue){
    if (feetValue < 0){
        return "Invalid value.Your value should be positive.";
    }
    else {
        let result = feetValue/5280;
        return result;
    }
}
let feet = 100000;
let mileValue = feetToMile(feet);
console.log(mileValue);


            //woodCalculator
function woodCalculator(chair, table, bed){
    if (chair<0 || table<0 || bed<0){
        return "Invalid data. Number of chair, table or bed should be positive.";
    }
    else {
        let totalWood = (chair*1) + (table*3) + (bed*5);
        return totalWood;
    }
}
let result = woodCalculator(8, 3, 2);
console.log(result);



                //brickCalculator
function brickCalculator(floor){
    if (floor < 0){
        return "Invalid data. Number of floor should be positive.";
    }
    else {
        var totalFeet = 0;
        if (floor <= 10){
            totalFeet = floor*15;
        }
        else if (floor <= 20){
            totalFeet = (10*15) + ((floor - 10)*12);
        }
        else {
            totalFeet = (10*15) + (10*12) + ((floor - 20)*10);
        }
        var totalBrick = totalFeet*1000;
        return totalBrick;
    }
}
var result = brickCalculator(12);
console.log(result);




                // tinyFriend
function tinyFriend(array){
    if (array.length == 0){
        return "Empty array.";
    }
    else {
        let tiny = array[0];
        for (let i = 1; i < array.length; i++){
            let element = array[i];
            if (element.length < array[i-1].length){
                tiny = element;
            }
            else if (element.length == array[i-1].length){
                tiny = tiny + ", " + element;
            }
        }
        return tiny;
    }
}
let friendList = ["kuddus", "mofiz", "modu", "kodu", "kamal"];
let result = tinyFriend(friendList);
console.log(result);