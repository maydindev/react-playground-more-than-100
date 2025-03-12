import React, { createContext, useState } from 'react';

export const RobotContext = createContext();

export const RobotProvider = ({ children }) => {
  const [robots, setRobots] = useState([]);

  const addRobot = (name) => {
    if (robots.find((robot) => robot.name === name)) {
      alert('Robot listede bulunmakta!');
    } else {
      const newRobot = { name, url: `https://robohash.org/${name}` };
      setRobots([...robots, newRobot]);
    }
  };

  const removeRobot = (name) => {
    setRobots(robots.filter((robot) => robot.name !== name));
  };

  return (
    <RobotContext.Provider value={{ robots, addRobot, removeRobot }}>
      {children}
    </RobotContext.Provider>
  );
};