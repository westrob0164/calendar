// this program creats a modal to add tasks into the dayily schedule


export function taskText(cellInfo, scheduleArray) {

   const cellID = $(cellInfo).attr('id');
   const scheduleKey = cellID.split('-');

   // create the code for the popup
   var selectionPopup = `<div class="tasksModal">
                           <div class="modal-contentTasks">
                              <p class="modalInputText">Please enter text:</p>
                              <input type="text" class = "textInput" name="user"> 
                              <button id="dailSchSave" class="buttons dailyTaskBtn">Save</button>
                           </div>
                         </div>`;

   $(`#${cellID}`).html(selectionPopup);
   $(".tasksModal").show();

   //get the info from the schedule array and assign value into the text box
   let taskLabel = scheduleArray.find(o => o.schId == scheduleKey[0]);
   let taskLabelIndex = scheduleArray.findIndex(o => o.schId == scheduleKey[0]);

   let xx = scheduleArray[taskLabelIndex].task

   console.log("the index", xx);
   $(`.textInput`).val(taskLabel.task);

   //save the new data into the schedule array

   // =======  mouse click ========
   //go back to the calandar and date popup
   $("#dailSchSave").on("click", function() {
      const inputText = $(`.textInput`).val();
      
      $(`#${cellID}`).empty();

      scheduleArray[taskLabelIndex].task = inputText;

      $(`#${cellID}`).text(inputText);

      localStorage.setItem('schedule', JSON.stringify(scheduleArray));
   });

   
}