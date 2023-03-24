var dt = new Date();


function RenderDate(){

    dt.setDate(1);
var day = dt.getDay();   
//set end date of a month
var endDate = new Date(dt.getFullYear(),dt.getMonth()+1,0).getDate();
//set previous date
var prevDate = new Date(dt.getFullYear(),dt.getMonth(),0).getDate();

var today = new Date;
// months
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];


//taking date from javascript
document.getElementById("date_str").innerHTML = today.toDateString();
document.getElementById("month").innerHTML = months[dt.getMonth()] ;


var cells = "";
 
for (x = day; x>0; x--){
    cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
}

for (i=1; i<=endDate; i++){
    if(i== today.getDate() && dt.getMonth() == today.getMonth() ){
    cells += "<div class='today'>" + i + "</div>";
    }else{
        cells += "<div>" + i + "</div>"
    }
}

document.getElementsByClassName("days")[0].innerHTML = cells;

}
function moveDate(para){
    if(para == 'prev'){
        dt.setMonth(dt.getMonth()-1);
    } else if(para == 'next'){
        dt.setMonth(dt.getMonth() + 1);
    }
        RenderDate();
        document.getElementById("date_str").innerHTML = dt.toDateString();
    }
    
