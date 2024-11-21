"use client";

import { useState, useEffect } from "react";

export default function VoiceRecorder({ onSaveQuote }) {
  const [isRecording, setIsRecording] = useState(false);
  const [quoteText, setQuoteText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [recognition, setRecognition] = useState(null);

  // Create the SpeechRecognition object inside useEffect to avoid re-initialization on every render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        const newRecognition = new SpeechRecognition();
        newRecognition.continuous = false;
        newRecognition.lang = "en-US";
        newRecognition.interimResults = false;
        newRecognition.maxAlternatives = 1;

        newRecognition.onresult = (event) => {
          const speechResult = event.results[0][0].transcript;
          setQuoteText(speechResult);
          setErrorMessage(""); // Clear error when result is received
        };

        newRecognition.onerror = (event) => {
          const error = event.error;
          console.error("Speech recognition error:", error);
          setErrorMessage(`Error: ${error}`);
        };

        setRecognition(newRecognition); // Save the recognition instance in the state
      } else {
        setErrorMessage("Speech recognition is not supported in this browser.");
      }
    }
  }, []); // Empty dependency array ensures this runs once on component mount

  // Handle record button click
  const handleRecord = () => {
    if (recognition) {
      if (isRecording) {
        recognition.stop(); // Stop recording
      } else {
        recognition.start(); // Start recording
      }
      setIsRecording(!isRecording); // Toggle recording state
    } else {
      setErrorMessage("Speech recognition is not available.");
    }
  };

  const handleSave = () => {
    if (quoteText) {
      onSaveQuote(quoteText);
      setQuoteText(""); // Clear text after saving
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <button
        onClick={handleRecord}
        className={`px-4 py-2 text-white rounded ${
          isRecording ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        disabled={!quoteText}
      >
        Save Quote
      </button>
      {quoteText && <p className="mt-4">Recorded Text: {quoteText}</p>}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
    </div>
  );
}
