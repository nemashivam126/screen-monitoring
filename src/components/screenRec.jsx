import { useReactMediaRecorder } from "react-media-recorder-2";

export const ScreenRec = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true });

  return (
    <div className="container d-flex flex-column align-items-center">
      <div><h4>Screen Recorder</h4></div>
      <div className="text-warning"><p><b>{status.toUpperCase()}</b></p></div>
      <div className="input-group d-flex justify-content-center mb-4">
        <button className="btn btn-success" onClick={startRecording}>Start Recording</button>
        <button className="btn btn-danger" onClick={stopRecording}>Stop Recording</button>
      </div>
      <div><video src={mediaBlobUrl} height={600} width={600} controls autoPlay loop /></div>
    </div>
  );
};