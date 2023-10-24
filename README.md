Software Requirements Specification
(Website Resep Makanan: Selera Kita)

PENDAHULUAN 
- TUJUAN
Dokumen ini merupakan Spesifikasi untuk membangun website yang efisien. Tujuan penulisan dokumen ini dengan judul “Website Resep Makanan : Selera Kita” adalah untuk mengidentifikasi dan memberikan informasi dasar yang harus dipenuhi oleh perangkat lunak yang akan dikembangkan. Dokumen ini juga memastikan bahwa pengembang website paham dan jelas tentang apa yang diharapkan dari perangkat lunak  yang dikembangkan. SKPL menjadi panduan yang berguna untuk pengembang dalam mengembangakan website dengan efesien.

- AUDIENS YANG DITUJU DAN PEMBACA YANG DISARANKAN 
Audiens : Audiens yang dituju yaitu para pecinta masakan kuliner, pecinta makanan sehat, dan ibu rumah tangga yang tertark untuk mendapatkan berbagai informasi dan resep masakkan yang mudah dan dapat dibuat sendiri.
saran : Dokumentasi SRS Website Resep Makanan ini digunakan unuk memberikan informasi kepada audiens tentang resep - resep makanan. Oleh karena itu, kami menyarankan para audiens membaca dokumen SRS ini dengan cermat.

- RUANG LINGKUP 
Perangkat lunak yang akan dikembangakan adalah Website Resep makanan yaitu Selera Kita yang dapat digunakan atau diakses oleh semua orang.

DESKRIPSI KEBUTUHAN FUNGSIONAL 
- PERSPEKTIF PRODUK
Website resep makanan "Selera Kita" yaitu sebuah website yang menampilkan berbagai resep makanan. Website ini dirancang dengan tujuan untuk menginspirasi dan membantu pengguna dalam mempersiapkan hidangan yang lezat dan memuaskan. Website ini memiliki tata letak dan desain yang muda untuk dinavigasi oleh user
Setiap resep dalam website ini disertai dengan deskripsi yang rinci, termasuk bahan - bahan yang diperlukan dan langkah - langkah memasak yang mudah untuk dipahami. Setiap resep dilengkapi dengan gambar - gambar berkualitas dari hidangan yang sudah jadi. Gambar - gambar ini memungkinkan user untuk memvisualisasikan hasil akhir dan memberikan motivasi untuk mencoba.

- FUNGSI PRODUK
Website Resep Makanan "Selera Kita" memiliki beragam fungsi. berikut merupakan beberapa fungsi dari website Resep Makanan Selera Kita :
  - Website Resep Makanan " Selera Kita" dapat memberikan informasi yang inspirasi untuk memasak dan juga 
    dapat mencoba hidangan baru.
  - Website Resep Makanan " Selera Kita" ini memberikan panduan memasak langkah demi langkah dalam 
    menghidangkan masakkan yang dipilih yang dapat membantu pengguna yang kurang berpengalaman dalam 
    memasak
  - Website Resep Makanan " Selera Kita" juga dapat menjadi sarana pembelajaran dan juga mengembangakan 
    keterampilan memasak.

- KARAKTERISTIK PENGGUNA
Karakteristik pengguna yang menggunakan perangkat lunak Task Submission yaitu:
  - Pengguna
    
    a. Memiliki perangkat elektronik (Handphone/CP)
    
    b. Memiliki akses internet
    
    c. Memahami cara kerja perangkat elektronik yang digunakan

- LINGKUNGAN OPERASI
Software Website resep makanan dapat dijalankan pada:
  - Windows
    - Windows 7,8,8.1,10
    - Web browser (Google Chrome, Firefox, Microsoft Edge)
      
  - Android
    - Android 4.0 atau lebih baik
    - RAM : 512 MB
   
  - Ios
     - iOS 9, 10, 11, 12, 13, 14, 15, atau yang lebih baru
      
- KENDALA DESAIN DAN IMPLEMENTASI
Kendala yang dialami dalam proses pembuatan desain dan implementasi website Resep Makanan “Selera Kita” yaitu:
  - Mengalami kesulitan dalam menemukan ide dan desain website yang pas.
  - Kurangnya pengetahuan teknis dalam mengembangakan website, sehingga kesulitan dalam merancang dan juga mengimplementasikan fitur yang ada.

- DOKUMENTASI PENGGUNA
Dokumen untuk membantu pengguna menggunakan website resep makanan “Selera Kita” ini terbuka untuk umum dan dapat diakses melalui web Browser, Google Chrome, Firefox, Microsoft Edge dsb.

- ASUMSI DAN KETERGANTUNGAN
Kebutuhan dari website resep makanan “Selera Kita” adalah:
  - Adanya perangkat keras yang mampu mengoperasikan Website resep makanan "Selera Kita"
  - Adanya perangkat lunak yang mampu mengoperasikan Website resep makanan “Selera Kita”
  - Koneksi internet untuk dapat terhubung ke server.

LAMPIRAN: Analisis Model
- Flowchart

   ![FlowchartFix](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/124539993/376d8df4-e950-4074-9dbf-475e2d659067)

- Use Case

  ![UsecaseWeb](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/124539993/54342a16-064d-47d8-a2f0-79a568da5b28)

- Activity Diagram

  ![Aktivity diagram web drawio](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/117991094/0bbe7b5a-b81a-4791-a71e-e38d1dcab2a6)

PENJELASAN SCRIPT

- PEJELASAN SCRIPT INDEX HTML

  ![Screenshot1 (816)](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/117991094/785a3f90-0788-4bf7-8ea0-790a0a752ddc)
  - DOCTYPE html digunakan untuk mendeklarasikan atau memberi tau browser bahwa halaman ini merupakan halaman dokumen html5
  - html lang = “en”  menunjukkan bahwa bahasa yang digunakan pada halaman merupakan bahasa inggris 
  - head digunakan untuk menandakan bahwa awal dari kepala dokumen HTML.
  - meta charset = “UTF - 8” digunakan untuk memberi tahu browser bahwa dokumen yang digunakan menggunakan set karakter UTF - 8 yang merupakan standar umum untuk     encoding karakter.
  - meta name = “viewport” content=”width=device-width initial-scale = 1.0” digunakan untuk mengontrol tampilan halaman di perangkat dengan mengatur tampilan         lebar dan mengatur skala     awal 
  - title SeleraKita. title digunakan untuk menetapkan judul dokumen yang nantinya akan muncul di web browser 
  - link rel=”stylesheet” href=”style.css” digunakan untuk menautkan file stylesheet yang disebut “style.css” sehingga mudah untuk memodifikasi tata letak            halaman dengan mengedit file CSS terpisah

  ![Screenshot1 (817)](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/117991094/bd3c5ccb-2110-4ae3-9638-0dfab31c0468)
  -  body menandakan awal dari elemen tubuh dari elemen halaman HTML 
  - nav menunjukkan bahwa bagian ini merupakan bagian navigasi dari halaman web
  - div class = “navbar” div merupakan elemen divisi yang mempunyai class “navbar” yang digunakan  untuk mengelompokkan elemen navigasi dan class “navbar” nantinya akan digunakan di css
  - div class = “Title”<a href =’ ‘>SeleraKita.a div element divisi (div) yang memiliki class “Title” yang berisi tautan dengan teks “SeleraKita. “  dan teks ini merupakan judul atau         nama situs web.
  - div class =”menu” merupakan div dengan class “menu” yang digunakan untuk mengelompokkan elemen menu 
  - ul merupakan unordered list jenis daftar yang berbentuk poin poin , tidak memiliki urutan khusus biasanya digunakan untuk menampilkan daftar item yang sejajar
  - pada line 16 - 18  merupakan daftar item yang berurutan yang berisi Home,Resep, About yang akan  mengarah ke elemen dengan id “home”, id " Resep", id "About      pada halaman tersebut  

  ![Screenshot1 (821)](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/117991094/96d3a268-f5cf-4d31-9d50-e946be74f642)
  Script diatas merupakan salah satu codingan untuk melihat resep yang ada di dalam halaman index HTML. Berikut penjerlasannya :
  - section id = “resep” menandakan awal dari bagian “resep” di halaman web yang berisi daftar atau kartu resep yang akan ditampilkan kepada pengguna 
  - ul class = “catCardList” ul (unordered list) merupakan daftar yang tak berurut yang memiliki class “catCardlist”
  - li class =”catCardlist” li(list item) yang memiliki class “catCardList”.
  - div class =”catCard” div yang memiliki class “catCard yang digunakan untuk menampilkan resep tertentu 
  - a href =”#”  mengarah ke tautan yang kosong 
  - img src =”fotoResep/nasgor.png” alt=”” merupakan tag gambar (img) yang menampilkan gambar resep nasi goreng.
  - div class =”lowerCatCard” div yang memiliki class “loweCatCard” yang digunakan untuk menampilkan detail resep lebih lanjut 
  - h3 Nasi Goreng h3 elemen judul level 3 yang menampilkan judul resep “Nasi Goreng”
  - p ….kontendeskripsi..p paragraf yang menjelaskan mengenai nasi goreng 
  - div id="catCardButton" class="button" a href="resepnasgor.html" Lihat Resep a div div dengan id “catCardButton” dan kelas “button” yang berisi tautan             “Lihat Resep”. tautan ini akan mengarah ke       halaman yang berisi resep nasi goreng secara lebih rinci 

  ![Screenshot (822)](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/117991094/ecce0596-d431-4adc-9a8e-4d6397c05bad)
    - div class = “selengkapnya” merupakan elemen div yang memiliki class “selengkapnya”. elemen div digunakan untuk membuat kotak terpisah dalam dokumen HTML dan digunakan untuk mengatur gaya elemen            menggunakan css
    - a href = “indexresep.html”Selengkapnya… a  merupakan tautan yang memiliki atribut href yang menunjukkan tujuan tautan pada halaman “indexresep.html”. “Selengkapnya…” akan ditampilkan di halaman web sebagai tautan yang dapat di klik oleh pengguna dan beralih ke halaman yang ditentukan dalam herf

  ![Screenshot (823)](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/117991094/2811c1a4-99bc-4fde-9fad-f001286bf544)
   - section id =”about” digunakan untuk menandai awal bagian “about” di halaman web yang berisi mengenai informasi dan juga kontak dan akan digunakan di css
   - div id = “contact” div yang memiliki id “Contact”. dan id “contact” akan di gunakan di css 
   - div class = “wrapper” div dengan class “wrapper” yang digunakan untuk mengelompokan elemen dan juga untuk mengatur tata letak atau gaya 
   - div class = “footer” div dengan class “footer” yang digunakan untuk mengelompokan bagian bawah situs web seperti kontak media sosial dan about  
   - div class = “footer - section”  div dengan class “footer - section digunakan untuk mengelompokan informasi tertentu dari bagian footer situs web 
   - h3 About h3 digunakan untuk elemen judul level 3 yang menampilkan “About”
   - p ….konten deskripsi …p merupakan paragraf yang digunakan untuk menjelaskan informasi mengenai web Selera kita
   - h3 Contact h3  digunakan untuk elemen judul level 3 yang menampilkan “Contact”
   - p...konten deskripsi….p merupakan paragraf yang digunakan untuk menampilkan informasi kontak 
   - h3 Sosial h3  digunakan untuk elemen judul level 3 yang menampilkan “Sosial” 
   - p …..konten media sosial…p digunakan untuk paragraf yang nantinya akan menampilkan akun sosial media seperti YouTube, Instagram, dan Facebook 

  ![Screenshot (824)](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/117991094/296bcfbd-8077-4b94-bf2c-a86a594c6454)
    - div id = “copyright” div yang memiliki ID “copyright” digunakan untuk mengelompokkan informasi mengenai hak cipta situs web dan id “copyright” yang nantinya akan digunakan di css
    - div class = “wrapper” div  di dalamnya terdapat  kelas “wrapper” yang nantinya kelas “wrapper” dapat digunakan di css

- PENJELASAN SCRIPT INDEXRESEP HTML

  ![ss indexresep 1](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/124539993/389ecf17-7f46-40ea-9039-2c483ee1b332)
    - !DOCTYPE html: merupakan deklarasi tipe dokumen yang memberitahu browser bahwa halaman ini menggunakan versi HTML5.
    - html lang="en" : menandakan awal dari dokumen HTML. Elemen ini juga mengandung atribut ‘lang’ yang menunjukkan bahwa bahasa kontennya adalah bahasa inggris.
    - head merupakan bagian kepala dokumen yang biasanya diisi informasi-informasi mengenai halaman web seperti judul, tautan stylesheet, dan meta informasi:
    - meta charset="UTF-8" : yaitu untuk menentukan pengkodean karakter yang digunakan, dalam hal ini UTF-8
    - meta name="viewport" content="width=device-width, initial-scale=1.0": mendefinisikan cara browser menampilkan halaman pada perangkat dengan berbagai ukuran layar.
     - title>SeleraKita. /title : untuk menentukan judul halaman web yang akan ditampilkan pada tab browser.
    - link rel="stylesheet" href="style.css" : Menghubungkan halaman dengan file stylesheet (CSS) yang bernama “style.css”

  ![ss indexresep 2](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/124539993/bc39636d-ac40-4882-a783-1642e1340b1a)
    - body : yaitu bagian tubuh dokumen untuk menempatkan konten utama dari halaman web.
    - nav : bagian navigasi yang berisi menu atau tautan-tautan yang mengarahkan pengguna ke halaman-halaman lain di situs.
    - div class=”navbar” : sebuah div dengan kelas CSS “navbar” yang berisi elemen-elemen terkait navigasi.
    - div class="title" a href='' SeleraKita. /a  /div : sebuah div dengan class CSS “title” yang berisi tautan menuju halaman utama (<a href=''>SeleraKita.</a>).
    - div class="search-bar" : sebuah div dengan class CSS “search-bar” yang berisi elemen pencarian.
    - input type="text" id="recipeSearch" placeholder="Cari resep" : sebuah kotak input teks untuk user memasukkan kata kunci pencarian.
    - div id="searchResults" /div  Sebuah div kosong yang akan digunakan untuk menampilkan hasil pencarian.

  ![ss   indexrerep 3](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/124539993/23da3263-1252-447b-9a96-46ecbe8e1280)

    - section id="resep" : sebuah elemen section dengan ID “resep” yang akan berisi daftar resep.
    - ul class="catCardList" : Sebuah daftar tak terurut (unordered list) dengan class CSS "catCardList" yang akan berisi elemen-elemen resep.
    - li class="catCardList" : Sebuah elemen daftar (list item) dengan class CSS “catCardList”.
    - div class="catCard" : Sebuah div dengan class CSS “catCard” yang akan berisi detail dari resep.
    - a href="#" : Sebuah tautan yang akan mengelompokkan elemen dalam resep.
    - img src="..." alt="..." : Sebuah elemen gambar dengan sumber yan sudah dibuat atau sudah ada dan teks alternatif jika gambar tidak muncul.
    - div class="lowerCatCard" : Sebuah div dengan class CSS “lowerCatCard" yang berisi informasi tambahan tentang resep.
    - h3>... /h3 : Sebuah elemen heading level 3 yang berisi judul resep.
    - p>... /p : Sebuah elemen paragraph yang berisi deskripsi resep.
    - div id="catCardButton" class="button" : Sebuah div dengan id "catCardButton" dan class CSS "button" yang akan berisi tautan untuk melihat resep.
    - a href="..." Lihat Resep /a : Sebuah tombol/ tautan dengan teks "Lihat Resep" dan tautan menuju halaman resep.
    - kemudian penjelasan untuk daftar resep lain yang ada di dalam section penjelasannya sama.

  ![image](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/124539993/7a619ef7-a61b-4a1e-8534-a359248773db)
    - div class="Back" : Sebuah div dengan kelas CSS "Back" yang berisi tautan kembali ke halaman utama.
    - a href="index.html" Back to Home /a : Sebuah tombol/ tautan menuju halaman utama dengan teks "Back to Home".
    - script src="Script.js"  /script : Sebuah skrip JavaScript yang akan dijalankan oleh browser untuk memberikan/ memanggil fungsionalitas tambahan.

- PENJELASAN SCRIPT STYLERESEP CSS

  ![ss styleresep](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/124539993/a4d35607-84d6-41fa-b8cd-9a11aa498d71)

  Script styleresep.css diatas merupakan CSS untuk bagian dalam HTML setiap resep
    - body: Gaya untuk elemen <body> di halaman HTML masing-masing resep
      - font-family: "Open-sans", sans-serif; mengatur jenis font yang akan digunakan dalam elemen body. Disini menggunaka font "Open-sans", jika tidak tersedia, maka menggunakan font sans-serif default.
      - margin: 0 auto;  Memberikan margin pada sisi kiri dan kanan elemen body sehingga konten akan terpusat di tengah halaman. Nol pada sisi atas dan bawah.
      - max-width: 800px; : Menentukan lebar maksimum elemen body, sehingga konten tidak melebar terlalu lebar pada layar besar.
      - padding: 20px;: Memberikan ruang padding sebesar 20 piksel di sekitar konten di dalam elemen body.
      - background-color: #f8f8f8;: Memberikan warna latar belakang untuk seluruh halaman dengan kode warna #f8f8f8 (hampir putih).
    - h1: Gaya untuk elemen heading level 1 (h1).
      - text-align: center;: Mengatur teks pada heading untuk berada di tengah.
      - color: #364f6b;: Mengatur warna teks pada heading dengan kode warna #364f6b (biru tua).
    - img: Gaya untuk elemen gambar (img).
      - width: 300px; Menentukan lebar gambar sebesar 300 piksel.
      - height: 20pc; Menentukan tinggi gambar sebesar 20 pica (1 pica = 12 piksel).
      - margin-left: auto; Meletakkan gambar di bagian kiri halaman (auto untuk mengatur otomatis).
      - margin-right: auto; Meletakkan gambar di bagian kanan halaman (auto untuk mengatur otomatis).
      - display: block; Menjadikan gambar sebagai blok elemen, sehingga akan menempati seluruh lebar yang tersedia.
    - .kotakresep: Gaya untuk elemen dengan kelas CSS "kotakresep".
      - max-width: 800px; Menentukan lebar maksimum dari elemen dengan kelas "kotakresep" menjadi 800 piksel.
      - margin: 0 auto; Mengatur elemen dengan kelas "kotakresep" menjadi terpusat di tengah halaman.
      - background-color: #fff; Memberikan warna latar belakang putih untuk elemen dengan kelas "kotakresep".
      - padding: 20px; Memberikan ruang padding sebesar 20 piksel di sekitar konten di dalam elemen dengan kelas "kotakresep".
      - border-radius: 10px; Memberikan sudut melengkung pada elemen dengan kelas "kotakresep", sehingga memiliki tampilan lebih estetis.
      - box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); Memberikan efek bayangan pada elemen dengan kelas "kotakresep". Efek bayangan adalah bayangan lembut yang memberikan kedalaman dan dimensi pada elemen.

    ![Screenshot (827)](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/117991094/97fccc33-7ac2-4ec3-a7a5-aac39eb3c5e3)
    ![Screenshot (828)](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/117991094/ea2ae230-9a19-43a3-b725-9eb444e56690)
      - document.addEventListener("DOMContentLoaded", function() { ... }); merupakan event listener yang akan menjalankan fungsi saat DOM sepenuhnya dimuat
      - Const recipeSearchinput = document.getElementById(“recipeSearch”): untuk mendapatkan elemen input dengan ID “recipeSearch”
      - const searchResults = document.getElementById("searchResults"); digunakan untuk mendapatkan elemen dengan ID “searchResults” yang digunakan untuk tempat dimana hasil pencarian ditampilkan 
      - const catCardList = document.querySelectorAll(".catCardList");  digunakan untuk mengumpulkan daftar elemen yang memiliki kelas “catCardList” berisi tentang kumpulan resep 
      - recipeSearchInput.addEventListener("input", function() { ... }); menambah event listener untuk input pada elemen “recipeSearch”
      - if (searchTerm.length === 0) { jika searchTerm.length ==0  maka searchResults.style.display = "none"; menyembunyikan daftar hadir jika tidak ada di dalam resep pencarian
      - return; digunakan untuk mengakhiri eksekusi fungsi saat ini dan mengembalikan kontrol ke pemanggil fungsi
      - document.getElementById("recipeSearch").style.width = "500px" digunakan untuk mengatur lebar recipeSearch 
      - document.getElementById("recipeSearch").style.padding = "10px" digunakan untuk mengatur padding recipeSearch 
      - catCardList.forEach(function(card) { ... }); digunakan untuk melakukan iterasi (perulangan ) melalui setiap resep
      - const h3 = card.querySelector("h3"); mendapatkan elemen judul resep di setiap  resep 
      - if (recipeTitle.includes(searchTerm)) digunakan jika memeriksa apakah input pencarian yang ada dalam judul resep maka results.push(card.outerHTML) untuk menyimpan HTML dari setiap kartu resep yang cocok dengan pencarian 
      - if (results.length > 0) jika results.legth>0 maka searchResults.innerHTML = results.join("") menampilkan hasil pencarian ke dalam elemen dengan ID”searchResults” dan searchResults.style.display = "block"; digunakan menampilkan elemen hasil pencarian 
      - else jika tidak searchResults.innerHTML = "Tidak ada hasil ditemukan."; digunakan menampilkan pesan jika tidak ada hasil yang ditemukan dan searchResults.style.display = "block"; digunakan untuk menampilkan elemen hasil pencarian yang jika tidak ada hasil yang ditemukan


  







    






