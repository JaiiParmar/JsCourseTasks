//Day
//meetings

let myTodos = {
    day: 'Monday',
    meeting: 0,
    meetDone:0,
}

let addMeeting = function (todo, meet = 0) {
    todo.meeting = todo.meeting + meet
}

let meetDone = function (todo, meet = 0) {
    todo.meetDone = todo.meetDone + meet // logical Flow control problem
}

let resetDay = function (todo) {
    todo.meeting = 0
    todo.meetDone = 0
}

let getSummaryOfDay = function (todo) {
    let meetLeft = todo.meeting - todo.meetDone
    return `You have ${meetLeft} meetings today`
}

addMeeting(myTodos, 4)

addMeeting(myTodos, 2)

meetDone(myTodos, 5)

console.log(myTodos)

console.log(getSummaryOfDay(myTodos))


