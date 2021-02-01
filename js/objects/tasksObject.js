
const tasks = {

//import { inportData  } from './interfaceJs/getData.js';
  "daily" :[ 
            {"title":"Daily Tasks", "tasks": ["Make Bed", "Brush Teeth", "Devotions", "Bible Study", "Music Practice"]},
           ],
  "day0": [   // Sunday tasks
            {"title":"Spare Bedroom", "tasks":["Tidy","Dust","Sweep"]},
            {"title":"Upper Hall",    "tasks":["Tidy","Dust","Sweep"]},
            {"title":"Linen Closet",  "tasks":["Tidy","Dust","Sweep","Organize"]}
          ],
  "day1": [  // Monday tasks
            {"title":"Main Bedroom",  "tasks":["Tidy","Dust","Sweep","Organize"]},
            {"title":"Office",        "tasks":["Tidy","Dust","Sweep","Organize"]},
            {"title":"Guest Bedroom", "tasks":["Tidy","Dust","Sweep"]}
          ],
  "day2": [  // Tuesday tasks
            {"title":"Upper Stairs", "tasks":["Dust","Sweep"]},
            {"title":"Bath Room",    "tasks":["Tidy","Dust","Sweep","Clean Tub","Clean Sink", "Clean WC"]},
            {"title":"Front Hall",   "tasks":["Tidy","Dust","Sweep"]}
          ],
  "day3": [  // Wednesday tasks
            {"title":"Front Hall Closet", "tasks":["Tidy","Dust","Sweep","Organize"]},
            {"title":"Living Room",      "tasks":["Tidy","Dust","Sweep"]},
            {"title":"Dining Room",       "tasks":["Tidy","Dust","Sweep"]}
          ],
  "day4": [ // Thursday task
            {"title":"Kitchen",      "tasks":["Tidy","Dust","Sweep","Clean Stove","Clean Fridge","Clean Dishwasher"]},
            {"title":"Power Room",   "tasks":["Tidy","Dust","Sweep","Clean Sink", "Clean WC"]},
            {"title":"Lower Stairs", "tasks":["Dust"]}
          ],
  "day5": [  // Friday tasks
            {"title":"Rec Room", "tasks":["Tidy","Dust","Sweep","Organize"]}
          ], 
            // Saturday tasks             
  "week1":[  
            {"title" : "Vacuum",     "tasks" : ["Main Bedroom","Office","Front Hall","Front Hall Closet"]},
            {"title" : "Wash Floor", "tasks" : ["Main Bedroom","Office","Guest Bedroom","Spare Bedroom"]},
            {"title" : "Clean",      "tasks" : ["Upper Cupboards Outside - Kitchen"]} 
          ],        
  "week2":[
            {"title" : "Vacuum",     "tasks" : ["Lower Stairs","Sleeping Area","Sitting area"]},
            {"title" : "Wash Floor", "tasks" : ["Upper Hall","Linnen Closet","Upper Stairs","Bath Room"]},
            {"title" : "Clean",      "tasks" : ["Upper Cupboards Inside - Kitchen"]} 
          ],
  "week3":[
            {"title" : "Vacuum",     "tasks" : ["Music Area","Library"]},
            {"title" : "Sweep",      "tasks" : ["Utility Room"]},
            {"title" : "Wash Floor", "tasks" : ["Front Hall","Front Hall Closet","Kitchen","Power Room"]},
            {"title" : "Clean",      "tasks" : ["Lower Cupboards Outside - Kitchen"]} 
          ],
  "week4":[
            {"title" : "Sweep", "tasks" : ["Garage Main Area", "Garage Work Bench"]},
            {"title" : "Car",   "tasks" : ["tidy","clean","wash","Vacuum"]},
            {"title" : "Clean", "tasks" : ["Lower Cupboards Inside - Kitchen"]} 
          ],
  "week5"  : [
              { "title" : "Wash Walls", "tasks" : [ "Main Bedroom", "Office"]}
             ],
  "week10" : [
              { "title" : "Wash Walls", "tasks" : [ "Guest Bedroom", "Spare Bedroom"]}
             ],
  "week15" : [
              { "title" : "Wash Walls", "tasks" : [ "Living Room", "Linen Closet"]}
             ],
  "week20" : [
              { "title" : "Wash Walls", "tasks" : [ "Upper Stairs", "Bath"]}
             ],
  "week25" : [
              { "title" : "Wash Walls", "tasks" : [ "Front Hall", "Front Hall Closet"]}
             ],
  "week30" : [
              { "title" : "Wash Walls", "tasks" : [ "Upper Hall", "Dining Room"]}
             ],
  "week35" : [
              { "title" : "Wash Walls", "tasks" : [ "Kitchen", "Power Room"]}
             ],
  "week40" : [
              { "title" : "Wash Walls", "tasks" : [ "Lower Stairs", "Sleeping Area"]}
             ],
  "week45" : [
              { "title" : "Wash Walls", "tasks" : [ "Music Area", "Sitting Area"]}
             ],
  "week50" : [
              { "title" : "Wash Walls", "tasks" : [ "Library", "Utility Room"]}
             ]  
}

export { tasks };
