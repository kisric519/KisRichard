//REACT natív gomb
const btn = document.createElement("button");
btn.onclick = function(){
    alert("ok");
}

btn.innerHTML = "Gomb";

document.getElementById("nativ-button-container").appendChild(btn);

//REACT gomb
const btn2 = React.createElement("button", {
    onClick: function(){
        alert("OK")
    }
}, "REACT gomb");

ReactDOM.render(btn2, document.getElementById("react-button-container"));

