


		function start() {

			for (var j = 1; j <= 9; j=j+1) {
				document.getElementById("b" + j).innerText = "";
													document.getElementById("b" + j).style.backgroundColor = "silver";
			}
			document.playturn = "O";
			if (Math.random() > 0.3) {
				document.playturn = "X";
			}

			sM(document.playturn + "'s turn");
			document.winner = null;
		}
		function sT() {

			if (w(document.playturn)) {
				sM("Hurray, " + document.playturn + " wins the game");
				document.winner = document.playturn;


			}else if (document.playturn == "X") {
				document.playturn = "O";
				sM(document.playturn + "'s turn!");
			} else {
				document.playturn = "X";
				sM(document.playturn + "'s turn!");
			}
		}

		function takeaction(block) {
			if (document.winner != null) {
				sM(" Game has already been completed");
			} else if (block.innerText == "") {
				block.innerText = document.playturn;
				sT();
			} else {
				sM("Already used up. Please use other blocks");
			}
		}
		function sM(info) {
			document.getElementById("a").innerText = info;
		}

		function w(m) {
			var finalresult = false;
			if (cR(1, 2, 3, m) ||cR(1, 4, 7, m) ||cR(2, 5, 8, m) ||cR(3, 6, 9, m) ||cR(7, 8, 9, m) ||cR(1, 5, 9, m) ||cR(4, 5, 6, m) ||cR(3, 5, 7, m)) {
				finalresult = true;
			}
			return finalresult;
		}

		function cR(a1, b1, c1, m) {
			var finalresult = false;
			if (gB(b1) == m && gB(a1) == m && gB(c1) == m) {
				finalresult = true;
                                var audio=new Audio("beep-05.mp3");
                                audio.play();
                                document.getElementById("b" + a1).style.backgroundColor = "pink";
                                document.getElementById("b" + b1).style.backgroundColor = "pink";
                                document.getElementById("b" + c1).style.backgroundColor = "pink";
																if(document.winner=="X"){
																window.alert("x");
															  }
																if(document.winner=="O"){
																	window.alert("o");
																}
			}
			return finalresult;
		}

		function gB(number) {
			return document.getElementById("b" + number).innerText;
		}
