// src/components/MiniMonth.jsx
import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

/**
 * MiniMonth - tiny monthly calendar for sidebar
 *
 * Props:
 * - onDateSelect(dateStr)  -> called when a date is clicked (ISO date string)
 * - initialDate (optional) -> e.g. "2025-11-14"
 */
export default function MiniMonth({ onDateSelect, initialDate }) {
  const miniRef = useRef(null);

  return (
    <div className="mini-month w-full">
      <FullCalendar
        ref={miniRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={false}
        dayHeaderFormat={{ weekday: "narrow" }} // <- single-letter headers
        dayMaxEvents={1}
        showNonCurrentDates={false}
        fixedWeekCount={false}
        height="auto"
        initialDate={initialDate}
        dayCellClassNames={() => "text-xs p-0"}
        dayCellContent={(arg) => {
          // render only the date number (keeps it compact)
          return {
            html: `<div class="w-full h-full flex items-start justify-start px-1 py-1"><span class="text-xs">${arg.dayNumberText}</span></div>`
          };
        }}
        dateClick={(info) => {
          if (onDateSelect) onDateSelect(info.dateStr);
        }}
      />
      {/* small CSS override to make the header letters compact */}
      <style jsx>{`
        /* reduce header font-size for mini month */
        .mini-month .fc-col-header-cell {
          padding: 4px 2px !important;
        }
        .mini-month .fc-col-header-cell .fc-col-header-cell-cushion {
          font-size: 11px;
          font-weight: 600;
          color: var(--color-muted, #9aa4b2);
        }
      `}</style>
    </div>
  );
}
