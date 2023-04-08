import React, { useState, useRef, useEffect } from 'react';
import classes from './mockInterview.module.css';
import ReactPlayer from 'react-player';
import imgage from '../../assets/imgs/image1.jpg';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import SpeechRecognition from 'react-speech-recognition';
import Webcam from 'react-webcam';
import adapter from 'webrtc-adapter';
import axios from 'axios';

const MockInterview = () => {
    const [first, setFirst] = useState(true);
    const [endVideo, setEndVideo] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [data, setData] = useState('');
    const [idInterview, setInterview] = useState('');
    const [url, setUrl] = useState('');
    const [duration, setDuration] = useState(0);
    const [file, setFile] = useState('first');

    const apiKey = 'bgLggHqMJye7VQ5wFzsjcuBgzOf3BmTq';

    const uploadAudioFile = async (filePath) => {
      const payload = await fetch(filePath).then((response) => response.blob());
      const headers = {
        'Content-Type': 'application/octet-stream',
        'api-key': apiKey,
      };

      try {
        const response = await axios.post('https://api.fpt.ai/hmi/asr/general', payload, { headers });
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    };

    const handleProgress = (progress) => {
        setCurrentTime(progress.playedSeconds);

      if (duration > 0 && progress.playedSeconds > duration - 1.5) {
        if (first) {
          setFirst(false);
          setUrl(data.urlVideo);
        } else {
          setUrl('https://www.youtube.com/shorts/NHo6oSl1e3g');
        }
        }
    };

    const recorderControls = useAudioRecorder({
      audioType: 'audio/mp3',
    });
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement('audio');
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
    };

    const handleEnded = () => {
      // setUrl(data.urlVideo);
    };
    const webcamRef = useRef(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        // handle image source here
  };

  const handleStopRecord = async () => {
    recorderControls.stopRecording();
    console.log(recorderControls.recordingBlob);
    setFile(recorderControls.recordingBlob);
  }
  
  useEffect(() => {
    console.log(file);
    const fetchData = async () => {
      const audioURL = URL.createObjectURL(file);
      console.log(audioURL); // In ra đường dẫn URL của file âm thanh
      // await uploadAudioFile(audioURL);
  
      // const link = document.createElement('a');
      // link.href = audioURL;
      // link.download = 'myaudio.mp3'; // đặt tên file khi tải về
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      // URL.revokeObjectURL(url);

      // get api answer
      const idQuestion = data.idQuestion;
      const postAnswer = await axios.post(`http://127.0.0.1:5000/api/v1/interview/answer/${idInterview}`, {
        idQuestion: idQuestion,
        answer: 'a'
      });

      console.log(postAnswer);
      setUrl(postAnswer.data.data.urlVideo);
      setData(postAnswer.data.data);
    }

    const handleFirst = async () => {
      // get api answer
      const idQuestion = data.idQuestion;
      const postAnswer = await axios.post(`http://127.0.0.1:5000/api/v1/interview/answer/${idInterview}`, {
        idQuestion: idQuestion,
        answer: ''
      });

      console.log(postAnswer);
      setUrl(postAnswer.data.data.urlVideo);
      setData(postAnswer.data.data);
    }

    console.log(file);
    if (file === 'first') {
      return;
    }
    if (file) {
      fetchData();
    } else {
      handleFirst();
    }
  }, [file]);
  
  useEffect(() => {
    const createInterview = async () => {
      try {
        const res = await axios.post('http://127.0.0.1:5000/api/v1/interview', { idUser: '6431215242e1efd8f6871dbc' });
        setData(res.data.data);
        setInterview(res.data.data.idInterview);
        if (res.data.data.idQuestion === 1) {
          setUrl(res.data.data.urlIntro);
        } else {
          setUrl(res.data.data.urlVideo);
        }
      } catch (error) {
       console.log(error); 
      }
    }
    
    createInterview();
  }, []);

    return (
        <div className={classes.wrapContentVideo}>
            <div className={classes.videoContent}>
                {url && (
                    <ReactPlayer
                        url={url}
                        width="100%"
                        height="90vh"
                        playing={true}
                        controls={false}
                        onProgress={handleProgress}
                        onEnded={handleEnded}
                        onDuration={(e) => {
                            setDuration(e);
                            console.log(e);
                        }}
                    />
                )}
            </div>

            <div className={classes.wrapVideoAudio}>
                <div className={classes.videoContent1}>
                    <div className={classes.videoContent}>
                        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
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
                        onClick={handleStopRecord}
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
