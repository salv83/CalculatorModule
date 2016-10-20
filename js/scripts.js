    var stato = 1;
    var op1 = 0;
    var op2 = 0;
    Operands = new Array();

	function change(valore) {
	    if (stato == 1) {
	        document.getElementById('op1').innerHTML = valore;
	        stato = 2;
	    } else {
	        document.getElementById('op2').innerHTML = valore;
	        stato = 1;
	    }

	}

	CalcModule = (function() {
	    var pub = {};

	    pub.add = function(a, b) {
	        return a + b;
	    };

	    pub.sub = function(a, b) {
	        return a - b;
	    };

	    pub.mul = function(a, b) {
	        return a * b;
	    };

	    return pub;
	})();

	document.addEventListener("DOMContentLoaded", function() {


	    document.getElementById("bt1").onclick = function() {
	        Operands[1] = parseInt(document.getElementById("op1").innerHTML);
	        Operands[2] = parseInt(document.getElementById("op2").innerHTML);
	        document.getElementById('op3').innerHTML = "Addiction: " + (CalcModule.add(Operands[1], Operands[2]));
	        document.getElementById('op4').innerHTML = "Subtraction: " + (CalcModule.sub(Operands[1], Operands[2]));
	        document.getElementById('op5').innerHTML = "Multiplication: " + (CalcModule.mul(Operands[1], Operands[2]));
	    }
	});

