let date = moment().format("dddd MMMM Do");

$("#currentDay").text(date);

console.log(date);

let currentTime = moment().format("h  a");

console.log(currentTime);

let hour = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

class timeBlock {
  constructor(currentTime, hour) {
    this.hour = hour;
    if(currentTime === hour) {
        
    }
  }
}
for (let i = 0; i < hour.length; i++) {
    const element = hour[i];
    let tB = new timeBlock(currentTime, hour[i])
    console.log(tB);
}

