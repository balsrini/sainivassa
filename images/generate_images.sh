#!/bin/bash

# Create sample images for all apartments
for apt in {1..9}; do
  # Create main apartment image
  convert -size 800x600 canvas:lightblue -fill black -pointsize 40 -gravity center -annotate 0 "Apartment $apt" "apartment$apt.jpg"
  
  # Create 8 detail images for each apartment
  for img in {1..8}; do
    convert -size 800x600 canvas:lightblue -fill black -pointsize 40 -gravity center -annotate 0 "Apartment $apt - Image $img" "apartment${apt}_${img}.jpg"
  done
done

echo "Generated all apartment images successfully!"

# Made with Bob
