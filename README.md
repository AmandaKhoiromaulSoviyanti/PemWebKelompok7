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

- Penjelasan Coding Index HTML

  ![Screenshot1 (816)](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/117991094/785a3f90-0788-4bf7-8ea0-790a0a752ddc)
  - DOCTYPE html digunakan untuk mendeklarasikan atau memberi tau browser bahwa halaman ini merupakan halaman dokumen html5
  - html lang = “en”  menunjukkan bahwa bahasa yang digunakan pada halaman merupakan bahasa inggris 
  - head digunakan untuk menandakan bahwa awal dari kepala dokumen HTML.
  - meta charset = “UTF - 8” digunakan untuk memberi tahu browser bahwa dokumen yang digunakan menggunakan set karakter UTF - 8 yang merupakan standar umum untuk encoding karakter.
  - meta name = “viewport” content=”width=device-width initial-scale = 1.0” digunakan untuk mengontrol tampilan halaman di perangkat dengan mengatur tampilan lebar dan mengatur skala     awal 
  - title SeleraKita. title digunakan untuk menetapkan judul dokumen yang nantinya akan muncul di web browser 
  - link rel=”stylesheet” href=”style.css” digunakan untuk menautkan file stylesheet yang disebut “style.css” sehingga mudah untuk memodifikasi tata letak halaman dengan mengedit file CSS terpisah

![Screenshot1 (817)](https://github.com/AmandaKhoiromaulSoviyanti/PemWebKelompok7/assets/117991094/bd3c5ccb-2110-4ae3-9638-0dfab31c0468)
  - body menandakan awal dari elemen tubuh dari elemen halaman HTML 
  - nav menunjukkan bahwa bagian ini merupakan bagian navigasi dari halaman web
  - div class = “navbar” div merupakan elemen divisi yang mempunyai class “navbar” yang digunakan  untuk mengelompokkan elemen navigasi dan class “navbar” nantinya akan digunakan di css
  - div class = “Title”<a href =’ ‘>SeleraKita.a div element divisi (div) yang memiliki class “Title” yang berisi tautan dengan teks “SeleraKita. “  dan teks ini merupakan judul atau nama situs web.
  - div class =”menu” merupakan div dengan class “menu” yang digunakan untuk mengelompokkan elemen menu 
  - ul merupakan unordered list jenis daftar yang berbentuk poin poin , tidak memiliki urutan khusus biasanya digunakan untuk menampilkan daftar item yang sejajar
  - pada line 16 - 18  merupakan daftar item yang berurutan yang berisi Home,Resep, About yang akan  mengarah ke elemen dengan id “home”, id " Resep", id "About " iyo pada halaman tersebut  

  




