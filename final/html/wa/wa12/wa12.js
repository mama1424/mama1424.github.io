let myData = {};

function fetchData(){
    fetch('https://corsproxy.io/?https://xkcd.com/614/info.0.json')


        .then(res =>{
            myData = res;
            console.log(myData);

            //title
            document.getElementById("title").src

            //display comic
            document.getElementById("comic").src = myData.img;

            // alt text
        })
        const comicTitle = document.getElementById('comic-title');
const comicImage = document.getElementById('comic-image');
const comicDate = document.getElementById('comic-date');
const newComicButton = document.getElementById('new-comic');

// Helper function to fetch a random xkcd comic
async function fetchRandomComic() {
  // Generate a random comic number between 1 and 3000
  const randomComicNumber = Math.floor(Math.random() * 3000) + 1;
  
  // Use the proxy URL to fetch the comic data
  const apiUrl = `https://corsproxy.io/?https://xkcd.com/${randomComicNumber}/info.0.json`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch comic: ${response.status}`);
    }
    const data = await response.json();
    
    // Update the page with the comic's data
    updateComic(data);
  } catch (error) {
    console.error('Error fetching comic:', error);
    comicTitle.textContent = 'Error loading comic. Please try again!';
    comicImage.src = '';
    comicImage.alt = '';
    comicDate.textContent = '';
  }
}

// Helper function to update the comic details on the page
function updateComic(comic) {
  comicTitle.textContent = comic.title;
  comicImage.src = comic.img;
  comicImage.alt = comic.alt;
  comicDate.textContent = `Published on: ${comic.month}/${comic.day}/${comic.year}`;
}

// Event listener for the button
newComicButton.addEventListener('click', fetchRandomComic);

}

fetchData();