const envelope = document.getElementById('envelope');
const music = document.getElementById('bg-music');

function openEnvelope() {
  if (!envelope.classList.contains('open')) {
    envelope.classList.add('open');
    music.play();
  }
}

function closeEnvelope(event) {
  event.stopPropagation(); // prevents triggering open again
  envelope.classList.remove('open');
  music.pause();
  music.currentTime = 0;
}

const heartCount = 100;

for (let i = 0; i < heartCount; i++) {
  let heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
  heart.style.opacity = Math.random();
  heart.style.transform = `scale(${Math.random() * 0.5 + 0.5}) rotate(45deg)`;
  heart.style.top = Math.random() * 100 + 'vh';
  document.body.appendChild(heart);
}


