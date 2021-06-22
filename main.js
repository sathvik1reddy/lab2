function cn(str) {
	for (var i = 0; i < str.length; i++)
	 {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%")
				{
				alert("false !")
				return false
				}
			}
		}
		return true
}




function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}

function square(form) {
	form.show.value = eval(form.show.value) * eval(form.show.value)
}



function exp(form) {
	form.show.value = Math.exp(form.show.value);
}





function sin(form) {
	form.show.value = Math.sin(form.show.value);
}


function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}


function sqrt(form) {
	form.show.value = Math.sqrt(form.show.value);
}

function check(form) {

    form.show.value = eval(form.show.value);
  }

	function plusc(input, character) {
		if(input.value == null || input.value == "0")
			input.value = character
		else
			input.value += character
	}
	function changeSign(input) {
		if(input.value.substring(0, 1) == "-")
			input.value = input.value.substring(1, input.value.length)
		else
			input.value = "-" + input.value
	}

	function cos(form) {
		form.show.value = Math.cos(form.show.value);
	}
