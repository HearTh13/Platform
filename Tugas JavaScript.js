document.getElementById("btn").addEventListener("click",function(e){
    e.preventDefault();
    let jumlah = document.getElementById("jumlahPilihan").value;
    let text;
    console.log(jumlah);

    for (let i = 0; i <jumlah; i++) {
        text += '<label>Pilihan</label>';
        text += '<input type="text" required>';
    }
    text += '<br><button>Submit</button>';
    document.getElementById("form1").innerHTML = text;
});