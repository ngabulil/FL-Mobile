const introSections = document.querySelectorAll('.intro-section');
const circles = document.querySelectorAll('.circle');

let currentSection = 0;

function showNextSection() {
  if (currentSection < introSections.length - 1) {
    introSections[currentSection].style.display = 'none';
    currentSection++;

    const tl = gsap.timeline();
    tl.to(circles, { scale: 1, duration: 0.5, ease: 'back.out(1.2)' });
    tl.to(introSections[currentSection], { display: 'block', duration: 0 });

    if (currentSection % 2 === 0) {
      tl.fromTo(circles, { x: '-100%' }, { x: '0%', duration: 1, ease: 'power2.out' });
    } else {
      tl.fromTo(circles, { x: '100%' }, { x: '0%', duration: 1, ease: 'power2.out' });
    }

    tl.fromTo('.content', { opacity: 0.5, y: '0' }, { opacity: 1, y: '0', duration: 0.5, ease: 'power2.out' });
  } else {
  }
}

const intro1Animation = gsap.timeline({ delay: 0.5 });
intro1Animation.fromTo('.intro1 .top-right', { x: '100%', y: '-10%' }, { x: '-10%', y: '-10%', duration: 1, ease: 'power2.out' });
intro1Animation.fromTo('.intro1 .middle-left', { x: '-12%', y: '40%' }, { x: '-12%', y: '0%', duration: 1, ease: 'power2.out' }, '<');


document.querySelectorAll('.btn-next').forEach((button) => {
  button.addEventListener('click', showNextSection);
});
