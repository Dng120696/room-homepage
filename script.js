'use strict';
// NAV SECTION
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const menuLinks = document.querySelector('.menu-links')

const toggleMenu = ()=>{
  menuLinks.classList.toggle('show-menu-links')
}
openMenu.addEventListener('click',toggleMenu)
closeMenu.addEventListener('click',toggleMenu)

// SLIDER 
const previousBtn = document.querySelector('.previous-btn')
const nextBtn = document.querySelector('.next-btn')
const sliderBox = document.querySelectorAll('.header--section')

let currSlide = 0;
const maxSlide = sliderBox.length -1;

const goToSlide =(curr)=>{
  sliderBox.forEach((slide,i) =>{
    slide.style.transform = `translateX(${100 * (i - curr)}%)`;
  });
}
goToSlide(0)

const previousSlide = ()=>{
  if(currSlide === 0){
    currSlide = maxSlide;
  }else{
    currSlide--;
  }
  goToSlide(currSlide)
}
const nextSlide = ()=>{
  if(currSlide === maxSlide){
    currSlide = 0;
  }else{
    currSlide++;
  }
  goToSlide(currSlide)
}
previousBtn.addEventListener('click',previousSlide)
nextBtn.addEventListener('click',nextSlide)