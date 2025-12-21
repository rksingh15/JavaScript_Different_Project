
function changeColor() {
    var hex_number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var container = document.getElementById('colorCode');
    var color = '';
    for (var i = 0; i < 6; i++) {
        color += hex_number[Math.floor(Math.random() * hex_number.length)];
    }
    container.innerHTML =  color;
    document.body.style.backgroundColor = '#' + color;
}

changeColor();


