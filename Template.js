const student = {
    first_name: "Bao",
    last_name :"Duy",
    id:"23010096",
    run : function(){
        this.name = this.first_name + " " + this.last_name;
        return this.name + " " + this.id;
    }
}

let text = student.run();
const myarray = text.split(" ");
console.log(myarray);

let unlist = `<p><ul style = "text-decoration : none">`;

for(const x of myarray){
    unlist += `<li style = "float:left;margin-left:10px">${x}</li>`;
}

unlist +=`</ul></p>`;

document.getElementById("id1").innerHTML = unlist;