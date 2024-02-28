function submitForm() {
    const namaInput = document.getElementById('nama').value;
    const jumlahPilihanInput = parseInt(document.getElementById('jumlahPilihan').value);

    // Validasi jumlah pilihan
    if (isNaN(jumlahPilihanInput) || jumlahPilihanInput < 1) {
        alert('Masukkan jumlah pilihan yang valid (minimal 1).');
        return;
    }

    // Tampilkan inputan sesuai dengan jumlah pilihan
    showInputFields(jumlahPilihanInput);
}

function showInputFields(jumlah) {
    const tampilanContainer = document.getElementById('tampilanContainer');
    
    // Bersihkan konten sebelum menampilkan inputan baru
    tampilanContainer.innerHTML = '';

    // Tambahkan inputan sesuai dengan jumlah yang dimasukkan
    for (let i = 1; i <= jumlah; i++) {
        const label = document.createElement('label');
        label.textContent = `Teks Tampilan ${i}:`;

        const input = document.createElement('input');
        input.type = 'text';
        input.name = `teksTampilan${i}`;

        tampilanContainer.appendChild(label);
        tampilanContainer.appendChild(input);
        tampilanContainer.appendChild(document.createElement('br'));
    }
}