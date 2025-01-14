import React from "react";
import { useState } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import Dropdown from "./components/Dropdown.tsx";

const events = [
  {
    title: "Event 1",
    start: new Date(2025, 0, 14, 10, 0), // January 14, 2025, 10:00 AM
    end: new Date(2025, 0, 14, 12, 0), // January 14, 2025, 12:00 PM
  },
  {
    title: "Event 2",
    start: new Date(2025, 0, 15, 14, 0), // January 15, 2025, 2:00 PM
    end: new Date(2025, 0, 15, 15, 30), // January 15, 2025, 3:30 PM
  },
];

const localizer = momentLocalizer(moment);
function App() {
  const { t } = useTranslation();

  return (
    <div className="app-component bg-primary grid grid-rows-[1fr_6fr_1fr] h-full gap-3">
      <h1 className="flex items-center justify-center">{t("webtTitle")}</h1>
      <div className="h-full">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          step={15} // 每段的時間長度為 15 分鐘
          timeslots={4}
          className="h-full border border-gray-300 rounded-lg bg-white p-2"
        />
      </div>
      <div className="flex items-center justify-center">
        <Dropdown arrowAnimation="rotate" />
      </div>
    </div>
  );
}

export default App;
