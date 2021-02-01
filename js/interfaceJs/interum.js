import { createListSection } from '../utilities/utilities.js';

const arrayHouseWork = JSON.parse(localStorage.getItem('HouseWork')) || [];
const arrayOutsideWork = JSON.parse(localStorage.getItem('OutsideWork')) || [];
const arrayOther = JSON.parse(localStorage.getItem('Other')) || [];

export function interum() {

   // hide the calendar and the date popup
   $(".calandarWraper").hide();
   $(".datePopoutWraper").hide();

   // create the html in the task lists
   $(".intrumTasks").html(interumTasksList());
   $(".intrumTasks").show();	

   // go back to the calandar and date popup
   $("#backToCalandar").on("click", function(e) {
      $(".intrumTasks").hide();
      $(".calandarWraper").show();
      $(".datePopoutWraper").show();
   });

   populateList(arrayHouseWork, 'HouseWork');
   populateList(arrayOutsideWork, 'OutsideWork');
   populateList(arrayOther, 'Other');

   $("#btnHouseWork").on("click", function(e) {
      addToList('HouseWork', e, arrayHouseWork);
   });

   $("#btnOutsideWork").on("click", function(e) {
      addToList('OutsideWork', e, arrayOutsideWork);
   });

   $("#btnOther").on("click", function(e) {
      addToList('Other', e, arrayOther);
   });   

    const itemsHouseWk = document.querySelector('#listHouseWork');
    const itemsOutsideWk = document.querySelector('#listOutsideWork');
    const itemsOther = document.querySelector('#listOther');
    itemsHouseWk.addEventListener('click', toggleDone);
    itemsOutsideWk.addEventListener('click', toggleDone);
    itemsOther.addEventListener('click', toggleDone);

}

function interumTasksList() {
   
   return `<div class = "intTasks" id = "dailyTasksItn">${createListSection("daily")}</div>
           <div class = "intTasks" id = "houseworkItn"><h3>House Work</h3>${createTaskList("HouseWork")}</div>
           <div class = "intTasks" id = "outsideItn"><h3>Outside Work</h3>${createTaskList("OutsideWork")}</div>
           <div class = "intTasks" id = "otherItn"><h3>Other Tasks</h3>${createTaskList("Other")}</div>
           <button id="backToCalandar" class="buttons orgPagesBtn">Back to candendar</button><br><br>`
}

function createTaskList(taskType) {

   return  `<ul class="intTaskList" id="list${taskType}">
               populateList(array, type);
            </ul>
            <br>
            <input type="text" placeholder="Item Name" class="taskTextBox" id="txt${taskType}">
            <button id="btn${taskType}" class="buttons submitBtn">submit</button><br><br>`
            
}

function addToList(type, e, array) {

   const input = $(`#txt${type}`).val();

   const eventList = {
      input,
      done : false
   };

   array.push(eventList);

   populateList(array, type); 
   localStorage.setItem(type, JSON.stringify(array));
   $(`#txt${type}`).val('');
}

function populateList(taskArray = [], taskType) {

   let htmlList = [];

   htmlList = taskArray.map((task, i) => {
     return `
       <li>
         <input type="checkbox" data-index=${taskType}_${i} id="${taskType}${i}" ${task.done ? 'checked' : ''} />
         <label for="${taskType}${i}">${task.input}</label>
       </li>
     `;
   }).join('');  

   $(`#list${taskType}`).empty();
   $(`#list${taskType}`).html(htmlList);   
 }

 function toggleDone(e){

   const el = e.target;
   const indexpre = el.dataset.index;
   const index = indexpre.split("_");
   const items = eval(`array${index[0]}`);

   items[index[1]].done = !items[index[1]].done;

   console.log('stuff', index[1], items[index[1]]);
   localStorage.setItem(index[0], JSON.stringify(items));
   populateList(items, index[0]);
 }