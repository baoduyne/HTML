

function randomint(num1,num2){
    return Math.floor(Math.random() * (num2 - num1 +1)) + num1;
}
let random_number = randomint(12,32);

document.getElementById("id1").innerHTML = random_number;