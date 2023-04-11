const sliderBtnEls = document.querySelectorAll(".slider-navigation .bx");
const slideEls = document.querySelectorAll(".video-slider");
const contentEls = document.querySelectorAll(".content");

const menuEl = document.getElementById("menu-icon");
const navMenuEl = document.querySelector(".navigation");
menuEl.addEventListener("click", ()=>{
  menuEl.classList.toggle("bx-x");
  navMenuEl.classList.toggle("open");
}); 

let sliderNav = function(x) {
  sliderBtnEls.forEach((btnEl)=> {
    btnEl.classList.remove("active");
  });

  slideEls.forEach((slide) => {
    slide.classList.remove("active");
  });

  contentEls.forEach((content) => {
    content.classList.remove("active");
  });

  sliderBtnEls[x].classList.add("active");
  slideEls[x].classList.add("active");
  contentEls[x].classList.add("active");
};

sliderBtnEls.forEach((btnEl, index)=> {
  btnEl.addEventListener("click",() => {
    sliderNav(index);
  });
});