var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

css.textContent = "linear-gradient(to right, rgb(255, 0, 0),"
	+ " rgb(255, 255, 0))";

function colorGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorGradient);

color2.addEventListener("input", colorGradient);
