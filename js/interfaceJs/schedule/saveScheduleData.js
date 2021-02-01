
//  This function saves the data (task item, backgound colour, and task notes) into local storage, 
//      (further developments will save it to a file)
// the input data will be the data tags from the selected call, the task item class chosen, and the text from the task notes


export function saveScheduleData(InputArray) {
   console.log(InputArray);
   // seperate out the parameters
   
   const dataArray    = InputArray[0];
   const taskType     = InputArray[1];
   const scheduleId   = `${dataArray[1]}_${dataArray[2]}_${dataArray[3]}`; 

   // get the schedule array from the local storage or if not there, create one
   const scheduleArray = JSON.parse(localStorage.getItem('schedule')) || [];   
  
   // create new object
   const halfHourlyData = {
      schId:     scheduleId,
      dayId:     dataArray[2],
      selection: taskType,
      task: "undefined"
   }

   //check to see if data already exists
   // check to see if schedule cell is aready selected
   if (scheduleArray.length !== 0) {
      const result = scheduleArray.find( ({ schId }) => schId === scheduleId );

      if (result !== undefined) {
         const nextResult = result.schId;
         const arrayIndex = scheduleArray.findIndex( ({ schId }) => schId === scheduleId );

         if (nextResult === scheduleId) {
            scheduleArray[arrayIndex].selection = taskType;
         } else{
            scheduleArray.push(halfHourlyData);
         }
      }else{
            scheduleArray.push(halfHourlyData);
         }
      
   } else {
      scheduleArray.push(halfHourlyData);
   }   


   
   // add object to schedule array
   //scheduleArray.push(halfHourlyData)

   // save to local storage
   localStorage.setItem('schedule', JSON.stringify(scheduleArray));
}