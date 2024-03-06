var tampilanInputs;
var nama;
var data = [];
var radio = [];
var jumlah;
var pilihan;

document.getElementById('btn').addEventListener('click', function () {
    this.remove();
    textInput();
});

function textInput() {
    jumlah = document.getElementById("jumlah").value;
    tampilanInputs = document.getElementById("tampilanInputs1");
    nama = document.getElementById("nama").value;

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

    document.getElementById("buttonOK").addEventListener("click", function () {
        button.remove();
        for (var i = 1; i <= jumlah; i++) {
            data[i - 1] = input[i - 1].value;
        }
        textRadio();
    });

}

function textRadio() {
    jumlah = document.getElementById("jumlah").value;
    tampilanInputs = document.getElementById("tampilanInputs2");

    console.log(data);

    for (var i = 1; i <= jumlah; i++) {
        var label = document.createElement("label");
        label.innerHTML = data[i - 1];
        
        radio[i - 1] = document.createElement("input");
        radio[i - 1].type = "radio";
        radio[i - 1].name = "teksTampilan";
        radio[i - 1].id = "Radio" + i;
        
        tampilanInputs.appendChild(radio[i - 1]);
        tampilanInputs.appendChild(label);

        radio[i - 1].addEventListener("click", function () {
            for (j = 0; j < jumlah; j++) {
                radio[j].checked = false;
            }
            this.checked = true;
        });
    }
    
    console.log(radio);

    var button = document.createElement("button");
    button.name = "buttonLast";
    button.textContent = "OK";
    button.id = "buttonLast";

    tampilanInputs.appendChild(button);

    document.getElementById("buttonLast").addEventListener("click", function () {
        button.remove();
        for (var i = 1; i <= jumlah; i++) {
            if (radio[i - 1].checked) {
                pilihan = data[i - 1];
                console.log(pilihan);
                tampilkanData();
            }
        }
        
    });
}

function tampilkanData() {
    tampilanInputs = document.getElementById("tampilanInputs3");
    console.log(jumlah);
    var tampil = document.createElement("div");
    tampil.innerHTML = "<p>Hallo, nama saya "+nama+", saya mempunyai sejumlah "+jumlah+" pilihan yaitu: ";
    for (var i = 0; i < jumlah; i++) {
        if (i == (jumlah - 1)) {
            tampil.innerHTML += " dan "+data[i];
        }
        else {
            tampil.innerHTML += data[i]+", ";
        }
    }
    tampil.innerHTML += " dan saya memilih "+pilihan+"</p>";
    tampilanInputs.appendChild(tampil);
}
