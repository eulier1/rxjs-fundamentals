import { fromEvent } from 'rxjs';

const button = document.getElementById('create-notification');
const notificationMessages = document.getElementById('notification-messages');

const createNotificationElement = () => {
  const element = document.createElement('article');
  element.innerText = 'Something happened.';
  return element;
};

const addMessageToDOM = () => {
  const notification = createNotificationElement();
  notificationMessages.appendChild(notification);
};

/**
 * Your mission:
 *
 * - Use `fromEvent` to create an observable that streams click events.
 * - Subscribe to that observable.
 * - Use `addMessageToDOM` to add a useless message to the DOM whenever the
 *   stream emits a value.
 */


const buttonClicks$ = fromEvent(button, 'click')

// We can subscribe to the same source of data and apply some transformation here
buttonClicks$.subscribe(addMessageToDOM)
buttonClicks$.subscribe(() => { alert('Someone Click here') })

