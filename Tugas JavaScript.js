var tampilanInputs;

document.getElementById('btn').addEventListener('click', function(e) {
    textInput();
});

function textInput() {
    var jumlah = document.getElementById("jumlah").value;
    tampilanInputs = document.getElementById("tampilanInputs");

    console.log(jumlah);
    console.log(tampilanInputs);

    tampilanInputs.innerHTML = '';

    for (var i = 1; i <= jumlah; i++) {
        var label = document.createElement("label");
        label.innerHTML = "Pilihan " + i + ":";
        
        var input = document.createElement("input");
        input.type = "text";
        input.name = "teksTampilan" + i;
        
        tampilanInputs.appendChild(label);
        tampilanInputs.appendChild(input);
        tampilanInputs.appendChild(document.createElement("br"));
    }
    var button = document.createElement("button");
    button.type = "button";
    button.id = "buttonOK";
    button.innerHTML = "OK";

    tampilanInputs.appendChild(button);
    tampilanInputs.appendChild(document.createElement("br"));
    tampilanInputs.appendChild(document.createElement("br"));

    document.getElementById("buttonOK").addEventListener("click", function(e){
        textRadio();
    });

}

function textRadio() {
    var jumlah = document.getElementById("jumlah").value;

    console.log(jumlah);
    console.log(tampilanInputs);

    for (var i = 1; i <= jumlah; i++) {
        var label = document.createElement("label");
        label.innerHTML ='<input type = "Radio" name = "teksTampilan' + i + '">' + " Pilihan " + i;
        label.setAttribute("for", "pilihan" + i);
        
        tampilanInputs.appendChild(label);
    }
    var button = document.createElement("button");
    button.name = "buttonLast";
    button.textContent = "OK";
    button.id = "buttonLast";
    tampilanInputs.appendChild(button);
    tampilanInputs.appendChild(document.createElement("br"));
}
