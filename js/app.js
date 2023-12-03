const msjalert = document.querySelector(".container_msj_alert");
const containerall = document.querySelector(".container");
const containcard = document.querySelector(".containerMusic__cards");
const pop_ups = document.querySelector(".pop-ups");
btnburger=document.querySelector("#burgerlist_mobile")
let state = false;

document.addEventListener("click", (e) => {
  if (e.target.matches(".alert__btn")) {
    containerall.style.filter = "none";
    msjalert.style.display = "none";
  }
  if (
    e.target.matches(".cards") ||
    e.target.matches(".card-img") ||
    e.target.matches(".card-title")
  ) {
    console.log("me diste click");
  }
});
btnburger.addEventListener("click",()=>{
  if (state) {
    pop_ups.classList.add("showburger");
    pop_ups.classList.remove("hideburger");
    state = false;
  } else {
    pop_ups.classList.add("hideburger");
    pop_ups.classList.remove("showburger");
    state = true;
  }
})
