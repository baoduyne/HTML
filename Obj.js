const obj = {

    Name : "Bao Duy",
    Age :"18",
    Note : function(){
        return this.Name + this.Age; 
    }
}


document.getElementById("id1").innerHTML = obj.Note();