document.addEventListener('DOMContentLoaded', () => {
    const keyTerms = {
        entertainment: ["entertainment", "arcade", "cinema", "theater", "festival", "museum", "gallery", "nightclub", "fun"],
        sightseeing: ["mountain", "beach", "landmark", "monument", "park", "garden", "historic site", "viewpoint", "trail", "waterfall", "sightseeing", "activities"],
        cuisine: ["food", "restaurant", "cafe", "diner", "bistro", "pub", "bar", "eatery", "buffet", "cuisine"],
        lodging: ["hotel", "motel", "inn", "hostel", "resort", "bed and breakfast", "guesthouse", "lodge", "cabin", "villa"],
        transportation: ["car", "bus", "train", "taxi", "bike", "scooter", "subway", "tram", "ferry", "plane", "cruise"],
        faq: ["help", "support", "question", "info", "information", "guide", "faq", "assistance", "service", "contact"],
        index: ["home", "about", "back"]
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




    let currentPage = window.location.pathname.split('/').pop().split('.')[0];
    console.log(currentPage);
    
    let links = document.querySelectorAll('.header-links a');
    links.forEach(link => {
        if (link.textContent.toLowerCase() == currentPage) {
            link.classList.add('selected');
            console.log(`added selected to ${link.textContent}`);
        }
        else if(link.textContent.toLowerCase() == 'home' && currentPage == 'index') {
            link.classList.add('selected');
        }
        else {
            link.classList.remove('selected');
        }
    });

    let footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        if (link.textContent.toLowerCase() == currentPage) {
            link.classList.add('selected');
        }
        else if(link.textContent.toLowerCase() == 'home' && currentPage == 'index') {
            link.classList.add('selected');
        }
        else if(link.textContent.toLowerCase() == 'sitemap and references' && currentPage == 'sitemap') {
            console.log("sitemap")
            link.classList.add('selected');
        }
        else {
            link.classList.remove('selected');
        }
    });

    let iconLinks = document.querySelectorAll('.icon-link');
    iconLinks.forEach(link => {
        let text = link.querySelector('p').textContent.toLowerCase();
        if (text == currentPage) {
            link.classList.add('selected');
        } else {
            link.classList.remove('selected');
        }
    });
});
    


