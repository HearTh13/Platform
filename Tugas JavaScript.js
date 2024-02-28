document.getElementById("btn").addEventListener("click",function(e){
    e.preventDefault();
    let jumlah = document.getElementById("jumlahPilihan").value;
    let text = '<form>';
    console.log(jumlah);

    for (let i = 0; i <jumlah; i++) {
        text += '<label>Pilihan</label>';
        text += '<input type="text" required>';
    }
    text += '<br><button id="btn2">Submit</button>';
    text += '</form>';
    text += '<div id="form2"></div>';
    document.getElementById("form1").innerHTML = text;
});

document.getElementById("btn2").addEventListener("click",function(e) {
    e.preventDefault();
    let jumlah = document.getElementById("jumlahPilihan").value;
    let text = '<form>';
    console.log(jumlah);

    for (let i = 0; i <jumlah; i++) {
        text += '<input type="dropdown">';
        text += '<label>Pilihan</label>';
    }
    text += '<br><button>Submit</button>';
    text += '</form>';
    document.getElementById("form2").innerHTML = text;
});