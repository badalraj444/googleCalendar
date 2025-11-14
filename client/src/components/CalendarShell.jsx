// src/components/CalendarShell.jsx
import React from "react";

export default function CalendarShell({ currentView }) {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 text-sm text-muted">Showing: <span className="font-medium text-light-100">{currentView}</span> view</div>

        <div className="rounded-2xl border border-ui-border bg-ui-panel shadow-soft p-6">
          <div className="h-[540px] flex flex-col items-center justify-center text-muted gap-4">
            <div className="text-2xl font-semibold mb-2">Calendar Canvas</div>

           

            <div className="mt-4 flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground shadow-soft">Primary button</button>
              <button className="px-4 py-2 rounded-xl border border-ui-border">Border button</button>
            </div>

            <div className="mt-6 text-sm">
              <span className="hidden md:inline">visible on md+</span>
              <span className="md:hidden">visible on small</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
