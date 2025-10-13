document.addEventListener('DOMContentLoaded', function() {
    // Get the apartment grid container
    const apartmentGrid = document.getElementById('apartment-grid');
    
    // Function to render all apartments
    function renderApartments() {
        // Clear existing content
        apartmentGrid.innerHTML = '';
        
        // Loop through each apartment and create a card
        apartments.forEach(apartment => {
            const apartmentCard = document.createElement('div');
            apartmentCard.className = 'apartment-card';
            
            // Create HTML structure for the apartment card
            apartmentCard.innerHTML = `
                <div class="apartment-image">
                    <img src="${apartment.image}" alt="${apartment.name}" onerror="this.src='images/placeholder.jpg'">
                </div>
                <div class="apartment-info">
                    <h3>${apartment.name}</h3>
                    <p>${apartment.description}</p>
                    <div class="apartment-features">
                        <span><i class="fas fa-bed"></i> ${apartment.bedrooms} Bedroom${apartment.bedrooms > 1 ? 's' : ''}</span>
                        <span><i class="fas fa-bath"></i> ${apartment.bathrooms} Bathroom${apartment.bathrooms > 1 ? 's' : ''}</span>
                        <span><i class="fas fa-ruler-combined"></i> ${apartment.area}</span>
                    </div>
                    <div class="apartment-amenities">
                        <p><strong>Amenities:</strong> ${apartment.amenities.slice(0, 3).join(', ')}${apartment.amenities.length > 3 ? '...' : ''}</p>
                    </div>
                    <a href="#" class="view-button" data-id="${apartment.id}">View Details</a>
                </div>
            `;
            
            // Add the card to the grid
            apartmentGrid.appendChild(apartmentCard);
        });
        
        // Add event listeners to view buttons
        document.querySelectorAll('.view-button').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const apartmentId = parseInt(this.getAttribute('data-id'));
                showApartmentDetails(apartmentId);
            });
        });
    }
    
    // Function to show apartment details
    function showApartmentDetails(id) {
        // Redirect to the detail page with the apartment ID as a parameter
        window.location.href = `detail.html?id=${id}`;
    }
    
    // Initialize the page
    renderApartments();
});

// Made with Bob
