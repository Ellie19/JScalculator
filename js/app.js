function getNumber(num) {
    var result = document.getElementById("result");
    result.innerText += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.innerText = "";
    answer.innerText = "0";

}

function getResult() {
    var result = document.getElementById("result");
    answer.innerText = eval(result.innerText);
}

function onPressBackspace() {
    result.innerText = result.innerText.substring(0, result.innerText.length - 1);
}



const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);