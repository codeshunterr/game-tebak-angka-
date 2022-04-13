var tanya = true;
while (tanya) {
// menangkap pilihan komputer
// membangkitkan pilihan komputer
var comp = Math.floor(Math.random() * 12);

// menangkap pilihan player
alert('tebak angka 0-11 \nkamu memiliki 3x kesempatan');
var kesempatan = 3;
for (var nokesempatan =3; nokesempatan = kesempatan; kesempatan--) {
    
    alert('anda memiliki'+ nokesempatan +'kesempatan lagi')
    var p = prompt('masukkan angka')


    // menentukan rules
    var hasil ='';
        if( p == comp) {
            hasil = 'SELAMAT TEBAKAN ANDA BENAR';
        } else if ( p < comp ) {
            hasil = 'KURANG SEDIKIT'
        } else if ( p > comp ) {
            hasil = 'KELEBIHAN'
        } else if (p != Math.floor) {
            hasil = 'salah'
        } else if (p > 11) {
            hasil = 'salah'
        } 
        if (p < 0) {
            hasil = 'salah'
        }
        


    // tampilkan hasil
    alert('tebakan anda ' + hasil)
    if (p == comp) {
        break;
    } 


    } //akhir pengulangan
    
    tanya = confirm('ingin bermain lagi?');
}
