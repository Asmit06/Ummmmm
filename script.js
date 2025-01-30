function showMessage(response) {
  let videoPlayed = false;
  let playingAudio = false;
  // const preloadedVideo = document.createElement("video");
  // preloadedVideo.src = "./Maroon 5 - Sugar.mp4#t=42";
  // preloadedVideo.preload = "auto"; // Preloads the video
  // preloadedVideo.autoplay = true;
  // preloadedVideo.controls = false;
  // document.body.appendChild(preloadedVideo);
  // preloadedVideo.style.display = "none";

  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set the button position to absolute
    noButton.style.position = "absolute";

    // Change the image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply the new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide the name message
    document.getElementById("question").textContent =
      "Bhai tf sharam krle 😭";
    document.getElementById("name").style.display = "none";

    // Add a mouseover event listener to the "No" button
    noButton.addEventListener("mouseenter", () => {
      if (!videoPlayed) {
        // preloadedVideo.style.display = "block"; // Show the video
        // preloadedVideo.autoplay = true;
        // preloadedVideo.controls = false;
        // preloadedVideo.style.position = "fixed";
        // preloadedVideo.style.top = "40%";
        // preloadedVideo.style.left = "50%";
        // preloadedVideo.style.transform = "translate(-50%, -50%)";
        // preloadedVideo.style.width = "700px";

        const audioElement = document.createElement("audio");
        audioElement.src = "./Maroon 5 - Sugar.mp4#t=42"; // Source of the sound
        audioElement.preload = "auto"; // Preloading the audio
        audioElement.play()
        .then(() => {
          playingAudio = audioElement; // Store reference once it plays
        })
        .catch(e => console.error("Audio playback failed:", e)); // Catch and log playback errors
        // Set the flag to true after playing the video
        videoPlayed = true;
      }

      // Generate new random coordinates when the button is hovered
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.zIndex = "100";
      // Apply new coordinates to the button, causing it to move
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
    });
  }

  if (response === "Yes") {
    // Remove the name message and the "No" button
    // preloadedVideo.pause();  // Stop playback
    // preloadedVideo.src = ""; // Clear the video source
    // preloadedVideo.load();   // Reset the video element
    // preloadedVideo.remove(); // Remove from DOM

    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    //console.log(document.querySelector("audio"));

    if (playingAudio) {
      playingAudio.pause();
      playingAudio.src = ""; // Clear the source
      playingAudio.load(); // Reset the audio element
      playingAudio.remove();
      playingAudio = null; // Clear reference
    }

    // Create an audio element to play the sound
    const audioElement = document.createElement("audio");
    audioElement.src = "./Blue-Yung-Kai.mp3"; // Source of the sound
    audioElement.preload = "auto"; // Preloading the audio
    audioElement.play() // Play the sound
      .catch(e => console.error("Audio playback failed:", e)); // Catch and log playback errors

    // Update the text content, display the message, and change the image to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "Yayyyyyyyyy!!! Was this really better than the toothbrush though? ";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    
    document.body.style.backgroundImage = "url('images/gunj copy.jpg')"; 
    document.getElementsByClassName("image")[0].src = "images/dance.gif"; 

    // Remove the "Yes" button
    document.getElementById("yesButton").remove();
  }

}
