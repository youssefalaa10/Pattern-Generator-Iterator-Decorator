export function iterator(start: number, end: number, step: number): Iterable<number> {
  return {
    [Symbol.iterator]: function () {
      let current = start;
      return {
        next(): IteratorResult<number> {
          if (current < end) {
            const value = current;
            current += step;
            return { value, done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  };
}
