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

it('renders the chart with a specified size', () => {
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
  const size = '800';
  ReactDOM.render(
    <RadarChart captions={captions} data={data} size={size} />,
    div
  );
  expect(div.querySelector('svg').getAttribute('width')).toBe(size);
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
    axes: false,
    scales: 0,
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontFamily: 'sans-serif'
    })
  };

  ReactDOM.render(
    <RadarChart captions={captions} data={data} options={options} />,
    div
  );
});

it('RadarChart renders without axes', () => {
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
    axes: false
  };

  ReactDOM.render(
    <RadarChart captions={captions} data={data} options={options} />,
    div
  );
  expect(div.querySelectorAll('.axis').length).toBe(0);
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

  ReactDOM.render(<RadarChart data={data} captions={captions} />, div);
});


it('should wrap the caption when it is too long', () => {
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
    speed: 'A very long caption that should be wrapped'
  };

  ReactDOM.render(<RadarChart captions={captions} data={data} />, div);
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

it('RadarChart renders with 2 dots', () => {
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
    captions: false,
    axes: false,
    dots: true,
    scales: 0,
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontFamily: 'sans-serif'
    }),
    dotProps: () => ({
      className: 'testDot',
      mouseEnter: dot => dot
    })
  };

  ReactDOM.render(
    <RadarChart captions={captions} data={data} options={options} />,
    div
  );

  expect(div.querySelectorAll('.testDot').length).toBe(2);
});

it('render with custom viewBox', () => {
  const div = document.createElement('div');
  const viewBox = '0 0 500 500';
  const setViewBox = () => viewBox;
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
    setViewBox
  };

  ReactDOM.render(
    <RadarChart captions={captions} data={data} options={options} />,
    div
  );

  expect(div.querySelectorAll(`svg[viewBox='${viewBox}']`).length).toBe(1);
});
