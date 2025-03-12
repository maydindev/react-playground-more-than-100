import React from 'react';
import { RobotProvider } from './context';
import RobotInput from './RobotInput';
import RobotList from './RobotList';
import './styles.css'; 



function App() {
  return (
    <RobotProvider>
      <div className="app-container">      
        <RobotInput />
        <p className="title">Robot List</p>
        <br />
        <RobotList />
      </div>
    </RobotProvider>
  );
}

export default App;
