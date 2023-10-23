document.addEventListener("DOMContentLoaded", function() {
    const recipeSearchInput = document.getElementById("recipeSearch");
    const searchResults = document.getElementById("searchResults");
    const catCardList = document.querySelectorAll(".catCardList");

    recipeSearchInput.addEventListener("input", function() {
        const searchTerm = recipeSearchInput.value.toLowerCase();

        searchResults.innerHTML = ""; // Kosongkan daftar hasil pencarian

        if (searchTerm.length === 0) {
            searchResults.style.display = "none"; // Sembunyikan daftar hasil jika tidak ada pencarian
            return;
        }

        const results = [];
       
        document.getElementById("recipeSearch").style.width = "500px"
        document.getElementById("recipeSearch").style.padding = "10px"

        // Loop melalui setiap resep
        catCardList.forEach(function(card) {
            const h3 = card.querySelector("h3");
            const recipeTitle = h3.textContent.toLowerCase();

            if (recipeTitle.includes(searchTerm)) {
                results.push(card.outerHTML);
            }
        });

        if (results.length > 0) {
            searchResults.innerHTML = results.join(""); // Tampilkan hasil pencarian
            searchResults.style.display = "block";
        } else {
            searchResults.innerHTML = "Tidak ada hasil ditemukan."; // Tampilkan pesan jika tidak ada hasil
            searchResults.style.display = "block";
        }
    });
});
