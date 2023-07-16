const saveBtn = document.getElementById('save-btn');
const taskNameInput = document.getElementById('task-name-input');
const reminderButton = document.getElementById('reminder-btn');
const reminderModal = document.getElementById('reminder-modal');
const closeButton = document.getElementsByClassName('close')[0];
const timeButton = document.getElementsByClassName('btn-time')[0];
const setReminderButton = document.getElementById('set-reminder-btn');
const selectedTimeInput = document.getElementById('selected-time');
const timeInput = document.getElementById('time-input')
const hourInput = document.getElementById('hour-input');
const minuteInput = document.getElementById('minute-input');
let timeHour = '00'
let timeMinute = '00'

reminderButton.addEventListener('click', function () {
  reminderModal.style.display = 'block';
});

// setReminderButton.addEventListener('click', function() {
//   const selectedTime = selectedTimeInput.value;
//   if (selectedTime !== '') {
//     localStorage.setItem('reminder', selectedTime); // Simpan waktu reminder ke local storage
//     console.log('Reminder set for', selectedTime);
//   } else {
//     alert('Please select a time for the reminder');
//   }
//   reminderModal.style.display = 'none';
// });

window.addEventListener('click', function (event) {
  if (event.target === reminderModal) {
    reminderModal.style.display = 'none';
  }
});

saveBtn.addEventListener('click', function () {
  const taskName = taskNameInput.value;
  const reminder = localStorage.getItem('reminder');

  // Simpan taskName dan reminder ke local storage
  localStorage.setItem('task', JSON.stringify({
    name: taskName,
    reminder: reminder
  }));

  console.log('Task Name:', taskName);
  console.log('Reminder:', reminder);

  window.location.href = '../page/calender.html'; // Redirect ke halaman calender.html setelah menyimpan task
});

// Fungsi Arrow Left
const arrowLeftButton = document.querySelector('.btn-top button:first-child');

arrowLeftButton.addEventListener('click', function () {
  window.location.href = '../page/calender.html';
});

const repeatButton = document.getElementById('repeat-btn');

repeatButton.addEventListener('click', function () {
  window.location.href = '../page/repeat.html'; // Mengarahkan ke repeat.html
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

hourInput.addEventListener('change', function (e) {
  timeHour = e.target.value
  console.log(timeHour)
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