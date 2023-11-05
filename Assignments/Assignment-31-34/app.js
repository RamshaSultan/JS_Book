
//DATE METHODS
// 1. Write a program that displays current date and time in 
// your browser
document.write('<br>', "<h3>Current date & time</h3>"); 

var rightNow = new Date();
document.write(rightNow + '<br>')

//2. Write a program that alerts the current month in words. 
// For example December
document.write('<br>', "<h3>Current Month</h3>"); 

 var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 var m = new Date();
 var currentMonth = m.getMonth();
 var nameOfMonth = monthNames[currentMonth];
 document.write("Current month is: "+nameOfMonth)

//  3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.
document.write('<br>', "<h3>Today</h3>"); 

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var currentDay = d.getDay();
var nameOfDay = dayNames[currentDay];
document.write("Today is "+nameOfDay + '<br>')

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today
// var user = prompt("Enter the any day")
// var user1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// if (user1.getDay()==="saturday"||user1.getDay()==="Saturday" && user1.getDay()==="Sunday"||user1.getDay()==="sunday") {
// alert("It's Fun Day")
// } else {
//   alert("It's working day")
// }
document.write('<br>', "<h3>FunDay or Not</h3>"); 

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var currentDay = d.getDay();
// var nameOfDay = dayNames[currentDay];
if (currentDay===0 ||currentDay===6) {
  document.write("It's Fun Day")
} else {
  document.write("Its working day" + '<br>')
}

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”
document.write('<br>', "<h3>First OR last days of the month</h3>"); 

var date = new Date()
var us = date.getDate()
if (us<16){
  document.write("first fiteen days of the month")
} else{
  document.write("last days of the month"+ '<br>')
}

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object
// Create a new Date object for the current time
document.write('<br>', "<h3>Determines the minutes</h3>"); 

var currentDate = new Date();
document.write("Current Date:" + currentDate+'<br>');
var currentDate = new Date();
var timeInMillis = currentDate.getTime();
var minutesSinceMidnight = Math.round( timeInMillis / (1000 * 60));
document.write('<br>'+" Elapsed Millisecond since junuary 1, 1970: " + minutesSinceMidnight);
document.write('<br>'+"Elapsed Minutes since junuary 1, 1970: " + timeInMillis );

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”
document.write('<br>', "<h3>AM & PM</h3>"); 

var hours = new Date(). getHours()
var isDayTime = hours > 6 && hours < 20;
if(isDayTime === true){
document. write("It is: 'PM'");
} else {
document. write("It is: 'AM'" +'<br>');
}

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate
document.write('<br>', "<h3>Later Date</h3>"); 

var today = new Date();
var doomsday = new Date("Dec 31 2020");
document.write('<br>'+"Later date: "+ doomsday);

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
document.write('<br>', "<h3>Number of days passed from Ramzan</h3>"); 

var sDate = new Date(2015, 5, 18);
var current = new Date()
var new3 = current-sDate;
var dDiff = Math.floor(new3/ (24* 60 * 60 * 1000));
document.write("Number of days passed since 1st Ramadan: " +dDiff)

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015
document.write('<br>', "<h3>Seconds passed</h3>"); 

var currentDate = new Date();
document.write("<b>Current Date:" + currentDate +"<br>");
var referenceDate = new Date();
referenceDate.setFullYear(2015, 0, 1);
var secondsElapsed = Math.floor((referenceDate.getTime() - new Date(0).getTime()) / 1000);
document.write("Seconds had passed since the beginning of 2015: " + secondsElapsed);

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser
document.write('<br>', "<h3>AN hour ago</h3>"); 

var date = new Date()
document.write('<br>'+"Current date: "+date + '<br>')
var date1 = date.setHours(date.getHours()-1)
var pre = new Date(date1)
document.write("1 hour ago: " + pre+ '<br>')


// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?
document.write('<br>', "<h3>AN hour ago</h3>"); 

var curr = new Date()
document.write("Current: "+ curr + '<br>');
var date1 = curr.setFullYear(curr.getFullYear()-100)
var pre = new Date(date1)
document.write('<br>'+"100 Years Back: " + pre)

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.
var age = +prompt("Enter your age");
var currentYear =2023;
 var DOB = currentYear-age;
 alert(DOB);

//  14. Write a program to generate your K-Electric bill in your
//  browser. All the amounts should be rounded off to 2 
//  decimal places. Display the following fields:
//  a. Customer Name
//  b. Current Month
//  c. Number of units
//  d. Charges per unit
//  e. Net Amount Payable (within Due Date)
//  f. Late Payment Surcharge
//  g. Gross Amount Payable (after Due Date)
document.write('<br>', "<h3>K-Electric Bill</h3>");
var customer = prompt("ENter your Name")
document.write('<b>Customer Name: </b>'+customer+'<br>')

var customerMonth= prompt("Enter Your recent Bill Month");
document.write('<b>Month Name: </b>'+customerMonth+'<br>')

var customerUnit = +prompt("Enter your number of units");
document.write('<b>Number of unit: </b>'+customerUnit+'<br>')

var customerCharges = +prompt("Enter the charges per unit")
document.write('<b>Charges per unit: </b>'+customerCharges+'<br>')


var latePayment = 300
document.write("Late payment charges: "+ latePayment +'<br>')

var netAmount = customerUnit * customerCharges
var gross = netAmount + latePayment

document.write("Net Amount Payable (within Due Date): " +netAmount+ '<br>')
document.write("Gross payment Payable (after Due Date): " +gross+ '<br>')

