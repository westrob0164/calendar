// creates the Music Practice Pannel as well as the practice setup page

import { DateObject  } from '../../classes/dateClass.js';
import { addDiv,
         addDivPre,
         addDivPreId,
         addDivId } from '../../utilities/utilities.js'
import { lessonSegments,
         auerBook1,
         auerBook2,
         rcmScales,
         musicComposition,
         rcmRepertoire,
         rhythmPatterns}  from '../../../data/musicData.js';


const musicPracticeArray = [];

export function musicPractice(date) {

   // add div for music practice
   addDiv('musicPractice', '.musicPanel');   

   //create the Music Practice Setup button
   $('.musicPractice').html(`<button id="musPracticeSetup" class="buttons orgPagesBtn2">Practice Setup</button>`);
   $('.musicPractice').append(`<button id="musPracticeSetup2" class="buttons orgPagesBtn2">Practice Setup Days</button>`);
   
   $("#musPracticeSetup").click(function() {
      $(".musicPractice").hide();

      addDiv('musicPracticeSetupContainer', '.musicPanel');  
      musicPracticeSetup("mainSetup");
   });

   $("#musPracticeSetup2").click(function() {
      $(".musicPractice").hide();

      addDiv('musicPracticeSetupContainer','.musicPanel');  
      musicPracticeSetup("daySetup");
   });
}

function musicPracticeSetup(setupType) {
   
   //create the day names for the selector pannel
   const practDate = new DateObject;

   addDiv('musDayNamesContainer', '.musicPracticeSetupContainer');
   addDiv('musDayPlaceHolder', '.musDayNamesContainer');

   practDate.dayNames.forEach(element => {
      addDivPre('musPracticeSetupDayNames', element, '.musDayNamesContainer'); 
   });

   addDiv('musPracticeSetupContainer', '.musicPracticeSetupContainer');
   addDiv('musPracticeSetupPane', '.musPracticeSetupContainer');

   if (setupType === "mainSetup") {     
      addDivPre('musPracticeSetupSection', 'Theory', '.musPracticeSetupPane'); 
      createListsSections('Theory');

      addDivPre('musPracticeSetupSection', 'Violin', '.musPracticeSetupPane'); 
      createListsSections('Violin');
   } else {
      
   }
      
   $(".musPractCell").click(function() {

      if ($(this).hasClass('musPractCellSel')){
         $(this).removeClass('musPractCellSel');

         var index = musicPracticeArray.indexOf($(this).attr('id'));
         musicPracticeArray.splice(index, 1);
         //console.log(musicPracticeArray)
       
      } else {
         $(this).addClass('musPractCellSel');
         musicPracticeArray.push($(this).attr('id'));
         console.log(musicPracticeArray);
      }
    });
}

// create the subsection Titles
function createListsSections(section) {
   lessonSegments.forEach(element => {
      if (element.level1 === section) {
         addDiv(`musPlaceHolder1`, '.musPracticeSetupPane');
         addDivPre(`musSetup1`, element.level2, '.musPracticeSetupPane');
         createLists(element.level2, element.level3);      
      }
   });  
}

// create the lists
function createLists(level2, level3) {   
   //console.log(level2, level3);
   if (level3 !== undefined) {
      
      if (level2 === "Exercises") {      
         
         level3.forEach(element => {
               addDiv(`musPlaceHolder2`, '.musPracticeSetupPane');
               addDivPre(`musSetup2`, element.title, '.musPracticeSetupPane');
               createLists("stuff", element.object);
         });
      } else {  
         const dataSet = eval(level3);
         dataSet.forEach(element => {
            //console.log(element.name);
            if (element.level === "2" || element.practice === "now") {
                        
               if (level3 === 'rcmScales') {
                  var elementName = `${element.key} ${element.mode}, ${element.octives} octive, pos ${element.position}`
                  var sectionName = level2;
               } else {
                  var elementName = element.label;
                  var sectionName = `${level3}:`;  
               }
               let varName = element.name;
               
               if (level3 === 'rhythmPatterns') {
                  var selClassName = `musPracticeItemName ${element.class}`;
               } else {
                  var selClassName = `musPracticeItemName`;
               }
               
               addDiv(`musPlaceHolder3`, '.musPracticeSetupPane');
               addDivPre(selClassName, elementName, '.musPracticeSetupPane');

               for (let i = 0; i < 7; i++) {
                  addDivId(`musPractCell`, '.musPracticeSetupPane', `day${i}:${sectionName}${varName}`); 
               }
            } 
         });        
      }
   } else {
      
   }     
}
