const containerEl = document.querySelector(".imgs-container");
const btnPrev = document.querySelector(".btn-danger");
const btnSucc = document.querySelector(".btn-primary");
const autoPlay = document.querySelector(".btn-success");
const stopPlay = document.querySelector(".btn-dark");
const reversePlay = document.querySelector(".btn-info");
let imgsArray = [
  {
    image: "imgs/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "imgs/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "imgs/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "imgs/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "imgs/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];
let imgEl;
let imgIndex = 0;
createDiv();

function createDiv() {
  for (let i = 0; i <= imgsArray.length - 1; i++) {
    const img = imgsArray[i];
    const mainDiv = document.createElement("div");
    const textDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    mainDiv.classList.add("position-relative");
    textDiv.classList.add("p-absolute");
    imgEl = document.createElement("img");
    imgEl.src = img.image;
    const titleEl = document.createElement("div");
    titleEl.innerHTML = img.title;
    const descEl = document.createElement("div");
    descEl.innerHTML = img.text;
    if (i === 0) {
      mainDiv.classList.add("d-block");
    }

    containerEl.append(mainDiv);
    mainDiv.append(imgDiv);
    imgDiv.append(imgEl);
    mainDiv.append(textDiv);
    textDiv.append(titleEl);
    textDiv.append(descEl);
  }
}

btnSucc.addEventListener("click", function () {
  changeImgs();
});

btnPrev.addEventListener("click", function () {
  reverseImgs();
});

function changeImgs() {
  const oldImgEl = document.querySelector(
    `.imgs-container .position-relative:nth-child(${imgIndex + 1})`
  );
  oldImgEl.classList.remove("d-block");

  imgIndex++;
  if (imgIndex > imgsArray.length - 1) {
    imgIndex = 0;
  }
  const newImg = document.querySelector(
    `.imgs-container .position-relative:nth-child(${imgIndex + 1})`
  );
  newImg.classList.add("d-block");
}

function reverseImgs() {
  const oldImgEl = document.querySelector(
    `.imgs-container .position-relative:nth-child(${imgIndex + 1})`
  );
  oldImgEl.classList.remove("d-block");

  imgIndex--;

  if (imgIndex < 0) {
    imgIndex = imgsArray.length - 1;
  }
  const newImg = document.querySelector(
    `.imgs-container .position-relative:nth-child(${imgIndex + 1})`
  );
  newImg.classList.add("d-block");
}

function interval(a, b) {
  set = setInterval(a, b);
}

function stopInterval(a) {
  clearInterval(a);
}

autoPlay.addEventListener("click", function () {
  interval(changeImgs, 1000);
});

stopPlay.addEventListener("click", function () {
  stopInterval(set);
});

reversePlay.addEventListener("click", function () {
  interval(reverseImgs, 1000);
});
