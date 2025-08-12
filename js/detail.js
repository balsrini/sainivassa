document.addEventListener('DOMContentLoaded', function() {
    // Get apartment ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const apartmentId = parseInt(urlParams.get('id'));
    
    // Find the apartment with the matching ID
    const apartment = apartments.find(apt => apt.id === apartmentId);
    
    // If apartment is found, display its details
    if (apartment) {
        displayApartmentDetails(apartment);
        setupImageGallery(apartment);
        document.title = `${apartment.name} - Luxury Service Apartments`;
    } else {
        // If no apartment is found, redirect to the home page
        window.location.href = 'index.html';
    }
    
    // Function to display apartment details
    function displayApartmentDetails(apartment) {
        const apartmentInfo = document.getElementById('apartment-info');
        
        // Create HTML for apartment info
        const infoHTML = `
            <h1>${apartment.name}</h1>
            <div class="price">${apartment.price}</div>
            <div class="description">
                <p>${apartment.longDescription}</p>
            </div>
            <div class="features">
                <h2>Features</h2>
                <div class="feature-grid">
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>${apartment.bedrooms} Bedroom${apartment.bedrooms > 1 ? 's' : ''}</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>${apartment.bathrooms} Bathroom${apartment.bathrooms > 1 ? 's' : ''}</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${apartment.area}</span>
                    </div>
                </div>
            </div>
            <div class="amenities">
                <h2>Amenities</h2>
                <div class="amenities-list">
                    ${apartment.amenities.map(amenity => `
                        <div class="amenity">
                            <i class="fas fa-check-circle"></i>
                            <span>${amenity}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Set the HTML content
        apartmentInfo.innerHTML = infoHTML;
    }
    
    // Function to set up the image gallery
    function setupImageGallery(apartment) {
        const mainImage = document.getElementById('main-image');
        const thumbnailContainer = document.getElementById('thumbnail-container');
        
        // Set main image
        mainImage.src = apartment.images[0] || 'images/placeholder.jpg';
        mainImage.alt = apartment.name;
        
        // Create thumbnails
        apartment.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `${apartment.name} - Image ${index + 1}`;
            thumbnail.className = index === 0 ? 'thumbnail active' : 'thumbnail';
            thumbnail.dataset.index = index;
            
            // Add click event to thumbnail
            thumbnail.addEventListener('click', function() {
                // Update main image
                mainImage.src = this.src;
                mainImage.alt = this.alt;
                
                // Update active class
                document.querySelectorAll('.thumbnail').forEach(thumb => {
                    thumb.classList.remove('active');
                });
                this.classList.add('active');
            });
            
            // Add error handling for images
            thumbnail.onerror = function() {
                this.src = 'images/placeholder.jpg';
            };
            
            // Add thumbnail to container
            thumbnailContainer.appendChild(thumbnail);
        });
        
        // Add error handling for main image
        mainImage.onerror = function() {
            this.src = 'images/placeholder.jpg';
        };
    }
});

// Made with Bob
