let randomNumber = Math.floor(Math.random() * 10) + 1; // 0 hoặc 1
let userGuess;

do {
    userGuess = prompt("Đoán số (Từ 1 đến 10):");
    userGuess = Number(userGuess);
} while (userGuess !== randomNumber);

alert("Bạn đã đoán đúng số " + randomNumber + "!");