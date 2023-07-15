const saveBtn = document.getElementById('save-btn');
const taskNameInput = document.getElementById('task-name-input');
const reminderButton = document.getElementById('reminder-btn');
const reminderModal = document.getElementById('reminder-modal');
const closeButton = document.getElementsByClassName('close')[0];
const setReminderButton = document.getElementById('set-reminder-btn');
const selectedTimeInput = document.getElementById('selected-time');

reminderButton.addEventListener('click', function() {
  reminderModal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  reminderModal.style.display = 'none';
});

setReminderButton.addEventListener('click', function() {
  const selectedTime = selectedTimeInput.value;
  if (selectedTime !== '') {
    localStorage.setItem('reminder', selectedTime); // Simpan waktu reminder ke local storage
    console.log('Reminder set for', selectedTime);
  } else {
    alert('Please select a time for the reminder');
  }
  reminderModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === reminderModal) {
    reminderModal.style.display = 'none';
  }
});

saveBtn.addEventListener('click', function() {
  const taskName = taskNameInput.value;
  const reminder = localStorage.getItem('reminder');
  
  // Simpan taskName dan reminder ke local storage
  localStorage.setItem('task', JSON.stringify({ name: taskName, reminder: reminder }));
  
  console.log('Task Name:', taskName);
  console.log('Reminder:', reminder);
  
  window.location.href = '../page/calender.html'; // Redirect ke halaman calender.html setelah menyimpan task
});

// Fungsi Arrow Left
const arrowLeftButton = document.querySelector('.btn-top button:first-child');

arrowLeftButton.addEventListener('click', function() {
  window.location.href = '../page/calender.html';
});

const repeatButton = document.getElementById('repeat-btn');

repeatButton.addEventListener('click', function() {
  window.location.href = '../page/repeat.html'; // Mengarahkan ke repeat.html
});

