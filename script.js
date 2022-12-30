var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var opd1 = 0;
var opd2 = null;
var operator = null;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if(value == '+'){
            operator = '+';
            opd1 = parseFloat(text);
            display.textContent="";
        }
        else if(value == '-'){
            operator = '-';
            opd1 = parseFloat(text);
            display.textContent="";
        }
        else if( value == '*'){
            operator = '*';
            opd1 = parseFloat(text);
            display.textContent="";
        }
        else if (value == '/'){
            operator = '/';
            opd1 = parseFloat(text);
            display.textContent="";
        }
        else if (value == 'AC'){
            display.textContent="";
        }
        else if (value == '%'){
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1;
        }
        else if(value == '='){
            opd2 = parseFloat(text);
            var result = eval(opd1 + ' ' + operator + ' ' + opd2);
            if(result){
                    display.textContent = result;
                    opd1 = result;
                    operator = null;
                    opd2 = null;
            }

        }
        else{
            display.innerText += value;
        }
    });
}