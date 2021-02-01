import { DateObject  } from '../classes/dateClass.js';
import { createTasksList  } from './taskDisplay.js';
import { saveTaskInfo  } from './saveTaskInfo.js';
import { interum  } from './interum.js';
import { weeklySchedule  } from './schedule/weeklySchedule.js';
import { dailySchedule } from './schedule/dailySchedule.js';
import { journal } from './journal.js';
import { devotions } from './spiritual/devotions.js';
import { bibleStudy } from './spiritual/bibleStudy.js';
import { music  } from './music/music.js';

export function dayModal(date) {

    $("<div>")
      .addClass('datePopout') 
      .prepend(modalText(date))
      .appendTo(`.datePopoutWraper`);

    $( "#closeModalID" ).click(function() {
        $(".datePopoutWraper").empty();
    });     

    // =======  mouse click ========
    $("#saveTasksId").on("click", function(e) {
      saveTaskInfo(date);
    });

    // =======  mouse click ========
    // display a weekly schedule
    $("#weekSch").on("click", function(e) {
      weeklySchedule(date);
    });

    // =======  mouse click ========
    // display a daily schedule
    $("#dailySch").on("click", function(e) {

      const dailyParameter = `${date}:${this.getAttribute("data-day")}`

       $(".calandarWraper").hide();
       $(".datePopoutWraper").hide();

       dailySchedule(dailyParameter, "dailyModal")
    });

    // =======  mouse click ========
    // display the journal page
    $("#journal").on("click", function(e) {
      $(".calandarWraper").hide();
      $(".datePopoutWraper").hide();

      journal(date);
    });

    // =======  mouse click ========
    // display the devotions page
    $("#devotions").on("click", function(e) {
      $(".calandarWraper").hide();
      $(".datePopoutWraper").hide();

      devotions(date);
    });

    // =======  mouse click ========
    // display the bible Study page
    $("#bibleStudy").on("click", function(e) {
      $(".calandarWraper").hide();
      $(".datePopoutWraper").hide();

      bibleStudy(date)
    });

    // =======  mouse click ========
    // display a music section
    $("#music").on("click", function(e) {
      music(date);
    });

    // =======  mouse click ========
    // display the interm tasks
    $("#interumTasks").on("click", function(e) {
      interum();
    });
}

function modalText(date) {

  const modalDate = new DateObject;

  const modalTitle = modalDate.createDateTitle(date);

  const taskDateId = `task_${date.substr(5)}`;

  return `<div class= "ModalTitle">
            <h2>${modalTitle[0]}</h2>
          </div>
          <div class= "closeButton">
            <button id="closeModalID" class="buttons closeModal">Close  X</button>
          </div>
          <div class= "tasks">
             <div class=dailyTasksModal id="${taskDateId}">${createTasksList(modalTitle[1], modalTitle[2])}</div>
             <br><button id="saveTasksId" class="buttons saveTasksBtn">Save Tasks</button>
          </div>
          <div class= "orgPages"><br><br>
            <button id="weekSch" class="buttons orgPagesBtn">Weekly Schedule</button><br><br>
            <button id="dailySch" class="buttons orgPagesBtn" data-day="${modalTitle[1]}" >Daily Schedule</button><br><br>
            <button id="journal" class="buttons orgPagesBtn">Journal</button><br><br>
            <button id="devotions" class="buttons orgPagesBtn">Devotions</button><br><br>
            <button id="bibleStudy" class="buttons orgPagesBtn">Bible Study</button><br><br>
            <button id="music" class="buttons orgPagesBtn">Music</button><br><br>
            <button id="interumTasks" class="buttons orgPagesBtn">Interum Tasks</button><br><br>
          </div>`;          
}