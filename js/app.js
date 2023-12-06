const msjalert = document.querySelector(".container_msj_alert");
const containerall = document.querySelector(".container");
const pop_ups = document.querySelector(".pop-ups");
const btnadd = document.querySelectorAll(".btn-add");
const btnburger = document.querySelector("#burgerlist_mobile");
const list_Music = document.querySelector(".music-music");
const template = document.querySelector(".list-music__music");
// le asigno el atributo hidden a la lista de musica para no mostrarla todavia
const music_list = [];
list_Music.setAttribute("hidden", "true");
pop_ups.setAttribute("hidden", "true");
let state = false;
document.addEventListener("click", (e) => {
  if (e.target.matches(".alert__btn")) {
    containerall.style.filter = "none";
    msjalert.style.display = "none";
  }
});
const addmusic = (e) => {
  if (music_list.length === 7) {
    return console.log("ya esta lleno");
  } else {
    music_list.push(e.target.dataset.title);
  }
  showmusic(e);
};
const showmusic = (e) => {};
btnadd.forEach((item) => {
  item.addEventListener("click", addmusic);
});
