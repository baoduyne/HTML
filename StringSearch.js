
const people = {
    first_name : "",
    last_name : "",
    description : "",

    conclusive : function ( first_name , last_name , description){
       this.first_name = first_name; this.last_name = last_name ; this.description = description;
       return this.first_name + this.last_name + this.description ;
    }
}


function main(){
    let text = people.conclusive("Bao"," Duy"," find this \"inclusive\" letter ");

    let temp = text.lastIndexOf("inclusive");

    document.getElementById("id1").innerHTML = text ;
    document.getElementById("result").innerHTML = temp;
}

main();