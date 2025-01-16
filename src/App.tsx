import React from "react";
import { useState } from "react";
import "./App.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";

import { useTranslation } from "react-i18next";

// with yarn link method, we can directly call the same name as it is defined in its package.json name field
import { Calendar as EmbedCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import Dropdown from "./components/Dropdown.tsx";

interface Event {
  title: string;
  start: Date;
  end: Date;
}

const eventsInit: Event[] = [
  {
    title: "Mom's Birthday",
    start: new Date(2025, 0, 14, 10, 0), // January 14, 2025, 10:00 AM
    end: new Date(2025, 0, 14, 12, 0), // January 14, 2025, 12:00 PM
  },
  {
    title: "UX Meeting",
    start: new Date(2025, 0, 15, 14, 0), // January 15, 2025, 2:00 PM
    end: new Date(2025, 0, 15, 15, 30), // January 15, 2025, 3:30 PM
  },
];

const localizer = momentLocalizer(moment);

function App() {
  const { t } = useTranslation();

  const [events, setEvents] = useState(eventsInit);
  const [isEmbed, setIsEmbed] = useState(true);

  const handleSelectSlot = (slotInfo) => {
    console.log(typeof slotInfo.start);
    const title = window.prompt(t("Enter a title for your event:"));
    if (title) {
      setEvents((prevEvents: Array<Event>) => [
        ...prevEvents,
        {
          title,
          start: slotInfo.start,
          end: slotInfo.end,
        },
      ]);
    }
  };

  return (
    <div className="app-component bg-primary grid grid-rows-[1fr_6fr_1fr] h-full gap-3">
      <div className="title flex  w-full">
        <h1 className="flex items-center justify-center">{t("webtTitle")}</h1>
        <button
          className="button flex flex-1 toggler rounded w-12 h-6 cursor-pointer
            items-center"
          onClick={() => {
            setIsEmbed(!isEmbed);
          }}
        >
          {isEmbed ? t("Embed") : t("npm")}
        </button>
      </div>
      <div className="h-full">
        {isEmbed && (
          <EmbedCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            step={15} // 每段的時間長度為 15 分鐘
            timeslots={4}
            onSelectSlot={handleSelectSlot}
            className="h-full border border-gray-300 rounded-lg bg-white p-2"
          />
        )}
      </div>
      <div className="flex items-center justify-center">
        <Dropdown arrowAnimation="rotate" />
      </div>
    </div>
  );
}

export default App;
