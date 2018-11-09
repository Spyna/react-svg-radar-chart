import React, { Component } from 'react';
import RadarChart from '../lib';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

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
            meta: { color: '#edc951' }
          },
          {
            data: { battery: 1, design: 0.6, useful: 0.8 },
            meta: { color: '#cc333f' }
          },
          {
            data: { battery: 0.8, design: 0.7, useful: 0.6 },
            meta: { color: '#00a0b0' }
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
            meta: { color: '#cc333f' }
          },
          {
            data: { battery: 0.8, design: 0.7, useful: 0.6 },
            meta: { color: '#00a0b0' }
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
            meta: { color: '#edc951' }
          },
          {
            data: {
              battery: 1,
              design: 0.6,
              useful: 0.8,
              speed: 0.9,
              weight: 0.7
            },
            meta: { color: '#cc333f' }
          },
          {
            data: {
              battery: 0.8,
              design: 0.7,
              useful: 0.6,
              speed: 0.8,
              weight: 0.6
            },
            meta: { color: '#00a0b0' }
          }
        ]
      },
      {
        name: 'with dots',
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
            meta: { color: '#edc951' }
          },
          {
            data: {
              battery: 1,
              design: 0.6,
              useful: 0.8,
              speed: 0.9,
              weight: 0.7
            },
            meta: { color: '#cc333f' }
          },
          {
            data: {
              battery: 0.8,
              design: 0.7,
              useful: 0.6,
              speed: 0.8,
              weight: 0.6
            },
            meta: { color: '#00a0b0' }
          }
        ],
        options: {
          dots: true,
          dotProps: () => ({
            className: 'dot',
            mouseEnter: this.handleToolTip,
            mouseLeave: this.handleToolTip
          })
        }
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
              design: 0.8,
              useful: 0.9,
              speed: 0.67,
              weight: 0.8
            },
            meta: { color: '#edc951' }
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
              design: 0.8,
              useful: 0.9,
              speed: 0.67,
              weight: 0.8
            },
            meta: { color: '#edc951' }
          }
        ],
        options: {
          axes: true, // show axes?
          scales: 5, // how many circles?
          captions: false, // show captions?
          zoomDistance: 0.75, // 0.1 to 1?
          axisProps: () => ({ className: 'custom-axis' }),
          scaleProps: () => ({ className: 'custom-scale', fill: 'none' }),
          shapeProps: () => ({ className: 'custom-shape' })
        }
      },
      {
        name: 'more with custom options',
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
              design: 0.8,
              useful: 0.9,
              speed: 0.67,
              weight: 0.8
            },
            meta: { color: '#edc951' }
          }
        ],
        options: {
          axes: false, // show axes?
          scales: 8, // how many circles?
          captions: true, // show captions?
          captionMargin: 12
        }
      },
      {
        name: 'with custom size',
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
              design: 0.8,
              useful: 0.9,
              speed: 0.67,
              weight: 0.8
            },
            meta: { color: '#edc951' }
          }
        ],
        size: 450
      }
    ];

    this.mousePos = [0, 0];

    this.state = {
      content,
      dot: {}
    };
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  // This is only used for the "with dots" example for
  // positioning the tooltip
  handleMouseMove = e => {
    this.mousePos = [e.pageX, e.pageY];
  };

  handleToolTip = dot => {
    this.setState({ dot });
  };

  render() {
    const { content, dot } = this.state;
    return (
      <div className="container">
        <h2>
          <a
            href="https://github.com/Spyna/react-svg-radar-chart"
            title="Github repo of this project"
          >
            <img
              src="./icon.png"
              width="100"
              alt="svg radar chart created with React Svg Radar Chart "
            />
          </a>
        </h2>
        <h1>React Svg Radar Chart</h1>
        <p>Generate SVG radar charts with React.</p>
        <p>
          <strong>react-svg-radar-chart</strong> is a lightweight library to
          create radar charts with React.
        </p>
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
                size={data.size}
              />
              {dot.key && (
                <div
                  className="tooltip"
                  style={{ left: this.mousePos[0], top: this.mousePos[1] }}
                >
                  <span>{`${dot.key}: ${dot.value}`}</span>
                  <br />
                  <span>{`Num Chart: ${dot.idx}`}</span>
                </div>
              )}
              <div className="source-container">
                <h3>data</h3>
                <pre>data: {JSON.stringify(data.chart, null, ' ')}</pre>
              </div>
            </div>
          ))}
        </div>
        <a href="https://github.com/Spyna/react-svg-radar-chart">
          <img
            style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
            src="https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png"
            alt="Fork me on GitHub"
          />
        </a>
      </div>
    );
  }
}

export default App;
