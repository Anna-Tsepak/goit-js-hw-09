function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnstart = document.querySelector('button[data-start]');
const btnstop = document.querySelector('button[data-stop]');
// const body = document.querySelector('body');
btnstop.disabled = true;


let timerId;

function startActive() {
    btnstart.disabled = true;
    btnstop.disabled = false;
};
function stopActive() {
    btnstop.disabled = true;
    btnstart.disabled = false;
}

btnstart.addEventListener('click', onStart);

function onStart(event) {
   startActive()
    timerId = setInterval(() => {
        const bodyColor = getRandomHexColor();
        document.body.style.background = bodyColor;
    }, 1000);
}

btnstop.addEventListener('click', onStop);

function onStop() {
  stopActive()
  clearInterval(timerId);
}



