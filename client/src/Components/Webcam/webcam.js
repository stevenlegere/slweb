import React from "react";
import Webcam from "react-webcam";

// BLOB - Binary Large Object
// CHUNK -   smaller, discrete piece or fragment of data

// constructor function is responsible for initialising the state and setting up necessary variables for the WebcamCapture component
class WebcamCapture extends React.Component {
  constructor(props) {
    super(props); // calls the constructor
    this.webcamRef = React.createRef(); // used to reference the webcam element in the DOM
    this.mediaRecorder = null; // hold the MediaRecorder instance for recording the video stream
    this.chunks = []; // empty array that will store the recorded video data in chunks.
    this.videoConstraints = {
      facingMode: "user",
      height: 640,
      width: 480,
      frameRate: 30,
    };
  }

  startRecording = () => { // function that starts the recording
    const options = { mimeType: "video/webm" };
    this.chunks = [];

    navigator.mediaDevices // function to access the user's media devices
      .getUserMedia({ video: this.videoConstraints, audio: false }) // passes an object as an argument with the video property set to this.videoConstraints,
      .then((stream) => {
        this.mediaRecorder = new MediaRecorder(stream, options);

        this.mediaRecorder.ondataavailable = (event) => { // event handler for the mediaRecorder object
          if (event.data && event.data.size > 0) { // checks if there is data and if its size is greater than 0
            this.chunks.push(event.data); // pushes data in to chunks
          }
        };

        this.mediaRecorder.onstop = () => { // event handler for the stop event
          const videoBlob = new Blob(this.chunks, { type: "video/webm" }); // creates a Blob object named videoBlob by passing this.chunks as an argument
          const videoUrl = URL.createObjectURL(videoBlob); // generates a URL for the videoBlob
          // Do something with the video URL, such as saving it locally or sending it to a database or websocket
          console.log("Video URL:", videoUrl);
        };

        this.mediaRecorder.start(); // look for errors on start
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });
  };

  stopRecording = () => { // Function that handles the stop recording button
    if (
      this.mediaRecorder &&
      this.mediaRecorder.state === "recording"
    ) {
      this.mediaRecorder.stop();
      this.webcamRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
    }
  };

  render() { // Returned JSX
    return (
      <div>
        <Webcam
          audio={false}
          ref={this.webcamRef}
          mirrored={true}
          screenshotFormat="image/jpeg"
          videoConstraints={this.videoConstraints}
        />
        <button onClick={this.startRecording}>Start Recording</button>
        <button onClick={this.stopRecording}>Stop Recording</button>
      </div>
    );
  }
}

export default WebcamCapture;
