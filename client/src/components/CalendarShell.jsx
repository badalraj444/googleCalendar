// src/components/CalendarShell.jsx
import React from "react";

export default function CalendarShell({ currentView }) {
  // Placeholder content — swap this with FullCalendar or your calendar canvas later
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 text-sm text-muted-500">Showing: <span className="font-medium text-gray-800">{currentView}</span> view</div>

        <div className="rounded-2xl border border-ui-border bg-ui.panel shadow-soft p-6">
          <div className="h-[540px] flex items-center justify-center text-muted-500">
            {/* Replace with FullCalendar or custom calendar component */}
            <div className="text-center">
              <div className="text-2xl font-semibold mb-2">Calendar Canvas</div>
              <div className="text-sm">Integrate FullCalendar or your custom view here.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
