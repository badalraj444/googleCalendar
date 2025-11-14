// src/components/Sidebar.jsx
import React from "react";
// at top of Sidebar.jsx
import MiniMonth from "./MiniMonth";


export default function Sidebar({ isOpen, onCreate }) {
    return (
        <aside className={`bg-ui-panel border-r border-ui-border transition-all duration-200 ${isOpen ? "w-64" : "w-16"} overflow-hidden`}>
            <div className="p-3 flex flex-col gap-4 h-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary-50 text-primary rounded-md flex items-center justify-center font-semibold">C</div>
                        <div className={`text-sm font-semibold ${isOpen ? "block" : "hidden"}`}>My Calendar</div>
                    </div>
                </div>

                <button
                    onClick={onCreate}
                    className={`
    flex items-center gap-4
    px-4 py-6
    rounded-full
    bg-white
    text-black
    border border-ui-border
    shadow-soft
    hover:shadow-md
    transition
    ${isOpen ? "w-auto" : "w-10 justify-center"}
  `}
                >
                    {/* Plus icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 5v14M5 12h14"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/* Create label */}
                    {isOpen && <span className="text-sm font-medium">Create</span>}

                    {/* Dropdown arrow */}
                    {isOpen && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M7 10l5 5 5-5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>


                <div className={`${isOpen ? "block" : "hidden"}`}>
                    <div className="text-xs text-muted mb-2">Mini month</div>
                    <div className="w-full rounded-xl border border-ui-border bg-ui-panel">
                        <div className="p-2">
                            <MiniMonth onDateSelect={(dateStr) => {
                                // bubble up via custom event on window or call a prop passed to Sidebar
                                // We'll call a global handler if Sidebar receives it via props (see App.jsx changes below).
                                if (typeof window.__onSidebarDateSelect === "function") {
                                    window.__onSidebarDateSelect(dateStr);
                                }
                            }} />
                        </div>
                    </div>

                </div>

                <div className="mt-auto">
                    <div className={`text-xs text-muted ${isOpen ? "mb-2" : ""}`}>Labels</div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
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
