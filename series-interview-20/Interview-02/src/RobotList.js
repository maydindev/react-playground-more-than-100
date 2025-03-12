import React, { useContext } from 'react';
import { RobotContext } from './context';

const RobotList = () => {
  const { robots, removeRobot } = useContext(RobotContext);

  return (
    <div className="robot-list">
      {robots.map((robot) => (
        <img
          key={robot.name}
          src={robot.url}
          alt={robot.name}
          onClick={() => removeRobot(robot.name)}
          className="robot-image"
        />
      ))}
    </div>
  );
};

export default RobotList;
