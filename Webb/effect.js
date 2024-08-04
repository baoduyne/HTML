const mysql = require('mysql2');

const jsdom = require('jsdom');

module.exports = function (html, js) {
    return new Promise((resolve, reject) => {
        jsdom.env(html, (error, window) => {
            if (error) {
                reject(error);
            }
            try {
            (function evalInContext () {
                'use strict';
                const document = this.document;
                const window = this.window;
                eval(js);
                resolve(window.document.documentElement.innerHTML);
            }).call(window);
            } catch (e) {
                reject(e);
            }
        });
    });
}


let cur = 0;
let buttonBackground = document.getElementById("buttonBackground");
let buttonDark = document.getElementById("buttonDark");
let buttonLight = document.getElementById("buttonLight");
let body = document.body;

let dashBoast = document.getElementById("Menu1");
let task = document.getElementById("Menu2");
let manage = document.getElementById("Menu3");
let profile= document.getElementById("Menu4");


body.classList.add("lightmode");

function toggleDarkMode(){
 
    if(cur == 0){
      body.classList.replace("lightmode","darkmode");
      buttonDark.style.backgroundColor = "white";
      buttonLight.style.backgroundColor = "rgb(242, 242, 242)";
      cur++;
    }

    else{
      body.classList.replace("darkmode","lightmode");
      buttonDark.style.backgroundColor = "rgb(242, 242, 242)";
      buttonLight.style.backgroundColor = "white";
      cur--;
    }
}


buttonDark.addEventListener("click",() => toggleDarkMode());
buttonLight.addEventListener("click",() => toggleDarkMode());
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

window.addEventListener("load",setTime());

function checktime(data){
    if(data < 10){
        data = "0" + data;
    }
    return data;
}

window.addEventListener("load",() => {
  dashBoast.classList.add("menu-item");
  task.classList.add("menu-item");
  manage.classList.add("menu-item");
  profile.classList.add("menu-item");

  let img = document.createElement("img");
  let para = document.createElement("p");

    img.src = "./Picture/home.png";
    img.classList.add("menu-icon");
    para.innerHTML = "DashBoard";
    dashBoast.appendChild(img);
    dashBoast.appendChild(para);
    dashBoast.addEventListener("click",() => {
      img.src = "./Picture/homeOpen.png";
      dashBoast.classList.add("menu-item-focus");
      task.classList.remove("menu-item-focus");
      manage.classList.remove("menu-item-focus");
      profile.classList.remove("menu-item-focus");
      img1.src = "./Picture/task.png";
      img2.src = "./Picture/manage.png";
      img3.src = "./Picture/profile.png";
    });

    let img1 = document.createElement("img");
    let para1 = document.createElement("p");
    img1.src = "./Picture/task.png";
    img1.classList.add("menu-icon");
    para1.innerHTML = "Task";
    task.appendChild(img1);
    task.appendChild(para1);
    task.addEventListener("click",() => {
      img1.src = "./Picture/taskOpen.png";
      task.classList.add("menu-item-focus");
      dashBoast.classList.remove("menu-item-focus");
      manage.classList.remove("menu-item-focus");
      profile.classList.remove("menu-item-focus");
      img.src = "./Picture/home.png";
      img2.src = "./Picture/manage.png";
      img3.src = "./Picture/profile.png";
    });

    let img2 = document.createElement("img");
    let para2 = document.createElement("p");
    img2.src = "./Picture/manage.png";
    img2.classList.add("menu-icon");
    para2.innerHTML = "Manage";
    manage.appendChild(img2);
    manage.appendChild(para2);
    manage.addEventListener("click",() => {
      img2.src = "./Picture/manageOpen.png";
      manage.classList.add("menu-item-focus");
      dashBoast.classList.remove("menu-item-focus");
      task.classList.remove("menu-item-focus");
      profile.classList.remove("menu-item-focus");
      img.src = "./Picture/home.png";
      img1.src = "./Picture/task.png";
      img3.src = "./Picture/profile.png";
    });

    let img3 = document.createElement("img");
    let para3 = document.createElement("p");
    img3.src = "./Picture/profile.png";
    img3.classList.add("menu-icon");
    para3.innerHTML = "Profile";
    profile.appendChild(img3);
    profile.appendChild(para3);
    profile.addEventListener("click",() => {
      img3.src = "./Picture/profileOpen.png";
      profile.classList.add("menu-item-focus");
      dashBoast.classList.remove("menu-item-focus");
      task.classList.remove("menu-item-focus");
      manage.classList.remove("menu-item-focus");
      img.src = "./Picture/home.png";
      img1.src = "./Picture/task.png";
      img2.src = "./Picture/manage.png";
    });
});

