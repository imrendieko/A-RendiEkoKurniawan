function bagiAngka(angka1, angka2) {
  try {
    if (angka1 === undefined || angka1 === '' || angka2 === undefined || angka2 === '') {
      throw new Error('Angka tidak boleh kosong.');
    }

    if (isNaN(angka1) || isNaN(angka2)) {
      throw new Error('Input harus berupa angka.');
    }

    if (angka2 === 0) {
      throw new Error('Tidak bisa membagi dengan nol.');
    }

    let hasil = angka1 / angka2;
    console.log('Hasilnya adalah: ' + hasil);
  } catch (error) {
    console.error(error.message);
  }
}

bagiAngka(10, 2);
bagiAngka(10, 0);
bagiAngka(10, 'dua');
bagiAngka(7);
bagiAngka('', 2);
