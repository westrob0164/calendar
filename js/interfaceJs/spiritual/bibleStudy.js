import { DateObject } from '../../classes/dateClass.js'
import { addDiv, addDivPre, addDivPreId, addDivPreIdData } from './../../utilities/utilities.js'
import { versions, books } from './../../../data/bible.js';
import { apiCall } from './bibleApi.js';
import { notes } from './../notes.js'

export function bibleStudy(dateInput){

   //get info from the date class
   const bibleStudyDateInfo = new DateObject;

   //get the date titles
   const dateTitle = bibleStudyDateInfo.createDateTitle(dateInput); 

   addDiv('bibleStudyWraper', '.content');

   addDivPre('bibleStudyTitle', `<h1>Bible Study</h1>`, '.bibleStudyWraper');
   addDiv('bibleText', '.bibleStudyWraper');
  // addDiv('bibleStudyNotes', '.bibleStudyWraper');
   addDivPre('notesDiv', `<h1>Notes</h1>`,'.bibleStudyWraper');

   addDiv('versionListWraper', '.bibleText');
   
   version();

   addDivPre('textInputDiv', `<textarea id="bibleStudyTextArea" rows="20" cols="30" ></textarea>
                              <button id="bibleStudyNoteSave" class="buttons dailySchButtons">Save Note</button>`,'.notesDiv');

   notes(dateTitle[3], 'bibleStudy');

   // =======  mouse click ========
   // go back to calendar
   $(".bibleStudyTitle").on("click", function(e) {
      $(".bibleStudyWraper").remove();
      $(".datePopoutWraper").show();
      $(".calandarWraper").show();      
   });      

}

function version() {

   addDivPre('versionTitle', `Select a version`, '.versionListWraper');
   versions.forEach(element => {          
      addDivPreId('versions', `${element.name}`,'.versionListWraper', `${element.id}`); 
     
   });

   // =======  mouse click ========
   // go to book List
   $(".versions").on("click", function(e) {

      $(".versionListWraper").hide();

      showChapters($(this).attr('id'))
   });     
}

function showChapters(versionId) {

   addDiv('bookWrapper', '.bibleText');
    books.forEach(element => { 
         
      if (element.id === "GEN"){addDivPre('testamentTitle', `Old Testament`,'.bookWrapper');}
      if (element.id === "MAT"){addDivPre('testamentTitle', `New Testament`,'.bookWrapper');}

      addDivPreIdData(`bookName ${element.section}`, `${element.name}`,`.bookWrapper`, `_${element.id}`,'data-verId',`${versionId}`);

      // addDiv('bookName', '.bookWrapper');
   });

   // =======  mouse click ========
   // go back to version list
   $(".testamentTitle").on("click", function(e) {
      $(".bookWrapper").remove();
      $(".versionListWraper").show();  
   });    

      // =======  mouse click ========
   // go back to version list
   $(".testamentTitle").on("click", function(e) {
      $(".bookWrapper").remove();
      $(".versionListWraper").show();  
   });  

   // =======  mouse click ========
   // go to chapter list
   $(".bookName").on("click", function(e) {
      $(".bookWrapper").hide();
      getChapters(this);
   });  
}

//get chapters
function getChapters(parm) {

   const versionID = $(parm).attr('data-verId');
   const BookName  = $(parm).attr('id').substr(1);

   addDiv('chapterWrapper', '.bibleText');   

   //api call to get the chapter list
   apiCall(`/${versionID}/books/${BookName}/chapters`)
     .then((chapters) => { 

      addDivPre('chapterBookTitle', `${chapters.data[0].reference}`, '.chapterWrapper');
            console.log(chapters);

      chapters.data.forEach(element => { 

         const getVersesID = `${versionID}_${BookName}.${element.number}`
   
         if(element.number === 'intro'){
            addDivPreId('chapterIntro getText', `${element.number}`,'.chapterWrapper', getVersesID);
         } else{
            addDivPreId('chapters getText', `${element.number}`,'.chapterWrapper', getVersesID);
            }
         });

         // =======  mouse click ========
         // go back to book list
         $(".chapterBookTitle").on("click", function(e) {
            //console.log("chapter book title");
            $(".bookWrapper").show();
            $(".verseWraper").remove();
            $(".chapterWrapper").remove();
         });  

         // =======  mouse click ========
         // go get Biblical text

         $(".getText").on("click", function(e) {
            $(".verses").remove(); 
            
            const getVerses = $(this).attr('id').split('_');

            addDiv('verseWraper', '.bibleText');   

            apiCall(`/${getVerses[0]}/chapters/${getVerses[1]}`)
              .then((verses) => { 
                 addDivPre('verses', `${verses.data.content}`,'.verseWraper');
                 //console.log(verses.data.content);
               });
         });
      });
}
  
//get Text
function getBileText(params) {
   
}