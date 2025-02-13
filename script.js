// Select all elements with the class "key"
let keys = document.querySelectorAll(".key");

// Add a click event listener to each key
keys.forEach(key => {
    key.addEventListener("click", () => {
        // Play the audio associated with the clicked key
        audioPlayer(key.textContent.trim());
    });
});

// Function to play the audio for a given key name
function audioPlayer(keyName) {
    // Select the audio element with the corresponding source
    let audio = document.querySelector(`audio[src="notes/${keyName}.mp3"]`);
    
    if (audio) {
        // If the audio element is found, play the audio
        console.log(`Playing: ${keyName}`);
        audio.play();
    } else {
        // If the audio element is not found, log an error message
        console.error(`Audio file not found for key: ${keyName}`);
    }
}