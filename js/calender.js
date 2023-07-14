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

// calendar
const calendarElement = document.getElementById('calendar');
let currentYear;
let currentMonth;

let selectedDate = new Date().getDate(); // Menyimpan tanggal yang dipilih

// Fungsi untuk menggambar kalender
function drawCalendar(year, month) {
  currentYear = year;
  currentMonth = month;

  // Mendapatkan jumlah hari dalam bulan
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Mendapatkan hari pertama dalam bulan
  const firstDay = new Date(year, month, 1).getDay();

  // Menginisialisasi string untuk menyimpan kode HTML kalender
  let calendarHTML = '';

  // Membuat header kalender
  calendarHTML += `
    <div class="header">
      <button onclick="prevMonth()">&lt;</button>
      <span class="month-year" onclick="showMonthYearPicker()">${new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
      <button onclick="nextMonth()">&gt;</button>
    </div>
  `;

  // Membuat nama-nama hari
  calendarHTML += `
    <div class="days">
      <div class="day">Sun</div>
      <div class="day">Mon</div>
      <div class="day">Tue</div>
      <div class="day">Wed</div>
      <div class="day">Thu</div>
      <div class="day">Fri</div>
      <div class="day">Sat</div>
    </div>
  `;

  // Membuat kotak hari untuk setiap hari dalam bulan
  calendarHTML += '<div class="days">';

  // Menambahkan hari-hari sebelum hari pertama bulan
  for (let i = 0; i < firstDay; i++) {
    calendarHTML += '<div class="day"></div>';
  }

  // Menambahkan hari-hari dalam bulan
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day).toDateString();
    const isSelected = day === selectedDate && year === new Date().getFullYear() && month === new Date().getMonth() ? 'selected' : '';
    const isToday = day === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth() ? 'today' : '';
    calendarHTML += `<div class="day ${isSelected} ${isToday}" onclick="selectDate('${date}', this)">${day}</div>`;
  }

  calendarHTML += '</div>';

  // Menampilkan kalender di elemen
  calendarElement.innerHTML = calendarHTML;
}

// Fungsi untuk menampilkan bulan sebelumnya
function prevMonth() {
  let prevMonth, prevYear;
  if (currentMonth === 0) {
    prevMonth = 11;
    prevYear = currentYear - 1;
  } else {
    prevMonth = currentMonth - 1;
    prevYear = currentYear;
  }

  drawCalendar(prevYear, prevMonth);
}

// Fungsi untuk menampilkan bulan berikutnya
function nextMonth() {
  let nextMonth, nextYear;
  if (currentMonth === 11) {
    nextMonth = 0;
    nextYear = currentYear + 1;
  } else {
    nextMonth = currentMonth + 1;
    nextYear = currentYear;
  }

  drawCalendar(nextYear, nextMonth);
}

// // Fungsi untuk memilih tanggal
// function selectDate(date, element) {
//   // Hapus kelas "selected" dari semua kotak hari
//   const dayElements = calendarElement.getElementsByClassName('day');
//   for (let i = 0; i < dayElements.length; i++) {
//     dayElements[i].classList.remove('selected');
//   }

//   // Tambahkan kelas "selected" pada kotak hari yang dipilih
//   element.classList.add('selected');
//   selectedDate = new Date(date).getDate(); // Update tanggal yang dipilih
// }

// Fungsi untuk menampilkan picker bulan dan tahun
function showMonthYearPicker() {
  const monthYear = prompt('Masukkan bulan dan tahun (contoh: Agustus 2023):');
  if (monthYear) {
    const [month, year] = monthYear.split(' ');
    if (month && year) {
      const parsedMonth = new Date(`${month} 1, ${year}`).getMonth();
      const parsedYear = new Date(`${month} 1, ${year}`).getFullYear();
      selectedDate = null; // Reset tanggal yang dipilih
      drawCalendar(parsedYear, parsedMonth);
    }
  }
}

// Mendapatkan bulan dan tahun saat ini
const currentDate = new Date();
currentYear = currentDate.getFullYear();
currentMonth = currentDate.getMonth();

// Memanggil fungsi untuk menggambar kalender
drawCalendar(currentYear, currentMonth);
