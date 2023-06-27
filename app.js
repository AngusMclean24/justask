function closeAlert1() {
    var x = document.getElementById("success");
    x.style.display = "none";
}

function closeAlert2() {
    var x = document.getElementById("failure");
    x.style.display = "none";
}

function success() {
    var x = document.getElementById("success");
    x.style.display = "block";

    var x = document.getElementById("failure");
    x.style.display = "none";

    let canvas = document.createElement("canvas");
    let container = document.getElementsByClassName("button-wrapper")[0];
    canvas.width = 600;
    canvas.height = 600;
  
    container.appendChild(canvas);
  
    let confetti_button = confetti.create(canvas);
    confetti_button().then(() => container.removeChild(canvas));
}

function failure() {
    var x = document.getElementById("success");
    x.style.display = "none";

    var x = document.getElementById("failure");
    x.style.display = "block";

    let canvas = document.getElementsByTagName("canvas")[0];
    canvas.remove(canvas);
}
