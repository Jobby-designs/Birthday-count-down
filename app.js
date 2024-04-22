const openPopUp = document.getElementById("popUp");
// open modal

// close modal
const closeBtn = document.getElementById("closePopUp");

// function to close popup
closeBtn.addEventListener("click", function () {
  openPopUp.classList.remove("open-popUp");
});

function startCountdown() {
  // Get the target date from the input
  const targetDateInput = document.getElementById("inputOne").value;
  // const targetDate = new Date(targetDateInput).getTime();
  const targetDate = new Date("2024-04-22T21:46:00").getTime();

  // Update the countdown every second
  const countdown = setInterval(function () {
    // Get the current date and time
    const currentDate = new Date().getTime();

    // Calculate the remaining time
    const remainingTime = targetDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the countdown
    const countdownDisplay = document.getElementById("countdown");
    console.log(countdownDisplay);

    // If the countdown is over, stop updating
    if (remainingTime < 0) {
      clearInterval(countdown);

      openPopUp.classList.add("open-popUp");
    } else {
      countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000); // Update every second
}
