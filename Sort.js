const arr = [3,2,5,6,2,9,32];

const arr_word = ["Banana","Origin","Weboo","Apple"];

const student = [
    {name : "Duy" , grade :100},
    {name :"Huy", grade : 30},
    {name : "Nam",grade : 50},
    {name : "Thuan",grade : 65}
];

const arr_sort = arr.toSorted(function (a,b) {return a-b;});
arr_sort.toReversed(); 
const tosort_ = arr_word.toSorted();

container1 = 
`
Default array : ${arr} </br></br>
Default array : ${arr_word}</br>
`
;

container1 += `<table><tr><th>name</th><th>grade</th></tr>`;

for(let x = 0 ; x<student.length ; x++){
    container1+=`<tr><td>${student[x].name}</td> <td>${student[x].grade}</td></tr>`;
}
container1 +=`</table>`

let container2 = `
After sorted : ${arr_sort}</br></br>
After sorted : ${tosort_}</br>

`;

const sort_student = student.sort(function(a,b){
    return a.grade - b.grade;
});

container2 +=`<table><tr><th>Name</th><th>Grade</th></tr>`

for(let x = 0 ; x <student.length ; x++){
    container2 +=`<tr><td>${sort_student[x].name}</td><td>${sort_student[x].grade}</td></tr>`;
}

container2 += `</table>`;


document.getElementById("id1").innerHTML = container1;
document.getElementById("id2").innerHTML = container2;

