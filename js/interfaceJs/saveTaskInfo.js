

export function saveTaskInfo(date) {

   const taskDateId = `tasks_${date.substr(5)}`;

   document.querySelectorAll("input")[6].checked = true;

   console.log("save task info", taskDateId);

   let taskArray = [];

   for (let i = 0; i < document.querySelectorAll("input").length; i++){

      //let x = document.querySelectorAll("input")[i];
      let taskValue     = document.querySelectorAll("input")[i].value;
      let taskDone      = document.querySelectorAll("input")[i].checked;
      let taskClassName = document.querySelectorAll("input")[i].className;
      let z = {"value": taskValue, "checked": taskDone, "class": taskClassName}
      
      taskArray.push(z);     
 }

   localStorage.setItem(taskDateId, JSON.stringify(taskArray));

}