const btn = document.createElement("button");
btn.onclick = function(){
    alert("ok");
}

btn.innerHTML = "Gomb";

document.getElementById("nativ-button-container").appendChild(btn);