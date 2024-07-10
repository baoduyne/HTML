

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




const Car = {
        Car_name : "",
        Brand : "Toyota",
        year_release : 2000,

        go : function(Car_name,Brand,year_release){
            this.Car_name = Car_name ; this.Brand = Brand; this.year_release = year_release; 
        },

        show : function (){
            return this.Car_name + this.Brand + this.year_release; 
        }
}

const vector_ = [];vector_[0] = Car;

let dcm = `<p>`;


    dcm += `${vector_[0].show()}`;


dcm += `</p>`



document.getElementById("id2").innerHTML = dcm;