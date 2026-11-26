const button = document.getElementById('myButton');
const revealDate = new Date('2026-12-07T00:00:00');

if (new Date() >= revealDate) {
    button.style.display = 'flex';
}