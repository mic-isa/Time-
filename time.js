function showtime() {
    let date = new Date;

let hours = date.getHours();

let minutes = date.getMinutes();

let seconds = date.getSeconds();

let session = "AM";

if(hours == 0) {
 
hours = 12
    
};

if(hours >12) {
    hours = hours -12
    session = "PM"
};



 if(hours<10) {
   hours ="0"+hours 
 }else {
     hours = hours
 }
 
 if(seconds<10) {
   seconds ="0"+seconds 
 }else {
     seconds = seconds
 }
 
 if(minutes<10) {
  minutes ="0"+minutes 
 }else {
     minutes = minutes 
 };
 
 let times = hours+" : "+ minutes+" : "+seconds+ " "+session;
  document.getElementById("time").innerHTML = times 
 
 setTimeout(showtime,1000)
}