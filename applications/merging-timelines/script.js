import {
  fromEvent,
  merge,
  interval,
  concat,
  race,
  forkJoin,
  first,
} from 'rxjs';
import { mapTo, startWith, take, map } from 'rxjs/operators';
import {
  labelWith,
  startButton,
  pauseButton,
  setStatus,
  bootstrap,
} from './utilities';

const start$ = fromEvent(startButton, 'click').pipe(mapTo(true));
const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));

const isRunning = merge(start$, pause$).pipe(startWith(false));

const first$ = interval(1000).pipe(map(labelWith('First')), take(4));
const second$ = interval(1000).pipe(map(labelWith('Second')), take(4));
const combined$ = merge(first$, second$);

isRunning.subscribe(setStatus);

bootstrap({ first$, second$, combined$ });
