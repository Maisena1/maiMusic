const msjalert = document.querySelector(".container_msj_alert");
const btnmsjalert = document.querySelector(".alert__btn");
const containerall = document.querySelector(".container");
const container = document.querySelector(".list-music__music");
const pop_ups = document.querySelector(".pop-ups");
const btnadd = document.querySelectorAll(".btn-add");
const btnburger = document.querySelector("#burgerlist_mobile");
const list_Music = document.querySelector(".music-music");
const template = document.querySelector(".template_music");
// le asigno el atributo hidden a la lista de musica para no mostrarla todavia
let state = false;
const music_list = [];

btnburger.addEventListener("click", (e) => {
  if (state) {
    pop_ups.classList.add("showburger");
    pop_ups.classList.remove("hideburger");
    state = false;
  } else {
    pop_ups.classList.add("hideburger");
    pop_ups.classList.remove("showburger");
    state = true;
  }
});

btnmsjalert.addEventListener("click", (e) => {
  console.log(e);
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
