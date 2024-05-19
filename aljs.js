const slider = document.querySelector(".slider");
const slides = Array.from(slider.children);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentSlide = 0;

function showSlide(index) { 
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length - 1) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  clearInterval(intervalId); // сбросить предыдущий интервал
  intervalId = setInterval(nextSlide, 4000);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 2;
  }
  showSlide(currentSlide);
  clearInterval(intervalId); // сбросить предыдущий интервал
  intervalId = setInterval(nextSlide, 4000);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showSlide(currentSlide);
let intervalId = setInterval(nextSlide, 4000); //  Автоматическое переключение слайдов


var kyda = document.getElementById('kyda')
var Otkyda = document.getElementById('Otkyda')
var kogda = document.getElementById('kogda')
var obratno = document.getElementById('obratno')
var skolko = document.getElementById('skolko')
skolko.addEventListener("blur", proverca);
kyda.addEventListener("blur", proverca);
kogda.addEventListener("blur", proverca);
Otkyda.addEventListener("blur", proverca);
obratno.addEventListener("blur", proverca);
var biba = 0
function  proverca(){
  if (kyda.value == "" ||Otkyda.value == "" ||kogda.value == "" ||obratno.value == "" ||skolko.value == "") {
      
    } 
    else {
      var color = document.getElementById('color')
      color.classList.remove('container-44')
      color.classList.add('orenge')
      biba = 1
    }
}
function  zzzzzz(){
  if (biba==1){
      window.location.href='file:///C:/Users/maksi/Downloads/pratica11/frame2.html'
  }
  else{
      color.classList.add('container-44')
      color.classList.remove('orenge')
  } 
    
}

function vhod(){
  window.location.href='frame2.html'
  
}
function reg(){
  window.location.href='log.html'
}
function kartaworldl(){
  window.location.href='https://yandex.ru/maps/10744/ozery/search/%D0%9A%D0%B0%D1%80%D1%82%D0%B0%20%D0%BC%D0%B8%D1%80%D0%B0%20%D1%82%D0%BE%D0%BB%D0%BA%D0%B8%D0%BD%D0%B0/?ll=38.559824%2C54.854087&sll=38.559824%2C54.854087&source=serp_navig&z=14'
}
function zzzzzz(){
  window.location.href='search.html'
}
function bibibab(){
  window.location.href='frame4.html'
}
function sosat(){
  window.location.href='frame1.html'
}