import React from 'react';

const polarToX = (angle, distance) => Math.cos(angle - Math.PI / 2) * distance;

const polarToY = (angle, distance) => Math.sin(angle - Math.PI / 2) * distance;

const points = points => {
  return points
    .map(point => point[0].toFixed(4) + ',' + point[1].toFixed(4))
    .join(' ');
};

const axis = options => (col, i) => (
  <polyline
    key={`poly-axis-${i}`}
    points={points([
      [0, 0],
      [
        polarToX(col.angle, options.chartSize / 2),
        polarToY(col.angle, options.chartSize / 2)
      ]
    ])}
    {...options.axisProps(col)}
  />
);

const shape = (columns, options) => (chartData, i) => {
  const data = chartData.data;
  const meta = chartData.meta || {};
  const extraProps = options.shapeProps(meta);
  return (
    <path
      key={`shape-${i}`}
      d={options.smoothing(
        columns.map(col => {
          const val = data[col.key];
          if ('number' !== typeof val) {
            throw new Error(`Data set ${i} is invalid.`);
          }

          return [
            polarToX(col.angle, (val * options.chartSize) / 2),
            polarToY(col.angle, (val * options.chartSize) / 2)
          ];
        })
      )}
      {...extraProps}
      stroke={meta.color}
      fill={meta.color}
      className={[extraProps.className, meta.class].join(' ')}
    />
  );
};

const scale = (options, value) => (
  <circle
    key={`circle-${value}`}
    cx={0}
    cy={0}
    r={(value * options.chartSize) / 2}
    {...options.scaleProps(value)}
  />
);

const caption = options => col => (
  <text
    key={`caption-of-${col.key}`}
    x={polarToX(col.angle, (options.size / 2) * 0.95).toFixed(4)}
    y={polarToY(col.angle, (options.size / 2) * 0.95).toFixed(4)}
    dy={(options.captionProps(col).fontSize || 10) / 2}
    {...options.captionProps(col)}
    className="caption"
  >
    {col.caption}
  </text>
);

const render = (captions, chartData, options = {}) => {
  if ('object' !== typeof captions || Array.isArray(captions)) {
    throw new Error('caption must be an object');
  }
  if (!Array.isArray(chartData)) {
    throw new Error('data must be an array');
  }
  options.chartSize = options.size / options.zoomDistance;

  const columns = Object.keys(captions).map((key, i, all) => {
    return {
      key,
      caption: captions[key],
      angle: (Math.PI * 2 * i) / all.length
    };
  });
  const groups = [
    <g key={`g-groups}`}>{chartData.map(shape(columns, options))}</g>
  ];
  if (options.captions) {
    groups.push(<g key={`poly-captions`}>{columns.map(caption(options))}</g>);
  }
  if (options.axes) {
    groups.unshift(<g key={`group-axes`}>{columns.map(axis(options))}</g>);
  }
  if (options.scales > 0) {
    const scales = [];
    for (let i = options.scales; i > 0; i--) {
      scales.push(scale(options, i / options.scales));
    }
    groups.unshift(<g key={`poly-scales`}>{scales}</g>);
  }

  const delta = (options.size / 2).toFixed(4);
  return <g transform={`translate(${delta},${delta})`}>{groups}</g>;
};

export default render;
