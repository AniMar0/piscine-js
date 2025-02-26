let addWeek = (date) => {
    const newWeek = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
        7: "secondMonday",
        8: "secondTuesday",
        9: "secondWednesday",
        10: "secondThursday",
        11: "secondFriday",
        12: "secondSaturday",
        13: "secondSunday",
    };

    let customTime = new Date('0001-01-01')
    let DMS = 24 * 60 * 60 * 1000
    let DPMS = (date.getTime() - customTime.getTime())

    console.log(newWeek[DPMS / DMS])
}

function timeTravel(date) {
    return new Date(date.date.setHours(date.hour, date.minute, date.second));
}

addWeek(new Date('0001-01-01')) // Output: Monday
addWeek(new Date('0001-01-02')) // Output: Tuesday
addWeek(new Date('0001-01-07')) // Output: Sunday
addWeek(new Date('0001-01-08')) // Output: secondMonday
addWeek(new Date('0001-01-09')) // Output: secondTuesday

timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
}).toString()