import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import 'dayjs/locale/ko';
dayjs.extend(isoWeek)
dayjs.locale('ko');

export const CalenderUI = styled.div`
  width: 303px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  #start {
    background-color: #2b42bb;
    color: white;
    border-radius: 15px;
  }
  #end {
    background-color: red;
    color: white;
    border-radius: 15px;
  }
  #middle {
    background-color: yellow;
    color: white;
    border-radius: 15px;
  }
`;

export const CalendarStair = styled.div`
  width: 43.2857142857px;
  height: 43.2857142857px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Calendar = () => {
  const date = ["월", "화", "수", "목", "금", "토", "일"];
  const [days, setDays] = useState(dayjs());
  const [week, setWeek] = useState<number[]>([]);
  const [weekNumber, setWeekNumber] = useState(1);
  const [toggle, setToggle] = useState(false);


  const changeToggle = () => setToggle((prev) => !prev);

  const changeDays = (time: number) => setDays(dayjs(days.add(time, "month")));

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
  console.log(weekNumber)
  return (
    <div>
      {toggle ? 
        <>
          <div>
            <p>{days.get("year")}년 {days.get("month") + 1}월</p>
            <button onClick={() => changeDays(-1)}/>
            <button onClick={() => changeDays(1)}/>
            <button onClick={changeToggle}>주</button>
          </div>
          <CalenderUI>
            {date.map((v, idx) => (
              <CalendarStair key={idx}>{v}</CalendarStair>
            ))}
            {date.slice(0, date.indexOf(dayjs(days.format('YYYY-MM')).format("ddd"))).map((v, idx) => (
              <CalendarStair key={idx}></CalendarStair>
            ))}
            {new Array(Number(days.daysInMonth())).fill(1).map((v, idx) => (
              <CalendarStair
                key={idx}
              >
                {idx + 1}
              </CalendarStair>
            ))}
        </CalenderUI>
      </>
      :
      <>
        <div>
          <p>{days.get("year")}년 {days.get("month") + 1}월 {weekNumber}주차</p>
          <button onClick={() => changeWeeks(-1)}/>
          <button onClick={() => changeWeeks(1)}/>
          <button onClick={changeToggle}>월</button>
        </div>
        <CalenderUI>
          {date.map((v, idx) => (
              <CalendarStair key={idx}>{v}</CalendarStair>
          ))}
          {week.map((v, idx) => (
            <CalendarStair key={idx}>{v}</CalendarStair>
          ))}
        </CalenderUI>
      </>
      }   
    </div>
  )
};

export default Calendar;