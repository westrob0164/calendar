//  this file contains the utilities used by the system
import { tasks } from '../objects/tasksObject.js';
import { DateObject  } from '../classes/dateClass.js';

export {
   createListSection,
   deconstructDateID,
   addDiv,
   addDivPre,
   addDivPreId,
   addDivId,
   addDivPreIdData
};

// creates the lists.
function createListSection(taskData) {

   var tasksList = "";

   // create the html lists for the popup
   tasks[taskData].forEach(element => {     
       tasksList += `<br><strong class="taskTitle">${element.title}:</strong><br>`;
       element.tasks.forEach(tasks => {
           let checkBoxTag = tasks.replace(/\s/g, '');
           let className = element.title.replace(/\s/g, '');
           tasksList += `<input type="checkbox" class="${className}" id="${checkBoxTag}_ID" value="${checkBoxTag}">
                         <label class = "taskList">${tasks}</label><br>`; 
           //console.log(checkBoxTag);  
           //$(`"#${checkBoxTag}_ID"`).attr("checked", true);
       })
   })
   return tasksList;
}

// get info from the date string
function deconstructDateID(date) {

   const yearPart  = date.substring(5, 9);
   const monthPart = date.substring(9, 11);
   const dayPart   = date.substring(11, 13);

   const deconDate = new Date(yearPart, (monthPart-1), dayPart);
   const monthDays = new DateObject;

   const weekDayNumber = deconDate.getDay();

   //Days in Previous, Current and Next Month
   const numYearPart   = parseInt(yearPart);
   const numMonthPart  = parseInt(monthPart);
   const daysPrevMonth = monthDays.dayInMonth(numYearPart, (numMonthPart-2));
   const daysThisMonth = monthDays.dayInMonth(numYearPart, (numMonthPart-1));
   const daysNextMonth = monthDays.dayInMonth(numYearPart, (numMonthPart+0));

   const dateSunday = dayPart - weekDayNumber;
   
   return [dateSunday, yearPart, monthPart, dayPart, daysPrevMonth, daysThisMonth, daysNextMonth];
}

// creates an new div, adds a className, appends to another div
function addDiv(className, classAppendTo ) {
   $("<div>")
   .addClass(className)
   .appendTo(classAppendTo);    
}

// creates an new div, adds a className, prepends something, appends to another div
function addDivPre(className, prependStuff, classAppendTo ) {
   $("<div>")
   .addClass(className)
   .prepend(prependStuff) 
   .appendTo(classAppendTo);    
}

// creates an new div, adds a className, prepends something, adds ID, appends to another div
function addDivPreId(className, prependStuff, classAppendTo, IdName ) {
   $("<div>")
   .addClass(className)
   .prepend(prependStuff)
   .attr('id', IdName) 
   .appendTo(classAppendTo);    
}

// creates an new div, adds a className, adds ID, appends to another div
function addDivId(className, classAppendTo, IdName ) {
   $("<div>")
   .addClass(className)
   .attr('id', IdName) 
   .appendTo(classAppendTo);    
}

function addDivPreIdData(className, prependStuff, classAppendTo, IdName, data1, data2 ) {
   $("<div>")
   .addClass(className)
   .prepend(prependStuff)
   .attr('id', IdName) 
   .appendTo(classAppendTo)
   .attr(data1, data2);
}
