const printDate = function() {
    let currentDate = new Date()
    currentDate = currentDate.getDate()
    console.log('The current date is: '+currentDate)
}

const printMonth = function() {
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()
    currentMonth = currentMonth + 1

    console.log('The current months is: ' + currentMonth)
}

const getBatchInfo = function() {
    console.log('Plutonium, W4D1, the topic for today is Nodejs')
}
const date1 = function(){
    let todaydate = new date1()
    todaydate = todaydate.getDate()
    console.log('current date is : '+ todaydate)
}
const month1 = function(){
    let todaydate = new date1()
    let thismonth = todaydate.getMonth()
    thismonth = thismonth +1
    console.log('current moth name is :'+ thismonth)
}

module.exports.getTodaysDate = printDate
module.exports.getCurrentMonth = printMonth
module.exports.printBatchDetails = getBatchInfo