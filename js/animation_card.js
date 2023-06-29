let isVisible1 = false;
// déclarer isVisible en Variable faux pour donner une base s'applique sur tous les code ci dessous

// div devopable p1
const ul = document.querySelector(".paragraphe1");
// selection dans notre code de la classe paragraphe1 en constante
const div1 = document.querySelector(".reussite_collective");
// selection dans notre code de la classe reussite-collective en constante

div1.addEventListener("click", (e) => {
  isVisible1 = !isVisible1;
  // click sur la div1 créer un évenement visible ou sont contraire
  if (isVisible1) {
    ul.classList.add("paragraphe1bis");
    // si nous cliquons sur la div la valeur css indiqué dans le paragraphe 1bis s'ajoutera
  } else {
    ul.classList.remove("paragraphe1bis");
  }
  // un 2eme click supprimera la valeur du paragraphe1bis et retournera au paragraphe1
});

// div developable paragraphe2
let isVisible2 = false;
const partie2 = document.querySelector(".paragraphe2");

const div2 = document.querySelector(".vivre_ensemble");

div2.addEventListener("click", (e) => {
  isVisible2 = !isVisible2;
  if (isVisible2) {
    partie2.classList.add("paragraphe2bis");
  } else {
    partie2.classList.remove("paragraphe2bis");
  }
});

let isVisible3 = false;
const partie3 = document.querySelector(".paragraphe3");

const div3 = document.querySelector(".Pour_le_fun");

div3.addEventListener("click", (e) => {
  isVisible3 = !isVisible3;
  if (isVisible3) {
    partie3.classList.add("paragraphe3bis");
  } else {
    partie3.classList.remove("paragraphe3bis");
  }
});
