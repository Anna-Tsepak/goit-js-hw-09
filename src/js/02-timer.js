import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';
 
import Notiflix from 'notiflix';
 
const text = document.querySelector('#datetime-picker');
const timerHtml = document.querySelector('.timer');

const btnStart = document.querySelector('button[data-start]');
const timerSecondsRef = document.querySelector('span[data-seconds]');
const timerMinutesRef  = document.querySelector('span[data-minutes]');
const timerHoursRef  = document.querySelector('span[data-hours]');
const timerDaysRef = document.querySelector('span[data-days]');

btnStart.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
    }
  },
};
flatpickr(text, options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
function onChangeContent({ days, hours, minutes, seconds }) {
        timerDaysRef.textContent = days;
        timerHoursRef.textContent = hours;
        timerMinutesRef.textContent = minutes;
        timerSecondsRef.textContent = seconds;
}
btnStart.addEventListener('click', () => {
  let timer = setInterval(() => {
    let countdown = new Date(text.value) - new Date();
    btnStart.disabled = true;
    if (countdown >= 0) {
      const data = convertMs(countdown);
      onChangeContent(data)
      console.log(onChangeContent)
      //  days.textContent = addLeadingZero(timeObject.days);
      //  hours.textContent = addLeadingZero(timeObject.hours);
      //  minutes.textContent = addLeadingZero(timeObject.minutes);
      //  seconds.textContent = addLeadingZero(timeObject.seconds);
      if (countdown <= 10000) {
        timerHtml.style.color = 'tomato';
      }
    } else {
      Notiflix.Notify.success('Countdown finished');
      timerHtml.style.color = 'black';
      clearInterval(timer);
    }
  }, 1000);
});














