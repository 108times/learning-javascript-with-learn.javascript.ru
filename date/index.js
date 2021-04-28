`use strict`;

console.log(new Date(2012,1,20,3,12 ))

function getWeekDay(date) {
    const shorts = ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"]
    return shorts[date.getDay()]
}
function getLocalDay(date) {

    let day = date.getDay()
    if (day == 0) day = 7

    return day
}

function getDateAgo(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days).getDate()
}
function getDateAgo(date, days) {
    let dateCopy = new Date(date)
    dateCopy.setDate(date.getDate() - days)
    return dateCopy.getDate()
}

let date = new Date(2012,0,4)
console.log(date)
console.log(getWeekDay(date))
console.log(getLocalDay(date))

console.log(getDateAgo(new Date(2021,0,12), 12))

const obj = {
    prop: [1,2,3,4,5],
    date: new Date(0),
    name: String(Object)
}

const {prop: [itm1, itm2], date: objDate, name, pro = "Pro"} = obj;

function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate()
}
console.log(getLastDayOfMonth(2021,0))
console.log(getLastDayOfMonth(2012, 1))

function getSecondsToday1() {
    const date = new Date()
    return date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds()
}

function getSecondsToday() {
    const today = new Date()
    const difference = new Date()
    difference.setHours(0,0,0)
    return (today.getTime() - difference.getTime()) / 1000
}

console.log(getSecondsToday1())
console.log(getSecondsToday1())


function getSecondsToTomorrow() {
    const date = Date.now()
    const tomorrow = new Date(date)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0,0,0)
    return (tomorrow - date)/1000
}

console.log(getSecondsToTomorrow(new Date()))

function formatDate(date) {
    const diff = Date.now() - date
    const diffSeconds = Math.floor(diff / 1000)
    const diffMinutes = Math.floor(diff / 60000)

    if (diff < 1000) return "прямо сейчас"
    if (diffSeconds < 60) return `${diffSeconds} секунд назад`
    if (diffMinutes < 60) return `${diffMinutes} минут назад`

    const dayRaw = date.getDate()
    const monthRaw = date.getMonth()
    const hoursRaw = date.getHours()
    const minutesRaw = date.getMinutes()
    const yearRaw = date.getFullYear()

    const day = dayRaw < 10 ? '0' + dayRaw : dayRaw
    const month = monthRaw < 10 ? '0' + monthRaw : monthRaw
    const year = yearRaw.toString().slice(-2)
    const hours = hoursRaw < 10 ? '0' + hoursRaw : hoursRaw
    const minutes = minutesRaw < 10 ? '0' + minutesRaw : minutesRaw

    return `${day}.${month}.${year}, ${hours}:${minutes}`
}
console.log(formatDate(new Date() - 1))
console.log(formatDate(new Date(new Date - 30 * 1000)))
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)))
console.log(formatDate(new Date(new Date - 86400 * 1000)))
