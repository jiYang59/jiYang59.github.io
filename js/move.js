function getStyle(a, b) {
	return a.currentStyle ? a.currentStyle[b] : getComputedStyle(a, !1)[b]
}
function move(a, b, c) {
	var d, e, f, g, h;
	c = c || {}, c.time = c.time || 300, c.type = c.type || "ease-out", c.fn = c.fn || null, d = {}, e = {};
	for (f in b) d[f] = parseFloat(getStyle(a, f)), e[f] = b[f] - d[f];
	g = Math.round(c.time / 30), h = 0, clearInterval(a.timer), a.timer = setInterval(function() {
		var f, i, j;
		h++;
		for (f in b) {
			switch (c.type) {
			case "liner":
				i = h / g, j = d[f] + e[f] * i;
				break;
			case "ease-in":
				i = h / g, j = d[f] + e[f] * i * i * i;
				break;
			case "ease-out":
				i = 1 - h / g, j = d[f] + e[f] * (1 - i * i * i)
			}
			"opacity" == f ? (a.style.opacity = j, a.style.filter = "alpha(opacity:" + 100 * j + ")") : a.style[f] = j + "px"
		}
		h == g && (clearInterval(a.timer), c.fn && c.fn())
	}, 30)
}
function getByClass(a, b) {
	var c, d, e, f;
	if (a.getElementsByClassName) return a.getElementsByClassName(b);
	for (c = [], d = a.getElementsByTagName("*"), e = new RegExp("\\b" + b + "\\b"), f = 0; f < d.length; f++) e.test(d[f].className) && c.push(d[f]);
	return c
}
function fillZero(a) {
	return 10 > a ? "0" + a : "" + a
}
function rnd(a, b) {
	return parseInt(a + Math.random() * (b - a))
}
function addEvent(a, b, c) {
	a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
}
function removeEvent(a, b, c) {
	a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
}
function data(a) {
	var c, d, e, f, g, h, i, j, k;
	a.result[0].temperature.split("/").join("~"), c = document.getElementById("weather_td"), d = c.children[0], e = c.children[1], f = document.getElementById("weather_tm"), g = f.children[0], h = f.children[1], i = document.getElementById("weather_fl"), j = i.children[0], k = i.children[1], d.innerHTML = a.result[0].weather, e.innerHTML = a.result[0].temperature.split("/").join("~"), g.innerHTML = a.result[1].weather, h.innerHTML = a.result[1].temperature.split("/").join("~"), j.innerHTML = a.result[2].weather, k.innerHTML = a.result[2].temperature.split("/").join("~")
}
function ready(a) {
	document.addEventListener ? document.addEventListener("DOMContentLoaded", a, !1) : document.onreadystatechange = function() {
		"complete" == document.readyState && a()
	}
}