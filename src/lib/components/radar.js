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

const dot = (columns, options) => (chartData, i) => {
  const data = chartData.data;
  const meta = chartData.meta || {};
  const extraProps = options.dotProps(meta);
  let extraPropsSvg = {};
  let mouseEnter = () => {};
  let mouseLeave = () => {};
  if (extraProps.mouseEnter) {
    mouseEnter = extraProps.mouseEnter;
  }
  if (extraProps.mouseLeave) {
    mouseLeave = extraProps.mouseLeave;
  }
  if (extraProps.r) {
    extraPropsSvg.r = extraProps.r;
  }
  if (extraProps.fill) {
    extraPropsSvg.fill = extraProps.fill;
  }
  if (extraProps.stoke) {
    extraPropsSvg.stroke = extraProps.stroke;
  }
  if (extraProps.stokeWidth) {
    extraPropsSvg.strokeWidth = extraProps.strokeWidth;
  }
  return columns.map(col => {
    const val = data[col.key];
    if ('number' !== typeof val) {
      throw new Error(`Data set ${i} is invalid.`);
    }

    return (
      <circle
        key={`dot-${col.key}-${val}`}
        cx={polarToX(col.angle, (val * options.chartSize) / 2)}
        cy={polarToY(col.angle, (val * options.chartSize) / 2)}
        className={[extraProps.className, meta.class].join(' ')}
        onMouseEnter={() => mouseEnter({ key: col.key, value: val, idx: i })}
        onMouseLeave={() => mouseLeave({})}
        {...extraPropsSvg}
      />
    );
  });
};

const shape = (columns, options) => (chartData, i) => {
  const data = chartData.data;
  const meta = chartData.meta || {};
  const extraProps = options.shapeProps(meta);
  let extraPropsSvg = {};
  if (!meta.fill) {
    meta.fill = meta.color;
  }
  if (meta.strokeWidth) {
    extraPropsSvg.strokeWidth = meta.strokeWidth;
  }
  if (meta.strokeDasharray) {
    extraPropsSvg.strokeDasharray = meta.strokeDasharray;
  }
  if (meta.stokeLinecap) {
    extraPropsSvg.stokeLinecap = meta.stokeLinecap;
  }
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
      {...extraPropsSvg}
      stroke={meta.color}
      fill={meta.fill}
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
  if (options.dots) {
    groups.push(<g key={`g-dots`}>{chartData.map(dot(columns, options))}</g>);
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
