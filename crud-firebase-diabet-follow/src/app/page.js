"use client"
import { useState } from 'react';
import Meal from './meal';

export default function Home() {
  const [showMeal, setShowMeal] = useState(false);

  const handleClick = () => {
    setShowMeal(!showMeal);
  };

  return (
    <div>

      <button onClick={handleClick}>
        {showMeal ? 'Hide Meal Component' : 'Show Meal Component'}
      </button>
      {showMeal && <Meal />}
      
    </div>
  );
}
