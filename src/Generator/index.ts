export function* Generator(
    start: number,
    end: number,
    step: number
  ): Generator<number> {
    let current = start;
    while (current < end) {
      yield current;
      current += step;
    }
  }
  