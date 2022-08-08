console.log('hello');


function myFunction(){
    document.querySelector('#pratu').innerHTML = "<h1> Mearn Stack </h1>"
}

var element = document.getElementsByTagName("h1")[0]
     console.log(element);

function changeText(){
     var element1 = document.querySelector("#shiv").innerText = "Welcome to Elevation academy"
     

     console.log(element1);
}




$(document).ready(function(){
 $("#sun").click(function(){
    $("#dish").hide(); 
 });
 $("#sun1").click(function(){
     $("#dish").show(); 
  });
});


//digital clock 

function displayTime(){
var dateTime = new Date();
var hrs = dateTime.getHours();
var min = dateTime.getMinutes();
var sec = dateTime.getSeconds();
var session = document.getElementById
("session");
if(hrs >= 12){
     session.innerHTML = "PM"
}else{
     session.innerHTML = "AM"
}

if(hrs >12){
     hrs = hrs - 12;
}

document.getElementById("hours").innerHTML = hrs;
document.getElementById("minutes").innerHTML = min;
document.getElementById("seconds").innerHTML = sec;

}
setInterval(displayTime,1000);


// question 6

function findingZeros(array){
     let count =0;
     for(let i=0; i<= array.length; i++){
         
         if(array[i]==0)
         count++;
     }
     console.log("Number of zeroes in an array = " + count); 
  }
  findingZeros([0,0,0,1,1,1]);


// odd and even number
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var evenNumbers = numbers.filter(function(item) {
   return (item % 2 == 0);
});

console.log(evenNumbers);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var oddNumber = numbers.filter(function(item) {
   return (item % 2 !== 0);
});

console.log(oddNumber);

// vowels
const vowelCount = str => {
     let vowels = /[aeiou]/gi;
     let result = str.match(vowels);
     let count = result.length;
   
     console.log(count);
   };


// question 9

   const obj1 = {
     name:"vinayak",
     colours: ["red","blue","yellow","pink","green"],
  };
  const obj2 = {
     name:"Rahul",
     colours: ["black","orange","purple","white","silver"],
  };
  function checkObj(obj1,obj2){
     let count=0;
     for(let i=0;i<obj1.colours.length;i++){
         if (obj1.colours.includes(obj2.colours[i]))
  {
 count++;
}
else {    
console.log("best colour choose");   
} 
} 
 if (count == obj1.colours.length)  {
console.log("All colour same both choise same ");
} 
} 

