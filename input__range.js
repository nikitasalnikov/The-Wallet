document.getElementById("myinput").oninput = function() {
    var value = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, #74B64A 0%, #74B64A ' + value + '%, #FFFFFF ' + value + '%, #FFFFFF 100%)'
};