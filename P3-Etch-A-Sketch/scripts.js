'use strict';

//Sidebar Animation
function toggleSidebar(ref){
    document.getElementById("sidebar").classList.toggle('active');
    }
  
  //Tile Slider Value
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value
   
    slider.onchange = function() {
      output.innerHTML = this.value;
      var hey = this.value;
      console.log(hey)
    }
  
  //Grid Creator
  const grid = document.querySelector("#container");
  const userInput = document.getElementById("demo");
  const rangeInput = document.getElementById('myRange').value;

  let createGrid = () => {
    for (let i = 0; i < 256; i++) {
      const div = document.createElement('div');
      div.classList.add('grid-item');
      grid.appendChild(div);
    }
  };

  let updateGrid = () => {
    grid.innerHTML = '';
    grid.style.setProperty(
      'grid-template-columns',
      `repeat($(userInput.value), 2fr)`
    );
    grid.style.setProperty(
      'grid-template-rows',
      `repeat($(userInput.value), 2fr)`
    );
    for (let i = 0; i < userInput.value * userInput.value; i++) {
      const div = document.createElement('div');
      div.claassList.aadd('square');
      grid.appendChild(div);
    }
    console.log(userInput.textContent);
  }

  const square = document.querySelector("div");
  square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", "color");
  });
  
  userInput.addEventListener("change", updateGrid);
  
  rangeInput.addEventListener("change", function() {
    document.getElementById("myRange").textContent = rangeInput.value;
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
  });
  
  createGrid();
