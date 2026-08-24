const inputTugas = document.querySelector('input');
const btnTambah = document.querySelector('.btn-tambah');
const daftarTugas = document.getElementById('daftarTugas');


btnTambah.addEventListener('click', function () {
  if (inputTugas.value.trim() === '') {
    alert('Tugas tidak boleh kosong!');
    return;
  }


  const liBaru = document.createElement('li');
  liBaru.innerHTML = `${inputTugas.value} <button class="btn-hapus">X</button>`;


  daftarTugas.appendChild(liBaru);


  inputTugas.value = '';
});


daftarTugas.addEventListener('click', function (e) {
  if (e.target.className === 'btn-hapus') {
    e.target.parentElement.remove();
  }
});
