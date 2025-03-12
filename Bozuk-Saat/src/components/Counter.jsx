import { useState, useEffect } from 'react'

export default function Counter(props) {
  const [numberOfThings, setNumberOfThings] = useState(1)

  useEffect(() => {
    const updateNumberOfThings = () => {
      if (typeof window !== 'undefined') {
        const timeEventsManager = require('time-events-manager')
        const numIntervals =
          timeEventsManager.intervalCollection._intervalCollection.length
        const numTimeouts =
          timeEventsManager.timeoutCollection._timeoutCollection.length
        setNumberOfThings(numIntervals || numTimeouts ? numIntervals : 0)
      }
    }

    const timeout = setTimeout(updateNumberOfThings, 50)
    return () => clearTimeout(timeout)
  }, [props.displayClock])

  return (
    <div
      className={`counter-container ${numberOfThings <= 1 ? 'green' : 'red'}`}
    >
      <h2>Counter:</h2>
      <p>{numberOfThings}</p>
    </div>
  )
}
