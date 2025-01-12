//Home Score calculation
const hbtn1 = document.querySelector(".hbtn1");

const hbtn2 = document.querySelector(".hbtn2");

const hbtn3 = document.querySelector(".hbtn3");

const homeScore = document.querySelector(".h-score");

const result = document.querySelector(".mess");

const endGameBtn = document.querySelector(".btns");

const newGameBtn = document.querySelector(".btn")

const homeBg = document.querySelector(".home-bg")

const guestBg = document.querySelector(".guest-bg")

hbtn1.addEventListener("click", () => {
  homeScore.innerHTML = Number(homeScore.innerHTML) + 1
});

hbtn2.addEventListener("click", () => {
  homeScore.innerHTML = Number(homeScore.innerHTML) + 2
});

hbtn3.addEventListener("click", () => {
  homeScore.innerHTML = Number(homeScore.innerHTML) + 3;
});

// Guest Score calculation

const gbtn1 = document.querySelector(".gbtn1");

const gbtn2 = document.querySelector(".gbtn2");

const gbtn3 = document.querySelector(".gbtn3");

const guestScore = document.querySelector(".g-score");

gbtn1.addEventListener("click", () => {
  guestScore.innerHTML = Number(guestScore.innerHTML) + 1
});

gbtn2.addEventListener("click", () => {
  guestScore.innerHTML = Number(guestScore.innerHTML) + 2
});

gbtn3.addEventListener("click", () => {
  guestScore.innerHTML = Number(guestScore.innerHTML) + 3;
});

endGameBtn.addEventListener('click', () => {
  if (Number(homeScore.innerHTML) === Number(guestScore.innerHTML)) {

    result.textContent = "Draw Game"

    homeBg.style.background = "blueviolet";

    guestBg.style.background = "blueviolet"


  }

  else if (Number(homeScore.innerHTML) > Number(guestScore.innerHTML)) {
    result.textContent = "Home Team wins"
    homeBg.style.background = "green";
  }

  else {
    result.textContent = "Guest Team wins"
    guestBg.style.background = "green"
  }
})

newGameBtn.addEventListener('click', ()=>{
  homeScore.innerHTML = 0
  guestScore.innerHTML = 0
  homeBg.style.background = "#1b244a";
  guestBg.style.background = "#1b244a"

})



