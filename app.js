// Dummy data for listings with category-specific images
const listingsData = [
    { title: "Gorgeous Sofa", price: 150, rating: "★★★★", imgSrc: "https://images.unsplash.com/photo-1519085361503-5c3d95e0e05b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNvZmF8ZW58MHx8fHwxNjQzNTA3MDAy&ixlib=rb-1.2.1&q=80&w=400" },
    { title: "Mountain Bike", price: 300, rating: "★★★★★", imgSrc: "https://images.unsplash.com/photo-1515378791036-0648a3ef77c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJpa2V8ZW58MHx8fHwxNjQzNTA3MDAz&ixlib=rb-1.2.1&q=80&w=400" },
    { title: "Smartphone", price: 400, rating: "★★★", imgSrc: "https://images.unsplash.com/photo-1518756131217-31b80c7e750e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHNtb3J0YW5lfGVufDB8fHx8MTY0MzUwNzAwNg&ixlib=rb-1.2.1&q=80&w=400" },
    { title: "Coffee Table", price: 80, rating: "★★★★", imgSrc: "https://images.unsplash.com/photo-1542744095-0da7e67d30c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxjb2ZmZWUlMjB0YWJsZXxlbnwwfHx8fDE2NDM1MDcwMjE&ixlib=rb-1.2.1&q=80&w=400" },
    { title: "Office Chair", price: 120, rating: "★★★★★", imgSrc: "https://images.unsplash.com/photo-1555685812-2c6c6f45d2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fG9mZmljZSUyMGNoYWlyfGVufDB8fHx8MTY0MzUwNzAwOQ&ixlib=rb-1.2.1&q=80&w=400" },
    { title: "Wireless Headphones", price: 50, rating: "★★★", imgSrc: "https://images.unsplash.com/photo-1514463201192-1e098e1e37b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fHdpcmV8ZW58MHx8fHwxNjQzNTA3MDA5&ixlib=rb-1.2.1&q=80&w=400" },
    // Add more listings if needed
];

// Function to dynamically generate listings
function generateListings(listings) {
    const listingsContainer = document.getElementById('listings');
    listingsContainer.innerHTML = ''; // Clear existing listings

    listings.forEach(listing => {
        const listingCard = document.createElement('div');
        listingCard.classList.add('listing-card');
        
        listingCard.innerHTML = `
            <img src="${listing.imgSrc}" alt="${listing.title}">
            <div class="listing-details">
                <h3>${listing.title}</h3>
                <p>$${listing.price}</p>
                <span>Seller Rating: ${listing.rating} ★</span>
            </div>
        `;
        
        listingsContainer.appendChild(listingCard);
    });
}

// Function to handle search
function searchItems() {
    const query = document.querySelector('.search-bar').value.toLowerCase();
    const minPrice = parseInt(document.querySelector('input[placeholder="Min Price"]').value);
    const maxPrice = parseInt(document.querySelector('input[placeholder="Max Price"]').value);
    const location = document.querySelector('input[placeholder="Location"]').value.toLowerCase();

    // Filter listings based on the search query
    const filteredListings = listingsData.filter(listing => {
        const matchesQuery = listing.title.toLowerCase().includes(query);
        const matchesPrice = (!minPrice || listing.price >= minPrice) && (!maxPrice || listing.price <= maxPrice);
        return matchesQuery && matchesPrice;
    });

    generateListings(filteredListings);
}

// Initial load of listings
generateListings(listingsData);
