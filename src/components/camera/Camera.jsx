import { useState, useEffect, useRef } from "react";
import styles from "./camera.module.css";

function Camera() {
  const videoRef = useRef();

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 1920, height: 1080 } })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className={styles.camera}>
      <video ref={videoRef} autoPlay></video>
    </div>
  );
}

export default Camera;
