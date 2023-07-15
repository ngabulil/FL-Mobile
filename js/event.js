const saveBtn = document.getElementById('save-btn');
const eventNameInput = document.getElementById('event-name-input');
const reminderButton = document.getElementById('reminder-btn');
const reminderModal = document.getElementById('reminder-modal');
const closeButton = document.getElementsByClassName('close')[0];
const timeButton = document.getElementsByClassName('btn-time')[0];
const setReminderButton = document.getElementById('set-reminder-btn');
const selectedTimeInput = document.getElementById('selected-time');
const timeInput = document.getElementById('time-input')
const hourInput = document.getElementById('hour-input');
const minuteInput = document.getElementById('minute-input');
let colorElm = ''
let timeHour = '00'
let timeMinute = '00'
let timeRemind = ''
let statusEvent = false
const dataEvent = []
console.log(timeHour, timeMinute)

window.addEventListener('DOMContentLoaded', function () {
  var ellipses = document.querySelectorAll('div[class^="ellipse-"]');
  ellipses.forEach(function (ellipse) {
    ellipse.setAttribute('data-original-color', ellipse.style.backgroundColor);
  });
  console.log(ellipses)
});

// window.addEventListener('click', function (event) {
//   if (event.target === reminderModal) {
//     reminderModal.style.display = 'none';
//   }
// });

function sendColor(element) {
  var ellipses = document.querySelectorAll('div[class^="ellipse-"]');
  colorElm = element.style.backgroundColor
  console.log(colorElm)

  // Mengembalikan warna asli ke elemen elipse lainnya
  ellipses.forEach(function (ellipse) {
    if (ellipse !== element) {
      var originalColor = ellipse.getAttribute('data-original-color');
      console.log(originalColor)
      ellipse.style.backgroundColor = originalColor;
    }
  });

  // Atur warna yang dipilih pada elemen yang ditekan
  // element.style.backgroundColor = 'white';

  element.classList.add('clicked');

  ellipses.forEach(function (ellipse) {
    if (ellipse !== element) {
      // ...
      ellipse.classList.remove('clicked');
    }
  });

}

reminderButton.addEventListener('click', function () {
  reminderModal.style.display = 'block';
});

// closeButton.addEventListener('click', function () {
//   reminderModal.style.display = 'none';
// });

// setReminderButton.addEventListener('click', function () {
//   const selectedTime = selectedTimeInput.value;
//   if (selectedTime !== '') {
//     localStorage.setItem('reminder', selectedTime); // Simpan waktu reminder ke local storage
//     console.log('Reminder set for', selectedTime);
//   } else {
//     alert('Please select a time for the reminder');
//   }
//   reminderModal.style.display = 'none';
// });

saveBtn.addEventListener('click', function () {
  const eventName = eventNameInput.value;
  const eventObj = {
    name: eventName,
    reminder: timeRemind,
    color: colorElm,
    status: statusEvent,
  }

  dataEvent.push(eventObj)

  localStorage.setItem('event', JSON.stringify(dataEvent))

  // Simpan eventName dan reminder ke local storage
  // localStorage.setItem('event', JSON.stringify({
  //   name: eventName,
  //   reminder: timeRemind,
  //   color: colorElm,
  //   status: statusEvent,
  // }));

  window.location.href = '../page/calender.html';
});

reminderModal.addEventListener('click', function () {
  reminderModal.style.display = 'none';
});

timeInput.addEventListener('click', function (event) {
  event.stopPropagation(); // Menghentikan penyebaran event ke elemen lain
  reminderModal.style.display = 'block';
});

timeButton.addEventListener('click', function (event) {
  event.stopPropagation()
  timeRemind = `${timeHour} : ${timeMinute}`
  reminderButton.innerHTML = timeRemind
  reminderButton.style.borderRadius = '24px'
  reminderButton.style.fontSize = '14px'
  reminderButton.style.width = '73px'
  reminderModal.style.display = 'none';
})

// function handleScroll(event) {
//   const delta = Math.sign(event.deltaY);
//   const input = event.target;
//   let value = parseInt(input.value);
//   value += delta;

//   const min = parseInt(input.min);
//   const max = parseInt(input.max);

//   if (value < min) {
//     value = max;
//   } else if (value > max) {
//     value = min;
//   }

//   input.value = value.toString().padStart(2, '0');
//   input.dispatchEvent(new Event('input'));
// }

hourInput.addEventListener('change', function (e) {
  timeHour = e.target.value
  if (timeHour == '' || timeHour == '0' || timeHour > 23) {
    timeHour = '00'
    hourInput.value = '00'
  }
  console.log(timeHour)
})

minuteInput.addEventListener('change', function (e) {
  timeMinute = e.target.value
  if (timeMinute == '' || timeMinute == '0' || timeMinute > 59) {
    timeMinute = '00'
    minuteInput.value = '00'
  }
  console.log(timeMinute)
})

// hourInput.addEventListener('wheel', handleScroll, { passive: false });
// minuteInput.addEventListener('wheel', handleScroll, { passive: false });