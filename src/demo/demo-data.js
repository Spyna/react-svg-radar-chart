const demoData = [
  {
    name: "with color",
    captions: {
      // columns
      battery: "Battery Capacity",
      design: "Design",
      useful: "Usefulness",
    },
    chart: [
      // data
      {
        data: { battery: 0.7, design: 1, useful: 0.9 },
        meta: { color: "#edc951" },
      },
      {
        data: { battery: 1, design: 0.6, useful: 0.8 },
        meta: { color: "#cc333f" },
      },
      {
        data: { battery: 0.8, design: 0.7, useful: 0.6 },
        meta: { color: "#00a0b0" },
      },
    ],
    options: {
      scaleProps: () => ({
        fill: "#fafafa",
        stroke: "#999",
        strokeWidth: ".2",
      }),
      rotation: -1,
    },
  },
  {
    name: "with class name",
    captions: {
      // columns
      battery: "Battery Capacity",
      design: "Design",
      useful: "Usefulness",
    },
    chart: [
      // data
      {
        data: { battery: 0.7, design: 1, useful: 0.9 },
        meta: { class: "iphone" },
      },
      {
        data: { battery: 1, design: 0.6, useful: 0.8 },
        meta: { color: "#cc333f" },
      },
      {
        data: { battery: 0.8, design: 0.7, useful: 0.6 },
        meta: { color: "#00a0b0" },
      },
    ],
  },
  {
    name: "with more data",
    captions: {
      // columns
      battery: "Battery Capacity",
      design: "Design",
      useful: "Usefulness",
      speed: "Speed",
      weight: "Weight lift is hards",
    },
    chart: [
      // data
      {
        data: {
          battery: 0.7,
          design: 1,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8,
        },
        meta: { color: "#edc951" },
      },
      {
        data: {
          battery: 1,
          design: 0.6,
          useful: 0.8,
          speed: 0.9,
          weight: 0.7,
        },
        meta: { color: "#cc333f" },
      },
      {
        data: {
          battery: 0.8,
          design: 0.7,
          useful: 0.6,
          speed: 0.8,
          weight: 0.6,
        },
        meta: { color: "#00a0b0" },
      },
    ],
    options : {
      captionMargin: 30,
    }
  },
  {
    name: "with dots",
    captions: {
      // columns
      battery: "Battery Capacity",
      design: "Design",
      useful: "Usefulness",
      speed: "Speed",
      weight: "Weight",
    },
    chart: [
      // data
      {
        data: {
          battery: 0.7,
          design: 1,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8,
        },
        meta: { color: "#edc951" },
      },
      {
        data: {
          battery: 1,
          design: 0.6,
          useful: 0.8,
          speed: 0.9,
          weight: 0.7,
        },
        meta: { color: "#cc333f" },
      },
      {
        data: {
          battery: 0.8,
          design: 0.7,
          useful: 0.6,
          speed: 0.8,
          weight: 0.6,
        },
        meta: { color: "#00a0b0" },
      },
    ],
    options: {
      dots: true,
      dotProps: () => ({
        className: "dot",
        mouseEnter: this.handleToolTip,
        mouseLeave: this.handleToolTip,
      }),
    },
  },
  {
    name: "with single data",
    captions: {
      // columns
      battery: "Battery Capacity",
      design: "Design",
      useful: "Usefulness",
      speed: "Speed",
      weight: "Weight",
    },
    chart: [
      // data
      {
        data: {
          battery: 0.7,
          design: 0.8,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8,
        },
        meta: { color: "#edc951" },
      },
    ],
  },
  {
    name: "with custom options",
    captions: {
      // columns
      battery: "Battery Capacity",
      design: "Design",
      useful: "Usefulness",
      speed: "Speed",
      weight: "Weight",
    },
    chart: [
      // data
      {
        data: {
          battery: 0.7,
          design: 0.8,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8,
        },
        meta: { color: "#edc951" },
      },
    ],
    options: {
      axes: true, // show axes?
      scales: 5, // how many circles?
      captions: false, // show captions?
      zoomDistance: 0.75, // 0.1 to 1?
      axisProps: () => ({ className: "custom-axis" }),
      scaleProps: () => ({ className: "custom-scale", fill: "none" }),
      shapeProps: () => ({ className: "custom-shape" }),
    },
  },
  {
    name: "more with custom options",
    captions: {
      // columns
      battery: "Battery Capacity",
      design: "Design",
      useful: "Usefulness",
      speed: "Speed",
      weight: "Weight",
    },
    chart: [
      // data
      {
        data: {
          battery: 0.7,
          design: 0.8,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8,
        },
        meta: { color: "#edc951" },
      },
    ],
    options: {
      axes: false, // show axes?
      scales: 8, // how many circles?
      captions: true, // show captions?
      captionMargin: 12,
    },
  },
  {
    name: "with custom size",
    captions: {
      // columns
      battery: "Battery Capacity",
      design: "Design",
      useful: "Usefulness",
      speed: "Speed",
      weight: "Weight",
    },
    chart: [
      // data
      {
        data: {
          battery: 0.7,
          design: 0.8,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8,
        },
        meta: { color: "#edc951" },
      },
    ],
    size: 450,
  },
  {
    name: "With 180 degrees rotation",
    captions: {
      // columns
      battery: "Battery Capacity",
      design: "Design",
      useful: "Usefulness",
    },
    chart: [
      // data
      {
        data: {
          battery: 0.8,
          design: 0.7,
          useful: 0.6,
        },
        meta: { color: "#edc951" },
      },
    ],
    options: {
      scaleProps: () => ({
        fill: "#fafafa",
        stroke: "#999",
        strokeWidth: ".6",
      }),
      rotation: 180,
    },
  },
  {
    name: "with color",
    captions: {
      // columns
      battery: "Battery Capacity",
      design: "Design",
      useful: "A very long caption should be wrapped when using the right options to fit the space",
    },
    chart: [
      // data
      {
        data: { battery: 0.7, design: 1, useful: 0.9 },
        meta: { color: "#edc951" },
      },
      {
        data: { battery: 1, design: 0.6, useful: 0.8 },
        meta: { color: "#cc333f" },
      },
      {
        data: { battery: 0.8, design: 0.7, useful: 0.6 },
        meta: { color: "#00a0b0" },
      },
    ],
    options: {
      scaleProps: () => ({
        fill: "#fafafa",
        stroke: "#999",
        strokeWidth: ".2",
      }),
      rotation: -1,
      captionProps: (column) => ({
        className: "custom-caption",
        style: {
          display: "block",
          width: 32,
          height: 32,
          overflow: "auto" /* scroll */,
        },
      }),
    },
  },
];

export default demoData;
