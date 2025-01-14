import React from "react";
import { useState } from "react";
import "./App.css";
import "./output.css";
import { useTranslation } from "react-i18next";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import Dropdown from "./components/Dropdown.tsx";

const localizer = momentLocalizer(moment);
function App() {
  const { t } = useTranslation();

  return (
    <div className="app-component bg-primary">
      <h1 className={"text-rose-300"}>{t("webtTitle")}</h1>
      <Calendar
        localizer={localizer}
        events={["aa", "bb"]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      <Dropdown arrowAnimation="rotate" />
    </div>
  );
}

export default App;
