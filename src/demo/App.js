import React, { Component } from 'react';
import RadarChart from '../lib';

import './App.css';
import content from './demo-data.js';

function downloadURI(uri, name) {
  let link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

class App extends Component {
  constructor(props) {
    super(props);
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

  downloadImage = imageId => event => {
    const imageElement = document.getElementById(imageId).outerHTML;
    const encoded = encodeURIComponent(imageElement);
    const header = 'data:image/svg+xml,';
    const dataUrl = header + encoded;
    downloadURI(dataUrl, `image-${imageId}.svg`);
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
          {content.map((data, index) => (
            <div className="chart-container" key={`${index}-${data.name}`}>
              <h2>{data.name}</h2>
              <button
                className="download-button"
                onClick={this.downloadImage(`chart-${index}`)}
              >
                download image
              </button>
              <br />
              <RadarChart
                captions={data.captions}
                data={data.chart}
                options={data.options}
                size={data.size}
                id={`chart-${index}`}
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
