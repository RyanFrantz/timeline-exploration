// Prefix a number with 0 if it's less than 10.
function prefixZero(num) {
    return num < 10 ? `0${num}` : num;
}

// Return the time in HH:MM format.
// If a Date argument is not present, finds the current date.
function getTime(date = new Date()) {
  let hour = prefixZero(date.getHours());
  let min  = prefixZero(date.getMinutes());
  return `${hour}:${min}`;
}

function addMinutes(numMinutes, date = new Date()) {
  // setMinutes returns ms since epoch; convert back to Date object.
  return new Date(date.setMinutes(date.getMinutes() + numMinutes));
}

function createAgenda() {
  let body = document.querySelector("body");
  let agenda = document.createElement("div");
  agenda.id = "agenda"
  /* TODO: Consider adding a custom data-* attribute here for use when storing
   * the agenda as a whole.
   */
  body.appendChild(agenda);
  const now = new Date();  
  // Generate a 30-minute agenda, for now.
  for (let i = 0; i <= 30; i++) {
    let timeslot = document.createElement("span");
    timeslot.className = "time-tick";
    // NOTE: We need to pass a copy of now, else now's value is updated,
    // by reference, creating an almost Fibonacci-like increase in time values!
    let time = getTime(addMinutes(i, new Date(now)));
    timeslot.setAttribute("data-time", time);
    agenda.appendChild(timeslot);
  }
}
