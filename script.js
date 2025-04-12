
let is24Hour = false; 
let isDark = true;

const clock = document.getElementById("clock");
const toggleFormatBtn = document.getElementById("toggleFormat");
const toggleThemeBtn = document.getElementById("toggleTheme");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amPm = "";

  if (!is24Hour) {
    amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
  }

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds} ${is24Hour ? "" : amPm}`;
}


toggleFormatBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleFormatBtn.textContent = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
  updateClock(); 
});


toggleThemeBtn.addEventListener("click", () => {
  isDark = !isDark;
  document.body.className = isDark ? "dark" : "light";
});

updateClock();
setInterval(updateClock, 1000);


document.body.className = "dark";
