// API endpoint for the cat fact
const factEndpoint = "https://catfact.ninja/fact";

// creating event listener for button click
document.getElementById("factButton").addEventListener("click", getFact);

// gets the fact from the API
async function getFact() {
    try {
        const response = await fetch(factEndpoint);
        
        // if response is successful
        if (!response.ok) {
            throw new Error("Network response: not ok");
        }
        
        const data = await response.json();
        // log fact in consol
        console.log("Fetched fact:", data.fact);
         // display fact
        displayRes(data.fact); 
    } catch (error) {
        // log error in console
        console.error("Failed to get fact:", error);  
        // alert user
        alert("Failed to get a fact. Please try again.");  
    }
}

// display the fetched fact 
function displayRes(factText) {
    document.getElementById("factDisplay").textContent = factText;
}

// fetch + display a fact on page load
getFact();
