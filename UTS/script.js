var tampilanInputs;
var fnama;
var lnama;
var data = [];
var radio = [];
var jumlah;
var pilihan;

document.getElementById('btn').addEventListener('click', function () {
  jumlah = document.getElementById('jumlah').value;
  fnama = document.getElementById('fnama').value;
  lnama = document.getElementById('lnama').value;
  if (fnama !== '' && fnama !== '' && jumlah !== '' && fnama !== null && fnama !== null && jumlah !== null) {
    this.remove();
    textInput();
  }
});

function textInput() {
  tampilanInputs = document.getElementById('tampilanInputs1');

  tampilanInputs.innerHTML = '';

  var input = [];

  for (var i = 1; i <= jumlah; i++) {
    var label = document.createElement('label');
    label.className = 'text-light';
    label.innerHTML = 'Pilihan ' + i + ':';

    input[i - 1] = document.createElement('input');
    input[i - 1].type = 'text';
    input[i - 1].name = 'teksTampilan' + i;
    input[i - 1].className = 'opacity-05';

    tampilanInputs.appendChild(label);
    tampilanInputs.appendChild(input[i - 1]);
    tampilanInputs.appendChild(document.createElement('br'));
  }

  var button = document.createElement('button');
  button.type = 'button';
  button.id = 'buttonOK';
  button.innerHTML = 'OK';

  tampilanInputs.appendChild(button);

  document.getElementById('buttonOK').addEventListener('click', function () {
    var check = true;
    for (var i = 0; i < jumlah; i++) {
      data[i] = input[i].value;
      if (data[i] == '' || data[i] == null) {
        check = false;
      }
      console.log(data[i]);
      console.log(check);
    }
    if (check) {
      button.remove();
      textRadio();
    }
  });
}

function textRadio() {
  jumlah = document.getElementById('jumlah').value;
  tampilanInputs = document.getElementById('tampilanInputs2');

  console.log(data);

  for (var i = 1; i <= jumlah; i++) {
    var label = document.createElement('label');
    label.innerHTML = data[i - 1];

    radio[i - 1] = document.createElement('input');
    radio[i - 1].type = 'radio';
    radio[i - 1].name = 'teksTampilan';
    radio[i - 1].id = 'Radio' + i;

    tampilanInputs.appendChild(radio[i - 1]);
    tampilanInputs.appendChild(label);

    radio[i - 1].addEventListener('click', function () {
      for (j = 0; j < jumlah; j++) {
        radio[j].checked = false;
      }
      this.checked = true;
    });
  }

  console.log(radio);

  var button = document.createElement('button');
  button.name = 'buttonLast';
  button.textContent = 'OK';
  button.id = 'buttonLast';

  tampilanInputs.appendChild(button);

  document.getElementById('buttonLast').addEventListener('click', function () {
    console.log(radio[0].checked);
    console.log(radio[1].checked);
    var check = false;
    for (var i = 0; i < jumlah; i++) {
      if (radio[i].checked) {
        check = true;
        pilihan = data[i];
        console.log(pilihan);
      }
    }
    if (check) {
      tampilkanData();
      button.remove();
    }
  });
}

function tampilkanData() {
  tampilanInputs = document.getElementById('tampilanInputs3');
  console.log(jumlah);
  var tampil = document.createElement('div');
  tampil.innerHTML = '<p>Hallo, nama saya ' + nama + ', saya mempunyai sejumlah ' + jumlah + ' pilihan yaitu: ';
  for (var i = 0; i < jumlah; i++) {
    if (i == jumlah - 1) {
      tampil.innerHTML += ' dan ' + data[i];
    } else {
      tampil.innerHTML += data[i] + ', ';
    }
  }
  tampil.innerHTML += ' dan saya memilih ' + pilihan + '</p>';
  tampilanInputs.appendChild(tampil);
}
