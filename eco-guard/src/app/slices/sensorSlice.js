import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Bedroom",
    image: "/icondashboardbed.png",
    status: "Good",
    pm25: {
      current : "9",
      condition : "Vary",
      chart: {
        "1H": [
          { name: "10", value: 12 },
          { name: "20", value: 30 },
          { name: "30", value: 10 },
          { name: "40", value: 20 },
          { name: "50", value: 40 },
        ],
        "1D": [
          { name: "10", value: 20 },
          { name: "20", value: 20 },
          { name: "30", value: 30 },
          { name: "40", value: 20 },
          { name: "50", value: 30 },
        ],
        "1W": [
          { name: "10", value: 10 },
          { name: "20", value: 20 },
          { name: "30", value: 10 },
          { name: "40", value: 20 },
          { name: "50", value: 10 },
        ],
        "1M":[
          { name: "10", value: 20 },
          { name: "20", value: 30 },
          { name: "30", value: 20 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ]
      } 
    },
    airTemperature: {
      unit: "*C",
      unitPerValue: 45,
      chart : {
        "1H": 
          { condition: "Good", value: 25 }, 
        "1D": 
          { condition: "Good", value: 23 }, 
        "1W": 
          { condition: "Bad", value: 40 }, 
        "1M": 
          { condition: "Average", value: 27 }, 
      }
    },
    humidity: {
      unit: "%",
      unitPerValue: 100,
      chart : {
        "1H": 
          { condition: "Average", value: 62 }, 
        "1D": 
          { condition: "Average", value: 55 }, 
        "1W": 
          { condition: "Good", value: 35 }, 
        "1M": 
          { condition: "Bad", value: 80 }, 
      }
    },
    co2: {
      current : "9",
      condition : "Vary",
      chart: {
        "1H": [
          { name: "10", value: 20 },
          { name: "20", value: 40 },
          { name: "30", value: 20 },
          { name: "40", value: 10 },
          { name: "50", value: 30 },
        ],
        "1D": [
          { name: "10", value: 10 },
          { name: "20", value: 30 },
          { name: "30", value: 20 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ],
        "1W": [
          { name: "10", value: 20 },
          { name: "20", value: 20 },
          { name: "30", value: 30 },
          { name: "40", value: 40 },
          { name: "50", value: 10 },
        ],
        "1M":[
          { name: "10", value: 10 },
          { name: "20", value: 10 },
          { name: "30", value: 10 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ]
      }
    },
    voc: [
      {
        compound: "Benzene",
        amount : 50,
        condition: "Bad"
      },
      {
        compound: "Toluene",
        amount : 30,
        condition: "Average"
      },
      {
        compound: "Gas3",
        amount : 20,
        condition: "Good"
      },
    ],
    waterTemperature: {
      chart : {
        "1H": 
          { condition: "Average", value: 43 }, 
        "1D": 
          { condition: "Good", value: 22 }, 
        "1W": 
          { condition: "Bad", value: 60 }, 
        "1M": 
          { condition: "Average", value: 30 }, 
      }
    },
    ph: {
      unitPerValue: 10,
      chart : {
        "1H": 
          { condition: "Bad", value: 6.2 }, 
        "1D": 
          { condition: "Average", value: 8.6 }, 
        "1W": 
          { condition: "Good", value: 7.5 }, 
        "1M": 
          { condition: "Good", value: 7.7 }, 
      }
    },
    tds: {
      unitPerValue: 600,
      chart : {
        "1H": 
          { condition: "Bad", value: 570 }, 
        "1D": 
          { condition: "Good", value: 115 }, 
        "1W": 
          { condition: "Good", value: 270 }, 
        "1M": 
          { condition: "Average", value: 436 }, 
      }
    },
  },
  {
    id: 2,
    name: "Backyard",
    image: "/icondashboardbackyard.png",
    status: "Average",
    pm25: {
      current : "9",
      condition : "Vary",
      chart : {
        "1H": [
          { name: "10", value: 15 },
          { name: "20", value: 35 },
          { name: "30", value: 15 },
          { name: "40", value: 25 },
          { name: "50", value: 35 },
        ],
        "1D": [
          { name: "10", value: 25 },
          { name: "20", value: 25 },
          { name: "30", value: 35 },
          { name: "40", value: 25 },
          { name: "50", value: 35 },
        ],
        "1W": [
          { name: "10", value: 15 },
          { name: "20", value: 25 },
          { name: "30", value: 15 },
          { name: "40", value: 25 },
          { name: "50", value: 15 },
        ],
        "1M":[
          { name: "10", value: 25 },
          { name: "20", value: 35 },
          { name: "30", value: 25 },
          { name: "40", value: 35 },
          { name: "50", value: 35 },
        ]
      } 
    },
    airTemperature: {
      unit: "*C",
      unitPerValue: 45,
      chart : {
        "1H": 
          { condition: "Good", value: 23 }, 
        "1D": 
          { condition: "Good", value: 20 }, 
        "1W": 
          { condition: "Bad", value: 43 }, 
        "1M": 
          { condition: "Average", value: 26 }, 
      }
    },
    humidity: {
      unit: "%",
      unitPerValue: 100,
      chart : {
        "1H": 
          { condition: "Average", value: 60 }, 
        "1D": 
          { condition: "Average", value: 50 }, 
        "1W": 
          { condition: "Good", value: 30 }, 
        "1M": 
          { condition: "Bad", value: 75 }, 
      }
    },
    co2: {
      current : "9",
      condition : "Vary",
      chart: {
        "1H": [
          { name: "10", value: 25 },
          { name: "20", value: 45 },
          { name: "30", value: 25 },
          { name: "40", value: 15 },
          { name: "50", value: 35 },
        ],
        "1D": [
          { name: "10", value: 15 },
          { name: "20", value: 35 },
          { name: "30", value: 25 },
          { name: "40", value: 35 },
          { name: "50", value: 45 },
        ],
        "1W": [
          { name: "10", value: 25 },
          { name: "20", value: 25 },
          { name: "30", value: 35 },
          { name: "40", value: 35 },
          { name: "50", value: 15 },
        ],
        "1M":[
          { name: "10", value: 15 },
          { name: "20", value: 15 },
          { name: "30", value: 15 },
          { name: "40", value: 35 },
          { name: "50", value: 35 },
        ]
      }
    },
    voc: [
      {
        compound: "Benzene",
        amount : 60,
        condition: "Bad"
      },
      {
        compound: "Toluene",
        amount : 25,
        condition: "Good"
      },
      {
        compound: "Gas3",
        amount : 10,
        condition: "Good"
      },
    ],
    waterTemperature: {
      chart : {
        "1H": 
          { condition: "Average", value: 45 }, 
        "1D": 
          { condition: "Good", value: 25 }, 
        "1W": 
          { condition: "Bad", value: 55 }, 
        "1M": 
          { condition: "Average", value: 35 }, 
      }
    },
    ph: {
      unitPerValue: 10,
      chart : {
        "1H": 
          { condition: "Bad", value: 6.4 }, 
        "1D": 
          { condition: "Average", value: 8.8 }, 
        "1W": 
          { condition: "Good", value: 7.7 }, 
        "1M": 
          { condition: "Good", value: 7.8 }, 
      }
    },
    tds: {
      unitPerValue: 600,
      chart : {
        "1H": 
          { condition: "Bad", value: 560 }, 
        "1D": 
          { condition: "Good", value: 105 }, 
        "1W": 
          { condition: "Good", value: 260 }, 
        "1M": 
          { condition: "Average", value: 426 }, 
      }
    },
  },
  {
    id: 3,
    name: "Living Room",
    image: "/icondashboardlivingroom.png",
    status: "Good",
    pm25: {
      current : "9",
      condition : "Vary",
      chart : {
        "1H": [
          { name: "10", value: 10 },
          { name: "20", value: 30 },
          { name: "30", value: 10 },
          { name: "40", value: 20 },
          { name: "50", value: 40 },
        ],
        "1D": [
          { name: "10", value: 20 },
          { name: "20", value: 20 },
          { name: "30", value: 30 },
          { name: "40", value: 20 },
          { name: "50", value: 30 },
        ],
        "1W": [
          { name: "10", value: 10 },
          { name: "20", value: 20 },
          { name: "30", value: 10 },
          { name: "40", value: 20 },
          { name: "50", value: 10 },
        ],
        "1M":[
          { name: "10", value: 20 },
          { name: "20", value: 30 },
          { name: "30", value: 20 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ]
      }
    },
    airTemperature: {
      unit: "*C",
      unitPerValue: 45,
      chart : {
        "1H": 
          { condition: "Good", value: 25 }, 
        "1D": 
          { condition: "Good", value: 23 }, 
        "1W": 
          { condition: "Bad", value: 40 }, 
        "1M": 
          { condition: "Average", value: 27 }, 
      }
    },
    humidity: {
      unit: "%",
      unitPerValue: 100,
      chart : {
        "1H": 
          { condition: "Average", value: 62 }, 
        "1D": 
          { condition: "Average", value: 55 }, 
        "1W": 
          { condition: "Good", value: 35 }, 
        "1M": 
          { condition: "Bad", value: 80 }, 
      }
    },
    co2: {
      current : "9",
      condition : "Vary",
      chart : {
        "1H": [
          { name: "10", value: 20 },
          { name: "20", value: 40 },
          { name: "30", value: 20 },
          { name: "40", value: 10 },
          { name: "50", value: 30 },
        ],
        "1D": [
          { name: "10", value: 10 },
          { name: "20", value: 30 },
          { name: "30", value: 20 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ],
        "1W": [
          { name: "10", value: 20 },
          { name: "20", value: 20 },
          { name: "30", value: 30 },
          { name: "40", value: 40 },
          { name: "50", value: 10 },
        ],
        "1M":[
          { name: "10", value: 10 },
          { name: "20", value: 10 },
          { name: "30", value: 10 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ]
      } 
    },
    voc: [
      {
        compound: "Benzene",
        amount : 60,
        condition: "Good"
      },
      {
        compound: "Toluene",
        amount : 30,
        condition: "Average"
      },
      {
        compound: "Gas3",
        amount : 10,
        condition: "Bad"
      },
    ],
    waterTemperature: {
      chart : {
        "1H": 
          { condition: "Average", value: 43 }, 
        "1D": 
          { condition: "Good", value: 22 }, 
        "1W": 
          { condition: "Bad", value: 60 }, 
        "1M": 
          { condition: "Average", value: 30 }, 
      }
    },
    ph: {
      unitPerValue: 10,
      chart : {
        "1H": 
          { condition: "Bad", value: 6.2 }, 
        "1D": 
          { condition: "Average", value: 8.6 }, 
        "1W": 
          { condition: "Good", value: 7.5 }, 
        "1M": 
          { condition: "Good", value: 7.7 }, 
      }
    },
    tds: {
      unitPerValue: 600,
      chart : {
        "1H": 
          { condition: "Bad", value: 570 }, 
        "1D": 
          { condition: "Good", value: 115 }, 
        "1W": 
          { condition: "Good", value: 270 }, 
        "1M": 
          { condition: "Average", value: 436 }, 
      }
    },
  }
];


export const fetchSensorData = createAsyncThunk(
  "sensor/fetchSensorData",
  async () => {
    const response = await fetch("/api/sensorData");
    if (!response.ok) {
      throw new Error("Failed to fetch sensor data");
    }
    return await response.json();
  }
);

const sensorSlice = createSlice({
  name: "sensor",
  initialState,
});

export default sensorSlice.reducer;
