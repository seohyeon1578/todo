import React, { useState } from "react";

import MonthCalendar from "./MonthCalendar";
import WeekCalendar from "./WeekCalendar";

import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import 'dayjs/locale/ko';
dayjs.extend(isoWeek)
dayjs.locale('ko');



const Calendar = () => {
  const date = ["월", "화", "수", "목", "금", "토", "일"];
  const [days, setDays] = useState(dayjs());
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => setToggle((prev) => !prev);

  return (
    <div>
      {toggle ? 
        <MonthCalendar days={days} setDays={setDays} date={date} changeToggle={changeToggle}/>
      :
        <WeekCalendar days={days} setDays={setDays} date={date} changeToggle={changeToggle}/>
      }   
    </div>
  )
};

export default Calendar;