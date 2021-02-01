// this function creates a text area, gets data for it out of the local storage and displays it.

// import the function to create div's
import { addDiv, addDivPre } from '../../utilities/utilities.js'


export function devotionNotes(dateInputx, dateParts) {

   const dateInput = `date_${dateParts[0]}${dateParts[1]}${dateParts[2]}`

   //get data from the local storage
   const devotionNote = JSON.parse(localStorage.getItem('devNote')) || [];  

   //check date
   const today = new Date();      
   const todayDate = new Date(today.getFullYear(),today.getMonth(),today.getDate()); // get todays date
   const dateOne = new Date(dateParts[0], dateParts[1]-1, dateParts[2]);             //date from page 
   if (todayDate > dateOne) {    
         var displayDate = "yesterday";  
      }else if (todayDate < dateOne) {    
         displayDate = "tomorrow";    
      } else {
         displayDate = "today";    
      }

      const x = "devotion";

   // =======  mouse click ========
   // Save the note
   $(`#${x}NoteSave`).on("click", function(e) {
      noteText(dateInput, devotionNote);
      alert("data Saved");  
   });
    
   //check to see if there is a saved entry:
   const todaysDevotionNote =  devotionNote.find( ({ date }) => date === dateInput );
   
   // if there is stored data, display it
   if (todaysDevotionNote !== undefined) {
      if (displayDate === "yesterday"){
         console.log("the devotion notes", devotionNote, dateInput, todaysDevotionNote, displayDate);
         $(".textInputDev").hide();
         addDivPre('NoteMessage', todaysDevotionNote.notes,'.notesDev');
      } else {
         var devNote = todaysDevotionNote.notes;
         $("#devotionTextArea").val(devNote);      
      } 
   } //if not 
   else {
      if (displayDate === "yesterday"){
         $(".textInputDev").hide();
         addDivPre('NoteMessage',`<h1>no Notes for this Date</h1>`,'.notesDev');
      } else if (displayDate === "tomorrow") {
         $(".textInputDev").hide();
         addDivPre('NoteMessage',`<h1>This date is yet future</h1>`,'.notesDev');
      } else {     

        }
   }
}

function noteText(dateInput, devotionNote) {
    //avedevotionNote(dateInput, displayJournal, journalData);
   const newNote = $("#devotionTextArea").val();

   const newDevotionNote = {
      date:   dateInput,
      notes:  newNote
   }

   //check to see if data already exists
   if (devotionNote.length !== 0) {
      const result = devotionNote.find( ({ date }) => date === dateInput );
      console.log("check for date", result);
      if (result !== undefined) {
         const arrayIndex = devotionNote.findIndex( ({ date }) => date === dateInput );
         devotionNote[arrayIndex].notes = newNote;
      }else{
         devotionNote.push(newDevotionNote);
         }
   } else {
      devotionNote.push(newDevotionNote);
   }     
   localStorage.setItem('devNote', JSON.stringify(devotionNote));
}
