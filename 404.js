var regex = new RegExp("%3c.*%3e","i");
var script = regex.exec(window.location.href);
if (script) {
    window.location.href = "/404";
}
