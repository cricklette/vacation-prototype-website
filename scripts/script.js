document.addEventListener('DOMContentLoaded', () => {
    const keyTerms = {
        entertainment: ["entertainment", "arcade", "cinema", "theater", "festival", "museum", "gallery", "nightclub", "fun"],
        sightseeing: ["mountain", "beach", "landmark", "monument", "park", "garden", "historic site", "viewpoint", "trail", "waterfall", "sightseeing", "activities"],
        cuisine: ["food", "restaurant", "cafe", "diner", "bistro", "pub", "bar", "eatery", "buffet", "cuisine"],
        lodging: ["hotel", "motel", "inn", "hostel", "resort", "bed and breakfast", "guesthouse", "lodge", "cabin", "villa"],
        transportation: ["car", "bus", "train", "taxi", "bike", "scooter", "subway", "tram", "ferry", "plane", "cruise"],
        faq: ["help", "support", "question", "info", "information", "guide", "faq", "assistance", "service", "contact"]
    };

    var searchButton = document.getElementById('searchbtn');
    var searchInput = document.getElementById('searchinput');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        let found = false;
        let category = '';

        for (const currentCategory in keyTerms) {
            if (keyTerms[currentCategory].some(term => term.toLowerCase() === searchTerm)) {
                category = currentCategory;
                found = true;
                break;
            }
        }
        if (found) {
            window.location.href = `${category}.html`;
        } else {
            console.log('Invalid query');
        }
        searchInput.value = ''; 
    });
});
