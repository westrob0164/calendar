import { DateObject } from '../../classes/dateClass.js';
import { deconstructDateID } from '../../utilities/utilities.js';
import { scheduleItems } from '../../../data/scheduleData.js'

import { taskTypePopUp } from './taskTypePopup.js'

import { dailySchedule } from './dailySchedule.js';


export function weeklySchedule(date) {
   // NOTE: need code to deal with two months in one week
   const startDateNumberArray = deconstructDateID(date);
   const startDateNumber = startDateNumberArray[0];

   // get the schedule array from the local storage
   //const scheduleArray = JSON.parse(localStorage.getItem('wkSchedule')) || [];   

   const scheduleArray = JSON.parse(localStorage.getItem('schedule')) || [];   


   // hide the calendar and the date popup
   $(".calandarWraper").hide();
   $(".datePopoutWraper").hide();

   // create the html in the task lists
   $(".weeklySchedule").html(schedule(startDateNumber, scheduleArray, startDateNumberArray, date));	
  
   $(".weeklySchedule").show();
   $(".rightColumn").show();

   // =======  mouse click ========
   //go back to the calandar and date popup
   $("#backFromSch").on("click", function(e) {
      $(".leftColumn").empty();
      $(".weeklySchedule").hide();
      $(".rightColumn").hide();
      $(".calandarWraper").show();
      $(".datePopoutWraper").show();
   });

   // =======  mouse click ========
   //get the colour popup
   $(".wsInfoDiv").click(function() {
      
      const weeklyData = $(this).attr('data-scheduleCell');
      const cellBkColour = $(this).attr('class')
      const cellID = $(this).attr('id');
      
      taskTypePopUp([weeklyData, cellBkColour, cellID]);
      // // $(".leftColumn").empty();
      // // scheduleColours($(this).attr('id'), scheduleArray);
      // //saveScheduleData(["weekly",  weeklyData, cellBkColour]);
      // taskTypePopUp([weeklyData, cellBkColour]);
   });

   // =======  mouse click ========
   //get daily Schedule
   $(".dayNameWkSch").click(function() {
      dailySchedule($(this).attr('id'), "weeklySchedule");
   });
}

function schedule(dateNumber, scheduleArray, startDateNumberArray, date) {
   //console.log("date", dateNumber, "SA", scheduleArray, "SDNA", startDateNumberArray);
   console.log(date);

   const weekDate = new DateObject;
   const monthName = weekDate.monthNames[parseInt((startDateNumberArray[2]-1))];
   const weekNumber = weekDate.getWeekNumber(startDateNumberArray[1], startDateNumberArray[2], startDateNumberArray[3])

   //get the day numbers and place them in an array
   const dayNumberArray = [];

   for (let i = 0; i < 7; i++) {     
      let date = i+dateNumber;

      // get the day number, if statements compensate for a week where the month changes
      if  (date < 1) {
         var dateNumberLabel = startDateNumberArray[4] + date; 
         var monthPart = parseInt(startDateNumberArray[2])-1;
      }  //numbers below 1
      else if (date > startDateNumberArray[5]) { 
         dateNumberLabel = date - startDateNumberArray[5];
         monthPart = parseInt(startDateNumberArray[2])+1;
      } //numbers above month length
      else {  
            dateNumberLabel = date;
            monthPart = parseInt(startDateNumberArray[2])
         }

      //deal with one digit numbers
      if (monthPart < 10){
         var monthPart2 = "0" + monthPart;
      } else {monthPart2 = `${monthPart}`}

      if (dateNumberLabel < 10){
         var dayNum = "0" + dateNumberLabel;
      } else { dayNum = `${dateNumberLabel}`}
           
      dayNumberArray.push([dateNumberLabel, `date_${startDateNumberArray[1]}${monthPart2}${dayNum}` ]  );
   }  

   // place the Month Title
   let weekGrid = `<div class="scheduleMonthName"><h1>${monthName} ${startDateNumberArray[1]}</h1></div>`;

   // The link back to the day Modal
   weekGrid += '<div class = "timeDiv dayPlaceHolder2" id="backFromSch">Cal</div>';

   // the day names
   for (let i = 0; i < 7; i++) {      
      weekGrid += `<div class = "dayName dayNameWkSch" id = "${dayNumberArray[i][1]}:${i}"> ${weekDate.dayNames[i]} </div>`;
   }

   // the time lable
   weekGrid += '<div class = "timeDiv dayPlaceHolder" >Time</div>';
   
   //create the row for the day numbers
   dayNumberArray.forEach(element => {
      weekGrid += `<div class = "dayNumber"> ${element[0]} </div>`;
   });   
   
   // create time list, half hour intervals
   for(let i = 5; i < 22; i++){
      for(let j = 0; j < 4; j++){  

         switch(j){
            case 0: var k = '00'; break;
            case 1: var k = '15'; break;
            case 2: var k = '30'; break;
            case 3: var k = '45'; break;
         }

         if (i < 10){
            var title = `0${i}${k}`;
         } else {
            var title = `${i}${k}`;
         }
            weekGrid += laydownGrid(title, weekNumber, dayNumberArray);            
      }   
   }  
   // The link back to the day Modal
   weekGrid += '<div class = "timeDiv dayPlaceHolder2"> </div>';


   // the day names
   for (let i = 0; i < 7; i++) {      
      weekGrid += `<div class = "dayName dayNameWkSch" id = "${dayNumberArray[i][1]}:${i}"> ${weekDate.dayNames[i]} </div>`;
   }

   $(".weeklySchedule").html(weekGrid);
console.log("THE SCHEDULE ARAY IS",scheduleArray);
   // change the background colour in the schedule grid
   if (scheduleArray.length !== 0) {
      scheduleArray.forEach(element => {
         let taskLabel = scheduleItems.find(o => o.schClass == element.selection).label;
         $(`#${element.schId}`).addClass(element.selection);

         if (taskLabel !== "null") {
           $(`#${element.schId}`).text(taskLabel); 
         }         
      });
   }  
}

function laydownGrid(title, weekNumber, dayNumberArray) {

   let weekRow = '';
   
   for (let i = 0; i < 8; i++) { 
      
      if (i === 0) { 
         var className = `class = "timeDiv"`;
         var inside = title;
      } 
      else { 
         //console.log(`${dayNumberArray[i-1][1]}:${weekNumber}:${i-1}:${title}`);
         var className = `class = "wsInfoDiv" 
                          id="${weekNumber}_${i-1}_${title}" 
                          data-scheduleCell ="${dayNumberArray[i-1][1]}:${weekNumber}:${i-1}:${title}"`;
         var inside = ' ';     
               }
      weekRow += `<div ${className}>${inside} </div>`;      
   }
   return weekRow;
   
}