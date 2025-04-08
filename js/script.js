// Copyright (c) 2025 Angelo Garcia All rights reserved
//
// Created by: Angelo Garcia
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // Get values from input fields
    let baseA = parseFloat(document.getElementById('base-a-of-trapezoid').value);
    let baseB = parseFloat(document.getElementById('base-b-of-trapezoid').value);
    let height = parseFloat(document.getElementById('height-of-trapezoid').value);

  // Check if the input values are valid numbers
  if (isNaN(baseA) || isNaN(baseB) || isNaN(height) || baseA <= 0 || baseB <= 0|| height <= 0) {
    alert("Please enter valid positive numbers for both bases and height.");
    return;
  }

  // Process (Calculate area and perimeter)
  let area = (baseA+baseB)/2*height;
  //let perimeter = a+b+c+d;

  // Output the results
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²';
  //document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter.toFixed(2) + ' cm';
}
