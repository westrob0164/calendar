
import { dayModal  } from './dayModal.js';
import { DateObject  } from '../classes/dateClass.js';

export function calandarCreator(currentMonth, currentYear) {

  const objDate = new DateObject;

  $(document).attr("title", "Time Management - Calendar");

  let numberOfDaysMonth = objDate.dayInMonth(currentYear, currentMonth);  //get the number of days for the month
  let theFirstDay = objDate.firstDay(currentYear, currentMonth);  //get the first day of the month
    

  let monthGrid = `<div class = "monthName">
                     <div class="prevMonth"> 
                       <button id="prevMonth" class="buttons calandarButtons">&laquo; Prev Month</button>
                     </div>
                     <div class="monthTitle">
                       <h1>${objDate.monthNames[currentMonth]} ${currentYear} </h1>
                     </div>
                     <div class="nextMonth"> 
                       <button id="nextMonth" class="buttons calandarButtons">Next Month &raquo;</button>
                     </div>
                   </div>`;

  objDate.dayNames.forEach(element => {
      monthGrid += `<div class = "dayName"> ${element} </div>`;
  });

  if (theFirstDay != 0) {
      monthGrid += `<div class = "placeHolder${theFirstDay}"></div>`;
  }
    
  for (let i = 1; i <= numberOfDaysMonth; i++) {

      let month = currentMonth +1;
      let monthNumber = month.toString().padStart(2, '0');
      let dayNumber = i.toString().padStart(2, '0');

      let thisDay = new Date();
      let months = thisDay.getMonth();
      let highDay = thisDay.getDate();

      let currentMonthInt = parseInt(currentMonth);
      let dayNumberInt = parseInt(dayNumber);      

      if (months === currentMonthInt && dayNumberInt === highDay) {
        monthGrid += `<div class = "day thisDay" id="date_${currentYear}${monthNumber}${dayNumber}">${i}</div>`;
      } else { monthGrid += `<div class = "day" id="date_${currentYear}${monthNumber}${dayNumber}">${i}</div>`}
  }
  
  $(".calandarWraper").html(monthGrid);

  // get the next month on the calendar
  $("#nextMonth").on("click", function(e){
      currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
      currentMonth = (currentMonth + 1) % 12;
      calandarCreator(currentMonth, currentYear);
  });
  
  // get the previous month on the calendar
  $("#prevMonth").on("click", function(e){
      currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
      currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
      calandarCreator(currentMonth, currentYear);
  });

    //get the modal popup
    $(".day").click(function() {
      //console.log(this);
    $(".datePopoutWraper").empty();
    dayModal($(this).attr('id'));
  });

  

}