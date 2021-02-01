//these functions create the various music panels
import { violinQues,
         violinLesson,
         theoryQues,
         theoryLesson} from '../../../data/musicData.js';


const lessonObjectArray = JSON.parse(localStorage.getItem('musicLessonData')) || [];   


export function musicLessons(date, type) {
   
   $("<div>")
   .addClass('musicLes')
   .prepend(`<div class="musLesQuestions"></div><div class="musLes"></div>`)  
   .appendTo(".musicPanel");  

   musicLessonContent(date, type);
}

export function musicOther(date) {

   $("<div>")
   .addClass('musicOther') 
   .prepend(`<br><h1>${date}</h1>`) 
   .appendTo(".musicPanel");  
   
}

function musicLessonContent(date, type) {

   $("<div>")
   .addClass('musLesQuesDisplay')
   .attr('id', `${type}QuesNote`)   
   .appendTo(".musLesQuestions");  

   $("<div>")
   .addClass('musLesQuesPost')
   .prepend(addContent(`${type}Ques`))  
   .appendTo(".musLesQuestions");  

   $("<div>")
   .addClass('musLesDisplay')
   .attr('id', `${type}LessonNote`)
   .appendTo(".musLes");  

   $("<div>")
   .addClass('musLesPost')
   .prepend(addContent(`${type}Lesson`))  
   .appendTo(".musLes");  

   

   $(`#btn${type}Ques`).on("click", function(e) {

      createList(
         date,
         e.currentTarget.id, 
         $(`#title${type}Ques`). val(),  
         $(`#subject${type}Ques`). val());
   });

   $(`#btn${type}Lesson`).on("click", function(e) {

      createList(
         date,
         e.currentTarget.id, 
         $(`#title${type}Lesson`). val(),  
         $(`#subject${type}Lesson`). val());
   });

   displayText(`${type}Ques`);
   displayText(`${type}Lesson`);
}

function addContent(type) {

   const boilerPlate = eval(type);

   return `<label for="title${type}" class="inputLables">${boilerPlate.title}</label><br>
           <input type="text" id="title${type}" class="lessonTitle" placeholder="SectionTitle.."><br>
           <label for="subject${type}" class="inputLables">${boilerPlate.subject}</label><br>
           <textarea id="subject${type}" name="subject" class="inputBox" placeholder="Write something.."></textarea>
           <button id="btn${type}" class="buttons lessonBtn">${boilerPlate.btn}</button>`;  
}

function createList(date, inputLocation, title, subject) {

   if (title !== "" && subject !== "") {    
      const dateMod = date.substring(5);
      const inputMod = inputLocation.substring(3);

      let lessonObject = { dateMod,
                           inputMod,
                           title,
                           subject
                         } 
      
      lessonObjectArray.push(lessonObject); 

      displayText(inputMod);

      localStorage.setItem('musicLessonData', JSON.stringify(lessonObjectArray));

      $(`#title${inputMod}`). val(''),  
      $(`#subject${inputMod}`). val('');
   }
}

function displayText(pannelName) {

   let musicPanelText = `<ul>`

   lessonObjectArray.forEach(element => {
      if (pannelName === element.inputMod){
         musicPanelText += `<li><strong>${element.title}:</strong> ${element.subject}</li><br>`;
      }      
   });

   musicPanelText += `</ul>`
   $(`#${pannelName}Note`).html(musicPanelText);
}