import React, { useState, useRef } from 'react';
import classes from './mockInterview.module.css';
import ReactPlayer from 'react-player';
import imgage from '../../assets/imgs/image1.jpg';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import Webcam from 'react-webcam';
import adapter from 'webrtc-adapter';

const MockInterview = () => {
    const [showImage, setShowImage] = useState(false);
    const [endVideo, setEndVideo] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const handleProgress = (progress) => {
        setCurrentTime(progress.playedSeconds);
        if (!showImage && progress.playedSeconds >= 0.5) {
            setShowImage(true);
        }
    };

    const recorderControls = useAudioRecorder();
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement('audio');
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
    };

    const handleEnded = () => {
        setShowImage(true);
    };
    const webcamRef = useRef(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        // handle image source here
    };
    return (
        <div className={classes.wrapContentVideo}>
            <div className={classes.videoContent}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=zdjWjmMx_nY"
                    width="100%"
                    height="90vh"
                    playing={true}
                    controls={false}
                    onProgress={handleProgress}
                    onEnded={handleEnded}
                />
            </div>

            <div className={classes.wrapVideoAudio}>
                <div className={classes.videoContent1}>
                    <div className={classes.videoContent}>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                        />
                        <button onClick={capture}>Capture photo</button>
                    </div>
                    {!endVideo && (
                        <div className={classes.recordAudio}>
                            <AudioRecorder
                                onRecordingComplete={(blob) => addAudioElement(blob)}
                                recorderControls={recorderControls}
                            />
                        </div>
                    )}
                    <button
                        type="button"
                        onClick={recorderControls.stopRecording}
                        className={`${'btn'} ${'btn-success'} ${classes.customBtn}`}
                    >
                        Trả lời xong
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MockInterview;
