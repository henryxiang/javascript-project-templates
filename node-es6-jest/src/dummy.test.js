import { greet } from './dummy';

test('dummy test', () => {
  expect(greet('World')).toBe('Hello World');
});
