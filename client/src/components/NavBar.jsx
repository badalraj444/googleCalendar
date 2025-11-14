// src/components/Navbar.jsx
import React from "react";

export default function Navbar({
    onToggleSidebar,
    isSidebarOpen,
    onChangeView,
    currentView,
    onPrev,
    onNext,
    onToday,
    dateTitle,
}) {
    const [viewDropdownOpen, setViewDropdownOpen] = React.useState(false);

    return (
        <header className="w-full h-16 flex items-center px-4 border-b border-ui-border bg-ui-panel shadow-sm">
            <div className="flex items-center gap-3 p-8">
                <button
                    onClick={onToggleSidebar}
                    className="p-2 rounded-md hover:bg-primary-50"
                    aria-label="toggle sidebar"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-light-100">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                </button>

                <img src="/logo.png" alt="Logo" className="h-13 w-auto object-contain select-none" draggable="false" />

                <div className="flex items-baseline gap-3">
                    <h1 className="text-lg font-semibold text-light-100">Calendar</h1>
                </div>
            </div>

            {/* Center: date title + nav controls */}
            <div className="flex-1 flex items-center justify-center gap-4">
                <div className="text-base text-light-100 font-semibold">{dateTitle}</div>

                <div className="inline-flex items-center gap-2">
                    <button
                        onClick={onPrev}
                        className="px-2 py-1 rounded-md border border-ui-border bg-ui-panel hover:shadow-sm"
                        aria-label="previous"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>

                    <button
                        onClick={onToday}
                        className="px-3 py-1 rounded-xl text-sm border border-ui-border bg-ui-panel hover:shadow-soft"
                    >
                        Today
                    </button>

                    <button
                        onClick={onNext}
                        className="px-2 py-1 rounded-md border border-ui-border bg-ui-panel hover:shadow-sm"
                        aria-label="next"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>

                    {/* view selector */}
                    {/* VIEW DROPDOWN */}
<div className="relative ml-3">
  <button
    onClick={() => setViewDropdownOpen((v) => !v)}
    className="
      px-3 py-1.5 
      rounded-xl 
      border border-ui-border 
      bg-white 
      shadow-soft 
      flex items-center gap-2 
      text-sm text-light-100 
      hover:shadow-md
    "
  >
    {currentView.charAt(0).toUpperCase() + currentView.slice(1)}

    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className={`transition-transform ${
        viewDropdownOpen ? "rotate-180" : ""
      }`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </button>

  {viewDropdownOpen && (
    <div
      className="
        absolute right-0 mt-2 w-28 
        bg-white 
        rounded-xl 
        shadow-soft 
        border border-ui-border 
        z-50
        py-1
      "
    >
      {["month", "week", "day"].map((v) => (
        <button
          key={v}
          onClick={() => {
            onChangeView(v);
            setViewDropdownOpen(false);
          }}
          className={`
            w-full text-left px-3 py-1.5 text-sm rounded-md
            hover:bg-muted-200
            ${currentView === v ? "bg-muted-200" : ""}
          `}
        >
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </button>
      ))}
    </div>
  )}
</div>

                </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
                <button className="p-2 rounded-md hover:bg-primary-50" aria-label="search">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                </button>

                <button className="p-2 rounded-md hover:bg-primary-50" aria-label="settings">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09c.68 0 1.25-.44 1.51-1a1.65 1.65 0 00-.33-1.82L3.31 4.9A2 2 0 015.9 2.07l.06.06c.5.5 1.19.72 1.82.33.5-.32 1.1-.5 1.7-.5h.18A1.65 1.65 0 0012 2.9V3a2 2 0 014 0v.09c0 .68.44 1.25 1 1.51.63.39 1.32.17 1.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06c-.32.5-.5 1.1-.5 1.7v.18c0 .6.18 1.2.5 1.7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">J</div>
            </div>
        </header>
    );
}
