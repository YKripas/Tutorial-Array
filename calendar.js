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
function calendar() {
    //DATE THAT THE MONTLY CALENDAR IS BASED ON
    var calDate = new Date("July 6, 2015");
    document.write("<table id = 'calendar_table'>");
    //WRITE THE HEADER ROW OF THE CALENDAR TABLE
    writeCalTitle(calDate);
    //WRITE THE ROW OF WEEKDAY ABBREVIATIONS
    writeDayNames();
    
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
    //RETURN THE NUMBER OF DAYS FOR THE CURRENT MONTH
    return dayCount[thisMonth];
}