//  this file creates a modal to change the tasks on the daily (and the weekly) schedule
import { DateObject } from '../../classes/dateClass.js';
import { scheduleItems } from './../../../data/scheduleData.js'
import { saveScheduleData } from './saveScheduleData.js'

export function taskTypePopUp(InputArray) {

   const dataArray    = InputArray[0].split(':');
   const taskType     = InputArray[1].split(' ');
   const cellId     = InputArray[2]

   const modalLabelObj = new DateObject;
   const modalLabel = modalLabelObj.dayNames[dataArray[2]];

   // create the code for the popup
   var selectionPopup = `<div class="scheduleModal">
                          <div class="modal-content">
                          <div class="selectTask"> ${modalLabel} ${dataArray[3]}</div>`;

   scheduleItems.forEach(element => {
      selectionPopup += `<div class="selectTask ${element.schClass}"
                         data-TaskType = "${InputArray[0]}">${element.label} </div>`;
   });   
   selectionPopup += '</div></div>'

   
   $(`.leftColumn`).html(selectionPopup);
   $(".scheduleModal").show();

   // =======  mouse click ========
   //update the cell colour
   $(".selectTask").click(function() {
      //call the update function
      const cellBkColour = $(this).attr('class').split(' ')
      console.log(dataArray, cellBkColour);
      saveScheduleData([dataArray, cellBkColour[1]])
      

      $(`#${cellId}`).removeClass();

      $(`#${cellId}`).addClass(taskType[0]);
      $(`#${cellId}`).addClass(cellBkColour[1]);

      let taskLabel = scheduleItems.find(o => o.schClass == cellBkColour[1]).label;
      $(`#${cellId}`).text(taskLabel);

      $(".scheduleModal").hide();
   });

}