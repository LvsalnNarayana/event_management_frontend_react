import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import Calendar from "./pages/Calendar";
import MainLayout from "./layouts/MainLayout";
import { DateState } from "./State/dateState";
import generateDateUrl from "./Utils/generateDateUrl";

const App = () => {
  const { selectedDate } = useSelector(DateState);
  const redirectToDate = generateDateUrl(new Date(selectedDate.toString()));

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate replace to={redirectToDate} />} />
        <Route path=":year/:month/:day" element={<Calendar />} />
      </Route>
      <Route path="*" element={<>not found</>} />
    </Routes>
  );
};

export default App;
