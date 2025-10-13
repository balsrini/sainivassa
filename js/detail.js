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
        document.title = `${apartment.name} - Luxury Furnished Apartments`;
        
        // Update schema.org structured data
        updateStructuredData(apartment);
    } else {
        // If no apartment is found, redirect to the home page
        window.location.href = 'index.html';
    }
    
    // Function to display apartment details
    function displayApartmentDetails(apartment) {
        const apartmentInfo = document.getElementById('apartment-info');
        
        // Clear existing content
        apartmentInfo.textContent = '';
        
        // Create elements using safe DOM methods
        const title = document.createElement('h1');
        title.textContent = apartment.name;
        apartmentInfo.appendChild(title);
        
        const description = document.createElement('div');
        description.className = 'description';
        const descPara = document.createElement('p');
        descPara.textContent = apartment.longDescription;
        description.appendChild(descPara);
        apartmentInfo.appendChild(description);
        
        // Features section
        const features = document.createElement('div');
        features.className = 'features';
        
        const featuresTitle = document.createElement('h2');
        featuresTitle.textContent = 'Features';
        features.appendChild(featuresTitle);
        
        const featureGrid = document.createElement('div');
        featureGrid.className = 'feature-grid';
        
        // Bedroom feature
        const bedroomFeature = document.createElement('div');
        bedroomFeature.className = 'feature';
        
        const bedIcon = document.createElement('i');
        bedIcon.className = 'fas fa-bed';
        bedroomFeature.appendChild(bedIcon);
        
        const bedText = document.createElement('span');
        bedText.textContent = `${apartment.bedrooms} Bedroom${apartment.bedrooms > 1 ? 's' : ''}`;
        bedroomFeature.appendChild(bedText);
        
        featureGrid.appendChild(bedroomFeature);
        
        // Bathroom feature
        const bathroomFeature = document.createElement('div');
        bathroomFeature.className = 'feature';
        
        const bathIcon = document.createElement('i');
        bathIcon.className = 'fas fa-bath';
        bathroomFeature.appendChild(bathIcon);
        
        const bathText = document.createElement('span');
        bathText.textContent = `${apartment.bathrooms} Bathroom${apartment.bathrooms > 1 ? 's' : ''}`;
        bathroomFeature.appendChild(bathText);
        
        featureGrid.appendChild(bathroomFeature);
        
        // Area feature
        const areaFeature = document.createElement('div');
        areaFeature.className = 'feature';
        
        const areaIcon = document.createElement('i');
        areaIcon.className = 'fas fa-ruler-combined';
        areaFeature.appendChild(areaIcon);
        
        const areaText = document.createElement('span');
        areaText.textContent = apartment.area;
        areaFeature.appendChild(areaText);
        
        featureGrid.appendChild(areaFeature);
        features.appendChild(featureGrid);
        apartmentInfo.appendChild(features);
        
        // Amenities section
        const amenities = document.createElement('div');
        amenities.className = 'amenities';
        
        const amenitiesTitle = document.createElement('h2');
        amenitiesTitle.textContent = 'Amenities';
        amenities.appendChild(amenitiesTitle);
        
        const amenitiesList = document.createElement('div');
        amenitiesList.className = 'amenities-list';
        
        // Add each amenity
        apartment.amenities.forEach(amenity => {
            const amenityDiv = document.createElement('div');
            amenityDiv.className = 'amenity';
            
            const checkIcon = document.createElement('i');
            checkIcon.className = 'fas fa-check-circle';
            amenityDiv.appendChild(checkIcon);
            
            const amenityText = document.createElement('span');
            amenityText.textContent = amenity;
            amenityDiv.appendChild(amenityText);
            
            amenitiesList.appendChild(amenityDiv);
        });
        
        amenities.appendChild(amenitiesList);
        apartmentInfo.appendChild(amenities);
    }
    
    // Function to set up the image gallery
    function setupImageGallery(apartment) {
        const mainImage = document.getElementById('main-image');
        const thumbnailContainer = document.getElementById('thumbnail-container');
        
        // Clear existing thumbnails
        thumbnailContainer.innerHTML = '';
            
        // Set main image
        mainImage.src = apartment.images[0] || 'images/placeholder.jpg';
        mainImage.alt = `${apartment.name} - Main view of the luxury apartment`;
        
        // Create a wrapper for better thumbnail alignment
        const thumbnailWrapper = document.createElement('div');
        thumbnailWrapper.className = 'thumbnail-wrapper';
        thumbnailContainer.appendChild(thumbnailWrapper);
        
        // Create thumbnails
        apartment.images.forEach((image, index) => {
            // Create thumbnail container for consistent sizing
            const thumbnailItem = document.createElement('div');
            thumbnailItem.className = 'thumbnail-item';
            
            // Create the actual thumbnail image
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `${apartment.name} - View ${index + 1} of the luxury apartment`;
            thumbnail.className = index === 0 ? 'thumbnail active' : 'thumbnail';
            thumbnail.dataset.index = index;
            thumbnail.setAttribute('role', 'button');
            thumbnail.setAttribute('aria-label', `View image ${index + 1} of ${apartment.images.length}`);
            
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
                console.error(`Failed to load thumbnail image: ${this.src}`);
                this.src = 'images/placeholder.jpg';
            };
            
            // Add thumbnail to its container
            thumbnailItem.appendChild(thumbnail);
            
            // Add thumbnail item to wrapper
            thumbnailWrapper.appendChild(thumbnailItem);
        });
        
        // Add error handling for main image
        mainImage.onerror = function() {
            console.error(`Failed to load main image: ${this.src}`);
            this.src = 'images/placeholder.jpg';
        };
    }
    
    // Function to update structured data for SEO
    function updateStructuredData(apartment) {
        const schemaScript = document.getElementById('apartment-schema');
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "Apartment",
            "name": apartment.name,
            "description": apartment.longDescription,
            "image": apartment.images.map(img => new URL(img, window.location.href).href),
            "numberOfRooms": apartment.bedrooms,
            "amenityFeature": apartment.amenities.map(amenity => ({
                "@type": "LocationFeatureSpecification",
                "name": amenity
            })),
            "floorSize": {
                "@type": "QuantitativeValue",
                "value": apartment.area.replace(/[^0-9]/g, ''),
                "unitCode": "SQM"
            }
        };
        
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
    }
});

// Made with Bob
