import React, { useState, useEffect } from 'react';
import { Space } from 'antd';
import { PlayCircleFilled, PauseCircleFilled } from "@ant-design/icons";

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [onHover, setOnHover] = useState<boolean>(false);
  const [playPlause, setPlayPause] = useState<boolean>(false);

  const tick = () => {
    setTime((prevTime) => prevTime + 1);
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(tick, 1000);
      setIntervalId(id);
      setPlayPause(!playPlause);
    }
  };

  const stopTimer = () => {
    if (isRunning && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
      setPlayPause(false);
    }
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    };
  }, []);

  return (
    <Space>
      {
        onHover 
            ? 
            playPlause 
                ? 
                    <PauseCircleFilled style={{
                        color: "rgb(242,32,118)",
                        fontSize: 24
                    }} onClick={stopTimer} onMouseLeave={() => setOnHover(false)} />
                :
                    <PlayCircleFilled style={{
                        color: "rgb(242,32,118)",
                        fontSize: 24
                    }} onClick={startTimer} onMouseLeave={() => setOnHover(false)} />
            : 
                <Space style={{
                    fontWeight: "400",
                    fontSize: 16,
                    }} onMouseOver={() => setOnHover(!onHover)} onMouseLeave={() => setOnHover(false)} >{formatTime(time)}
                </Space>
      }
      {/* <button onClick={resetTimer}>Reset</button> */}
    </Space>
  );
};

export default Timer;
