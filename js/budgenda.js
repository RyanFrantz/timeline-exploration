// Prefix a number with 0 if it's less than 10.
function prefixZero(num) {
    return num < 10 ? `0${num}` : num;
}

/*
 *  Given a date, return milliseconds since the epoch.
 * Sat Jul 17 2021 16:57:34 GMT-0400 (Eastern Daylight Time)
 * -to-
 *  1626555454000
 */
function epoch(date) {
  return Date.parse(date);
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
  const now = new Date();
  const main = document.querySelector("main");
  const agenda = document.createElement("div");
  agenda.id = "agenda"

  const meetingTitle = document.createElement("input");
  meetingTitle.id = "meeting-title";
  meetingTitle.placeholder = "Meeting Title";
  main.appendChild(meetingTitle);

  /* TODO: Consider adding a custom data-* attribute here for use when storing
   * the agenda as a whole.
   */
  main.appendChild(agenda);

  // Generate a 30-minute agenda, for now.
  for (let i = 0; i <= 30; i++) {
    const timeslot = document.createElement("span");
    timeslot.className = "time-tick";
    timeslot.addEventListener("click", createAgenda);
    // NOTE: We need to pass a copy of now, else now's value is updated,
    // by reference, creating an almost Fibonacci-like increase in time values!
    const timeslotDatetime = addMinutes(i, new Date(now));
    timeslot.setAttribute("data-time", getTime(timeslotDatetime));
    timeslot.id = `timeslot_${epoch(timeslotDatetime)}`;
    agenda.appendChild(timeslot);
  }
}
