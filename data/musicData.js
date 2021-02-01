export const musicTabs = [
   {"text":"Back", "id":"btnback"},
   {"text":"Practice", "id":"btnPractice"},
   {"text":"Violin Lesson", "id":"btnViolinLesson"},
   {"text":"Theory Lesson", "id":"btnTheory"},
   {"text":"Other", "id":"btnOther"}
];

export const violinQues = {
   "title":"Question Title",
   "subject":"Question",
   "btn":"Submit Violin Question"
};

export const violinLesson = {
   "title":"Note Title",
   "subject":"Lesson Note",
   "btn":"Submit Violin Note"};

export const theoryQues = {
      "title":"Question Title",
      "subject":"Question",
      "btn":"Submit Theory Question"
   };
   
export const theoryLesson = {
      "title":"Note Title",
      "subject":"Lesson Note",
      "btn":"Submit Theory Lesson Note"};


export const lessonSegments = [
   // {"level1":"Theory","level2":"Solfage:","level3":"rcmScales"},
  // {"level1":"Theory","level2":"Rhythm:"},      will change
   {"level1":"Theory","level2":"Composition:","level3":"musicComposition"}, //will change
   {"level1":"Violin","level2":"Scales:","level3":"rcmScales"},
   {"level1":"Violin","level2":"Rhythm:","level3":"rhythmPatterns"},
   {"level1":"Violin","level2":"Exercises","level3": [
                                                    // {"object":"violinTutor","title":"Violin Tutor:"},
                                                     {"object":"auerBook1","title":"Auer Book 1:"},
                                                     {"object":"auerBook2","title":"Auer Book 2:"}]},
   {"level1":"Violin","level2":"Repertoire:","level3":"rcmRepertoire"}
];

export const musicComposition = [
   {"name":"musicComposition","practice":"now","label":"Work on Composition"},
 ];

export const rhythmPatterns = [
   {"name":"rhythmPattern1","class":"rhythmFont","practice":"now","label":"a"},
   {"name":"rhythmPattern2","class":"rhythmFont","practice":"now","label":"b"},
   {"name":"rhythmPattern3","class":"rhythmFont","practice":"now","label":"c"},
   {"name":"rhythmPattern4","class":"rhythmFont","practice":"now","label":"d"},
   {"name":"rhythmPattern5","class":"rhythmFont","practice":"now","label":"e"},
   {"name":"rhythmPattern6","class":"rhythmFont","practice":"now","label":"f"},
   {"name":"rhythmPattern7","class":"rhythmFont","practice":"now","label":"g"},
   {"name":"rhythmPattern8","class":"rhythmFont","practice":"now","label":"h"},
   {"name":"rhythmPattern9","class":"rhythmFont","practice":"now","label":"i"}
 ];

// export const violinTutor = [
//    {"name":"Ex137","exNumber":"137","key":"G","practice":"later","label":"Ex 137"},
//    {"name":"Ex138","exNumber":"138","key":"a,e,b","practice":"later","label":"Ex 138"},
//    {"name":"Ex139","exNumber":"139","key":"G","practice":"later","label":"Ex 139"},
//    {"name":"Ex140","exNumber":"140","key":"D","practice":"now","label":"Ex 140"},
//    {"name":"Ex141","exNumber":"141","key":"G","practice":"now","label":"Ex 141"},
//    {"name":"Ex142","exNumber":"142","key":"G","practice":"now","label":"Ex 142"},
//    {"name":"Ex143","exNumber":"143","key":"D","practice":"now","label":"Ex 143"},
//    {"name":"Ex144","exNumber":"144","key":"G","practice":"later","label":"Ex 144"},
//    {"name":"Ex145","exNumber":"145","key":"a","practice":"now","label":"Ex 145"},
//    {"name":"Ex146","exNumber":"146","key":"F","practice":"later","label":"Ex 146"},
//    {"name":"Ex147","exNumber":"147","key":"D","practice":"later","label":"Ex 147"},
//    {"name":"Ex148","exNumber":"148","key":"A","practice":"later","label":"Ex 148"},
//    {"name":"Ex149","exNumber":"149","key":"C","practice":"now","label":"Ex 149"},
//    {"name":"Ex150","exNumber":"150","key":"G","practice":"now","label":"Ex 150"},
//    {"name":"Ex151","exNumber":"151","key":"G","practice":"now","label":"Ex 151"},
//    {"name":"Ex152","exNumber":"152","key":"D","practice":"now","label":"Ex 152"},
//    {"name":"Ex153","exNumber":"153","key":"A","practice":"now","label":"Ex 153"},
//    {"name":"Ex154","exNumber":"154","key":"b","practice":"later","label":"Ex 154"},
//    {"name":"Ex155","exNumber":"155","key":"C","practice":"later","label":"Ex 155"},
//    {"name":"Ex156","exNumber":"156","key":"a","practice":"later","label":"Ex 156"},
//    {"name":"Ex157","exNumber":"157","key":"G","practice":"now","label":"Ex 157"},
//    {"name":"Ex158","exNumber":"158","key":"G","practice":"now","label":"Ex 158"},
//    {"name":"Ex159","exNumber":"159","key":"G","practice":"now","label":"Ex 159"},
//    {"name":"Ex160","exNumber":"160","key":"G","practice":"now","label":"Ex 160"}
// ];


export const auerBook1 = [
   {"name":"Sect_I-1","title":"Whole Notes","Section":"I","exNumber":"1","practice":"finished","label":"Sect I-1"},
   {"name":"Sect_I-2","title":"Whole Notes","Section":"I","exNumber":"2","practice":"finished","label":"Sect I-2"},
   {"name":"Sect_I-3","title":"Whole Notes","Section":"I","exNumber":"3","practice":"finished","label":"Sect I-3"},
   {"name":"Sect_I-4","title":"Whole Notes","Section":"I","exNumber":"4","practice":"now","label":"Sect I-4"},
   {"name":"Sect_I-5","title":"Whole Notes","Section":"I","exNumber":"5","practice":"now","label":"Sect I-5"},
   {"name":"Sect_I-A","title":"Whole Notes","Section":"I","exNumber":"A","practice":"now","label":"Sect I-A"},
   {"name":"Sect_I-B","title":"Whole Notes","Section":"I","exNumber":"B","practice":"now","label":"Sect I-B"},
   {"name":"Sect_II-1","title":"Whole and Half Notes","Section":"II","exNumber":"1","practice":"finished","label":"Sect II-1"},
   {"name":"Sect_II-2","title":"Whole and Half Notes","Section":"II","exNumber":"2","practice":"finished","label":"Sect II-2"},
   {"name":"Sect_II-3","title":"Whole and Half Notes","Section":"II","exNumber":"3","practice":"finished","label":"Sect II-3"},
   {"name":"Sect_II-4","title":"Whole and Half Notes","Section":"II","exNumber":"4","practice":"now","label":"Sect II-4"},
   {"name":"Sect_II-A","title":"Whole and Half Notes","Section":"II","exNumber":"A","practice":"now","label":"Sect II-A"},
   {"name":"Sect_II-B","title":"Whole and Half Notes","Section":"II","exNumber":"B","practice":"now","label":"Sect II-B"},
   {"name":"Sect_III-1","title":"Skipping of One and Two Strings","Section":"III","exNumber":"1","practice":"later","label":"Sect III-1"},
   {"name":"Sect_III-2","title":"Skipping of One and Two Strings","Section":"III","exNumber":"2","practice":"later","label":"Sect III-2"},
   {"name":"Sect_III-A","title":"Skipping of One and Two Strings","Section":"III","exNumber":"A","practice":"later","label":"Sect III-A"},
   {"name":"Sect_III-B","title":"Skipping of One and Two Strings","Section":"III","exNumber":"B","practice":"later","label":"Sect III-B"},
   {"name":"Sect_IV-1","title":"Quarter Notes","Section":"IV","exNumber":"1","practice":"now","label":"Sect IV-1"},
   {"name":"Sect_IV-2","title":"Quarter Notes","Section":"IV","exNumber":"2","practice":"now","label":"Sect IV-2"},
   {"name":"Sect_IV-3","title":"Quarter Notes","Section":"IV","exNumber":"3","practice":"now","label":"Sect IV-3"},
   {"name":"Sect_IV-A","title":"Quarter Notes","Section":"IV","exNumber":"A","practice":"now","label":"Sect IV-A"},
   {"name":"Sect_IV-B","title":"Quarter Notes","Section":"IV","exNumber":"B","practice":"now","label":"Sect IV-B"},

];

export const auerBook2 = [
   {"name":"a1Whole","finger":"first","string":"A","StepInterval":"whole","practice":"now","page":"2","label":"A One Finger  Whole Step"},
   {"name":"a1Half","finger":"first","string":"A","StepInterval":"half","practice":"later","page":"3","label":"A One Finger  Half Step"},
   {"name":"d1Whole","finger":"first","string":"D","StepInterval":"whole","practice":"now","page":"4","label":"D One Finger  Whole Step"},
   {"name":"d1Half","finger":"first","string":"D","StepInterval":"half","practice":"later","page":"5","label":"D One Finger  Half Step"},
   {"name":"g1Whole","finger":"first","string":"G","StepInterval":"whole","practice":"now","page":"6","label":"G One Finger  Whole Step"},
   {"name":"g1Half","finger":"first","string":"G","StepInterval":"half","practice":"later","page":"7","label":"G One Finger  Half Step"},
   {"name":"e1Whole","finger":"first","string":"E","StepInterval":"whole","practice":"now","page":"8","label":"E One Finger  Whole Step"},
   {"name":"e1Half","finger":"first","string":"E","StepInterval":"half","practice":"later","page":"9","label":"E One Finger  Half Step"},
   {"name":"a1Whole","finger":"first, second","string":"A","StepInterval":"whole","practice":"later","page":"12","label":"A Two Fingers  Whole Step"},
   {"name":"a1Half","finger":"first, second","string":"A","StepInterval":"half","practice":"later","page":"13","label":"A Two Fingers  Half Step"},
   {"name":"d1Whole","finger":"first, second","string":"D","StepInterval":"whole","practice":"later","page":"14","label":"D Two Fingers  Whole Step"},
   {"name":"d1Half","finger":"first, second","string":"D","StepInterval":"half","practice":"later","page":"15","label":"D Two Fingers  Half Step"},
   {"name":"g1Whole","finger":"first, second","string":"G","StepInterval":"whole","practice":"later","page":"16","label":"G Two Fingers  Whole Step"},
   {"name":"g1Half","finger":"first, second","string":"G","StepInterval":"half","practice":"later","page":"17","label":"G Two Fingers  Half Step"},
   {"name":"e1Whole","finger":"first, second","string":"E","StepInterval":"whole","practice":"later","page":"18","label":"E Two Fingers  Whole Step"},
   {"name":"e1Half","finger":"first, second","string":"E","StepInterval":"half","practice":"later","page":"19","label":"E Two Fingers  Half Step"},
   {"name":"a3Whole","finger":"first, second, third","string":"A","StepInterval":"whole","practice":"later","page":"22","label":"A Three Fingers  Whole Step"},
   {"name":"a3Half","finger":"first, second, third","string":"A","StepInterval":"half","practice":"later","page":"23","label":"A Three Fingers  Half Step"},
   {"name":"d3Whole","finger":"first, second, third","string":"D","StepInterval":"whole","practice":"later","page":"24","label":"D Three Fingers  Whole Step"},
   {"name":"d3Half","finger":"first, second, third","string":"D","StepInterval":"half","practice":"later","page":"25","label":"D Three Fingers  Half Step"},
   {"name":"g3Whole","finger":"first, second, third","string":"G","StepInterval":"whole","practice":"later","page":"26","label":"G Three Fingers  Whole Step"},
   {"name":"g3Half","finger":"first, second, third","string":"G","StepInterval":"half","practice":"later","page":"27","label":"G Three Fingers  Half Step"},
   {"name":"e3Whole","finger":"first, second, third","string":"E","StepInterval":"whole","practice":"later","page":"28","label":"E Three Fingers  Whole Step"},
   {"name":"e3Half","finger":"first, second, third","string":"E","StepInterval":"half","practice":"later","page":"29","label":"E Three Fingers  Half Step"},
   {"name":"a4Whole","finger":"all","string":"A","StepInterval":"whole","practice":"later","page":"32","label":"A Four Fingers  Whole Step"},
   {"name":"a4Half","finger":"all","string":"A","StepInterval":"half","practice":"later","page":"33","label":"A Four Fingers  Half Step"},
   {"name":"d4Whole","finger":"all","string":"D","StepInterval":"whole","practice":"later","page":"34","label":"D Four Fingers  Whole Step"},
   {"name":"d4Half","finger":"all","string":"D","StepInterval":"half","practice":"later","page":"35","label":"D Four Fingers  Half Step"},
   {"name":"g4Whole","finger":"all","string":"G","StepInterval":"whole","practice":"later","page":"36","label":"G Four Fingers  Whole Step"},
   {"name":"g4Half","finger":"all","string":"G","StepInterval":"half","practice":"later","page":"37","label":"G Four Fingers  Half Step"},
   {"name":"e4Whole","finger":"all","string":"E","StepInterval":"whole","practice":"later","page":"38","label":"E Four Fingers  Whole Step"},
   {"name":"e4Half","finger":"all","string":"E","StepInterval":"half","practice":"later","page":"39","label":"E Four Fingers  Half Step"},
];

export const beatsPerMinute = ["60", "63", "66", "70", "75","80","86","92","100"];

export const rcmScales = [
   {"name":"dMajor_0","key":"D","mode":"major","octives":"1","position":"1","level":"0"},
   {"name":"aMajor_0","key":"A","mode":"major","octives":"1","position":"1","level":"0"},

   {"name":"cMajor_1","key":"C","mode":"major","octives":"1","position":"1","level":"1"},
   {"name":"gMajor_1","key":"G","mode":"major","octives":"2","position":"1","level":"1"},
   {"name":"aMinorH_1","key":"a","mode":"harm","octives":"1","position":"1","level":"1"},
   {"name":"dMinor_1","key":"d","mode":"harm","octives":"1","position":"1","level":"1"},

   {"name":"gMajor_2","key":"G","mode":"major","octives":"2","position":"1","level":"2"},
   {"name":"dMajor_2","key":"D","mode":"major","octives":"1","position":"3","level":"2"},
   {"name":"aMajor_2","key":"A","mode":"major","octives":"2","position":"1","level":"2"},
   {"name":"fMajor_2","key":"F","mode":"major","octives":"1","position":"1","level":"2"},
   {"name":"aMinorH_2","key":"a","mode":"harm","octives":"2","position":"1","level":"2"},
   {"name":"gMinorH_2","key":"g","mode":"harm","octives":"2","position":"1","level":"2"},
   {"name":"aMinorM_2","key":"a","mode":"mel","octives":"1","position":"1","level":"2"},
   {"name":"gMinorM_2","key":"g","mode":"mel","octives":"1","position":"1","level":"2"},

   {"name":"cMajor_3","key":"C","mode":"major","octives":"2","position":"1","level":"3"},
   {"name":"dMajor_3","key":"D","mode":"major","octives":"2","position":"1","level":"3"},
   {"name":"bbajor_3","key":"Bb","mode":"major","octives":"2","position":"1","level":"3"},
   {"name":"fMajor_3","key":"F","mode":"major","octives":"1","position":"2","level":"3"},
   {"name":"fMinorH_3","key":"f","mode":"harm","octives":"1","position":"2","level":"3"},
   {"name":"cMinorH_3","key":"c","mode":"harm","octives":"2","position":"1","level":"3"},
   {"name":"dMinorH_3","key":"d","mode":"harm","octives":"2","position":"1","level":"3"},
   {"name":"fMinorM_3","key":"f","mode":"mel","octives":"1","position":"2","level":"3"},
   {"name":"cMinorM_3","key":"c","mode":"mel","octives":"2","position":"1","level":"3"},
   {"name":"dMinorM_3","key":"d","mode":"mel","octives":"2","position":"1","level":"3"},

   {"name":"eMajor_4","key":"E","mode":"major","octives":"1","position":"4","level":"4"},
   {"name":"bMajor_4","key":"B","mode":"major","octives":"2","position":"1","level":"4"},
   {"name":"abMajor_4","key":"Ab","mode":"major","octives":"2","position":"1","level":"4"},
   {"name":"ebMajor_4","key":"Eb","mode":"major","octives":"2","position":"1","level":"4"},
   {"name":"eMinorH_4","key":"e","mode":"harm","octives":"1","position":"4","level":"4"},
   {"name":"bMinorH_4","key":"b","mode":"harm","octives":"2","position":"1","level":"4"},
   {"name":"ebMinorH_4","key":"eb","mode":"harm","octives":"2","position":"1","level":"4"},
   {"name":"eMinorM_4","key":"e","mode":"mel","octives":"1","position":"4","level":"4"},
   {"name":"bMinorM_4","key":"b","mode":"mel","octives":"2","position":"1","level":"4"},
   {"name":"ebMinorM_4","key":"eb","mode":"mel","octives":"2","position":"1","level":"4"}
];
  
export const rcmRepertoire = [
   {"name":"rcmBook2A1","tempo":"slower","title":"Folk Dance No. 2","Composer":"Milton Barnes","practice":"later","label":"Folk Dance"},
   {"name":"rcmBook2A2","tempo":"slower","title":"A Quiet Convervation","Composer":"Richard Rodney Bennett","practice":"later","label":"A Quiet Convervation"},
   {"name":"rcmBook2A3","tempo":"slower","title":"The Misty Isle","Composer":"Hugh & Katherine College","practice":"later","label":"The Misty Isle"},
   {"name":"rcmBook2A4","tempo":"slower","title":"Melodie","Composer":"Johan Halvorse, arr. Warren Mould","practice":"later","label":"Melodie"},
   {"name":"rcmBook2A5","tempo":"slower","title":"The Blue Boy Suite: Prelude: 'Calling Mr. Eccles'","Composer":"Donald Heins","practice":"now","label":"Blue Boy Suite: Prelude"},
   {"name":"rcmBook2A6","tempo":"slower","title":"The Blue Boy Suite: Aria","Composer":"Donald Heins","practice":"now","label":"Blue Boy Suite: Aria"},
   {"name":"rcmBook2A7","tempo":"slower","title":"The Blue Boy Suite: Bourree","Composer":"Donald Heins","practice":"now","label":"Blue Boy Suite: Bourree"},
   {"name":"rcmBook2A8","tempo":"slower","title":"Cradle Song","Composer":"Jean Erhridge","practice":"later","label":"Cradle Song"},
   {"name":"rcmBook2A9","tempo":"slower","title":"Tall Ships","Composer":"Barbara McDougall, arr. Judith McIvor","practice":"now","label":"Tall Ships"},
   {"name":"rcmBook2A10","tempo":"slower","title":"Melodie antique francaise","Composer":"Pytor Il'yich Tchaikovsky","practice":"later","label":"Melodie antique francaise"},
   {"name":"rcmBook2A11","tempo":"slower","title":"Dreamers, op 80, no 19","Composer":"Dmitri Kabalevsky","practice":"later","label":"Dreamers"},
   {"name":"rcmBook2A12","tempo":"slower","title":"Andantino in G Major, op. 22 no. 4","Composer":"Edward Elgar","practice":"later","label":"Andantino in G Major"},
   {"name":"rcmBook2B1","tempo":"faster","title":"Motorcycles","Composer":"David Duke","practice":"later","label":"Motorcycles"},
   {"name":"rcmBook2B2","tempo":"faster","title":"Five-a-Side","Composer":"Hugh & Katherine College","practice":"later","label":"Five-a-Side"},
   {"name":"rcmBook2B3","tempo":"faster","title":"The Ceilidh","Composer":"Hugh & Katherine College","practice":"later","label":"The Ceilidh"},
   {"name":"rcmBook2B4","tempo":"faster","title":"Fall Fair","Composer":"Christine Donkin","practice":"later","label":"Fall Fair"},
   {"name":"rcmBook2B5","tempo":"faster","title":"The Dancer","Composer":"Christine Donkin","practice":"later","label":"The Dancer"},
   {"name":"rcmBook2B6","tempo":"faster","title":"Minuet and Trio","Composer":"Franz Joseph Haydn","practice":"later","label":"Minuet and Trio"},
   {"name":"rcmBook2B7","tempo":"faster","title":"Hungrois (Hungarian)","Composer":"Robert Pracht","practice":"later","label":"Hungrois"},
   {"name":"rcmBook2B8","tempo":"faster","title":"Hurdy-Gurdy","Composer":"Dmitri Kabalevsky, arr Konstantin Fortunatov","practice":"later","label":"Hurdy-Gurdy"},
   {"name":"rcmBook2B9","tempo":"faster","title":"Tango","Composer":"Neil Mackay","practice":"later","label":"Tango"},
   {"name":"rcmBook2B10","tempo":"faster","title":"Waltz in D Major D 420, no. 1","Composer":"Franz Schubert, arr. Kathleen Wood","practice":"later","label":"Waltz in D Major"},
   {"name":"rcmBook2B11","tempo":"faster","title":"Allegro in C Majopr, op. 22, no. 6","Composer":"Edward Elgar","practice":"later","label":"Allegro in C Majopr"},
   {"name":"rcmBook2B12","tempo":"faster","title":"Skipping and Hopping,  op. 80, no. 8","Composer":"Dmitri Kabalevsky","practice":"later","label":"Skipping and Hopping"},
   {"name":"rcmBook2B13","tempo":"faster","title":"Flash of Light'ning","Composer":"Caroline Lumsden & Ben Arrwood","practice":"later","label":"Flash of Light'ning"},
   {"name":"rcmBook2B14","tempo":"faster","title":"Minuet","Composer":"Jeremiah Clark, arr. Christine Donkin","practice":"later","label":"Minuet"}
];