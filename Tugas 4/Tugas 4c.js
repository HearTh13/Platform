var tampilanInputs;
var data = [];
var radio = [];
var pilihan;

document.getElementById('btn').addEventListener('click', function (e) {
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

        input[i - 1] = document.createElement("input");
        input[i - 1].type = "text";
        input[i - 1].name = "teksTampilan" + i;

        tampilanInputs.appendChild(label);
        tampilanInputs.appendChild(input[i - 1]);
        tampilanInputs.appendChild(document.createElement("br"));
    }

    var button = document.createElement("button");
    button.type = "button";
    button.id = "buttonOK";
    button.innerHTML = "OK";

    tampilanInputs.appendChild(button);
    tampilanInputs.appendChild(document.createElement("br"));
    tampilanInputs.appendChild(document.createElement("br"));

    document.getElementById("buttonOK").addEventListener("click", function (e) {
        for (var i = 1; i <= jumlah; i++) {
            data[i - 1] = input[i - 1].value;
        }
        textRadio();
    });

}

function textRadio() {
    var jumlah = document.getElementById("jumlah").value;

    console.log(data);

    for (var i = 1; i <= jumlah; i++) {
        var label = document.createElement("label");
        var radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "teksTampilan";
        radioInput.id = "Radio" + i;

        label.innerHTML += " Pilihan " + i;

        tampilanInputs.appendChild(label);
        tampilanInputs.appendChild(radioInput);

        
    }

    for (i = 1; i <= jumlah; i++) {
        radio[i - 1] = document.getElementById("Radio" + i);
        radio[i - 1].addEventListener("click", function (e) {
            var radios = document.getElementsByName("teksTampilan");

            radios.forEach(function (x) {
                x.checked = false;
            });

            this.checked = true;
        });
    }

    console.log(radio);

    var button = document.createElement("button");
    button.name = "buttonLast";
    button.textContent = "OK";
    button.id = "buttonLast";

    tampilanInputs.appendChild(button);
    tampilanInputs.appendChild(document.createElement("br"));

    var div = document.createElement("div");
    div.id = "Last";
    document.getElementById("buttonLast").addEventListener("click", function (e) {
        pilihan = '';
        console.log(e);
        for (var i = 1; i <= jumlah; i++) {
            if (radio[i - 1].checked) {
                pilihan = data[i - 1];
                console.log(pilihan);
            }
        }
        tampilkanData();
    });
}

function tampilkanData() {
    // Implement your logic here
}
