import React, { useState, useEffect } from "react";

const TodayDateAndTime: React.FC = () => {
  const [dateTime, setDateTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000); //1초마다 호출
    /*
    useEffect 내부에서 반환하는 함수는 클린업 함수로, 컴포넌트가 언마운트되거나 업데이트되기 전에 실행됩니다. 
    이 경우 clearInterval 함수를 사용하여 setInterval을 정리합니다. 
    이렇게 함으로써 컴포넌트가 언마운트되거나 업데이트되기 전에 타이머를 중지하고 메모리 누수를 방지할 수 있습니다.
    */
    return () => clearInterval(timer);
  }, []);

  const formattedDate = `${dateTime.getFullYear()}년 ${dateTime.getMonth() + 1}월 ${dateTime.getDate()}일`;

  const formattedTime = `${String(dateTime.getHours()).padStart(2, "0")}시 ${String(dateTime.getMinutes()).padStart(2, "0")}분`;

  return (
    <div>
      <div>오늘 날짜: {formattedDate}</div>
      <div>현재 시간: {formattedTime}</div>
    </div>
  );
};

export default TodayDateAndTime;
