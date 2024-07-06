const obj = {

    Name : "Bao Duy",
    Age :"18",
    Note : function(){
        return this.Name + this.Age; 
    }
}

const student = {
    Name : "",
    id : 0,

    add : function(name,id){
        this.Name = name;
        this.id = id;
        return this.Name + this.id;
    }
}

document.getElementById("id1").innerHTML = obj.Note();

document.getElementById("id2").innerHTML = student.add("Duy",5);
