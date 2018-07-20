import React from 'react';
import RadarChart from '../lib';

import './App.css';

const content = [
  {
    name: 'with color',
    captions: {
      // columns
      battery: 'Battery Capacity',
      design: 'Design',
      useful: 'Usefulness'
    },
    chart: [
      // data
      {
        data: { battery: 0.7, design: 1, useful: 0.9 },
        meta: { color: '#58FCEC' }
      },
      {
        data: { battery: 1, design: 0.6, useful: 0.8 },
        meta: { color: '#A2C7E5' }
      },
      {
        data: { battery: 0.8, design: 0.7, useful: 0.6 },
        meta: { color: '#FF99C9' }
      }
    ]
  },
  {
    name: 'with class name',
    captions: {
      // columns
      battery: 'Battery Capacity',
      design: 'Design',
      useful: 'Usefulness'
    },
    chart: [
      // data
      {
        data: { battery: 0.7, design: 1, useful: 0.9 },
        meta: { class: 'iphone' }
      },
      {
        data: { battery: 1, design: 0.6, useful: 0.8 },
        meta: { color: '#A2C7E5' }
      },
      {
        data: { battery: 0.8, design: 0.7, useful: 0.6 },
        meta: { color: '#FF99C9' }
      }
    ]
  },
  {
    name: 'with more data',
    captions: {
      // columns
      battery: 'Battery Capacity',
      design: 'Design',
      useful: 'Usefulness',
      speed: 'Speed',
      weight: 'Weight'
    },
    chart: [
      // data
      {
        data: {
          battery: 0.7,
          design: 1,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8
        },
        meta: { color: '#58FCEC' }
      },
      {
        data: { battery: 1, design: 0.6, useful: 0.8, speed: 0.9, weight: 0.7 },
        meta: { color: '#A2C7E5' }
      },
      {
        data: {
          battery: 0.8,
          design: 0.7,
          useful: 0.6,
          speed: 0.8,
          weight: 0.6
        },
        meta: { color: '#FF99C9' }
      }
    ]
  },
  {
    name: 'with single data',
    captions: {
      // columns
      battery: 'Battery Capacity',
      design: 'Design',
      useful: 'Usefulness',
      speed: 'Speed',
      weight: 'Weight'
    },
    chart: [
      // data
      {
        data: {
          battery: 0.7,
          design: .8,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8
        },
        meta: { color: '#58FCEC' }
      }
    ]
  },
  {
    name: 'with custom options',
    captions: {
      // columns
      battery: 'Battery Capacity',
      design: 'Design',
      useful: 'Usefulness',
      speed: 'Speed',
      weight: 'Weight'
    },
    chart: [
      // data
      {
        data: {
          battery: 0.7,
          design: .8,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8
        },
        meta: { color: '#58FCEC' }
      },
    ],
    options: {
      axes: true, // show axes?
      scales: 5, // how many circles?
      captions: false, // show captions?
      zoomDistance: .75, // 0.1 to 1?
      axisProps: () => ({ className: 'custom-axis' }),
      scaleProps: () => ({ className: 'custom-scale', fill: 'none' }),
      shapeProps: () => ({ className: 'custom-shape' })
    }
  },

];

const App = () => (
  <div className="container">
    <h1>React Svg Radar Chart Demo</h1>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'inherit',
        justifyContent: 'center'
      }}
    >

      {content.map((data, i) => (
        <div className="chart-container" key={`${i}-${data.name}`}>
          <h2>{data.name}</h2>
          <RadarChart
            captions={data.captions}
            data={data.chart}
            options={data.options}
          />
        </div>
      ))}
    </div>
  </div>
);

export default App;
