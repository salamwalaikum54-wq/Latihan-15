
)KO.function CekNilai() {
  // Mengambil value dari elemen input nilai
  // Simpan ke dalam vartabel bernama "Nilai"
  let Nilai = Number(document.getElementById("Nilai").value)
  
  // menginisiasi variabel "hasil" isinya string kosong""
  let hasil = ""
  
  // menentukan angka A B C D berdasarkan isi variabel "Nilai"
  
  // menggunakan percabangan if (jika)
  
  // dan membandingkan variabel "Nilai"
  if (Nilai >= 88) {
    hasil = "Nilai A (Sangat Baik) "
  } else if (Nilai >= 75) {
    hasil = "Nilai B (Baik) "
  } else if (Nilai >= 51) {
    hasil = "Nilai C (Cukup Baik) "
  } else if (nilai >= 40) {
    hasil = (Nilai)
  }
  
  // tampilkan isi Vartebel "hasil ke elemen " hasil" di html
  document.getElementById('hasil').innerText = hasil
  
}