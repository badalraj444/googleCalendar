// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import CalendarShell from "./components/CalendarShell";
import "./index.css"; // adjust path if your css filename is different

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [view, setView] = useState("month");

  const toggleSidebar = () => setSidebarOpen(v => !v);
  const handleCreate = () => {
    // placeholder: open create modal later
    alert("Create event modal (to implement)");
  };

  return (
    <div className="app-shell flex h-screen bg-ui.bg text-gray-800">
      <div className="flex flex-col w-full">
        <Navbar
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={sidebarOpen}
          onChangeView={setView}
          currentView={view}
        />

        <div className="flex flex-1">
          <Sidebar isOpen={sidebarOpen} onCreate={handleCreate} />
          <CalendarShell currentView={view} />
        </div>
      </div>
    </div>
  );
}
