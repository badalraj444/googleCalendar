// src/components/Navbar.jsx
import React from "react";

export default function Navbar({ onToggleSidebar, isSidebarOpen, onChangeView, currentView }) {
  const todayLabel = new Date().toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });

  return (
    <header className="w-full h-16 flex items-center px-4 border-b border-ui-border bg-ui-panel shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-primary-50"
          aria-label="toggle sidebar"
        >
          {/* hamburger */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-light-100">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex items-baseline gap-3">
          <h1 className="text-lg font-semibold text-light-100">Calendar</h1>
          <span className="text-sm text-muted hidden md:inline">{todayLabel}</span>
        </div>

        {/* DEBUG: Tailwind + Theme test (Navbar) */}
        <div className="ml-4 flex items-center gap-3">
          <div className="px-3 py-1 rounded-xl bg-primary text-primary-foreground text-sm">primary</div>
          <div className="px-3 py-1 rounded-xl bg-accent-400 text-black text-sm">accent-400</div>
          <div className="px-3 py-1 rounded-xl bg-ui-panel border border-ui-border text-sm">ui-panel</div>
          <div className="px-3 py-1 rounded-xl bg-brand text-white text-sm">bg-brand (css var)</div>
          <span className="ml-2 text-muted hidden md:inline">muted (md:inline)</span>
        </div>
      </div>

      {/* center controls */}
      <div className="flex-1 flex items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded-xl text-sm border border-ui-border bg-ui-panel hover:shadow-soft">
            Today
          </button>

          <div className="inline-flex items-center gap-1 rounded-xl border border-ui-border px-2 py-1">
            <button
              onClick={() => onChangeView("month")}
              className={`px-2 py-1 text-sm rounded ${currentView === "month" ? "bg-primary text-primary-foreground" : ""}`}
            >
              Month
            </button>
            <button
              onClick={() => onChangeView("week")}
              className={`px-2 py-1 text-sm rounded ${currentView === "week" ? "bg-primary text-primary-foreground" : ""}`}
            >
              Week
            </button>
            <button
              onClick={() => onChangeView("day")}
              className={`px-2 py-1 text-sm rounded ${currentView === "day" ? "bg-primary text-primary-foreground" : ""}`}
            >
              Day
            </button>
          </div>
        </div>
      </div>

      {/* right actions */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-md hover:bg-primary-50" aria-label="search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6"/>
          </svg>
        </button>

        <button className="p-2 rounded-md hover:bg-primary-50" aria-label="settings">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09c.68 0 1.25-.44 1.51-1a1.65 1.65 0 00-.33-1.82L3.31 4.9A2 2 0 015.9 2.07l.06.06c.5.5 1.19.72 1.82.33.5-.32 1.1-.5 1.7-.5h.18A1.65 1.65 0 0012 2.9V3a2 2 0 014 0v.09c0 .68.44 1.25 1 1.51.63.39 1.32.17 1.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06c-.32.5-.5 1.1-.5 1.7v.18c0 .6.18 1.2.5 1.7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">J</div>
      </div>
    </header>
  );
}
