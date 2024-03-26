var tampilanInputs;
var fnama;
var lnama;
var email;
var data = [];
var checkBox = [];
var jumlah;
var pilihan = [];

document.getElementById('btn').addEventListener('click', function () {
  jumlah = document.getElementById('jumlah').value;
  fnama = document.getElementById('fnama').value;
  lnama = document.getElementById('lnama').value;
  email = document.getElementById('email').value;
  if (fnama !== '' && lnama !== '' && jumlah !== '' && email !== '' && fnama !== null && lnama !== null && jumlah !== null && email !== null) {
    document.getElementById('alert').style.display = 'none';
    this.remove();
    textInput();
  } else {
    document.getElementById('alert').style.display = 'block';
  }
});

function textInput() {
  tampilanInputs = document.getElementById('tampilanInputs1');

  tampilanInputs.innerHTML = '';

  var garis = document.createElement('hr');
  garis.className = 'my-4';
  tampilanInputs.appendChild(garis);

  var input = [];

  for (var i = 1; i <= jumlah; i++) {
    var label = document.createElement('label');
    label.className = 'text-light';
    label.innerHTML = 'Hobby ' + i + ':';

    input[i - 1] = document.createElement('input');
    input[i - 1].type = 'text';
    input[i - 1].name = 'teksTampilan' + i;
    input[i - 1].className = 'form-control opacity-05';

    tampilanInputs.appendChild(label);
    tampilanInputs.appendChild(input[i - 1]);
    tampilanInputs.appendChild(document.createElement('br'));
  }

  var konten = document.createElement('div');
  konten.className = 'text-center';

  var button = document.createElement('button');
  button.type = 'button';
  button.id = 'buttonOK';
  button.className = 'btn btn-dark';
  button.innerHTML = 'Oke';

  konten.appendChild(button);
  tampilanInputs.appendChild(konten);

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
      document.getElementById('alert').style.display = 'none';
      button.remove();
      textRadio();
    } else {
      document.getElementById('alert').style.display = 'block';
    }
  });
}

function textRadio() {
  jumlah = document.getElementById('jumlah').value;
  tampilanInputs = document.getElementById('tampilanInputs2');

  var garis = document.createElement('hr');
  garis.className = 'my-4';
  tampilanInputs.appendChild(garis);

  var title = document.createElement('div');
  title.className = 'text-md-start text-light';
  title.textContent = 'Pilih hobby yang paling anda suka:';

  tampilanInputs.appendChild(title);
  tampilanInputs.appendChild(document.createElement('br'));

  for (var i = 1; i <= jumlah; i++) {
    var label = document.createElement('label');
    label.innerHTML = data[i - 1];
    label.className = 'text-light pad-3';

    checkBox[i - 1] = document.createElement('input');
    checkBox[i - 1].type = 'checkbox';
    checkBox[i - 1].name = 'teksTampilan';
    checkBox[i - 1].id = 'Radio' + i;
    checkBox[i - 1].className = 'form-check-input';

    tampilanInputs.appendChild(checkBox[i - 1]);
    tampilanInputs.appendChild(label);
    tampilanInputs.appendChild(document.createElement('br'));
    tampilanInputs.appendChild(document.createElement('br'));
  }

  tampilanInputs.appendChild(document.createElement('br'));

  var konten = document.createElement('div');
  konten.className = 'text-center';

  var button = document.createElement('button');
  button.name = 'buttonLast';
  button.textContent = 'Oke';
  button.id = 'buttonLast';
  button.className = 'btn btn-dark';

  konten.appendChild(button);
  tampilanInputs.appendChild(konten);

  document.getElementById('buttonLast').addEventListener('click', function () {
    var check = false;
    for (var i = 0; i < jumlah; i++) {
      if (checkBox[i].checked) {
        check = true;
        pilihan[i] = data[i];
      }
    }
    if (check) {
      document.getElementById('alert').style.display = 'none';
      tampilkanData();
      button.remove();
    } else {
      document.getElementById('alert').style.display = 'block';
    }
  });
}

function tampilkanData() {
  tampilanInputs = document.getElementById('tampilanInputs3');

  var garis = document.createElement('hr');
  garis.className = 'my-4';
  tampilanInputs.appendChild(garis);

  var tampil = document.createElement('div');
  tampil.className = 'text-light';
  tampil.innerHTML = '<p>Hallo, nama saya ' + fnama + ' ' + lnama + ' dengan e-mail ' + email + '. Saya mempunyai sejumlah ' + jumlah + ' hobby pilihan yaitu: ';
  for (var i = 0; i < jumlah; i++) {
    if (i == jumlah - 1) {
      tampil.innerHTML += ' dan ' + data[i];
    } else {
      tampil.innerHTML += data[i] + ', ';
    }
  }
  tampil.innerHTML += ' dan saya memilih ';
  for (var i = 0; i < pilihan.length; i++) {
    if (i == pilihan.length - 1) {
      tampil.innerHTML += ' dan ' + pilihan[i];
    } else {
      tampil.innerHTML += pilihan[i] + ', ';
    }
  }
  tampil.innerHTML += '</p>';
  tampilanInputs.appendChild(tampil);
}
