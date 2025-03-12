import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  return <GenerateList/>
}


const GenerateList = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    //setTimeout(() => getActivity(), 1000);
    //getActivity()
    console.log(activities)
  }, []);
  

  async function handleGetActivity() {
    const data = await axios.get("https://bored.api.lewagon.com/api/activity");
    console.log(data)
    setActivities((prev) => [...prev, { ...data.data, collapsed: true }]);
  }

  function handleExpandActivity(key) {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.key === key ? { ...activity, collapsed: !activity.collapsed } : activity
      )
    );
  }

  return(
    <div className="flex flex-col items-center">
      <button
        onClick={handleGetActivity}
        className="border-1 border-red-999 px-2 py-1 my-4 bg-gray-200 rounded-md text-black"
      >Generate Activity</button>
        <ul className="list-inside list-disc">
          {activities.map((activity) => (
            <div key={activity.key} className="mb-4">
              <li className="mb-4">
                {activity.activity}
                <button
                  className="border-1 border-red-999 px-2 py-1 ml-4 bg-gray-200 rounded-md text-black"
                  onClick={() => handleExpandActivity(activity.key)}
                >
                  {activity.collapsed ? "Expand" : "Collapse"}
                </button>
              </li>
              {!activity.collapsed && (
                <ExpandableListItem activity={activity} />
              )}
            </div>
          ))}
        </ul>
    </div>

  )
}

const ExpandableListItem = ({ activity }) => {
  return (
    <ul className="ml-8">
      <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:border-2 before:border-black before:rounded-full before:transform before:-translate-y-1/2">
        Type: {activity.type.slice(0, 1).toUpperCase() + activity.type.slice(1)}
      </li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:border-2 before:border-black before:rounded-full before:transform before:-translate-y-1/2">Participants: {activity.participants}</li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:border-2 before:border-black before:rounded-full before:transform before:-translate-y-1/2">Price: {activity.price}</li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:border-2 before:border-black before:rounded-full before:transform before:-translate-y-1/2">
        Link:{" "}
        <a href={activity.link} className="text-blue-500" target="_blank">
          {activity.link}
        </a>
      </li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:border-2 before:border-black before:rounded-full before:transform before:-translate-y-1/2">Key: {activity.key}</li>
      <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:border-2 before:border-black before:rounded-full before:transform before:-translate-y-1/2">Accessibility: {activity.accessibility}</li>
    </ul>
  );
  
};

export default App;
