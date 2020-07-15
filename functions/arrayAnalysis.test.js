import arrAnal from './arrayAnalysis';

const arr = [12, 2, 1];
const object = {
  average: 5,
  min: 1,
  max: 12,
  length: 3,
};

// check function exists
test('function exists', () => {
  expect(arrAnal.analyze).toBeDefined();
});

test('it creates and object with array properties', () => {
  expect(arrAnal.analyze(arr)).toEqual(object);
});

test('it returns the average of the array elements', () => {
  expect(arrAnal.analyze(arr).average).toEqual(object.average);
});

test('it returns the minimun value of the elements', () => {
  expect(arrAnal.analyze(arr).min).toEqual(object.min);
});

test('it returns the maximum value of the elements', () => {
  expect(arrAnal.analyze(arr).max).toEqual(object.max);
});
