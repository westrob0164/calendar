// this function creates a text area, gets data for it out of the local storage and displays it.

// import the function to create div's
import { addDivPre } from '../utilities/utilities.js'

export function notes(dateParts, type) {
   console.log("input data", dateParts, type);
   const dateInput = `date_${dateParts[0]}${dateParts[1]}${dateParts[2]}`

   //get data from the local storage
   const storedNotes = JSON.parse(localStorage.getItem(`${type}Note`)) || [];  

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

   // =======  mouse click ========
   // Save the note`$#{type}Note`
   $(`#${type}NoteSave`).on("click", function(e) {
      noteText(dateInput, storedNotes, type);
      alert("data Saved");  
   });
    
   //check to see if there is a saved entry:
   const todaysNote =  storedNotes.find( ({ date }) => date === dateInput );

   // if there is stored data, display it
   if (todaysNote !== undefined) {
      if (displayDate === "yesterday"){
         $(".textInputDiv").hide();
         addDivPre('noteMessage', todaysNote.notes,'.notesDiv');
      } else {
         var devNote = todaysNote.notes;
         $(`#${type}TextArea`).val(devNote);      
      } 
   } //if not 
   else {
      if (displayDate === "yesterday"){
         $(".textInputDiv").hide();
         addDivPre('noteMessage',`<h1>No notes for this date</h1>`,'.notesDiv');
      } else if (displayDate === "tomorrow") {
         $(".textInputDiv").hide();
         addDivPre('noteMessage',`<h1>This date is yet future</h1>`,'.notesDiv');
      } 
   }
}

function noteText(dateInput, storedNotes, type) {
    //avedevotionNote(dateInput, displayJournal, journalData);
   const newNote = $(`#${type}TextArea`).val();

   const newDevotionNote = {
      date:   dateInput,
      notes:  newNote
   }

   //check to see if data already exists
   if (storedNotes.length !== 0) {
      const result = storedNotes.find( ({ date }) => date === dateInput );
      console.log("check for date", result);
      if (result !== undefined) {
         const arrayIndex = storedNotes.findIndex( ({ date }) => date === dateInput );
         storedNotes[arrayIndex].notes = newNote;
      }else{
         storedNotes.push(newDevotionNote);
         }
   } else {
      storedNotes.push(newDevotionNote);
   }     
   localStorage.setItem(`${type}Note`, JSON.stringify(storedNotes));
}
