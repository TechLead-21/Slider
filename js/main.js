var slider = document.getElementById('slider');
var element = document.getElementById('result');

element.innerHTML = slider.value;

slider.oninput = function () {
    element.innerHTML = this.value;
};