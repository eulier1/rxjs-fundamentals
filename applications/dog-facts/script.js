import { fromEvent, of, timer, merge, NEVER } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import {
  catchError,
  exhaustMap,
  mapTo,
  mergeMap,
  retry,
  startWith,
  switchMap,
  tap,
  pluck,
} from 'rxjs/operators';

import {
  fetchButton,
  stopButton,
  clearError,
  clearFacts,
  addFacts,
  setError,
} from './utilities';

const endpoint = 'http://localhost:3333/api/facts?delay=2000&chaos=true';

const fetch$ = fromEvent(fetchButton, 'click').pipe(
  // fire the observable every time an events pass through
  // mergeMap(() =>
  //   fromFetch(endpoint).pipe(mergeMap((response) => response.json())),
  // ),

  // with exhaustMap we're waiting for that observable to complete (fromFetch), and then, take another event.
  exhaustMap(() =>
    fromFetch(endpoint).pipe(mergeMap((response) => response.json())),
  ),
);

fetch$.subscribe(addFacts);
