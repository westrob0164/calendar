//this file creates a daily journal
import { DateObject } from '../classes/dateClass.js'
import { addDiv, addDivPre } from '../utilities/utilities.js'
import { notes } from './notes.js'

export function journal(dateInput) {

   //get info from the date class
   const journalDateInfo = new DateObject;

   //get the date titles
   const dateTitle = journalDateInfo.createDateTitle(dateInput); 

   //add journal wraper
   addDiv('journalWraper', '.content');

   // buttons for today
   addDivPre('btnJournal',`<button id="back" class="buttons dailySchButtons">Back to Modal</button>`,'.journalWraper');

   //date tag
   addDivPre('journalDate', `<h1>Journal:  ${dateTitle[0]}</h1>`,'.journalWraper');
   addDiv('notesDiv', '.journalWraper');
   
   //input box for daily journal
   addDivPre('textInputDiv', `<textarea id="journalTextArea" rows="20" cols="80" ></textarea>
                              <button id="journalNoteSave" class="buttons dailySchButtons">Save Journal</button>`,'.notesDiv');

   notes(dateTitle[3], 'journal');   
   
   // =======  mouse click ========
   // display a daily schedule
   $("#back").on("click", function(e) {
      $(".journalWraper").remove();
      $(".datePopoutWraper").show();
      $(".calandarWraper").show();      
   });
}