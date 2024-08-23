let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

function convertToSeconds(){
    if(hoursInput.value === ""){
        timeInSeconds.textContent = "";
        errorMsg.textContent = "Please enter a valid number of hours.";
    }
    else if(minutesInput.value === ""){
        timeInSeconds.textContent = "";
        errorMsg.textContent = "Please enter a valid number of minutes.";
    }
    else{
        errorMsg.textContent = "";
        let convertedTime = hoursInput.value * 3600 + minutesInput.value * 60;
        timeInSeconds.classList.toggle("time-para");
        timeInSeconds.textContent = convertedTime + "s";
    }
}

convertBtn.addEventListener("click", convertToSeconds);