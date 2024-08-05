import React from "react";
import { useSelector } from "react-redux";

import Month from "./Month";
import { DateState } from "../../State/dateState";

const Calender = () => {
  const { selectedDate } = useSelector(DateState);

  return <Month selectedDate={selectedDate} />;
};

export default Calender;
