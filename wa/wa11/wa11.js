const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//declare an array of image 
const imageFiles = ['pic1.png', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Declaring the alt text for each image
const altText = [
  'Image of Folsom Football Field in Boulder, CO',
  'Image of the flatirons in Boulder, CO',
  'Image of purple and white flowers',
  'Image of peaches in a box',
  'Image of orange and yellow fall leaves on trees beside  a street road'
];

// Step 3: Looping through images
imageFiles.forEach((filename, index) => {
  const newImg = document.createElement('img');
  newImg.setAttribute('src', `images/${filename}`);
  newImg.setAttribute('alt', altText[index]);
  thumbBar.appendChild(newImg);

  // Step 4: Add click event listener to each thumbnail
  newImg.addEventListener('click', () => {
    displayedImage.setAttribute('src', newImg.getAttribute('src'));
    displayedImage.setAttribute('alt', newImg.getAttribute('alt'));
  });
});

// Step 5: Wiring up the Darken/Lighten button
btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});
