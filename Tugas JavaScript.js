var tampilanInputs;
var data = [];
var pilihan;

document.getElementById('btn').addEventListener('click', function(e) {
    textInput();
});

function textInput() {
    var jumlah = document.getElementById("jumlah").value;
    tampilanInputs = document.getElementById("tampilanInputs");

    tampilanInputs.innerHTML = '';

    var input = [];

    for (var i = 1; i <= jumlah; i++) {
        var label = document.createElement("label");
        label.innerHTML = "Pilihan " + i + ":";
        
        input[i] = document.createElement("input");
        input.type = "text";
        input.name = "teksTampilan" + i;

        tampilanInputs.appendChild(label);
        tampilanInputs.appendChild(input[i]);
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
        for (var i = 1; i <= jumlah; i++) {
            data[i] = input[i].value;
        }
        textRadio();
    });

}

function textRadio() {
    var jumlah = document.getElementById("jumlah").value;

    console.log(data);

    for (var i = 1; i <= jumlah; i++) {
        var label = document.createElement("label");
        label.innerHTML ='<input type = "Radio" name = "teksTampilan" id = "Radio'+i+'">' + " Pilihan " + i;
        label.setAttribute("for", "pilihan" + i);
        
        tampilanInputs.appendChild(label);
    }

    for (i = 1; i <= jumlah.length; i++) {
        var radio = document.getElementById("Radio"+i);
        radio.addEventListener("click", function(){
            var radios = document.getElementsByName(this.name);
            
            radios.forEach(function (radio) {
                radio.checked = false;
            });
            
            this.checked = true;
        });
    }

    var button = document.createElement("button");
    button.name = "buttonLast";
    button.textContent = "OK";
    button.id = "buttonLast";

    tampilanInputs.appendChild(button);
    tampilanInputs.appendChild(document.createElement("br"));

    document.getElementById("buttonOK").addEventListener("click", function(e){
        for (var i = 1; i <= jumlah; i++) {
            data[i] = input[i].value;
        }
        textRadio();
    });
}
