import {
  fromEvent,
  interval,
  merge,
  NEVER,
  switchMap,
  scan,
  tap,
  mapTo,
} from 'rxjs';
import { setCount, startButton, pauseButton } from './utilities';

const start$ = fromEvent(startButton, 'click').pipe(mapTo(true));
const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(true));

const counter$ = merge(start$, pause$).pipe(
  tap((value) => console.log(value)),
  switchMap((isRunning) => {
    return isRunning ? interval(1000) : NEVER;
  }),
  tap((value) => console.log(value)),
  scan((count) => count + 1, 0),
);

counter$.subscribe(setCount);
