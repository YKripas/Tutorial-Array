/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 12
   Tutorial Case

   Author: Juozas Kripas
   Date:   4/12/2016

   Function List:
   calendar(calendarDay)
      Creates the calendar table for the month specified in the
      calendarDay parameter. The current date is highlighted in 
      the table.

   writeCalTitle(calendarDay)
      Writes the title row in the calendar table

   writeDayTitle()
      Writes the weekday title rows in the calendar table

   daysInMonth(calendarDay)
      Returns the number of days in the month from calendarDay

   writeCalDays(calendarDay)
      Writes the daily rows in the calendar table, highlighting
      calendarDay
	
*/
//A FUNCTION TO CREATE THE TABLE
function calendar(dateString) {
    //DATE THAT THE MONTLY CALENDAR IS BASED ON
   if (dateString == null) calDate = new Date()
        else calDate= new Date(dateString);
    
    document.write("<table id = 'calendar_table'>");
    //WRITE THE HEADER ROW OF THE CALENDAR TABLE
    writeCalTitle(calDate);
    //WRITE THE ROW OF WEEKDAY ABBREVIATIONS
    writeDayNames();
    //WRITE THE CALENDAR DAYS
    writeCalDays(calDate);
    document.write("</table>");
}
function writeCalTitle(calendarDay){
    
    /*The calendarDay parameter contains  a Date object that the calendar is based upon*/
    
    //monthName contains an array of month names
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    /*The thisMonth variable contains the calendar month number, the thisYear variable contains the 4-digit year value*/
    var thisMonth = calendarDay.getMonth();
    var thisYear = calendarDay.getFullYear();
    
    //write the table header row of the calendar table
    document.write("<tr>");
    document.write("<th id='calendar_head' colspan='7'>");
    document.write(monthName[thisMonth] + "" + thisYear);
    document.write("</th>");
    document.write("</tr>");
}

function writeDayNames(){
    //ARRAY OF WEEKDAY ABBREVIATIONS
    var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    //START A TABLE ROW OF THE WEEKDAY ABBREAVIATIONS
    document.write("<tr>");
    
    //LOOP THROUGH THE 'dayName' ARRAY
    for (var i= 0; i < dayName.length; i++){
        document.write("<th class='calendar_weekdays'>" + dayName[i] + "</th>");
    }
    //END OF TABLE ROW
    document.write("</tr>");
}

function daysInMonth(calendarDay) {
    //ARRAY OF DAYS IN EACH MONTH
    var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];
                   
    //EXTRACT THE FOUR DIGIT YEAR VALUE FROM 'calendarDay'
    var thisYear = calendarDay.getFullYear();
    //EXTRACT THE MONTH VALUE FROM 'calendarDay'
    var thisMonth = calendarDay.getMonth();
    //REVISE THE DAYS IN FEBRUARY FOR LEAP YEARS
    if (thisYear % 4 ==0){
        if ((thisYear % 100 !=0) || (thisYear % 400==0)) {
            dayCount[1]=29;
        }
    }
    //RETURN THE NUMBER OF DAYS FOR THE CURRENT MONTH
    return dayCount[thisMonth];
}

function writeCalDays(calendarDay){
    //DETERMINE THE STARTING DAY OF THE MONTH
    var day = new Date(calendarDay.getFullYear(), calendarDay.getMonth(), 1);
    var weekDay = day.getDay();
    //WRITE BLANK CELLS PRECEDING THE STARTING DAY
    for (var i=0; i<weekDay; i++) {
        document.write("<td></td>");
    }
    //WRITE CELLS FOR EACH DAY OF THE MONTH
    var totalDays = daysInMonth(calendarDay);
    var highlightDay = calendarDay.getDate();
    
    for (var i = 1; i<= totalDays; i++){
        //MOVE TO THE NEXT DAY IN THE MONTH
        day.setDate(i);
        weekDay = day.getDay();
        
        if (weekDay==0) document.write("<tr>");//START A NEW ROW ON SUNDAY
        //TEST IF THE DAY BEING WRITTEN MATCHES THE CALENDAR DAY
        if (i == highlightDay){
            document.write("<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>");
            }
            else {
              document.write("<td class='calendar_dates'>" + i + dayEvent[i] + "</td>");
            }
        document.write("<td class='calendar_dates'>" + i + "</td>");
         if (weekDay == 6) document.write("</tr>");//END THE ROW ON SATURDAY
    }
    
}