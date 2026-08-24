import React, { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { generateAIResponse } from "../../services/aiService";

const AISearch = ({ onResults }) => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const response = await generateAIResponse(
        `Find products matching: ${query}. Return product names and brief descriptions.`,
      );
      // Parse AI response and pass to parent
      onResults(response);
    } catch (error) {
      console.error("Search Error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-[#1A1A1A] border border-[#333333] rounded-lg overflow-hidden focus-within:border-[#FF6B00] transition-colors">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Describe what instrument you need..."
          className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          disabled={isSearching}
          className="px-4 py-3 bg-[#FF6B00] hover:bg-[#CC5500] transition-colors disabled:opacity-50"
        >
          {isSearching ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        🔍 AI-powered search • Describe what you need
      </p>
    </div>
  );
};

export default AISearch;
