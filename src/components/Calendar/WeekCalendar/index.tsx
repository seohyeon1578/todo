import React, { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs";
import * as C  from "../Calendar.style";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { changeDate, currentDateTodos } from "../../../store/reducers/todo";

const WeekCalendar = (
  { days, setDays, date, changeToggle } 
  : 
  { days:dayjs.Dayjs, setDays: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>, date: string[], changeToggle: () => void }
  ) => {
  const [week, setWeek] = useState<number[]>([]);
  const [weekNumber, setWeekNumber] = useState(1);

  const currentDate = useAppSelector(currentDateTodos);
  const dispatch = useAppDispatch();

  const changeWeeks = (time: number) => setDays(dayjs(days.add(time, "week")));

  const getWeekNumber = useCallback(() => {
    const currentDate = Number(days.format("D"));
    const weekDay = days.startOf("month").get("day");
    
    return (((weekDay - 1) + currentDate) / 7) + 1
  }, [days])

  const getWeekDays = useCallback(() => {
    const start = days.startOf('isoWeek').format('YYYY-MM-DD')

    const weeks = []
    for(let i = 0; i < 7; i++){
      const d = Number(dayjs(start).add(i, 'day').format('D'));
      weeks.push(d);
    }

    return weeks
  }, [days])

  useEffect(() => {
    setWeek(getWeekDays())
  }, [getWeekDays]);

  useEffect(() => {
    const number = Math.floor(getWeekNumber());
    setWeekNumber(number);
  }, [getWeekNumber])
  return (
    <>
      <C.Header>
        <p>{days.get("year")}년 {days.get("month") + 1}월 {weekNumber}주차</p>
        <C.NavBtnWrap>
          <C.IconBtn onClick={() => changeWeeks(-1)} item={"left"}/>
          <C.IconBtn onClick={() => changeWeeks(1)} item={"right"}/>
          <button onClick={changeToggle}>월</button>
        </C.NavBtnWrap>
      </C.Header>
      <C.CalenderUI>
        {date.map((v, idx) => (
            <C.CalendarStair key={idx}>{v}</C.CalendarStair>
        ))}
        {week.map((v, idx) => (
          <C.CalendarStair key={idx} 
            onClick={
              () => dispatch(changeDate(dayjs(`${days.get('year')}-${days.get('month') + 1}-${v}`, 'YYYY-MM-DD').format()))} 
            currentDate={
              dayjs(currentDate).get('year') === days.get("year")
              &&
              dayjs(currentDate).get("month") === days.get("month")
              &&
              dayjs(currentDate).get("date") === v
          }>{v}</C.CalendarStair>
        ))}
      </C.CalenderUI>
    </>
  )
};

export default WeekCalendar;