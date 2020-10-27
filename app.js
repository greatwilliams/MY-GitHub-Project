let myName = "Abara Chukwu Williams";
let hubby = "Football";

function sayName (){
        alert('My name is ' + myName + ' and my hubby is ' + hubby);
} 
let footerElement = document.querySelector("footer");        
footerElement.innerHTML="Copyright 2020 (footer)"; 


let hourOfDay = new Date().getFullYear();
let greetingMsg = "";
let paragraphElement = document.querySelector("p");
    if (hourOfDay > 12) {
            greetingMsg = "It is " +  hourOfDay + " Good afternoon:";
    }   else if (hourOfDay == 12) {
            greetingMsg = "It is " +  hourOfDay + " Noon:";
        } else  {
            greetingMsg = "It is " +  hourOfDay + " Good morning:";
} 
paragraphElement.innerHTML = greetingMsg;

let getAllParagraphs = document.querySelectorAll("p");
let secondParagraph = getAllParagraphs[1];
secondParagraph.setAttribute("id", "secondParagraph");
let listOfDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let dayOfWeek = new Date().getDay();
switch (dayOfWeek){
    case 0:
        secondParagraph.innerHTML = "today is Sunday";
        break;
    case 1:
        secondParagraph.innerHTML = "today is Monday";
        break;
    case 2:
        secondParagraph.innerHTML = "today is Tuesday";
        break;
    case 3:
        secondParagraph.innerHTML = "Today is Wednesday";
        break;
    case 4:
        secondParagraph.innerHTML = "Today is Thurssday";
        break;
    case 5:
        secondParagraph.innerHTML = "Today is Friday";
        break;
    case 6:
        secondParagraph.innerHTML = "Today is Saturday";
        break;
    default:
        alert("This is any day");
}

let i=[1,3,9,6];
let newList=[];
let ulElement=document.querySelector("ul.double-numbers");
for (let newNum=0; newList.length<i.length; newNum++){

    let double=i[newNum]*2;
    newList.push(double);
    let listElement=document.createElement("li");
    listElement.innerHTML=`When ${i[newNum]} is a double we would have ${newList[newNum]}`;
    ulElement.appendChild(listElement);
}





let listOfNumbers = [];
for (let i = 10; listOfNumbers.length <= 89; i++){
    listOfNumbers.push(i);
}
let counter = 0;
let total = 0 ;
while (counter < listOfNumbers.length){
    let currentnUmber = listOfNumbers[counter];
    total = total + currentnUmber;
    counter++;
}
document.querySelector("h3#total-number").textContent 
= `The total number of number up to ${total}`;