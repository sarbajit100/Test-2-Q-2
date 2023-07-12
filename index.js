let input = document.getElementById("inp")
let submit = document.getElementById("btn");
let show = document.getElementById("para");

function my(params) {
    const txt = document.getElementById("inp").value;
    document.getElementById("para").innerHTML = txt;
}