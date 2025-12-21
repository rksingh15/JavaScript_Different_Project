var index = 0;
function changeColor() {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const container = document.querySelector('.container');
    container.style.background = colors[index++];
    if (index > colors.length - 1) {
        index = 0;
    }
}



changeColor();