const hamburgerMenu = document.querySelector(".hamburger-menu");
const dropdownContent = document.querySelector(".dropdown-content");
const btnInfoAllTask = document.querySelector(".btn-all");
const btnInfoCalender = document.querySelector(".btn-calender");
const calender = document.querySelector(".calendar");
let isActive = false;
let infoAllTaskActive = false;

hamburgerMenu.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

const handleDropdown = () => {
  isActive = !isActive;
  if (isActive) {
    const drop = document.getElementsByClassName("dropTopCont");
    drop[0].style.display = "flex";
  } else {
    const drop1 = document.getElementsByClassName("dropTopCont");
    drop1[0].style.display = "none";
  }
};

btnInfoAllTask.addEventListener("click", toggleActive);
btnInfoCalender.addEventListener("click", toggleActive);

function toggleActive(event) {
  const clickedButton = event.target;

  btnInfoAllTask.classList.remove("active");
  btnInfoCalender.classList.remove("active");
  clickedButton.classList.add("active");

  const infoAllTaskActive = clickedButton.classList.contains("btn-all");
  calender.style.display = infoAllTaskActive ? "none" : "block";
  setTaskListContent(infoAllTaskActive);
}

function setTaskListContent(infoAllTaskActive) {
  const taskList = document.getElementById("task-list");
  const eventList = document.getElementById("event-list");
  const getTaskData = localStorage.getItem("task");
  const getEventData = localStorage.getItem("event");
  const events = JSON.parse(getEventData);
  const task = JSON.parse(getTaskData);

  let htmlContentTask = "";
  let htmlContentEvent = "";
  let htmlContEvnt = ''

  events?.forEach((event) => {
    htmlContentEvent += `
      <div class="card-event">
        <span style="background-color: ${event.color ? event?.color : "#85E2FF" }"></span>
        <div  class="box-info-event">
          <img class="icon-flag-event" src="../assets/flag.png" alt="" />
          <div class="label-event">
            <h3>${event?.name}</h3>
          </div>
          <button>Done</button>
        </div>
      </div>`;
      htmlContEvnt += `<div class="card-event">
      <span style="background-color: ${event.color ? event?.color : "#85E2FF" }"></span>
      <div  class="box-info-event1">
        <img class="icon-flag-event" src="../assets/flag.png" alt="" />
        <div class="label-event">
          <h3>${event?.name}</h3>
        </div>
        <button>Done</button>
      </div>
    </div>`;
  });

  for (let i = 0; i < 8; i++) {
    htmlContentTask += `
      <div class="card-task">
        <span></span>
        <div class="box-info-task">
          <div class="label-task">
            <input type="checkbox" id="myCheckbox">
            <p class="task-name">${task?.name}</p>
          </div>
          <div class="subtask">
            <div class="label-task">
              <input type="checkbox" id="myCheckbox">
              <p class="subtask-name">Subtask</p>
            </div>
            <div class="label-task">
              <input type="checkbox" id="myCheckbox">
              <p class="subtask-name">Subtask</p>
            </div>
          </div>
        </div>
      </div>`;
  }

  taskList.innerHTML = `
    ${
      infoAllTaskActive && getEventData
        ? `
      <p class="list-name">ON PROGRESS</p>
      <div class="container-task-list">
        ${htmlContEvnt}
        ${
          getTaskData
            ? htmlContentTask
            : `<div class="no-task" id="no-task">
            <p>No task for <br />today</p>
          </div>`
        }
      </div>`
        : getTaskData
        ? getEventData
          ? `
        ${htmlContentEvent}
        <div class="card-task">
          <span></span>
          <div class="box-info-task">
            <div class="label-task">
              <input type="checkbox" id="myCheckbox">
              <p class="task-name">${task?.name}</p>
            </div>
            <div class="subtask">
              <div class="label-task">
                <input type="checkbox" id="myCheckbox">
                <p class="subtask-name">Subtask</p>
              </div>
              <div class="label-task">
                <input type="checkbox" id="myCheckbox">
                <p class="subtask-name">Subtask</p>
              </div>
            </div>
          </div>
        </div>
        `
          : `
          <div class="card-task">
            <span></span>
            <div class="box-info-task">
              <div class="label-task">
                <input type="checkbox" id="myCheckbox">
                <p class="task-name">${task?.name}</p>
              </div>
              <div class="subtask">
                <div class="label-task">
                  <input type="checkbox" id="myCheckbox">
                  <p class="subtask-name">Subtask</p>
                </div>
                <div class="label-task">
                  <input type="checkbox" id="myCheckbox">
                  <p class="subtask-name">Subtask</p>
                </div>
              </div>
            </div>
          </div>`
        : getEventData
        ? `
        ${htmlContentEvent}
        <div class="no-task" id="no-task">
          <p>No task for <br />today</p>
        </div>
        `
        : `
            <div class="no-task" id="no-task">
              <p>No task for <br />today</p>
            </div>
          `
    }`;
}

const monthYearElement = document.getElementById("month-year");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const daysContainer = document.querySelector(".days");

let currentDate = new Date();

// Function to generate calendar for the given month and year
function generateCalendar(month, year) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Set month and year in the calendar header
  monthYearElement.textContent = monthNames[month] + " " + year;

  // Clear the existing days in the calendar
  daysContainer.innerHTML = "";

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Calculate the number of days in the previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  let dayIndex = firstDay.getDay();

  // Generate the days for the previous month
  for (let i = dayIndex; i > 0; i--) {
    const dayElement = document.createElement("div");
    dayElement.textContent = prevMonthLastDay - i + 1;
    dayElement.classList.add("day", "prev-month-day");
    daysContainer.appendChild(dayElement);
  }

  // Generate the days for the current month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = i;
    dayElement.classList.add("day");

    if (
      currentDate.getDate() === i &&
      currentDate.getMonth() === month &&
      currentDate.getFullYear() === year
    ) {
      dayElement.classList.add("current-day");
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
prevButton.addEventListener("click", prevMonth);
nextButton.addEventListener("click", nextMonth);

// BTN ADD

const btnAdd = document.querySelector(".btn-add");
const popupContainer = document.querySelector(".popup-container");
const btnTask = document.querySelector(".btn-task");
const btnEvent = document.querySelector(".btn-event");

btnAdd.addEventListener("click", function () {
  const computedStyle = getComputedStyle(popupContainer);
  if (computedStyle.display === "flex") {
    popupContainer.style.display = "none";
  } else {
    popupContainer.style.display = "flex";
  }
});

btnTask.addEventListener("click", function () {
  window.location.href = "../page/task.html"; // Ganti "task-page.html" dengan URL halaman tugas Anda
  popupContainer.style.display = "none";
});

btnEvent.addEventListener("click", function () {
  window.location.href = "../page/event.html"; // Ganti "event-page.html" dengan URL halaman acara Anda
  popupContainer.style.display = "none";
});

popupContainer.addEventListener("click", function (event) {
  if (event.target === popupContainer) {
    popupContainer.style.display = "none";
  }
});

// Manggil Task
document.addEventListener("DOMContentLoaded", function () {
  setTaskListContent();
});
