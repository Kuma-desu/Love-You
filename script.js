let currentTrack = 0;
const tracks = [
  "yung kai - blue (official music video).mp3",
  "[MV] SECRET NUMBER(시크릿넘버)  Love, Maybe(사랑인가 봐) (사내맞선 OST Part.5) (Special Clip Ver.).mp3",
  "Pretty Little Baby.mp3",
  "Pandangan Pertama.mp3",
  "Nyoman Paul - Tunggu Apa Lagi (Official Music Video).mp3"
];

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function changeMusic() {
  const music = document.getElementById("bgMusic");
  currentTrack = (currentTrack + 1) % tracks.length;
  music.src = tracks[currentTrack];
  music.play();
}
