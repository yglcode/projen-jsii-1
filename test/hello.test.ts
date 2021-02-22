import { Greeter } from '../src';

test('hello', () => {
  expect(new Greeter({ greetee: 'John' }).greet()).toBe('Hello, John');
});