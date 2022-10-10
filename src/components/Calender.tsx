import React, { useState } from "react";
import styled from "styled-components";

import dayjs from "dayjs";
import 'dayjs/locale/ko';
dayjs.locale('ko');

export const CalenderUI = styled.div`
  width: 303px;
  height: 303px;
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

const Calender = () => {
  const d = ["월", "화", "수", "목", "금", "토", "일"];
  const [days, setDays] = useState(dayjs());
  const [start, setStart] = useState(days.format("YYYY-MM-DD"));
  const [end, setEnd] = useState(days.format("YYYY-MM-DD"));
  const [toggle, setToggle] = useState(false);


  const changeToggle = () => setToggle((prev) => !prev);

  const changeDays = (time: number) => setDays(dayjs(days.add(time, "month")));

  return (
    <div>
      <div>
        <p>{days.get("year")}년 {days.get("month") + 1}월</p>
        <button onClick={() => changeDays(-1)}/>
        <button onClick={() => changeDays(1)}/>
        <button onClick={changeToggle}>{toggle ? "주" : "월"}</button>
      </div>
      <CalenderUI>
        {d.map((v, idx) => (
          <CalendarStair key={idx}>{v}</CalendarStair>
        ))}
        {d.slice(0, d.indexOf(dayjs(days.format('YYYY-MM')).format("ddd"))).map((v, idx) => (
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
    </div>
  )
};

export default Calender;