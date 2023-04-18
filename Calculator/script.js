let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function() {
        if (buttons[i].value === '=') {
            display.value = eval(display.value);
        } else if (buttons[i].value === 'C') {
            display.value = '';
        } else {
            display.value += buttons[i].value;
        }
    })
}