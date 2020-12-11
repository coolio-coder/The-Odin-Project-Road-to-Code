'use strict';

//Sidebar Animation
function toggleSidebar(ref){
    document.getElementById("sidebar").classList.toggle('active');
    }
  
  //Tile Slider Value
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value
   
    const help = slider.onchange = function() {
      output.innerHTML = this.value;
    }
  
  //Grid Creator
  const grid = document.querySelector("#container");
  const userInput = document.getElementById("demo");
  const sliderValue = slider.value;
  const resetClear = document.querySelector('.reset');

  // const rangeInput = document.getElementById('myRange').value;

  let createGrid = () => {
    for (let i = 0; i < 256; i++) {
      const div = document.createElement('div');
      div.classList.add('square');
      grid.appendChild(div);
    }
  };

  let updateGrid = () => {
    grid.innerHTML = "";
    document.getElementById("myRange").textContent = slider.value;
    var tileSize = slider.value;
    grid.style.setProperty(
      'grid-template-columns',
      `repeat(${tileSize}, 2fr)`
    );
    grid.style.setProperty(
      'grid-template-rows',
      `repeat(${tileSize}, 2fr)`
    );
    for (let i = 0; i < tileSize * tileSize; i++) {
      const div = document.createElement('div');
      div.classList.add('square');
      grid.appendChild(div);
    }
    startingColor();
  }

  slider.addEventListener("change", updateGrid);
  resetClear.addEventListener('click', reset);

  function reset(){
    grid.innerHTML
    let divs = document.querySelectorAll('.square');
    divs.forEach(function(div){
      div.parentNode.removeChild(div);
    });
    updateGrid();
    startingColor();
  }

  //Update Grid Color
  const square = document.querySelector("div");

  let className = ["gray"]
  let oldClassName = ["gray"]
  let currentColor = className[0];
  //Finds the color color from fetch class name
  const colorButton = document.querySelectorAll('button');
  colorButton.forEach(function(e){
    e.addEventListener('click', fetchClassName);
  })
  //Fetches the class name
  function fetchClassName(e) {
    className.unshift(e.srcElement.className);
    console.log(className)
    oldClassName = className.pop();
    console.log(className)
    currentColor = className;
    setColor();
  }

  //set default color upon loading the webpage
  function startingColor(){
    let divs = document.querySelectorAll('.square');
    divs.forEach(function(div) {
      div.addEventListener('mouseover', defaultColor);
    })
  }
 
  function setColor(){
    let divs = document.querySelectorAll('.square');
    switch(className[0]) {
      case 'rainbow': 
        divs.forEach(function(div) {
          div.removeEventListener('mouseover', defaultColor);
          div.addEventListener('mouseover', rainbowColor);
        })
        break;
      case "gray":
        divs.forEach(function(div) {
          div.removeEventListener('mouseover', rainbowColor);
          div.addEventListener('mouseover', defaultColor);
        })
        break;
      case 'black':
        currentColor = "rgba(0, 0, 0, 1)"
        divs.forEach(function(div) {
          div.removeEventListener('mouseover', rainbowColor);
          div.removeEventListener('mouseover', defaultColor);
          div.addEventListener('mouseover', updateColor);
        }) 
        break;
        case 'blue':
          currentColor = "rgba(30, 139, 195, 1)"
          divs.forEach(function(div) {
            div.removeEventListener('mouseover', rainbowColor);
            div.removeEventListener('mouseover', defaultColor);
            div.addEventListener('mouseover', updateColor);
          }) 
          break;
        case 'red':
          currentColor = "rgba(207, 0, 15, 1)"
            divs.forEach(function(div) {
            div.removeEventListener('mouseover', rainbowColor);
            div.removeEventListener('mouseover', defaultColor);
            div.addEventListener('mouseover', updateColor);
          }) 
          break;
        case 'eraser':
          currentColor = 'rgba(255,255,255,1)'
          for (let i = 0; i < divs.length; i++) {
            let div = divs[i];
            div.removeEventListener('mouseover', rainbowColor);
            div.removeEventListener('mouseover', defaultColor);
            div.addEventListener('mouseover', updateColor);
          }
        break;
    }
  }

  function updateColor(e) {
      e.target.style.backgroundColor = currentColor;
      console.log("color received :" + currentColor);
  }

  function rainbowColor(e){
    let r = Math.floor(Math.random() * 256)+50;
    let g = Math.floor(Math.random() * 256)+50;
    let b = Math.floor(Math.random() * 256)+50;
    let rgb = `rgba(${r}, ${g}, ${b}, 0.5)`
    e.target.style.backgroundColor = rgb;
  }
let div = document.querySelectorAll('.square');
  function defaultColor(e){
    let gray = 'rgba(195,195,195,1)'
    e.target.style.backgroundColor = gray;
  }

  // square.addEventListener("mouseover", function(event) {
  //   event.target.classList.replace("square", "color");
  //   for(var i = 0; i < square.length; i++){
  //     square[i].style.backgroundColor = 'gray';
  // }
  // });

  
  
  //Creates the first grid
  createGrid();
  //Sets the default color
  startingColor();