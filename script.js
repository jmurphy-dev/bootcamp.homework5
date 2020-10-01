let date = moment().format("dddd MMMM Do");
let isNow = false;

$("#currentDay").text(date);

console.log(`Current date :: ${date}`);

let currentTime = moment().format("h  a");

console.log(`Current time :: ${currentTime}`);

let hour = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

class timeBlock {
  constructor(currentTime, hour) {
    this.hour = hour;
    if (currentTime == hour) {
      isNow = true;
    }
    this.isNow = isNow;
  }
}
function blockDrawer(time) {
  $(`.time-block`).append(
    $("<div/>", { class: "row" })
      .append(
        $("<div/>", { class: "col-1, hour" }).append($("<span/>", { text: `${time}` }))
      )
      .append($('<input type="text"/>', { class: "col-10,textarea" }))
      .append($("<button/>", { class: "col-1, saveBtn" }))
      
  );

  console.log(`Drawer success!`);
}

for (let i = 0; i < hour.length; i++) {
  let thisTime = hour[i];

  const tB = new timeBlock(currentTime, hour[i]);
  console.log(tB);
  blockDrawer(thisTime);
  console.log(`This block is ${hour[i]}`);
  if (tB.isNow) {
    $(`.row`).addClass(".present");
    console.log(`This block is now`);
  } else if (parseInt(currentTime) > parseInt(hour[i])) {
    $(`.row`).addClass(".past");
    console.log(`This block is in the past`);
  } else {
    $(`.row`).addClass(".future");
    console.log(`This block is in the future`);
  }
}
