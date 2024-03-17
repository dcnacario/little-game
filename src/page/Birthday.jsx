import React, { useEffect, useRef, useState } from "react";
import "./style.css"; // Import CSS file

function Birthday() {
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const microphoneRef = useRef(null);
  const [showText, setShowText] = useState(false); // Boolean flag to control text visibility

  useEffect(() => {
    const cake = document.querySelector(".cake");
    const initialCandle = document.createElement("div");
    initialCandle.className = "candle";
    initialCandle.style.left = "50%"; // Center the candle
    initialCandle.style.top = "5%";

    const flame = document.createElement("div");
    flame.className = "flame";
    initialCandle.appendChild(flame);

    cake.appendChild(initialCandle);

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
          audioContextRef.current = new (window.AudioContext ||
            window.webkitAudioContext)();
          analyserRef.current = audioContextRef.current.createAnalyser();
          microphoneRef.current =
            audioContextRef.current.createMediaStreamSource(stream);
          microphoneRef.current.connect(analyserRef.current);
          analyserRef.current.fftSize = 256;
          setInterval(() => blowOutCandle(initialCandle), 200);
        })
        .catch(function (err) {
          console.error("Unable to access microphone:", err);
        });
    } else {
      console.log("getUserMedia not supported on your browser!");
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  function blowOutCandle(candle) {
    if (isBlowing()) {
      candle.classList.add("out");
      setShowText(true); // Set flag to show text on blowing
    }
  }

  function isBlowing() {
    const data = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(data);
    const averageFrequency =
      data.reduce((sum, value) => sum + value, 0) / data.length;
    return averageFrequency > 100;
  }

  return (
    <>
      <div>
        <text
          className={`text-white text-6xl flex pt-44 uppercase font-sans font-bold tracking-wide 
                  items-center justify-center ${
                    showText ? "" : "opacity-0"
                  } transition duration-500 ease-in-out animate swipeUp`}
        >
          Happy Birthday!
        </text>
        <div className="cake">
          <div className="plate"></div>
          <div className="layer layer-bottom"></div>
          <div className="layer layer-middle"></div>
          <div className="layer layer-top"></div>
          <div className="icing"></div>
          <div className="drip drip1"></div>
          <div className="drip drip2"></div>
          <div className="drip drip3"></div>
        </div>
      </div>
    </>
  );
}

export default Birthday;
