"use client";

import { useState } from "react";

const tabs = [
  { id: "home", label: "Home", icon: "home" },
  { id: "personal", label: "Personal", hasDropdown: true },
  { id: "business", label: "Business", hasArrow: true },
  { id: "company", label: "Company", hasDropdown: true },
];

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-[#e85a4f] rounded-full p-1.5 shadow-2xl shadow-black/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-white text-[#e85a4f]"
                : "text-white/90 hover:text-white"
            }`}
          >
            {tab.icon === "home" && (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            )}
            <span>{tab.label}</span>
            {tab.hasDropdown && (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            )}
            {tab.hasArrow && (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
