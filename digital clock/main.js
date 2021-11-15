
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursaday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septmber", "October", "November", "December"];

//setting the date 

function setDate(){
    var date = new Date();
    
    var wkDay = weekDays[date.getDay()];
    var numDate = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();

    var formatedDate = wkDay+' '+numDate+' '+month+' '+year;
    return formatedDate;
}

// function to add a zero 
function addZero(num){
    if(num <10){
        num = '0'+num;
    }
    return num;
}

// setting time 
function get_Time(){
    var time = new Date();

    var hour= addZero(time.getHours());
    var minutes = addZero(time.getMinutes());
    var seconds = addZero(time.getSeconds());

    var formattedTime= hour.toString()+':'+minutes.toString()+':'+seconds.toString();
    document.querySelector('#today-date').textContent = setDate();
    document.querySelector('#time').textContent = formattedTime;

    if(time.getHours() < 12){
        document.querySelector('h2').innerHTML = 'GOOD Morning';
    }
    else if (time.getHours() < 18){
        document.querySelector('h2').textContent = 'Good Afternoon';
    }
    else{
        document.querySelector('h2').textContent = 'Good Evening';
    }
}
setInterval(get_Time, 1000);



