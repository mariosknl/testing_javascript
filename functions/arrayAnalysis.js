const analyze = (arr) => ({
  average: arr.reduce((a, b) => a + b) / arr.length,
  min: arr.reduce((a, b) => Math.min(a, b)),
  max: arr.reduce((a, b) => Math.max(a, b)),
  length: arr.length,
});

export default { analyze };