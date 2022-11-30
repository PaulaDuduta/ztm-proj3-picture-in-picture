const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Async function
//Prompt to select a media stream, pass to a video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //Catch Errors
    console.log('Whoops! Here is an error:', error);
  }
}

button.addEventListener('click', async () => {
  //Disable the button
  button.disabled = true;

  //Start Picture in Picture
  await videoElement.requestPictureInPicture();

  //Reset Button
  button.disabled = false;
});

//On Load
selectMediaStream();
