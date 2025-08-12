#!/bin/bash

# Array of apartment names
apartment_names=(
  "Luxury Suite"
  "Executive Studio"
  "Family Apartment"
  "Penthouse Suite"
  "Cozy Studio"
  "Garden Apartment"
  "Urban Loft"
  "Deluxe Suite"
  "Skyline View Apartment"
)

# Array of colors for different apartments
colors=(
  "#3498db"
  "#2ecc71"
  "#e74c3c"
  "#9b59b6"
  "#f1c40f"
  "#1abc9c"
  "#e67e22"
  "#34495e"
  "#16a085"
)

# Create main apartment images
for i in {1..9}; do
  apt_index=$((i-1))
  apt_name="${apartment_names[$apt_index]}"
  color="${colors[$apt_index]}"
  
  cat > "apartment$i.jpg" << EOF
<!DOCTYPE html>
<html>
<head>
    <title>Apartment $i</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: $color;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .container {
            padding: 20px;
            border: 2px solid white;
            border-radius: 10px;
        }
        h1 {
            font-size: 32px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>$apt_name</h1>
        <p>Main Image</p>
    </div>
</body>
</html>
EOF

  # Create 8 detail images for each apartment
  for j in {1..8}; do
    cat > "apartment${i}_${j}.jpg" << EOF
<!DOCTYPE html>
<html>
<head>
    <title>Apartment $i - Image $j</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: $color;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .container {
            padding: 20px;
            border: 2px solid white;
            border-radius: 10px;
        }
        h1 {
            font-size: 28px;
        }
        h2 {
            font-size: 22px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>$apt_name</h1>
        <h2>Image $j</h2>
    </div>
</body>
</html>
EOF
  done
done

echo "Generated all HTML image placeholders successfully!"

# Made with Bob
