import { taskTypePopUp } from './taskTypePopup.js'
import { addDiv, addDivPre } from '../../utilities/utilities.js'
import { DateObject } from '../../classes/dateClass.js'
import { scheduleItems } from '../../../data/scheduleData.js'
import { taskText} from './taskText.js'

export function dailySchedule(date, origin){
   
   //const dailyScheduleArray = JSON.parse(localStorage.getItem('dailySchedule')) || [];   
   const scheduleArray = JSON.parse(localStorage.getItem('schedule')) || [];  

   //get info from the date class
   const dailySchDateInfo = new DateObject;

   //get the date titles
   const dateTitle = dailySchDateInfo.createDateTitle(date);
   //deconstruct the date variable
   const dateParts = date.split(':');

   $(".weeklySchedule").hide();

   // start createting the page

   addDiv('dailyScheduleWraper', '.content');
   //add the date text
   addDivPre('dailyScheduleDate', `<h1>${dateTitle[0]}</h1>`,'.dailyScheduleWraper')

   //add the time cells
   let dayGrid = `<div class="dailyScheduleTitle"><h1>Enter Daily Tasks</h1></div>`;

   //select the origin location to see if the weekly schedule button needs to be shown
   if (origin == "weeklySchedule") {
      var weeklyScheduleButton = `<button id="weekSchPage" class="buttons dailySchButtons">Weekly Schedule page</button>`;
   } else {
      var weeklyScheduleButton = ``;
   }

   dayGrid += `<div class="dailyScheduleTitle">
                  ${weeklyScheduleButton}
                  <button id="modalPage" class="buttons dailySchButtons">Modal page</button>
               </div>`;

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
            dayGrid += laydownGrid(title,  dateParts[0], dateTitle);            
      }   
   } 

   $(".dailyScheduleWraper").append(dayGrid);

   // =======  mouse click ========
   // go to the weekly schedule page
   $("#weekSchPage").click(function() {
     $( ".dailyScheduleWraper" ).remove();
     $(".weeklySchedule").show();

   });

   // =======  mouse click ========
   // go to the calander modal page
   $("#modalPage").click(function() {      
     $( ".dailyScheduleWraper" ).remove();
     $(".rightColumn").hide();
     $(".calandarWraper").show();
     $(".datePopoutWraper").show();
   });

   // =======  mouse click ========
   // used to update the cell
   $(".dailyScheduleTimeLabel").click(function() {  

      // setup the parmeters
      const weeklyData = $(this).attr('data-scheduleCell');
      const cellBkColour = $(this).attr('class');
      const cellID = $(this).attr('id');
      //console.log([weeklyData, cellBkColour,  "cellid", cellID]);
      taskTypePopUp([weeklyData, cellBkColour, cellID]);     
   });  

   // =======  mouse click ========
   // used to update Daily schedule tasks
   $(".dailyScheduleNotes").on("click", function(e) {  

      //$(`#${cellIdValue}`).unbind("click");

      const cellIdValue = $(this).attr('id');
      $(`#${cellIdValue}`).off("click");
      
      taskText(this, scheduleArray);

   }); 

   // adds the background colour and text to the grid
   if (scheduleArray.length !== 0) {
      scheduleArray.forEach(element => {
         // get the info from the scheduleData object
         let taskLabel = scheduleItems.find(o => o.schClass == element.selection).label;
         // show the background colour for the tasks
         $(`#${element.schId}_day`).addClass(element.selection);

         // place the lable on the backgound
         if (taskLabel !== "null") {
            $(`#${element.schId}_day`).text(taskLabel); 
         }
      });

      //place the task text
      scheduleArray.forEach(element => {
         //console.log("element.dayId", element.dayId, "dateParts",  dateParts[1]);
         if (element.dayId === dateParts[1] && element.task !== "undefined") {
            $(`#${element.schId}-notes`).text(element.task); 
         }
      });
   }       
}

function laydownGrid(title, date, dateTitle) {
 
   let  dayRow = `<div class = "timeDiv">${title}</div>
  
                 <div id="${dateTitle[2]}_${dateTitle[1]}_${title}_day" 
                      class="dailyScheduleTimeLabel"
                      data-scheduleCell ="${date}:${dateTitle[2]}:${dateTitle[1]}:${title}"></div>
                 <div class="dailyScheduleNotes" id="${dateTitle[2]}_${dateTitle[1]}_${title}-notes"></div>`;
   return dayRow;
}

