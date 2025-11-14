// src/components/Sidebar.jsx
import React from "react";

export default function Sidebar({ isOpen, onCreate }) {
  return (
    <aside className={`bg-ui.panel border-r border-ui-border transition-all duration-200 ${isOpen ? "w-64" : "w-16"} overflow-hidden`}>
      <div className="p-3 flex flex-col gap-4 h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-50 text-primary-700 rounded-md flex items-center justify-center font-semibold">C</div>
            <div className={`text-sm font-semibold ${isOpen ? "block" : "hidden"}`}>My Calendar</div>
          </div>
        </div>

        <button
          onClick={onCreate}
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium bg-primary-500 text-white hover:opacity-95"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={`${isOpen ? "inline" : "hidden"}`}>Create</span>
        </button>

        <div className={`${isOpen ? "block" : "hidden"}`}>
          <div className="text-xs text-muted-500 mb-2">Mini month</div>
          <div className="w-full h-36 rounded-xl border border-ui-border bg-ui.surface flex items-center justify-center text-sm text-muted-500">
            {/* Placeholder for a mini month view */}
            Mini month preview
          </div>
        </div>

        <div className="mt-auto">
          <div className={`text-xs text-muted-500 ${isOpen ? "mb-2" : ""}`}>Labels</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              <span className={`${isOpen ? "text-sm" : "hidden"}`}>Work</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-400"></span>
              <span className={`${isOpen ? "text-sm" : "hidden"}`}>Personal</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
