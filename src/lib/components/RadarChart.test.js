import React from 'react';
import ReactDOM from 'react-dom';
import RadarChart from './RadarChart';

it('RadarChart renders without crashing', () => {
  const div = document.createElement('div');

  const data = [
    {
      data: {
        battery: 0.7,
        speed: 0.67
      }
    }
  ];
  const captions = {
    battery: 'Battery Capacity',
    speed: 'Speed'
  };

  ReactDOM.render(<RadarChart captions={captions} data={data} />, div);
});

it('RadarChart renders with custom options', () => {
  const div = document.createElement('div');

  const data = [
    {
      data: {
        battery: 0.7,
        speed: 0.67
      }
    }
  ];
  const captions = {
    battery: 'Battery Capacity',
    speed: 'Speed'
  };

  const options = {
    captions: false,
    axis: false,
    scales: 0,
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontFamily: 'sans-serif'
    })
  }

  ReactDOM.render(<RadarChart captions={captions} data={data} options={options} />, div);
});

it('RadarChart renders without captions', () => {
  const div = document.createElement('div');

  const data = [
    {
      data: {
        battery: 0.7,
        speed: 0.67
      },
      meta: {}
    }
  ];
  const captions = {
    battery: 'Battery Capacity',
    speed: 'Speed'
  };

  const options = {
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontFamily: 'sans-serif'
    }),
    captions: false
  }

  ReactDOM.render(<RadarChart data={data} captions={captions} />, div);
});

it('RadarChart crashes when data are not in the right format', () => {
  const div = document.createElement('div');

  const data = [
    {
      data: {
        battery: 'wrong value',
        speed: 0.67
      }
    }
  ];
  const captions = {
    battery: 'Battery Capacity',
    speed: 'Speed'
  };
  expect(() => {
    ReactDOM.render(<RadarChart captions={captions} data={data} />, div);
  }).toThrow();
});

it('RadarChart crashes when captions are in the wrong format', () => {
  const div = document.createElement('div');

  const data = [
    {
      data: {
        battery: 0.7,
        speed: 0.67
      }
    }
  ];
  let captions = 'with a wrong value';
  expect(() => {
    ReactDOM.render(<RadarChart captions={captions} data={data} />, div);
  }).toThrow();
  captions = { value: 'wrong' };
  expect(() => {
    ReactDOM.render(<RadarChart captions={captions} data={data} />, div);
  }).toThrow();
});

it('RadarChart crashes when captions are in the wrong format', () => {
  const div = document.createElement('div');

  const data = 'invalid';
  const captions = {
    battery: 'Battery Capacity',
    speed: 'Speed'
  };
  expect(() => {
    ReactDOM.render(<RadarChart captions={captions} data={data} />, div);
  }).toThrow();
});
