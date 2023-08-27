import { useReactMediaRecorder } from "react-media-recorder-2";

export const VideoRec = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  return (
    <div className="container d-flex flex-column">
      <div><h4>Webcam</h4></div>
      <div className="text-warning"><p><b>{status.toUpperCase()}</b></p></div>
      <div><video src={mediaBlobUrl} height={150} width={150} controls autoPlay loop /></div>
      <div className="input-group mb-4">
        <button className="btn btn-success" onClick={startRecording}>Start</button>
        <button className="btn btn-danger" onClick={stopRecording}>Stop</button>
      </div>
    </div>
  );
};