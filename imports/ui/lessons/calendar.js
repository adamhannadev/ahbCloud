import { Template } from 'meteor/templating';
import './calendar.html';

Template.calendar.onRendered(function(){
alert("running");

    function showCalendar(month, year) {

        let firstDay = (new Date(year, month)).getDay();
    
        tbl = document.getElementById("calendar-body"); // body of the calendar
    
        // clearing all previous cells
        tbl.innerHTML = "";
    
        // filing data about month and in the page via DOM.
        monthAndYear.innerHTML = months[month] + " " + year;
        selectYear.value = year;
        selectMonth.value = month;
    
        // creating all cells
        let date = 1;
        for (let i = 0; i < 6; i++) {
            // creates a table row
            let row = document.createElement("tr");
    
            //creating individual cells, filing them up with data.
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    cell = document.createElement("td");
                    cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                else if (date > daysInMonth(month, year)) {
                    break;
                }
    
                else {
                    cell = document.createElement("td");
                    cellText = document.createTextNode(date);
                    if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        cell.classList.add("bg-info");
                    } // color today's date
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    date++;
                }
    
    
            }
    
            tbl.appendChild(row); // appending each row into calendar body.
        }
    
    }
    showCalendar(0, 2009);
});
