const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);


function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countup() {
  counters.forEach((counter) => {
  counter.innertext = '0';

  const updatecounter = () =>{
    /* Get count target*/
  const target= +counter.getAttribute('data-target');
   /* Get current counter value*/
  const c = +counter.innertext;
  /* create an increment*/
  const increment = target / 100;
  // If counter is less than target, add increment
  if (c < target) {
    // Round up and set counter value
    counter.innertext = `${Math.ceil(c + increment)}`;

    setTimeout(updateCounter, 75);
  } else {
    counter.innertext = target;
  }
  };

  updatecounter();
  });
}





