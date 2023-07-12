// Menangkap elemen-elemen yang dibutuhkan
const intro1 = document.querySelector('.intro1');
const intro2 = document.querySelector('.intro2');
const btnNext = document.querySelectorAll('.btn-next');
const circles = document.querySelectorAll('.circle');

// Fungsi untuk mengatur animasi muncul dari luar ke dalam pada lingkaran
function showCircles() {
  gsap.set(circles, { scale: 0, opacity: 0, transformOrigin: 'center' });

  circles.forEach((circle, index) => {
    gsap.to(circle, {
      scale: 1,
      opacity: 1,
      duration: 0.2,
      delay: index * 0.3,
      ease: 'back.out(0.3)',
    });
  });
}

// Fungsi untuk mengubah slide dari intro1 ke intro2
function goToNextSlide() {
  intro1.style.display = 'none';
  intro2.style.display = 'block';
  showCircles();
}

// Menambahkan event listener pada tombol "Next"
btnNext.forEach(btn => {
  btn.addEventListener('click', goToNextSlide);
});
