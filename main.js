const year = new Date().getFullYear()
const nextYear = parseInt(year) + 1
const newYear = "1 Jan " + nextYear

const daysOutput = document.getElementById('days')
const hoursOutput = document.getElementById('hours')
const minsOutput = document.getElementById('minutes') 
const secsOutput = document.getElementById('seconds')
const search = document.getElementById('search')
let userDate 

function countDown () {
    const newYearDate = new Date(newYear)
    const currentDate = new Date()

    const timeLeft = (newYearDate - currentDate) / 1000

    const days = Math.floor( timeLeft / 3600 / 24 )
    const hours = Math.floor( timeLeft / 3600) % 24
    const minutes = Math.floor( timeLeft / 60) % 60
    const seconds = Math.floor(timeLeft) % 60

    daysOutput.innerHTML = days
    hoursOutput.innerHTML = hours
    minsOutput.innerHTML = minutes
    secsOutput.innerHTML = seconds
}

function getTime (input) {
    const date = new Date(input)
    const currentDate = new Date()

    const timeLeft = (date - currentDate) / 1000

    const days = Math.floor( timeLeft / 3600 / 24 )
    const hours = Math.floor( timeLeft / 3600) % 24
    const minutes = Math.floor( timeLeft / 60) % 60
    const seconds = Math.floor(timeLeft) % 60

    daysOutput.innerHTML = days
    hoursOutput.innerHTML = hours
    minsOutput.innerHTML = minutes
    secsOutput.innerHTML = seconds
}


window.addEventListener('load', () => {
    countDown();
    count = setInterval(countDown, 1000);
  });


search.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        userDate = search.value
        clearInterval(count)
        getTime(userDate)
        setInterval(getTime(userDate), 1000)
        search.value = ""
    }
})
    