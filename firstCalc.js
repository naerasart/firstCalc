function typing(input, character) {
    if (input.value == null || input.value == "0") {
        input.value = character
    } else
        input.value += character
}



function cos(form) {
    form.display.value = Math.cos(form.display.value);
}

function sin(form) {
    form.display.value = Math.sin(form.display.value);
}

function tan(form) {
    form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
    form.display.value = Math.sqrt(form.display.value);
}

function deleting(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}


function computing(form) {
    form.display.value = eval(form.display.value);
}

function square(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value)
}

function cube(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value) * eval(form.display.value)
}

function checking(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." &&
                ch != "(" && ch != ")" && ch != "%") {
                alert("invalid entry!")
                return false
            }

        }

    }
    return true
}



/*********************************************************************************************
Citation:
.........
How to Create Scientific Calculator Using HTML, JavaScript and CSS? 
Posted on October 8, 2019 by jyoti 
https://www.expertsphp.com/how-to-create-scientific-calculator-using-html-javascript-and-css/
***********************************************************************************************/