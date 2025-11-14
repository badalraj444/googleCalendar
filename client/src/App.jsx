// src/App.jsx
import React, { useRef, useState } from "react";
import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import CalendarComponent from "./components/CalendarComponent";
import "./index.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [view, setView] = useState("month");
  const [dateTitle, setDateTitle] = useState(() => formatDateTitle(new Date()));

  const calendarRef = useRef(null);

  // helper to format a Date into "November 14, 2025"
  function formatDateTitle(date) {
    try {
      return new Intl.DateTimeFormat(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(date);
    } catch (e) {
      return date.toDateString();
    }
  }

  const handleDatesSet = (dateInfo) => {
    const calApi = calendarRef.current?.getApi?.();
    let centerDate = new Date();
    try {
      if (calApi) centerDate = calApi.getDate();
    } catch (e) {
      centerDate = new Date(dateInfo.start);
    }
    setDateTitle(formatDateTitle(centerDate));
  };

  const viewMap = { month: "dayGridMonth", week: "timeGridWeek", day: "timeGridDay" };

  const handleChangeView = (newView) => {
    setView(newView);
    const calApi = calendarRef.current?.getApi?.();
    if (calApi) calApi.changeView(viewMap[newView]);
  };

  const handlePrev = () => {
    const calApi = calendarRef.current?.getApi?.();
    if (calApi) calApi.prev();
  };

  const handleNext = () => {
    const calApi = calendarRef.current?.getApi?.();
    if (calApi) calApi.next();
  };

  const handleToday = () => {
    const calApi = calendarRef.current?.getApi?.();
    if (calApi) calApi.today();
  };

  const handleCreate = () => {
    alert("Create event modal (to implement)");
  };

  return (
    <div className="app-shell flex h-screen">
      <div className="flex flex-col w-full">
        <Navbar
          onToggleSidebar={() => setSidebarOpen((v) => !v)}
          isSidebarOpen={sidebarOpen}
          onChangeView={handleChangeView}
          currentView={view}
          onPrev={handlePrev}
          onNext={handleNext}
          onToday={handleToday}
          dateTitle={dateTitle}
        />

        <div className="flex flex-1">
          <Sidebar isOpen={sidebarOpen} onCreate={handleCreate} />
          <div className="flex-1 p-6 overflow-auto">
            <div className="max-w-7xl mx-auto">
              <div className="rounded-2xl border border-ui-border bg-ui-panel shadow-soft p-6">
                <CalendarComponent
                  currentView={view}
                  calendarRef={calendarRef}
                  onDatesSet={handleDatesSet}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
