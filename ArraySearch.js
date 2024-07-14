
const arr = [1,42,5,21,6];
let num =`The number which indicate ${arr.find(myfunc)} is ${arr.findIndex(myfunc)}`;
let abs = `Does 5 included in array ? the answer is <p style = "font-size : 120% ; color : red"> ${arr.includes(5)}` + `</p>`;
let lab = `Otherwise if you want to know the destination of element 5 in array is <p style = "font-size : 120% ; color : red"> ${arr.indexOf(5)} </p> `
document.getElementById("id1").innerHTML=num ;
document.getElementById("id2").innerHTML = abs;
document.getElementById("id3").innerHTML = lab;
function myfunc(value,index,array){
return value > 15;}