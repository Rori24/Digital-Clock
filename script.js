const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

// a function to get the data from our computer
function updateClock(){
    // get the time
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    // setting the AM & PM method
    let ampm = "AM"
    if(h > 12){
        h = h - 12
        ampm = "PM"
    }

    // adding a zero to the digital number
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    // calling the method ever second
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

// calling the function
updateClock()