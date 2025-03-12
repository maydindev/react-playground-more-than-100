import React, { useState, useContext } from 'react';
import { RobotContext } from './context';

const RobotInput = () => {
  const [input, setInput] = useState('');
  const { addRobot } = useContext(RobotContext);

  const handleAddRobot = () => {
    if (input.trim()) {
      addRobot(input.trim());
      setInput('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Generate Robot"
        className="robot-input"
      />
      <button onClick={handleAddRobot} className="add-button">
        Enter
      </button>
    </div>
  );
};

export default RobotInput;
