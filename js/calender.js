const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownContent = document.querySelector('.dropdown-content');
let isActive = false

hamburgerMenu.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});
const handleDropdown = () => {
  isActive = !isActive
  if (isActive) {
    const drop = document.getElementsByClassName('dropTopCont')
    drop[0].style.display = 'flex'
  } else {
    const drop1 = document.getElementsByClassName('dropTopCont')
    drop1[0].style.display = 'none'
  }
}

const monthYearElement = document.getElementById('month-year');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const daysContainer = document.querySelector('.days');

let currentDate = new Date();

// Function to generate calendar for the given month and year
function generateCalendar(month, year) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  // Set month and year in the calendar header
  monthYearElement.textContent = monthNames[month] + ' ' + year;
  
  // Clear the existing days in the calendar
  daysContainer.innerHTML = '';
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  
  // Calculate the number of days in the previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  
  let dayIndex = firstDay.getDay();
  
  // Generate the days for the previous month
  for (let i = dayIndex; i > 0; i--) {
    const dayElement = document.createElement('div');
    dayElement.textContent = prevMonthLastDay - i + 1;
    dayElement.classList.add('day', 'prev-month-day');
    daysContainer.appendChild(dayElement);
  }
  
  // Generate the days for the current month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const dayElement = document.createElement('div');
    dayElement.textContent = i;
    dayElement.classList.add('day');
    
    if (currentDate.getDate() === i && currentDate.getMonth() === month && currentDate.getFullYear() === year) {
      dayElement.classList.add('current-day');
    }
    
    daysContainer.appendChild(dayElement);
  }
}

// Function to update the calendar to the previous month
function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
}

// Function to update the calendar to the next month
function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
}

// Generate calendar for the current month
generateCalendar(currentDate.getMonth(), currentDate.getFullYear());

// Add event listeners to the previous and next buttons
prevButton.addEventListener('click', prevMonth);
nextButton.addEventListener('click', nextMonth);
