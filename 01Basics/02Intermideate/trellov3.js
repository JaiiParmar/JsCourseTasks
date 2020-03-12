let myTodos = {
  //Properties...
  day: "Monday",
  meetings: 0,
  meetDone: 0,
  //Methods...
  addMeeting: function(num) {
    this.meetings = this.meetings + num
    },
    summray: function () {
      return `You have  ${this.meetings} meetings today!`
  },
}

// let myTodos2 = {
//   //Properties...
//   day: "Sunday",
//   meeting: 11,
//   meetDone: 1000,
//   //Methods...
//   addMeeting: function() {
//     console.log(this);
//   }
// };

myTodos.addMeeting();
//this keyword.
// myTodos2.addMeeting();

myTodos.addMeeting(3)
console.log(myTodos.summray())

