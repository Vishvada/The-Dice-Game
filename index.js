var n = Math.random();
n = n * 6 + 1;
n = Math.floor(n);
var s = Math.random();
s = s * 6 + 1;
s = Math.floor(s);
document
	.querySelector(".one img")
	.setAttribute("src", "./images/" + "dice" + n + ".jpg");
document
	.querySelector(".two img")
	.setAttribute("src", "./images/" + "dice" + s + ".jpg");

if (n > s) {
	document.querySelector("h1").textContent = "🚩 Player 1 Wins";
} else if (n === s) {
	document.querySelector("h1").textContent = "It's a Draw !";
} else {
	document.querySelector("h1").textContent = "Player 2 Wins 🚩";
}
