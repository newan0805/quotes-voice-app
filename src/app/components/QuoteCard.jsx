// src/app/components/QuoteCard.js
import React from "react";

export default function QuoteCard({ quote, audioUrl }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <audio controls src={audioUrl} className="w-full mb-2"></audio>
      <p className="text-gray-800">&quot;{quote}&quot;</p>
    </div>
  );
}
