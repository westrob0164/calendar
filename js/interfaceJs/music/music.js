import { musicTabs  } from '../../../data/musicData.js';
import { musicLessons,
         musicOther } from './musicPanel.js';
import { musicPractice} from './musicPractice.js';


export function music(date) {
   
   // hide the calendar and the date popup
   $(".calandarWraper").hide();
   $(".datePopoutWraper").hide();
   $(".musicWraper").remove();
   
   $("<div>")
    .addClass('musicWraper') 
    .appendTo(".content");
  
    //build tabs
   $("<div>")
    .addClass('musicTabsContainer') 
    .appendTo(".musicWraper");  
  
   //create a row of buttons (div tabs)
   musicTabs.forEach(element => {
      $("<div>")
       .addClass('musicTabs')
       .attr('id', element.id) 
       .prepend(element.text)
       .appendTo(".musicTabsContainer");
   });

   
   $(".musicTabs").click(function() {
      $('.musicTabs').removeClass('musicTabsActive');
      $(".musicPanel").empty();
         
      switch(this.id) {
         case 'btnback':
            $(".musicWraper").hide();
            $(".calandarWraper").show();
            $(".datePopoutWraper").show();
         // code block
         break;
         case 'btnPractice':     musicPractice(date);          break;
         case 'btnViolinLesson': musicLessons(date, 'violin'); break;
         case 'btnTheory':       musicLessons(date, 'theory'); break;
         case 'btnOther':        musicOther(date);             break;
         default: alert("mistake");
      }
      $(this).addClass('musicTabsActive');
   });

   //create the main panel for the instruments
   $("<div>")
   .addClass('musicPanel') 
   .appendTo(".musicWraper");     
}