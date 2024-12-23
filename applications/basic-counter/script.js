import { fromEvent, interval, merge, NEVER } from 'rxjs';
import { setCount, startButton, pauseButton } from './utilities';

const start$ = fromEvent(startButton, 'click');
const pause$ = fromEvent(pauseButton, 'click');

const interval$ = interval(1000);
let subscription;

start$.subscribe((clickEvent) => {
  // Every time we start the counter, we create a new subscription to that series of eventual values; Observables.
  subscription = interval$.subscribe(setCount);
});

pause$.subscribe((clickEvent) => {
  subscription.unsubscribe();
});
