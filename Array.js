

const student = {
    name : "Bao Duy",
    id : 0,
    year : [
        {year : 1 , result : [3,2,1,5]}
    ]
}


student.year.push({year : 2 , result : [1,2,5,4]});
student.year.push({year : 3 , result : [4,5,5,4]});
student.year.push({year : 4 , result : [0,2,5,0]});

let result = `<ul>`;

for(let i in student.year){
    result += `<li>${student.name} ${student.id} ${student.year[i].year}  `;
    for(j in student.year[i].result){
        result += `${student.year[i].result[j]}`;
    }
    result += `</li></br>`;
}

result += `</ul>`;


document.getElementById("id1").innerHTML = result;