// Get the date
let date = moment().format("dddd MMMM Do");
$("#currentDay").text(date);
console.log(`Current date :: ${date}`);
// Initilize the now checker
let isNow = false;
let currentTime = moment().format("h  a");
console.log(`Current time :: ${currentTime}`);
let hour = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
// TODO REPAIR TIME COMPARISON!!
// May need aquire 24 hr time or rescale
class timeBlock {
  constructor(currentTime, hour) {
    this.hour = hour;
    if (currentTime == hour) {
      isNow = true;
    }
    this.isNow = isNow;
  }
}
// Draw a signle time block
function blockDrawer(time) {
  $(`.time-block`).append(
    $("<div/>", { class: "row" })
      .append(
        $("<div/>", { class: "col-1 hour" }).append(
          $("<span/>", { text: `${time}` })
        )
      )
      .append(
        $('<input class="textarea col-10 textarea description"/>', { class: "col-10 textarea description" })
      )
      .append($("<button/>", { class: "col-1 saveBtn" }))
  );
  console.log(`Drawer success!`);
  $(`#textarea`).addClass("col-10 textarea description");
}
// Draw time block per hour
// TODO Edge cases around hour rollover
for (let i = 0; i < hour.length; i++) {
  let thisTime = hour[i];
  const tB = new timeBlock(currentTime, hour[i]);
  console.log(tB);
  blockDrawer(thisTime);
  console.log(`This block is ${hour[i]}`);
  if (tB.isNow) {
      //Present
    $(`.textarea`).addClass("present");
    console.log(`This block is now`);
  } else if (parseInt(currentTime) > parseInt(hour[i])) {
      //Past
    $(`.textarea`).addClass("past");
    console.log(`This block is in the past`);
  } else {
      //Future
    $(`.textarea`).addClass("future");
    console.log(`This block is in the future`);
  }
}
