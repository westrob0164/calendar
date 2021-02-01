import { DateObject } from '../../classes/dateClass.js'
import { addDiv, addDivPre } from '../../utilities/utilities.js'
import { prayerList } from '../../../data/spiritualData.js'
import { apiCall } from './bibleApi.js';
import { notes } from './../notes.js'

export function devotions(dateInput) {

   //get info from the date class
   const devotionDateInfo = new DateObject;

   //get the date titles
   const dateTitle = devotionDateInfo.createDateTitle(dateInput);

   //add journal wraper
   addDiv('devotionWraper', '.content');

   addDivPre('btnDevotion', `<button id="backToModal" class="buttons dailySchButtons">Back to Modal</button>`,'.devotionWraper');

   addDivPre('devotionDate', `<h1>Devotions:  ${dateTitle[0]}</h1>`,'.devotionWraper');

   addDivPre('prayerListWrapper', `<h1>Prayer List</h1>`,'.devotionWraper');
   addDivPre('passage', `<h1 class="passageTitle">Passage</h1>`,'.devotionWraper');
   addDivPre('notesDiv', `<h1>Notes</h1>`,'.devotionWraper');


   //place prayer list
   prayerListFunction(dateTitle[1])

   //get passage from Proverbs
   dailyProverb(dateTitle[3][2]);

   //place note input        
   addDivPre('textInputDiv', `<textarea id="devotionTextArea" rows="15" cols="25" ></textarea>
                              <button id="devotionNoteSave" class="buttons dailySchButtons">Save Note</button>`,'.notesDiv');

   //code to access and save notes
   //devotionNotes(dateInput, dateTitle[3])
   notes(dateTitle[3], 'devotion');

      // =======  mouse click ========
   // display a daily schedule
   $(".btnDevotion").on("click", function(e) {
      $(".devotionWraper").remove();
      $(".datePopoutWraper").show();
      $(".calandarWraper").show();      
   });
}

function prayerListFunction(dayNumber) {

      //family header
      let prayerListHtml = `<div class= "prayerList"><h3>Family and Other People Close to me</h3>`
      
      prayerList.familyPlus.forEach(element => {
         if (element.name2 !== "null"){
            var secondName = ` & ${element.name2}`;
         } else {
            var secondName = " ";
         }

         if (element.kids[0] !== "none"){
            var kidNames =  `<br>&nbsp;&nbsp;&nbsp;&nbsp;Kids:`
            element.kids.forEach(element2 => {
               kidNames += ` ${element2}, `;
            });   
            
         } else {var kidNames = ' '}

         prayerListHtml  += `<div class="listItems"> ${element.familyName}: ${element.name1}  ${secondName} ${kidNames}</div>`;
      });

      //assembly header
      prayerListHtml += `<h3>People in the Assembly</h3>`

      prayerList.assembly.forEach(element => {
         if (element.weekDay === dayNumber){
            if (element.name2 !== "null"){
               var secondName = ` & ${element.name2}`;
            } else {
               var secondName = " ";
            }

            if (element.kids[0] !== "none"){
               var kidNames =  `<br>&nbsp;&nbsp;&nbsp;&nbsp;Kids:`
               element.kids.forEach(element2 => {
                  kidNames += ` ${element2}, `;
               });   
               
            } else {var kidNames = ' '}

            prayerListHtml  += `<div class="listItems"> ${element.familyName}: ${element.name1}  ${secondName} ${kidNames}</div>`;
         }
      });

      //other header
      prayerListHtml += `<h3>Other Items</h3>`

      prayerList.other.forEach(element => {
         prayerListHtml += `<div class="listItems"> ${element}</div>`;
      });

      prayerListHtml += `</div>`;

      $(".prayerListWrapper").append(prayerListHtml); 
}

//get the proverbs passage
function dailyProverb(day) {

   const selectedBook = 'PRO';
   const versionId = 'de4e12af7f28f599-02';
   
   apiCall(`/${versionId}/chapters/${selectedBook}.${day}`)
      .then((verses) => { 
         addDivPre('devotionPassage', `${verses.data.content}`,'.passage');
   });
}