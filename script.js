//Learnable Frontend Assignment


//Create a Journal that records the events and wolf status
let journal = [];


function addEntry(events, wolf) {
  journal.push({events, wolf});
}
addEntry(["Gym", "running", "beans", "peanut", "butter"], true);
addEntry(["sleep", "anger", "happy", "hugging", "drawing"], false);
addEntry(["cartoon", "Gym", "zen", "jadding", "watching netflix"], false);
addEntry(["yam", "washing cloths", "hiking", "Gym", "building"], true);
addEntry(["coding", "peanut", "jaja", "jogging", "sing a song"], false);

//visualize first journal entry
console.log("Visualizing first journal entry...", '\n' ,journal[0]);


// Next, let's find the correlation between the events and wolf to determine activities that makes wolf turn

/* Using "Gym" as the first entry in the first event, let's check for number of times gym and the variable "wolf" were observed by creating a table for "Gym"
*/         

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.wolf) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log('\n', "Creating table for Gym...", '\n', tableFor("Gym", journal));

/* NOTE: The argument table represents a 2x2 array table that is used to record number of times each event and the variable "wolf" were observed.

function phi calculates the correlation coefficient
*/
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1])/
    Math.sqrt((table[2] + table[3]) *
    (table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
}  


// find every type of event so as to compute correlation
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log('\n',"finding every type of event...", journalEvents(journal));

//Then loop through all the event table to find the correllation in every type of them

console.log('\n', "Computing correlation for all events...", '\n', 
  "NOTE: correlation within the range of -1 to 1 determines the activities that make werewolf turn, where 1 is a perfect correlation, and -1 is an opposite correlation", '\n');
for (let event of journalEvents(journal)) {
  console.log(event + ":", phi(tableFor(event, journal)));
}