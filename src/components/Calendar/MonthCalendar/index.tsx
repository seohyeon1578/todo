import dayjs from "dayjs";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { changeDate, currentDateTodos } from "../../../store/reducers/todo";
import * as C  from "../Calendar.style";

const MonthCalendar = (
  { days, setDays, date, changeToggle } 
  : 
  { days:dayjs.Dayjs, setDays: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>, date: string[], changeToggle: () => void }
  ) => {
  const changeDays = (time: number) => setDays(dayjs(days.add(time, "month")));
  const currentDate = useAppSelector(currentDateTodos);
  const dispatch = useAppDispatch();

  return (
    <>
      <C.Header>
        <p>{days.get("year")}년 {days.get("month") + 1}월</p>
        <C.NavBtnWrap>
          <C.IconBtn onClick={() => changeDays(-1)} item={"left"}/>
          <C.IconBtn onClick={() => changeDays(1)} item={"right"}/>
          <button onClick={changeToggle}>주</button>
        </C.NavBtnWrap>
      </C.Header>
      <C.CalenderUI>
        {date.map((v, idx) => (
          <C.CalendarStair key={idx}>{v}</C.CalendarStair>
        ))}
        {date.slice(0, date.indexOf(dayjs(days.format('YYYY-MM')).format("ddd"))).map((v, idx) => (
          <C.CalendarStair key={idx} ></C.CalendarStair>
        ))}
        {new Array(Number(days.daysInMonth())).fill(1).map((v, idx) => (
          <C.CalendarStair
            key={idx}
            onClick={
              () => dispatch(changeDate(dayjs(`${days.get('year')}-${days.get('month') + 1}-${idx+1}`, 'YYYY-MM-DD').format()))} 
            currentDate={
              dayjs(currentDate).get('year') === days.get("year")
              &&
              dayjs(currentDate).get("month") === days.get("month")
              &&
              dayjs(currentDate).get("date") === idx+1
            }
          >
            {idx + 1}
          </C.CalendarStair>
        ))}
      </C.CalenderUI>
    </>
  )
};

export default MonthCalendar;