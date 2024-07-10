var flagzero = false;
var FirstNumber;
var SecondNumber;
var globalType;
var flagDisplay = false;
function calc(number) {

    if (document.querySelector('#display').value == '0' && !flagzero) {
        document.querySelector('#display').value = number;
        flagzero = true;
    }
    else {
        document.querySelector('#display').value += number;
    }

    if (flagDisplay) {
        document.querySelector('#display').value = number;
        flagDisplay = false;
    }
}
function calcoperate(type) {
    if (type != "res") {
        FirstNumber = document.querySelector('#display').value;
        globalType = type;
        flagDisplay = true;
    }
    else {
        SecondNumber = document.querySelector('#display').value;
        switch (globalType) {
            case 'inc':
                document.querySelector('#display').value = +FirstNumber + +SecondNumber;
                break;
            case 'dec':
                document.querySelector('#display').value = +FirstNumber - +SecondNumber;
                break;
            case 'multi':
                document.querySelector('#display').value = +FirstNumber * +SecondNumber;
                break;
            case 'divi':
                document.querySelector('#display').value = +FirstNumber / +SecondNumber;
                break;

            default:
                break;
        }
    }


}
function cleardisplay() {
    document.querySelector('#display').value = '0';
    FirstNumber = 0;
    SecondNumber = 0;
    globalType = "";
}













