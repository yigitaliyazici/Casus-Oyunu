const allItems = [
  "Sezen Aksu", "Tarkan", "Barış Manço",
  "Ajda Pekkan", "Kenan Doğulu", "Yıldız Tilbe",
  "Beren Saat", "Kıvanç Tatlıtuğ", "Acun Ilıcalı"
];

let numPlayers;
let spyNumber;
let randomItem;
let currentPlayer = 0;

function startGame() {
    numPlayers = parseInt(document.getElementById("numPlayers").value);
    if (numPlayers < 2) { alert("Oyuncu sayısı en az 2 olmalı!"); return; }

    randomItem = allItems[Math.floor(Math.random() * allItems.length)];
    spyNumber = Math.floor(Math.random() * numPlayers);
    currentPlayer = 0;

    document.getElementById("role").innerText = `Oyuncu ${currentPlayer + 1} rolünü görmek için butona bas!`;
    document.getElementById("nextBtn").style.display = "inline-block";
}

function nextPlayer() {
    if (currentPlayer === spyNumber) {
        alert("Sen CASUS'sun!");
    } else {
        alert(`Masumsun ve ünlü: ${randomItem}`);
    }
    currentPlayer++;
    if (currentPlayer < numPlayers) {
        document.getElementById("role").innerText = `Oyuncu ${currentPlayer + 1} rolünü görmek için butona bas!`;
    } else {
        document.getElementById("role").innerText = "Oyun bitti! Tekrar oynamak için Oyunu Başlat butonuna bas.";
        document.getElementById("nextBtn").style.display = "none";
    }
}
