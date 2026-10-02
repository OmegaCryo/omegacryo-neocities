//Digital Clock
function currentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}
//Get the current date using toLocalDateString Methond
function currentDay() {
  const day = new Date();
  const format = { year: "numeric", month: "long", day: "numeric" };
  const dayString = day.toLocaleDateString(undefined, format);

  document.getElementById("date").textContent = dayString;
}
currentDay();
currentTime();
setInterval(currentTime, 1000);
