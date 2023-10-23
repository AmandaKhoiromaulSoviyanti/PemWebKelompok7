function showLoading(button) {
    var loading = button.nextElementSibling; // Ambil elemen loading setelah tombol
    
    loading.style.display = "inline-block"; // Tampilkan elemen loading
    
    // Sembunyikan tombol "Lihat Resep" selama proses loading
    button.style.display = "none";
    
    setTimeout(function() {
        loading.style.display = "none"; // Sembunyikan elemen loading
        button.style.display = "inline-block"; // Tampilkan kembali tombol "Lihat Resep"
        
        // Pindahkan ke halaman resep
        window.location.href = button.href;
    }, 20000); // Waktu dalam milidetik (di sini, 20000 milidetik = 20 detik)
}
