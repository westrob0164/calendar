//this file creates a daily journal
import { DateObject } from '../classes/dateClass.js'
import { addDiv, addDivPre } from '../utilities/utilities.js'

export function journal(dateInput) {

   //get data from the local storage
   const journalData = JSON.parse(localStorage.getItem('journal')) || [];  

   //get info from the date class
   const journalDateInfo = new DateObject;

   //get the date titles
   const dateTitle = journalDateInfo.createDateTitle(dateInput);
   

   //add journal wraper
   addDiv('journalWraper', '.content');

   // buttons for today
   addDivPre('btnJournal',`<button id="back" class="buttons dailySchButtons">Back to Modal</button>`,'.journalWraper');

   // button for yesterday and tomorrow
   //addDivPre('btnJournal2', `<button id="back2" class="buttons dailySchButtons">Back to Modal</button>`,'.journalWraper');
   
   //date tag
   addDivPre('journalDate', `<h1>Journal:  ${dateTitle[0]}</h1>`,'.journalWraper');
   
   //input box for daily journal
   addDivPre('journalInput', `<textarea id="textBox" rows="20" cols="80" ></textarea>
                              <button id="saveJournal" class="buttons dailySchButtons">Save Journal</button>`,'.journalWraper');

   // get the journal entry from the past (if aviable)
   addDiv('journalOutPut', '.journalWraper');

   // message if clicked on a day in the future
   addDivPre('journalInput2', `<h1>this is the future</h1>`,'.journalWraper');

   // check to see if the selected day is past presend or future
   const displayJournal  = createDateString(dateTitle);
   console.log("display", displayJournal);

   // =======  mouse click ========
   // display a daily schedule
   $("#back").on("click", function(e) {
      $(".journalWraper").remove();
      $(".datePopoutWraper").show();
      $(".calandarWraper").show();      
   });

   // =======  mouse click ========
   // display a daily schedule
   $("#saveJournal").on("click", function(e) {
      saveJournal(dateInput, displayJournal, journalData);
   });


   const result2 = journalData.find( ({ date }) => date === dateInput );
   
   if (result2 !== undefined) {
       var theResult = result2.journal;
       $("#textBox").val(theResult);      
    }

    //display the past journal entries
    if (displayJournal === "display") {
      console.log("the result ss", result2);
      if (result2 !== undefined) {
        
         var theResult = result2.journal;
         addDivPre('journalOutPutText', theResult,'.journalOutPut');
      } else{
         addDivPre('journalOutPutText', `<h1>No entry was written for this day:</h1>`,'.journalOutPut');
      }
    }
}

function saveJournal(dateInput, displayJournal, journalData) {
   const journalText = $("#textBox").val();

   const result = journalData.find( ({ date }) => date === dateInput );
      console.log(result);
   //journal object
   const dailyJournal = {
      date:     dateInput,
      journal:  journalText
   }

   //check to see if data already exists
   if (journalData.length !== 0) {
      const result = journalData.find( ({ date }) => date === dateInput );

      if (result !== undefined) {
         const nextResult = result.date;
         const arrayIndex = journalData.findIndex( ({ date }) => date === dateInput );

         if (nextResult === dateInput) {
            journalData[arrayIndex].journal = journalText;
         } else{
            journalData.push(dailyJournal);
         }
      }else{
         journalData.push(dailyJournal);
         }
      
   } else {
      journalData.push(dailyJournal);
   }     
   localStorage.setItem('journal', JSON.stringify(journalData));
}

// figure where out were the selected date is in relation to today
function createDateString(dateTitle) {

   //get the present date.
   const today = new Date();
   const day   = today.getDate();
   const month = today.getMonth();
   const year  = today.getFullYear();

   if (year > parseInt(dateTitle[3][0]) ) {
      var journalDisplay = "before";
   } else if  (year < dateTitle[3][0] ){
      var journalDisplay = "after";
   } else {
      if (month > dateTitle[3][1]-1 ) {         
         var journalDisplay = "before";
      } else if (month <  dateTitle[3][1]-1) {         
         var journalDisplay = "after";
      } else {
         if (day > dateTitle[3][2]) {
            var journalDisplay = "before";
         } else if (day < dateTitle[3][2]) {           
            var journalDisplay = "after";
         } else {            
            var journalDisplay = "thisDay";
         }
      }
   }

   if (journalDisplay  === "before") {
      $(".journalInput").hide();
      $(".journalInput2").hide();
      return "display";
      
   } else if (journalDisplay  === "after") {
      $(".journalInput").hide();
      $(".journalOutPut").hide();
      return "nodisplay";
   } else {
      $(".journalOutPut").hide();
      $(".journalInput2").hide();
      return "displayInBox";
   }
   
}