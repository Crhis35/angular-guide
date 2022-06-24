import { fromEvent } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import './style.css';

const button = document.querySelector('.btn');

if (button) {
  const observable = fromEvent(button, 'click').pipe(
    mergeMap(() => ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1'))
  );

  console.log('Before');

  const subscription = observable.subscribe({
    next: (value) => {
      console.log(value);
    },
    complete: () => console.log('Observer got a complete notification'),
  });

  // setTimeout(() => {
  //   subscription.unsubscribe();
  // }, 5000);

  console.log('After');
}
