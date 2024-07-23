var selectfield = document.getElementById("selectfield");
var selecttext = document.getElementById("selectetext");
var options = document.getElementsByClassName("options");
var list = document.getElementById("img-list");
var arrowicon = document.getElementById("arrow");

selectfield.onclick = function() {
    list.classList.toggle("hide");
    arrowicon.classList.toggle("rotate");
}

for (let option of options) {
    option.onclick = function() {
        selecttext.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowicon.classList.toggle("rotate");
        window.open(this.getAttribute("data-url"), "_blank");
    }
}
