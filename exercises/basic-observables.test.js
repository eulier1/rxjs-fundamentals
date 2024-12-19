import { from, of } from 'rxjs';

describe('Basic Observables', () => {
  describe(of, () => {
    it('should create an observable from its arguments', () => {
      const result = [];

      // This is synchronous Observable
      const observable$ = of(1, 2, 3, 4);

      // This is a new instance of an observable is created
      observable$.subscribe((value) => {
        result.push(value);
      });

      expect(result).toEqual([1, 2, 3, 4]);
    });
  });

  describe(from, () => {
    it('should create an observable', () => {
      const result = [];

      // This is synchronous Observable
      const observable$ = from([1, 2, 3, 4]);

      observable$.subscribe((value) => {
        result.push(value);
      });

      expect(result).toEqual([1, 2, 3, 4]);
    });
  });
});
