ready(function() {
	var x = document.getElementById("logo_in");
	document.getElementById("logo_buffer");
	x.style.height = document.documentElement.clientHeight + "px";
	addEvent(document, "keydown", function(H) {
		122 == (H || event).keyCode && move(x, {
			opacity: 0
		}, {
			time: 2E3,
			fn: function() {
				x.style.display = "none"
			}
		})
	})
});
window.onload = function() {
	function x() {
		var a = new Date,
			b = fillZero(a.getHours()),
			e = fillZero(a.getMinutes()),
			f = fillZero(a.getSeconds()),
			k = a.getMonth() + 1,
			q = a.getDate(),
			a = a.getDay();
		switch (a) {
		case 0:
			a = "\u65e5";
			break;
		case 1:
			a = "\u4e00";
			break;
		case 2:
			a = "\u4e8c";
			break;
		case 3:
			a = "\u4e09";
			break;
		case 4:
			a = "\u56db";
			break;
		case 5:
			a = "\u4e94";
			break;
		case 6:
			a = "\u516d"
		}
		W.innerHTML = b + ":" + e + ":" + f;
		X.innerHTML = k + "\u6708" + q + "\u65e5";
		Y.innerHTML = "\u5468" + a
	}
	function H() {
		var a = document.createElement("script");
		a.src = "http://api.k780.com:88/?app=weather.future&weaid=" + P.value + "&appkey=18549&sign=157314daa35aff793a369a34faa29808&format=json&jsoncallback=data";
		document.head.appendChild(a)
	}
	function Q(a) {
		a.onmousedown = function(b) {
			b = b || event;
			var e = b.clientX - a.offsetLeft,
				f = b.clientY - a.offsetTop,
				k = document.documentElement.clientHeight,
				q = document.documentElement.clientWidth;
			document.onmousemove = function(b) {
				var l = b || event;
				b = l.clientX - e;
				l = l.clientY - f;
				0 > b && (b = 0);
				b > q - a.offsetWidth - 20 && (b = q - a.offsetWidth);
				50 > l && (l = 30);
				l > k - a.offsetHeight - 30 - v.offsetHeight && (l = k - a.offsetHeight - 30 - v.offsetHeight);
				a.style.left = b + "px";
				a.style.top = l + "px"
			};
			addEvent(document, "mousemove", Q);
			document.onmouseup = function() {
				removeEvent(document, "mousemove", Q);
				document.onmousemove = null;
				document.onmouseup = null;
				a.releaseCapture && a.releaseCapture()
			};
			a.setCapture && a.setCapture()
		}
	}
	function qa(a) {
		a.onmousedown = function(b) {
			function e(b) {
				var e, f, z, A, p, r, t, u;
				b = b || event;
				var w = b.clientX,
					x = b.clientY; - 1 != a.className.indexOf("l") && (e = h - (l - w), f = d + (l - w), 0 > e ? e = 0 : e > q - a.parentNode.offsetWidth && (e = q - a.parentNode.offsetWidth), f > q - 2 ? f = q - 2 : 470 > f && (f = 470), a.parentNode.style.left = e + "px", a.parentNode.style.width = f + "px"); - 1 != a.className.indexOf("r") && (z = d + (w - l), z > q - a.parentNode.offsetLeft - 2 ? z = q - a.parentNode.offsetLeft - 2 : 470 > z && (z = 470), a.parentNode.style.width = z + "px"); - 1 != a.className.indexOf("t") && (A = m - (c - x), p = g + (c - x), A < y.offsetHeight ? A = y.offsetHeight : A > k - a.parentNode.offsetHeight - v.offsetHeight && (A = k - a.parentNode.offsetHeight - v.offsetHeight), p > k - y.offsetHeight - v.offsetHeight ? p = k - y.offsetHeight - v.offsetHeight : 400 > p && (p = 400), a.parentNode.style.top = A + "px", a.parentNode.style.height = p + "px"); - 1 != a.className.indexOf("b") && (r = g + (x - c), r > k - v.offsetHeight - a.parentNode.offsetTop ? r = k - v.offsetHeight - a.parentNode.offsetTop : 400 > r && (r = 400), a.parentNode.style.height = r + "px"); - 1 != a.className.indexOf("h") && (t = b.clientX - Z, u = b.clientY - n, 0 > t ? t = 0 : t > q - a.parentNode.offsetWidth && (t = q - a.parentNode.offsetWidth), u < y.offsetHeight ? u = y.offsetHeight : u > k - a.parentNode.offsetHeight - v.offsetHeight && (u = k - a.parentNode.offsetHeight - v.offsetHeight), a.parentNode.style.left = t + "px", a.parentNode.style.top = u + "px")
			}
			var f, k, q, l, c, d, g, h, m, Z, n;
			return this.parentNode.style.zIndex = I++, f = b || event, k = document.documentElement.clientHeight, q = document.documentElement.clientWidth, l = f.clientX, c = f.clientY, d = a.parentNode.offsetWidth, g = a.parentNode.offsetHeight, h = a.parentNode.offsetLeft, m = a.parentNode.offsetTop, Z = f.clientX - a.parentNode.offsetLeft, n = f.clientY - a.parentNode.offsetTop, addEvent(document, "mousemove", e), document.onmouseup = function() {
				removeEvent(document, "mousemove", e);
				document.onmouseover = document.onmouseup = null;
				a.releaseCapture && a.releaseCapture()
			}, a.setCaputure && a.setCapture(), !1
		}
	}
	function J(a, b) {
		function e(a) {
			var b = 0,
				e = 0;
			a.onmousedown = function(d) {
				return d = d || window.event, a.style.zIndex = f++, b = d.clientX - a.offsetLeft, e = d.clientY - a.offsetTop, a.setCapture && a.setCapture(), document.onmousemove = function(c) {
					c = c || window.event;
					a.style.left = c.clientX - b + "px";
					a.style.top = c.clientY - e + "px"
				}, document.onmouseup = function() {
					var b, e;
					a.style.zIndex = 2;
					document.onmousemove = null;
					document.onmouseup = null;
					var f, d = 9999,
						g = -1;
					for (b = 0; b < c.length; b++) {
						f = c[b];
						var l = a.offsetLeft + a.offsetWidth,
							h = a.offsetTop,
							q = a.offsetTop + a.offsetHeight,
							z = f.offsetLeft,
							m = f.offsetTop,
							n = f.offsetTop + f.offsetHeight;
						a.offsetLeft > f.offsetLeft + f.offsetWidth || z > l || h > n || m > q || a == c[b] || (l = c[b], f = a.offsetLeft - l.offsetLeft, l = a.offsetTop - l.offsetTop, f = Math.sqrt(f * f + l * l), d > f && (d = f, g = b))
					}(b = -1 == g ? !1 : c[g]) ? (move(b, {
						left: k[a.attr][1],
						top: k[a.attr][0]
					}), move(a, {
						left: k[b.attr][1],
						top: k[b.attr][0]
					}), e = a.attr, a.attr = b.attr, b.attr = e) : move(a, {
						left: k[a.attr][1],
						top: k[a.attr][0]
					});
					a.releaseCapture && a.releaseCapture()
				}, !1
			}
		}
		var f, k = [],
			c = a.getElementsByTagName("li");
		(function(a) {
			var b;
			if (a) for (a = Math.floor(document.documentElement.clientHeight / aa), b = 0; b < c.length; b++) document.documentElement.clientHeight, move(c[b], {
				top: b % a * r,
				left: r * Math.floor(b / a)
			}), k.push([b % a * r, r * Math.floor(b / a)]);
			else for (a = Math.floor(document.documentElement.clientWidth / 140), b = 0; b < c.length; b++) document.documentElement.clientWidth, move(c[b], {
				top: r * Math.floor(b / a),
				left: b % a * r
			}), k.push([r * Math.floor(b / a), b % a * r])
		})(b);
		f = 2;
		for (a = 0; a < c.length; a++) c[a].attr = a, e(c[a])
	}
	function ba(a, b) {
		var e = null;
		a.onmousemove = b.onmouseover = function() {
			clearTimeout(e);
			b.style.display = "block"
		};
		a.onmouseout = b.onmouseout = function() {
			e = setTimeout(function() {
				b.style.display = "none"
			}, 80)
		}
	}
	function K(a, b) {
		a.onclick = function() {
			"block" == b.style.display ? (b.style.display = "none", b.style.zIndex = 1) : (b.style.display = "block", b.style.zIndex = I++);
			t.style.display = "none"
		}
	}
	function ca(a, b) {
		var e = a.getElementsByTagName("p"),
			f = a.getElementsByTagName("span")[0],
			c = null,
			d = 0;
		clearInterval(c);
		c = setInterval(function() {
			d += 2;
			d >= b && clearInterval(c);
			f.style.bottom = d + 20 + "px";
			e[0].style.bottom = d + "px";
			e[1].style.height = d + "px";
			e[2].style.height = d + "px"
		}, 40)
	}
	function u(a, b) {
		a.ondblclick = function() {
			b.style.display = "block";
			b.style.zIndex = I++;
			var e = b.getElementsByTagName("iframe")[0];
			a != C && (e.src = e.getAttribute("_src"))
		}
	}
	function ra() {
		var a, b = navigator.userAgent,
			e = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"),
			f = !0;
		for (a = 0; a < e.length; a++) if (0 < b.indexOf(e[a])) {
			f = !1;
			break
		}
		return f
	}
	var y, X, Y, W, D, E, m, c, R, L, I, da, S, P, g, d, h, w, aa, r, t, n, p, T, U, M, N, O, ea, B, C, V, F, fa, ga, ha, ia, ja, ka, la, v, ma, na, oa, pa = document.getElementById("logo_in"),
		G = document.getElementById("logo_buffer");
	move(G, {
		width: 10
	}, {
		time: 200
	});
	y = document.getElementById("head");
	X = document.getElementById("month");
	Y = document.getElementById("day");
	W = document.getElementById("hours");
	D = document.getElementById("sound");
	E = document.getElementById("top_left");
	m = document.getElementById("logo");
	c = document.getElementById("top_right");
	E.children;
	R = document.getElementById("audio_small");
	L = c.getElementsByClassName("weixin")[0];
	I = 3;
	window.onresize = function() {
		var a = document.getElementById("logo_in"),
			b = document.documentElement.clientWidth;
		a.style.height = document.documentElement.clientHeight + "px";
		E.style.display = 980 > b ? "none" : "block"
	};
	m.onclick = function() {
		E.style.display = "none" == E.style.display ? "block" : "none"
	};
	L.onclick = function() {
		clearInterval(da);
		B.style.display = "block"
	};
	da = setInterval(function() {
		move(L, {
			opacity: 0
		}, {
			time: 200,
			fn: function() {
				move(L, {
					opacity: 1
				}, {
					time: 200
				})
			}
		})
	}, 1500);
	D.onclick = function() {
		"sound_on" == D.className ? (D.className = "sound_off", R.muted = !0) : (D.className = "sound_on", R.muted = !1)
	};
	setInterval(function() {
		x()
	}, 1E3);
	x();
	S = document.getElementById("weather");
	P = document.getElementById("city");
	m = document.getElementById("weather_close");
	H();
	P.onchange = function() {
		H()
	};
	m.onclick = function() {
		S.style.display = "none"
	};
	Q(S);
	move(G, {
		width: 45
	}, {
		time: 200
	});
	m = document.getElementById("center");
	g = document.getElementsByClassName("box");
	d = document.getElementsByClassName("ox_head");
	for (c = 0; c < g.length; c++) h = document.documentElement.clientWidth, g[c].style.left = h / 2 - 300 + "px";
	(function(a) {
		for (var b = 0; b < a.length; b++) a[b].ondblclick = function() {
			var a = document.documentElement.clientHeight,
				b = document.documentElement.clientWidth;
			this.parentNode.offsetWidth > b - 200 ? move(this.parentNode, {
				height: 500,
				width: 600,
				left: (b - 600) / 2,
				top: 50
			}, {
				time: 700
			}) : move(this.parentNode, {
				left: 0,
				top: 30,
				width: b - 2,
				height: a - 150
			}, {
				time: 1E3
			})
		}
	})(d);
	(function(a) {
		var b, e;
		for (b = 0; b < a.length; b++) e = a[b].children[0].children[2], e.onclick = function() {
			move(this.parentNode.parentNode, {
				left: 0,
				top: 30,
				width: document.documentElement.clientWidth - 2,
				height: document.documentElement.clientHeight - 150
			}, {
				time: 1E3
			})
		}
	})(g);
	(function(a) {
		var b, e;
		for (b = 0; b < a.length; b++) e = a[b].children[0].children[1], e.onclick = function() {
			document.documentElement.clientHeight;
			move(this.parentNode.parentNode, {
				height: 400,
				width: 600,
				left: (document.documentElement.clientWidth - 600) / 2,
				top: 50
			}, {
				time: 700
			})
		}
	})(g);
	(function(a) {
		var b, e;
		for (b = 0; b < a.length; b++) e = a[b].children[0].children[0], e.onclick = function() {
			var a = this;
			move(a.parentNode.parentNode, {
				opacity: 0
			}, {
				time: 1500,
				fn: function() {
					a.parentNode.parentNode.style.display = "none";
					a.parentNode.parentNode.style.zIndex = 1;
					move(a.parentNode.parentNode, {
						opacity: 1
					}, {
						time: 100
					})
				}
			})
		}
	})(g);
	for (d = 0; d < g.length; d++) for (c = 0; c < g[d].children.length; c++) qa(g[d].children[c]);
	move(G, {
		width: 85
	}, {
		time: 200
	});
	w = document.getElementById("desktop");
	aa = 140;
	r = 117;
	J(w, 1);
	t = document.getElementsByClassName("text_menu")[0];
	c = document.getElementById("text_menuUl");
	g = c.getElementsByClassName("arrange1")[0];
	n = c.getElementsByClassName("check1")[0];
	h = document.getElementById("arrange");
	d = document.getElementById("check");
	document.oncontextmenu = function(a) {
		a = a || event;
		return t.style.left = a.clientX + "px", t.style.top = a.clientY - 30 + "px", t.style.display = "block", !1
	};
	t.onclick = function() {
		t.style.display = "none"
	};
	ba(g, h);
	ba(n, d);
	n = document.getElementById("refresh");
	p = w.getElementsByTagName("li");
	g = c.getElementsByTagName("li")[4];
	n.onclick = function() {
		for (var a = 0; a < p.length; a++) p[a].style.opacity = 0, move(p[a], {
			opacity: 1
		}, {
			time: 400
		})
	};
	move(G, {
		width: 125
	}, {
		time: 200
	});
	n = h.children[0];
	h = h.children[1];
	T = n.children[0].children[0];
	U = h.children[0].children[0];
	n.onclick = function() {
		J(w, 0);
		U.className = "";
		T.className = "dot"
	};
	h.onclick = function() {
		J(w, 1);
		T.className = "";
		U.className = "dot"
	};
	h = d.children[0];
	n = d.children[1];
	d = d.children[2];
	M = h.children[0].children[0];
	N = n.children[0].children[0];
	O = d.children[0].children[0];
	h.onclick = function() {
		for (var a = 0; a < p.length; a++) move(p[a], {
			height: 90,
			width: 90
		}, {
			time: 500
		});
		O.className = "";
		N.className = "";
		M.className = "dot"
	};
	n.onclick = function() {
		for (var a = 0; a < p.length; a++) move(p[a], {
			height: 72,
			width: 72
		}, {
			time: 500
		});
		O.className = "";
		N.className = "dot";
		M.className = ""
	};
	d.onclick = function() {
		for (var a = 0; a < p.length; a++) move(p[a], {
			height: 56,
			width: 56
		}, {
			time: 500
		});
		O.className = "dot";
		N.className = "";
		M.className = ""
	};
	document.getElementById("new_folder").onclick = function() {
		var a = document.createElement("li");
		a.innerHTML = '<a href="javascript:;"><img src="images/icon/' + rnd(20, 28) + '.png"/><span>\u65b0\u6587\u4ef6\u5939</span></a>';
		w.appendChild(a);
		J(w, 1)
	};
	ea = document.getElementsByTagName("body")[0];
	d = y.getElementsByClassName("skin_btn")[0];
	h = getByClass(m, "skin_box")[0];
	n = document.getElementById("skin").getElementsByTagName("li");
	K(g, h);
	K(d, h);
	(function(a) {
		for (var b = 0; b < a.length; b++) a[b].index = b, a[b].onclick = function() {
			for (var b = 0; 6 > b; b++) a[b].className = "";
			this.className = "skin_active";
			ea.className = "lol" + this.index
		}
	})(n);
	g = y.getElementsByClassName("resume")[0];
	B = getByClass(m, "resume_box")[0];
	m = getByClass(B, "resume_top")[0].children;
	d = document.getElementById("resume_bt");
	h = d.children;
	C = c.getElementsByTagName("li")[6];
	V = document.getElementById("contact_if");
	K(C, B);
	K(g, B);
	(function(a, b) {
		for (var c = 0; c < a.length; c++)!
		function(e) {
			a[c].onclick = function() {
				for (var c = 0; c < a.length; c++) a[c].className = "", b[c].className = "";
				this.className = "resume_on";
				b[e].className = "resume_bton";
				if (1 == e) for (c = 0; c < F.length; c++) ca(F[c], fa[c], 150);
				else for (c = 0; c < F.length; c++) ca(F[c], 0, 500);
				4 == e && (V.src = V.getAttribute("_src"))
			}
		}(c)
	})(m, h);
	d.children[1];
	m = document.getElementById("about_map");
	g = [{
		data: 80,
		left: 51,
		c1: "#fa302c",
		c2: "#ca0300",
		c3: "#fe0000"
	}, {
		data: 120,
		left: 110,
		c1: "#fffd38",
		c2: "#cbc800",
		c3: "#ffff00"
	}, {
		data: 75,
		left: 165,
		c1: "#8a5cb6",
		c2: "#612b81",
		c3: "#7131a1"
	}, {
		data: 130,
		left: 225,
		c1: "#31c1f5",
		c2: "#0091cd",
		c3: "#01b0f1"
	}, {
		data: 110,
		left: 280,
		c1: "#719ad0",
		c2: "#416b9d",
		c3: "#4f81bc"
	}];
	F = m.getElementsByTagName("div");
	d = "";
	h = document.createElement("style");
	for (c = 0; c < g.length; c++) d += ".about" + (c + 1) + "{ width: 30px; height: 200px; -webkit-perspective: 500px; -webkit-perspective-origin:100px -100px; -moz-perspective: 500px; -moz-perspective-origin:100px -100px; -ms-perspective: 500px; -ms-perspective-origin:100px -100px; position: absolute; left: " + g[c].left + "px; bottom: 40px;}.about" + (c + 1) + " p{ width: 30px; height: 0; position: absolute; font-size: 30px; text-align: center;}.about" + (c + 1) + " p:nth-of-type(1){ height: 30px; background: " + g[c].c1 + "; bottom: 0; -webkit-transform-origin:bottom; -webkit-transform: rotateX(90deg); -moz-transform-origin:bottom; -moz-transform: rotateX(90deg); -ms-transform-origin:bottom; -ms-transform: rotateX(90deg); }.about" + (c + 1) + " p:nth-of-type(2){ background: " + g[c].c2 + "; left: 30px; bottom: 0; -webkit-transform-origin:left; -webkit-transform: rotateY(90deg); -moz-transform-origin:left; -moz-transform: rotateY(90deg); -ms-transform-origin:left; -ms-transform: rotateY(90deg) }.about" + (c + 1) + " p:nth-of-type(3){ background: " + g[c].c3 + "; bottom: 0; left: 0; z-index: 10}.about" + (c + 1) + " span{ width: 30px; font-size: 14px; display: block; text-align: center; position: absolute; bottom: 0;}";
	h.innerHTML = d;
	document.getElementsByTagName("head")[0].appendChild(h);
	for (c = 0; c < g.length; c++) d = document.createElement("div"), d.className = "about" + (c + 1), d.innerHTML = "<span></span><p></p><p></p><p></p>", m.appendChild(d);
	fa = [80, 120, 75, 130, 110, 0, 0, 0, 0, 0];
	C = document.getElementById("resume_btn1");
	m = document.getElementById("chexun_box");
	c = document.getElementById("chexun_btn");
	g = document.getElementById("explain_box");
	d = document.getElementById("explain_btn");
	h = document.getElementById("lian_box");
	n = document.getElementById("lian_btn");
	ga = document.getElementById("jd_box");
	ha = document.getElementById("jd_btn");
	ia = document.getElementById("baidu_box");
	ja = document.getElementById("baidu_btn");
	ka = document.getElementById("tencent_box");
	la = document.getElementById("tencent_btn");
	u(la, ka);
	u(ja, ia);
	u(C, B);
	u(ha, ga);
	u(n, h);
	u(d, g);
	u(c, m);
	v = document.getElementById("footer");
	m = v.getElementsByTagName("img");
	ma = document.getElementById("bubble_one");
	na = document.getElementById("bubble_two");
	oa = document.getElementById("bubble_three");
	(function(a, b) {
		addEvent(document, "mousemove", function(c) {
			var f, d, e = c || event;
			for (c = 0; c < a.length; c++) f = a[c].offsetLeft - e.clientX + a[c].offsetWidth / 2, d = a[c].offsetTop + b.offsetTop - e.clientY + a[c].offsetHeight / 2, f = Math.sqrt(f * f + d * d), f = 1 - f / 240, .5 > f && (f = .5), a[c].style.width = 100 * f + "px", a[c].style.height = 100 * f + "px"
		})
	})(m, v);
	move(G, {
		width: 180
	}, {
		time: 200,
		fn: function() {
			ra() ? move(pa, {
				opacity: 0
			}, {
				time: 1500,
				fn: function() {
					pa.style.display = "none"
				}
			}) : move(ma, {
				opacity: 1
			}, {
				time: 800,
				fn: function() {
					move(na, {
						opacity: 1
					}, {
						time: 800,
						fn: function() {
							move(oa, {
								opacity: 1
							}, {
								time: 800
							})
						}
					})
				}
			})
		}
	})
};