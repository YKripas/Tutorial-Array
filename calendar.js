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
    document.write("<table id = 'calendar_table'>");
    document.write("</table>");
}
Function writeCalTitle(calendarDay){
    
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