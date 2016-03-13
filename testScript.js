c = document.getElementById("canvas");

input = new Input(c);
setInterval(function () {

    console.log(input.mouseDelta);

    input.InputUpdate();
}, 0)