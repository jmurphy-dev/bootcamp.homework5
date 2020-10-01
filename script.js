let date = moment().format("dddd MMMM Do");
let isNow = false;

$("#currentDay").text(date);

console.log(date);

let currentTime = moment().format("h  a");

console.log(currentTime);

let hour = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

class timeBlock {
  constructor(currentTime, hour) {
    this.hour = hour;
    if(currentTime === hour) {
        isNow = true;
    }
    this.isNow = isNow
  }
}
for (let i = 0; i < hour.length; i++) {
    const element = hour[i];
    let tB = new timeBlock(currentTime, hour[i])
    console.log(tB);
    blockDrawer();
    if(timeBlock.isNow) {
        $(".row").addClass(".present");
    } else if (Number(currentTime) > Number(hour[i])) {
        $(".row").addClass(".past");
    } else {
        $(".row").addClass(".future");
    }
}


function blockDrawer() {
    $("#row").appendTo("#body");
}