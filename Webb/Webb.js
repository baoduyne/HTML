window.addEventListener("load",setTime());

function setTime(){
    const data = new Date();
    let day = data.getDay();
    let date = data.getDate();
    let hour = data.getHours();
    let munite = data.getMinutes();
    let second = data.getSeconds();
    let year = data.getFullYear();
    let month = data.getMonth();


    hour = checktime(hour); munite = checktime(munite);second = checktime(second);

    const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      const datelist = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ];

      month = monthList[month];
      day = datelist[day];
    
    document.getElementById("clock").innerHTML = day + ", " + date + " "+month+" "+ year +"</br>"+ hour + ":" + munite + ":" + second;
    setTimeout(setTime,1000)
}

function checktime(data){
    if(data < 10){
        data = "0" + data;
    }
    return data;
}