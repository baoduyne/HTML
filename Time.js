


function on(){
    const date = new Date();
    let year =  date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hour = date.getHours();
    let munite = date.getMinutes();
    let second = date.getSeconds();

    document.getElementById("year").innerHTML = year;
    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("munite").innerHTML = munite;
    document.getElementById("second").innerHTML = second;


}