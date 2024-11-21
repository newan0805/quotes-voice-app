// src/app/pages/index.js
import { useState } from "react";
import VoiceRecorder from "../components/VoiceRecorder";
import QuoteCard from "../components/QuoteCard";

export default function Home() {
  const [quotes, setQuotes] = useState([]);

  const handleSaveQuote = (text) => {
    const newQuote = {
      text,
      audioUrl: "", // Placeholder, add audio recording later if needed
    };
    setQuotes([newQuote, ...quotes]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Voice Quotes App
      </h1>
      <VoiceRecorder onSaveQuote={handleSaveQuote} />
      <div className="mt-8">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote.text} audioUrl={quote.audioUrl} />
        ))}
      </div>
    </div>
  );
}
