// src/components/CalendarComponent.jsx
import React, { useEffect, useMemo, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

/**
 * CalendarComponent
 * - currentView: "month" | "week" | "day"
 * - calendarRef: React ref attached to FullCalendar
 * - onDatesSet: (dateInfo) => void called when visible range / view changes
 */
const STORAGE_KEY = "fc-events-v1";

function saveEventsToStorage(events) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch (e) {
    console.warn("Failed to save events", e);
  }
}

function loadEventsFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Failed to load events", e);
    return [];
  }
}

export default function CalendarComponent({ currentView, calendarRef, onDatesSet }) {
  const [events, setEvents] = useState(() => loadEventsFromStorage());

  const initialView = useMemo(() => {
    if (currentView === "week") return "timeGridWeek";
    if (currentView === "day") return "timeGridDay";
    return "dayGridMonth";
  }, [currentView]);

  useEffect(() => {
    saveEventsToStorage(events);
  }, [events]);

  const handleDateClick = (arg) => {
    const title = window.prompt("Event title", "");
    if (!title) return;

    const isAllDay = arg.allDay;
    let start, end;

    if (!isAllDay) {
      const s = new Date(arg.date);
      const e = new Date(s.getTime() + 60 * 60 * 1000);
      start = s.toISOString();
      end = e.toISOString();
    } else {
      start = arg.dateStr;
      end = null;
    }

    const newEvent = {
      id: String(Date.now()),
      title,
      start,
      end,
      allDay: !!isAllDay,
    };

    setEvents((prev) => [...prev, newEvent]);
  };

  const handleEventClick = (clickInfo) => {
    const ev = clickInfo.event;
    const title = ev.title;
    const start = ev.start ? ev.start.toLocaleString() : ev.startStr;
    const end = ev.end ? ev.end.toLocaleString() : ev.endStr;
    const doDelete = window.confirm(
      `Event: ${title}\nStart: ${start}\n${end ? `End: ${end}\n` : ""}\nDelete this event?`
    );
    if (doDelete) {
      setEvents((prev) => prev.filter((e) => e.id !== ev.id));
    }
  };

  const handleEventDropOrResize = (changeInfo) => {
    const ev = changeInfo.event;
    setEvents((prev) =>
      prev.map((e) => {
        if (e.id !== ev.id) return e;
        return {
          ...e,
          start: ev.start ? ev.start.toISOString() : e.start,
          end: ev.end ? ev.end.toISOString() : null,
          allDay: ev.allDay,
        };
      })
    );
  };

  const fcEvents = events.map((e) => ({
    id: e.id,
    title: e.title,
    start: e.start,
    end: e.end || undefined,
    allDay: !!e.allDay,
  }));

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView={initialView}
        viewDidMount={() => {}}
        headerToolbar={false} /* hide FC built-in toolbar/title */
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={3}
        events={fcEvents}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventDrop={handleEventDropOrResize}
        eventResize={handleEventDropOrResize}
        allDaySlot={true}
        nowIndicator={true}
        height="auto"
        datesSet={(dateInfo) => {
          // bubble up the dateInfo to parent if provided
          if (typeof onDatesSet === "function") onDatesSet(dateInfo);
        }}
      />
    </div>
  );
}
