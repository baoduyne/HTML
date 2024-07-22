function onClick(){
    const messange = document.getElementById("mess");
    let x = document.getElementById("inp").value;

    try{
        if(typeof x != "string"){
            throw "Undetermine variable";
        }
        else{
            mess.innerHTML = x + "Welcome"; 
        }
    }
    catch(err){
        mess.innerHTML = err;
    }

}