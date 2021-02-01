
import { createListSection } from '../utilities/utilities.js';

// get the tasks displayed on the modal
export function createTasksList(dayOfWeek, weekOfYear) { 
   

    var createList = createListSection("daily");  // place the daily tasks on the popup

    //place the other tasks on the popup, depending on the day of the week and for Sat, the week of the year
    if (dayOfWeek != 6) { 
        const selectedDay = `day${dayOfWeek}`;
        createList += createListSection(selectedDay);
    } else {
        let weekNumber = weekOfYear % 5;
        if (weekNumber != 0) {
            const selectedWeek = `week${weekNumber}`;
            createList += createListSection(selectedWeek);
        } else {
            const selectedWeek = `week${weekOfYear}`;
            createList += createListSection(selectedWeek);
        }
    } 
    return createList;
}
